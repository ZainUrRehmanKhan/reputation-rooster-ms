import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SettingDocument = Setting & Document;

@Schema({ timestamps: true })
export class Setting {
  @Prop()
  sms_lead: boolean;

  @Prop()
  email_lead: boolean;

  @Prop()
  email_review: boolean;

  @Prop()
  email_weekly: boolean;

  @Prop()
  email_monthly: boolean;

  @Prop()
  user_id: string;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
