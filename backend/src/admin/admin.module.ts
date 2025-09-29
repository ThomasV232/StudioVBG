import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { DossiersModule } from '../dossiers/dossiers.module';

@Module({
  imports: [DossiersModule],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
