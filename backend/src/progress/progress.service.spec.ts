import { describe, expect, it, jest } from '@jest/globals';
import { ChatGateway } from '../chat/chat.gateway';
import { ProgressService } from './progress.service';

describe('ProgressService', () => {
  const mockGateway: Pick<ChatGateway, 'emitProgress' | 'emitMilestoneCompleted'> = {
    emitProgress: jest.fn(),
    emitMilestoneCompleted: jest.fn(),
  };

  it('should forward progress events', () => {
    const service = new ProgressService(mockGateway as ChatGateway);
    service.emitProgress('1', { progress: 75, status: 'in_progress' });
    expect(mockGateway.emitProgress).toHaveBeenCalledWith('1', { progress: 75, status: 'in_progress' });
  });
});
