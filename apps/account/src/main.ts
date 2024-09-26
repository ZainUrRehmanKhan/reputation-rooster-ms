import { RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { ACCOUNT_QUEUE } from '@app/entities';
import { AccountModule } from './account.module';

async function bootstrap() {
  const app = await NestFactory.create(AccountModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions(ACCOUNT_QUEUE));
  await app.startAllMicroservices();
}

bootstrap().then();
