/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TodoModule } from '../src/todo.module';

describe('TodoController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TodoModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/todos/create-list (POST)', () => {
    return request(app.getHttpServer())
      .post('/todos/create-list')
      .send({ userId: 'user1', title: 'Test List' })
      .expect(201);
  });

  it('/todos/user/:userId (GET)', () => {
    return request(app.getHttpServer())
      .get('/todos/user/user1')
      .expect(200);
  });

  it('/todos/create-item (POST)', () => {
    return request(app.getHttpServer())
      .post('/todos/create-item')
      .send({ todoListId: 'list1', title: 'Test Item', description: 'Description', priority: 1 })
      .expect(201);
  });

  it('/todos/list/:todoListId/items (GET)', () => {
    return request(app.getHttpServer())
      .get('/todos/list/list1/items')
      .expect(200);
  });
});
