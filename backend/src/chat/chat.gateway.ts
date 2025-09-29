import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayInit } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

@WebSocketGateway({ cors: { origin: true } })
export class ChatGateway implements OnGatewayConnection, OnGatewayInit {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(ChatGateway.name);

  constructor(private readonly configService: ConfigService) {}

  async afterInit() {
    const redisUrl = this.configService.get<string>('redisUrl');
    if (!redisUrl) {
      this.logger.warn('Redis URL non défini, fallback en mémoire.');
      return;
    }
    const pubClient = createClient({ url: redisUrl });
    const subClient = pubClient.duplicate();
    await Promise.all([pubClient.connect(), subClient.connect()]);
    this.server.adapter(createAdapter(pubClient, subClient));
    this.logger.log('Socket.io relié à Redis.');
  }

  handleConnection(socket: any) {
    const { dossierId, role } = socket.handshake.query;
    if (dossierId) {
      socket.join(`dossier:${dossierId}`);
      this.logger.log(`Client ${socket.id} connecté au dossier ${dossierId} (${role ?? 'unknown'})`);
    }
  }

  emitNewMessage(dossierId: string, payload: any) {
    this.server.to(`dossier:${dossierId}`).emit('new_message', payload);
  }

  emitMarkRead(dossierId: string, payload: any) {
    this.server.to(`dossier:${dossierId}`).emit('mark_read', payload);
  }

  emitProgress(dossierId: string, payload: any) {
    this.server.to(`dossier:${dossierId}`).emit('progression.updated', payload);
  }

  emitMilestoneCompleted(dossierId: string, payload: any) {
    this.server.to(`dossier:${dossierId}`).emit('milestone.completed', payload);
  }
}
