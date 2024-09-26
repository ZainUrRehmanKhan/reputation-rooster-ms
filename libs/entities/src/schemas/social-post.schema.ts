import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SocialPostDocument = SocialPost & Document;

@Schema({ _id: false })
export class SocialObject {
  @Prop()
  reviewText: string;

  @Prop()
  postText: string;

  @Prop()
  rating: number;

  @Prop()
  source: number;

  @Prop()
  reviewer: string;

  @Prop()
  bg: string;

  @Prop()
  story_image: string;

  @Prop()
  generated_image: string;
}

@Schema({ _id: false })
export class SocialCommonObject {
  @Prop()
  reviewText: string;

  @Prop()
  postText: string;

  @Prop()
  rating: number;

  @Prop()
  source: number;

  @Prop()
  reviewer: string;

  @Prop()
  bg: string;

  @Prop()
  story_image: string;

  @Prop()
  insta_generated_image: string;

  @Prop()
  fb_generated_image: string;

  @Prop()
  linkedin_generated_image: string;

  @Prop()
  twitter_generated_image: string;
}

@Schema({ timestamps: true })
export class SocialPost {
  @Prop()
  instagram: SocialObject;

  @Prop()
  facebook: SocialObject;

  @Prop()
  linkedin: SocialObject;

  @Prop()
  twitter: SocialObject;

  @Prop()
  common: SocialCommonObject;

  @Prop()
  story_id: string;

  @Prop()
  company_id: string;

  @Prop()
  company_name: string;
}

export const SocialPostSchema = SchemaFactory.createForClass(SocialPost);
