import { Module } from '@nestjs/common';
import { DossiersService } from './dossiers.service';
import { DossiersController } from './dossiers.controller';
import { ChatModule } from '../chat/chat.module';
import { ProgressModule } from '../progress/progress.module';

@Module({
  imports: [ChatModule, ProgressModule],
  controllers: [DossiersController],
  providers: [DossiersService],
  exports: [DossiersService],
})
export class DossiersModule {}
