import * as mongoose from 'mongoose';
import { FileSchema } from './file.schema';
import { Company } from './company.schema';
import { Address } from './address.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum ContactType {
  Customer,
  Lead,
}

export enum ContactStatus {
  Blocked,
  Active,
}

export enum ContactActivity {
  Created,
  Reviewed,
  Invited,
  Message,
  Lead,
  Exited,
}

export enum ContactUnsubscriptionType {
  Email1,
  Email2,
  WeeklyOpportunitySummary,
  MonthlyOpportunitySummary,
  EmailLead,
  EmailReview,
}

export type ContactsDocument = Contact & mongoose.Document;

@Schema({ timestamps: true })
export class Contact {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: FileSchema;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  position: string;

  @Prop()
  company_name: string;

  @Prop({ default: ContactType.Customer })
  type: number;

  // Review Source
  @Prop({ default: 0 })
  source: number;

  @Prop({ default: ContactStatus.Active })
  status: number;

  @Prop()
  address: Address;

  @Prop()
  tags: [string];

  @Prop({ default: false })
  invitation_status: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Company.name })
  company_id: string;

  @Prop({ default: [] })
  activity: [any];

  @Prop()
  last_message_activity: number;

  @Prop()
  last_message_activity_date: Date;

  @Prop()
  last_activity_date: Date;

  @Prop()
  review_rating: number;

  @Prop({ default: false })
  scheduled: boolean;

  @Prop()
  schedule_date: Date;

  @Prop()
  integration_source: string;

  @Prop({ type: Object })
  data: any;
}

export const ContactsSchema = SchemaFactory.createForClass(Contact);
