import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Company } from './company.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as process from 'process';

export enum SocialPlatformTypes {
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
}

export type SocialPlatformDocument = SocialPlatform & Document;

@Schema({ timestamps: true })
export class SocialPlatform {
  @Prop()
  type: number;

  @Prop({ default: true })
  connected: boolean;

  @Prop({
    default: `${process.env.WEB_APP_URL}images/frames/frame-gradient-2.jpg`,
  })
  background: string;

  @Prop({ default: false })
  auto_sharing: boolean;

  @Prop({ type: Object })

  data: any;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Company.name })

  company_id: string;
}

export const SocialPlatformSchema =
  SchemaFactory.createForClass(SocialPlatform);
