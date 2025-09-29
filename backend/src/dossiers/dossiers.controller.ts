import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { DossiersService } from './dossiers.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';
import { AuthenticatedUser } from '../auth/interfaces/authenticated-user.interface';
import { CreateDossierDto } from './dto/create-dossier.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';

@Controller('dossiers')
@UseGuards(JwtAuthGuard)
export class DossiersController {
  constructor(private readonly dossiersService: DossiersService) {}

  @Post()
  async create(@GetUser() user: AuthenticatedUser, @Body() dto: CreateDossierDto) {
    return this.dossiersService.create(user.id, dto);
  }

  @Get()
  async list(@GetUser() user: AuthenticatedUser) {
    return this.dossiersService.findMyDossiers(user.id);
  }

  @Get(':id')
  async detail(@Param('id') id: string, @GetUser() user: AuthenticatedUser) {
    return this.dossiersService.findById(id, user.id, user.role === 'admin');
  }

  @Get(':id/messages')
  async messages(@Param('id') id: string, @GetUser() user: AuthenticatedUser) {
    return this.dossiersService.listMessages(id, user.id, user.role === 'admin');
  }

  @Post(':id/messages')
  async addMessage(
    @Param('id') id: string,
    @GetUser() user: AuthenticatedUser,
    @Body() dto: CreateMessageDto,
  ) {
    return this.dossiersService.createMessage(id, user.id, { ...dto, isAdmin: user.role === 'admin' });
  }

  @Post(':id/messages/read')
  async markRead(@Param('id') id: string, @GetUser() user: AuthenticatedUser) {
    return this.dossiersService.markMessagesRead(id, user.id, user.role);
  }

  @Patch(':id/milestones/:milestoneId')
  async updateMilestone(
    @Param('id') id: string,
    @Param('milestoneId') milestoneId: string,
    @Body() dto: UpdateMilestoneDto,
  ) {
    return this.dossiersService.updateMilestone(id, milestoneId, dto);
  }
}
