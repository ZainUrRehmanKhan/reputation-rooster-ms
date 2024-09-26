import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RmqModule } from '@app/common';
import { PassportModule } from '@nestjs/passport';
import { AuthGateway } from './gateways/auth/auth.gateway';
import { JwtStrategy } from './gateways/auth/jwt.strategy';
import { AuthService } from './gateways/auth/auth.service';
import { ACCOUNT_QUEUE, PERSON_QUEUE } from '@app/entities';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './gateways/auth/local.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        RMQ_URI: Joi.string().required(),
        RMQ_PERSON_QUEUE: Joi.string().required(),
        RMQ_ACCOUNT_QUEUE: Joi.string().required(),

        //Auth
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRY: Joi.string().required(),
        MANDRILL_API_KEY: Joi.string().required(),
        MANDRILL_EMAIL: Joi.string().required(),
        MANDRILL_NAME: Joi.string().required(),
        ADMIN_NAME: Joi.string().required(),
        ADMIN_EMAIL: Joi.string().required(),
      }),
      envFilePath: './apps/api-gateway/.env',
    }),
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_EXPIRY') },
      }),
      inject: [ConfigService],
    }),
    RmqModule.register({ name: PERSON_QUEUE }),
    RmqModule.register({ name: ACCOUNT_QUEUE }),
  ],
  controllers: [AuthGateway],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class ApiGatewayModule {}
