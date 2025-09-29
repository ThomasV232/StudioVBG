import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { PrismaService } from '../common/prisma.service';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthenticatedUser } from './interfaces/authenticated-user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(payload: RegisterDto) {
    const user = await this.usersService.create(payload);
    return this.issueTokens(user.id, user.email, user.role, user.fullName);
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Identifiants invalides');
    }
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      throw new UnauthorizedException('Identifiants invalides');
    }
    return this.issueTokens(user.id, user.email, user.role, user.fullName);
  }

  async logout(userId: string) {
    await this.prisma.refreshToken.updateMany({
      where: { userId, revoked: false },
      data: { revoked: true, revokedAt: new Date() },
    });
    return { message: 'Déconnexion effectuée' };
  }

  async refresh(userId: string, refreshToken?: string) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token requis');
    }
    await this.validateRefreshToken(userId, refreshToken);
    const user = await this.usersService.findById(userId);
    if (!user) throw new UnauthorizedException();
    return this.issueTokens(user.id, user.email, user.role, user.fullName);
  }

  async validateRefreshToken(userId: string, token: string) {
    const stored = await this.prisma.refreshToken.findFirst({
      where: { userId, revoked: false },
      orderBy: { createdAt: 'desc' },
    });
    if (!stored) throw new UnauthorizedException('Refresh token invalide');
    if (stored.expiresAt < new Date()) {
      await this.prisma.refreshToken.update({
        where: { id: stored.id },
        data: { revoked: true, revokedAt: new Date() },
      });
      throw new UnauthorizedException('Refresh token expiré');
    }
    const isValid = await argon2.verify(stored.tokenHash, token);
    if (!isValid) {
      await this.prisma.refreshToken.update({
        where: { id: stored.id },
        data: { revoked: true, revokedAt: new Date() },
      });
      throw new UnauthorizedException('Refresh token expiré');
    }
  }

  async mapUserToPayload(userId: string): Promise<AuthenticatedUser> {
    const user = await this.usersService.findById(userId);
    if (!user) throw new UnauthorizedException();
    return { id: user.id, email: user.email, role: user.role, fullName: user.fullName };
  }

  private async issueTokens(id: string, email: string, role: 'admin' | 'user', fullName: string) {
    const payload = { sub: id, email, role, fullName };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('jwt.accessSecret'),
        expiresIn: this.configService.get<string>('jwt.accessTtl'),
      }),
      this.jwtService.signAsync({ sub: id }, {
        secret: this.configService.get<string>('jwt.refreshSecret'),
        expiresIn: this.configService.get<string>('jwt.refreshTtl'),
      }),
    ]);

    await this.storeRefreshToken(id, refreshToken);

    return {
      accessToken,
      refreshToken,
      user: { id, email, role, fullName },
    };
  }

  private async storeRefreshToken(userId: string, token: string) {
    const hash = await argon2.hash(token);
    await this.prisma.refreshToken.updateMany({
      where: { userId, revoked: false },
      data: { revoked: true, revokedAt: new Date() },
    });
    await this.prisma.refreshToken.create({
      data: {
        userId,
        tokenHash: hash,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
  }
}
