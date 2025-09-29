import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/portfolio-items (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/portfolio-items').expect(200);
    expect(Array.isArray(response.body.data ?? response.body)).toBeTruthy();
  });
});
