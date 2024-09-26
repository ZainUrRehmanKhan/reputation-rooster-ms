import * as mongoose from 'mongoose';
import { Company } from './company.schema';
import { Contact } from './contacts.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CampaignMessageDocument = CampaignMessage & mongoose.Document;

export enum CampaignMessageForm {
  SMS,
  EMAIL1,
  EMAIL2,
  EMAIL3,
}

@Schema({ timestamps: true })
export class CampaignMessage {
  @Prop()
  type: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Contact.name })
  contact: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Company.name })
  company_id: string;

  @Prop()
  is_delivered: boolean;

  @Prop({ default: 0 })
  open: number;

  @Prop({ default: 0 })
  clicks: number;

  @Prop({ default: false })
  goal: boolean;
}

export const CampaignMessageSchema =
  SchemaFactory.createForClass(CampaignMessage);
