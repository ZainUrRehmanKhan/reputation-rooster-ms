import * as mongoose from 'mongoose';
import { Company } from './company.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Lead {
  @Prop()
  collect: boolean;

  @Prop()
  btn_text: string;

  @Prop()
  form_title: string;

  @Prop()
  submit_btn: string;
}

@Schema({ _id: false })
export class Checkins {
  @Prop()
  invite: boolean;

  @Prop()
  delay: number;

  @Prop()
  url: string;
}

export type MicroSiteDocument = MicroSite & Document;

@Schema({ timestamps: true })
export class MicroSite {
  @Prop()
  url: string;

  @Prop({ default: true })
  auto_publish: boolean;

  @Prop({ default: 4 })
  auto_publish_minimum_review: number;

  @Prop()
  lead: Lead;

  @Prop()
  checkins: Checkins;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Company.name })
  company_id: string;
}

export const MicroSiteSchema = SchemaFactory.createForClass(MicroSite);
