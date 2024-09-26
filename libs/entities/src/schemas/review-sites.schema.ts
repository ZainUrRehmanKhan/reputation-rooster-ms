import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Company } from './company.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ReviewSiteDocument = ReviewSite & Document;

@Schema({ timestamps: true })
export class ReviewSite {
  @Prop()
  type: number;

  // Invite Customer to Leave Reviews
  @Prop()
  invite: boolean;

  @Prop({ default: true })
  connected: boolean;

  @Prop({ type: Object })
  data: any;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Company.name })
  company_id: string;

  @Prop()
  url: string;

  @Prop()
  job_id: number;

  @Prop()
  result_count: number;

  @Prop()
  status: string;
}

export const ReviewSiteSchema = SchemaFactory.createForClass(ReviewSite);
