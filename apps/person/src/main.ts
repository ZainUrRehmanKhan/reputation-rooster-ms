import { RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { PERSON_QUEUE } from '@app/entities';
import { PersonModule } from './person.module';

async function bootstrap() {
  const app = await NestFactory.create(PersonModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions(PERSON_QUEUE));
  await app.startAllMicroservices();
}

bootstrap().then();
