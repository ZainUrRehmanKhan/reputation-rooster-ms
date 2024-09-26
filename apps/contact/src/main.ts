import { NestFactory } from '@nestjs/core';
import { ContactModule } from './contact.module';

async function bootstrap() {
  const app = await NestFactory.create(ContactModule);
  await app.listen(3000);
}
bootstrap();
