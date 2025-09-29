import { Injectable } from '@nestjs/common';
import { ChatGateway } from '../chat/chat.gateway';

@Injectable()
export class ProgressService {
  constructor(private readonly chatGateway: ChatGateway) {}

  emitProgress(dossierId: string, payload: { progress: number; status: string }) {
    this.chatGateway.emitProgress(dossierId, payload);
  }

  emitMilestoneCompleted(dossierId: string, payload: { milestoneId: string; title: string }) {
    this.chatGateway.emitMilestoneCompleted(dossierId, payload);
  }
}
