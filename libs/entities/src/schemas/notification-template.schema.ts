import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NotificationTemplateDocument = NotificationTemplate &
  mongoose.Document;

@Schema({ timestamps: true })
export class NotificationTemplate {
  @Prop()
  message: string;

  @Prop()
  title: string;

  @Prop()
  channel: string;
}

export const NotificationTemplateSchema =
  SchemaFactory.createForClass(NotificationTemplate);
