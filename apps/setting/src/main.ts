import { NestFactory } from '@nestjs/core';
import { SettingModule } from './setting.module';

async function bootstrap() {
  const app = await NestFactory.create(SettingModule);
  await app.listen(3000);
}
bootstrap();
