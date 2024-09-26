import { NestFactory } from '@nestjs/core';
import { MicrositeModule } from './microsite.module';

async function bootstrap() {
  const app = await NestFactory.create(MicrositeModule);
  await app.listen(3000);
}
bootstrap();
