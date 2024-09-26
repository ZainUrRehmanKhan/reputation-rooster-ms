import * as Joi from 'joi';
import { DbModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Notification,
  NotificationSchema,
} from '@app/entities/schemas/notifications.schema';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
        FCM_KEY: Joi.string().required(),
        RMQ_URI: Joi.string().required(),
      }),
      envFilePath: './apps/notification/.env',
    }),
    DbModule,
    MongooseModule.forFeature([
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
