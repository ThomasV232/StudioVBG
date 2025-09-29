import { Injectable } from '@nestjs/common';
import { DossierStatus } from '@prisma/client';
import { PrismaService } from '../common/prisma.service';
import { DossiersService } from '../dossiers/dossiers.service';
import { UpdateDossierStatusDto } from '../dossiers/dto/update-dossier-status.dto';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService, private readonly dossiersService: DossiersService) {}

  async listDossiers(status?: DossierStatus) {
    return this.prisma.dossier.findMany({
      where: status ? { status } : {},
      include: { owner: { select: { id: true, email: true, fullName: true } }, milestones: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateDossierStatus(id: string, dto: UpdateDossierStatusDto) {
    return this.dossiersService.updateStatus(id, dto);
  }

  async createPortfolioItem(data: { title: string; slug: string; description: string; category: string; videoUrl: string; tags: string[]; duration: string }) {
    return this.prisma.portfolioItem.create({ data });
  }

  async updatePortfolioItem(id: string, data: Partial<{ title: string; slug: string; description: string; category: string; videoUrl: string; tags: string[]; duration: string }>) {
    return this.prisma.portfolioItem.update({ where: { id }, data });
  }

  async deletePortfolioItem(id: string) {
    return this.prisma.portfolioItem.delete({ where: { id } });
  }

  async getStats() {
    const [dossiers, completed, users] = await Promise.all([
      this.prisma.dossier.count(),
      this.prisma.dossier.count({ where: { status: DossierStatus.completed } }),
      this.prisma.user.count(),
    ]);
    return { dossiers, completed, users };
  }
}
