import { Document } from 'mongoose';
import { User } from './user.schema';
import { Role } from '@app/entities/enums/common.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FileSchema } from '@app/entities/schemas/file.schema';

export type PersonDocument = Person & Document;

@Schema({ timestamps: true })
export class Person extends User {
  @Prop({ default: Role.User })
  role: number;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop({ default: false })
  is_verified: boolean;

  @Prop({ default: false })
  google: boolean;

  @Prop({ default: false })
  apple: boolean;

  @Prop()
  phone: string;

  @Prop()
  scopes: [string];

  @Prop()
  image: FileSchema;

  @Prop()
  verification_hash: string;

  @Prop({ default: 0 })
  step: number;

  // Customer Object
  @Prop({ type: Object })
  payment: any;

  @Prop({ type: Object })
  subscription: any;

  @Prop()
  subscription_cancellation_reason: string;

  @Prop({ type: [String] })
  token: string[];

  @Prop({ type: [String] })
  applied_promo_codes: [string];

  @Prop({ default: false })
  account_deleted: boolean;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
