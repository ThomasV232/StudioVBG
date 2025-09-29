import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { DossierStatus } from '@prisma/client';
import { AdminService } from './admin.service';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UpdateDossierStatusDto } from '../dossiers/dto/update-dossier-status.dto';

@Controller('admin')
@UseGuards(JwtAuthGuard)
@Roles('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dossiers')
  async listDossiers(@Query('status') status?: DossierStatus) {
    return this.adminService.listDossiers(status);
  }

  @Patch('dossiers/:id/status')
  async updateStatus(@Param('id') id: string, @Body() dto: UpdateDossierStatusDto) {
    return this.adminService.updateDossierStatus(id, dto);
  }

  @Post('portfolio-items')
  async createPortfolioItem(@Body() body: { title: string; slug: string; description: string; category: string; videoUrl: string; tags: string[]; duration: string }) {
    return this.adminService.createPortfolioItem(body);
  }

  @Patch('portfolio-items/:id')
  async updatePortfolioItem(
    @Param('id') id: string,
    @Body() body: Partial<{ title: string; slug: string; description: string; category: string; videoUrl: string; tags: string[]; duration: string }>,
  ) {
    return this.adminService.updatePortfolioItem(id, body);
  }

  @Delete('portfolio-items/:id')
  async deletePortfolioItem(@Param('id') id: string) {
    return this.adminService.deletePortfolioItem(id);
  }

  @Get('stats')
  async stats() {
    return this.adminService.getStats();
  }
}
