import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Reputation Rooster')
    .setDescription('A Reviewing App')
    .setVersion('1.0')
    .addTag('Swagger UI')
    .setVersion('V1')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  await app.listen(configService.get<number>('PORT'));
}

bootstrap().then();
