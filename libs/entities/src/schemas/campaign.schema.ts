import * as mongoose from 'mongoose';
import { Company } from './company.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum CampaignStatus {
  Paused,
  Live,
}

export enum MessageType {
  Email,
  SMS,
}

@Schema({ _id: false })
export class MessageTemplate {
  @Prop()
  message_body: string;

  @Prop()
  message_title: string;

  @Prop()
  message_button_text: string;

  @Prop()
  message_subject: string;
}

@Schema({ _id: false })
export class Message {
  @Prop()
  type: number;

  @Prop()
  subject: string;

  @Prop()
  sent: number;

  @Prop()
  opened: number;

  @Prop()
  clicked: number;

  @Prop()
  scored: number;

  @Prop({ default: CampaignStatus.Live })
  status: number;

  @Prop({ default: false })
  edited: boolean;

  @Prop()
  template: MessageTemplate;
}

export type CampaignDocument = Campaign & mongoose.Document;

@Schema({ timestamps: true })
export class Campaign {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Company.name })
  company_id: string;

  @Prop({ default: CampaignStatus.Live })
  status: number;

  @Prop()
  people_entered: number;

  @Prop()
  people_enrolled: number;

  @Prop()
  people_exited: number;

  @Prop()
  total_reviews: number;

  @Prop()
  messages: [Message];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
