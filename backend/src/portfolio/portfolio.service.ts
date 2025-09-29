import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class PortfolioService implements OnModuleInit, OnModuleDestroy {
  private client: RedisClientType | null = null;

  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    const url = process.env.REDIS_URL;
    if (url) {
      this.client = createClient({ url });
      try {
        await this.client.connect();
      } catch (error) {
        this.client = null;
        console.warn('Redis non disponible pour le cache portfolio', error);
      }
    }
  }

  async onModuleDestroy() {
    if (this.client) {
      await this.client.quit();
    }
  }

  async listPublicItems() {
    const cacheKey = 'portfolio:items';
    if (this.client) {
      const cached = await this.client.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    }
    const items = await this.prisma.portfolioItem.findMany({ orderBy: { createdAt: 'desc' } });
    if (this.client) {
      await this.client.set(cacheKey, JSON.stringify(items), { EX: 60 });
    }
    return items;
  }
}
