import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersonService } from './person.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DbModule, RmqModule } from '@app/common';
import { PersonController } from './person.controller';
import { Person, PersonSchema } from '@app/entities/schemas/person.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        RMQ_URI: Joi.string().required(),
        RMQ_PERSON_QUEUE: Joi.string().required(),
        RMQ_AUTH_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/person/.env',
    }),
    DbModule,
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    RmqModule,
  ],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
