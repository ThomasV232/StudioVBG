import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ChatModule } from '../chat/chat.module';

@Module({
  imports: [ChatModule],
  providers: [ProgressService],
  exports: [ProgressService],
})
export class ProgressModule {}
