import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification {
  @Prop()
  message: string;

  @Prop()
  title: string;

  @Prop()
  action_url: string;

  @Prop({ default: false })
  seen: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  company_id: string;

  @Prop()
  person: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
