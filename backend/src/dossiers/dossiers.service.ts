import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { DossierStatus, MilestoneStatus } from '@prisma/client';
import { PrismaService } from '../common/prisma.service';
import { ChatGateway } from '../chat/chat.gateway';
import { ProgressService } from '../progress/progress.service';
import { CreateDossierDto } from './dto/create-dossier.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { UpdateDossierStatusDto } from './dto/update-dossier-status.dto';

@Injectable()
export class DossiersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly chatGateway: ChatGateway,
    private readonly progressService: ProgressService,
  ) {}

  async create(ownerId: string, dto: CreateDossierDto) {
    const dossier = await this.prisma.dossier.create({
      data: {
        ownerId,
        title: dto.title,
        description: dto.description,
        milestones: {
          create: dto.milestones?.length
            ? dto.milestones.map((milestone) => ({ title: milestone.title, weight: milestone.weight ?? 25 }))
            : [
                { title: 'Pré-production', weight: 25 },
                { title: 'Tournage', weight: 25 },
                { title: 'Post-production', weight: 25 },
                { title: 'Livraison', weight: 25 },
              ],
        },
      },
      include: { milestones: true },
    });
    const progress = this.computeProgress(dossier.milestones);
    return { ...dossier, progress };
  }

  async findMyDossiers(userId: string) {
    const dossiers = await this.prisma.dossier.findMany({
      where: { ownerId: userId },
      include: { milestones: true },
      orderBy: { createdAt: 'desc' },
    });
    return dossiers.map((d) => ({ ...d, progress: this.computeProgress(d.milestones) }));
  }

  async findById(id: string, userId: string, isAdmin: boolean) {
    const dossier = await this.prisma.dossier.findUnique({
      where: { id },
      include: { milestones: true, owner: { select: { id: true, email: true, fullName: true } } },
    });
    if (!dossier) throw new NotFoundException('Dossier introuvable');
    if (!isAdmin && dossier.ownerId !== userId) throw new ForbiddenException();
    return { ...dossier, progress: this.computeProgress(dossier.milestones) };
  }

  async listMessages(dossierId: string, userId: string, isAdmin: boolean) {
    await this.assertAccess(dossierId, userId, isAdmin);
    return this.prisma.message.findMany({
      where: { dossierId },
      include: { author: { select: { id: true, fullName: true, role: true } } },
      orderBy: { createdAt: 'asc' },
    });
  }

  async createMessage(dossierId: string, authorId: string, dto: CreateMessageDto) {
    const dossier = await this.prisma.dossier.findUnique({ where: { id: dossierId } });
    if (!dossier) throw new NotFoundException('Dossier introuvable');
    const message = await this.prisma.message.create({
      data: {
        dossierId,
        authorId,
        content: dto.content,
        isAdmin: dto.isAdmin ?? false,
      },
      include: { author: { select: { id: true, fullName: true, role: true } } },
    });
    this.chatGateway.emitNewMessage(dossierId, message);
    return message;
  }

  async markMessagesRead(dossierId: string, userId: string, role: 'admin' | 'user') {
    await this.assertAccess(dossierId, userId, role === 'admin');
    const payload = { dossierId, role, readAt: new Date().toISOString() };
    this.chatGateway.emitMarkRead(dossierId, payload);
    return payload;
  }

  async updateMilestone(dossierId: string, milestoneId: string, dto: UpdateMilestoneDto) {
    const data: any = {};
    if (dto.title) data.title = dto.title;
    if (dto.status) {
      data.status = dto.status;
      data.completedAt = dto.status === MilestoneStatus.done ? new Date() : null;
    }
    const milestone = await this.prisma.milestone.update({
      where: { id: milestoneId },
      data,
    });

    if (dto.status === MilestoneStatus.done) {
      this.progressService.emitMilestoneCompleted(dossierId, {
        milestoneId: milestone.id,
        title: milestone.title,
      });
    }

    const dossier = await this.prisma.dossier.findUnique({ include: { milestones: true }, where: { id: dossierId } });
    if (!dossier) throw new NotFoundException('Dossier introuvable');
    const progress = this.computeProgress(dossier.milestones);
    this.progressService.emitProgress(dossierId, { progress, status: dossier.status });
    return { ...milestone, progress };
  }

  async updateStatus(dossierId: string, dto: UpdateDossierStatusDto) {
    const dossier = await this.prisma.dossier.update({
      where: { id: dossierId },
      data: {
        status: dto.status,
        rejectionReason: dto.status === DossierStatus.rejected ? dto.rejectionReason : null,
      },
      include: { milestones: true },
    });
    const progress = this.computeProgress(dossier.milestones);
    this.progressService.emitProgress(dossierId, { progress, status: dossier.status });
    return { ...dossier, progress };
  }

  private computeProgress(milestones: { status: MilestoneStatus; weight: number }[]) {
    const total = milestones.reduce((acc, item) => acc + item.weight, 0) || 100;
    const completed = milestones
      .filter((m) => m.status === MilestoneStatus.done)
      .reduce((acc, item) => acc + item.weight, 0);
    return Math.min(100, Math.round((completed / total) * 100));
  }

  private async assertAccess(dossierId: string, userId: string, isAdmin: boolean) {
    if (isAdmin) return;
    const dossier = await this.prisma.dossier.findUnique({ where: { id: dossierId } });
    if (!dossier || dossier.ownerId !== userId) {
      throw new ForbiddenException();
    }
  }
}
