import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DbModule, RmqModule } from '@app/common';
import { AccountService } from './account.service';
import { Account, AccountSchema } from '@app/entities/schemas/account.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RMQ_URI: Joi.string().required(),
        RMQ_ACCOUNT_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/account/.env',
    }),
    DbModule,
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    RmqModule,
  ],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
