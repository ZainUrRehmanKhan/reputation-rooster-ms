import { NestFactory } from '@nestjs/core';
import { CampaignModule } from './campaign.module';

async function bootstrap() {
  const app = await NestFactory.create(CampaignModule);
  await app.listen(3000);
}
bootstrap();
