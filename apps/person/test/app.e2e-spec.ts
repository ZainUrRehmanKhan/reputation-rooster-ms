import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { PersonModule } from '../src/person.module';
import { Test, TestingModule } from '@nestjs/testing';

describe('PersonController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PersonModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
