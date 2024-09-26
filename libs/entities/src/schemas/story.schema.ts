import * as mongoose from 'mongoose';
import { Person } from './person.schema';
import { Company } from './company.schema';
import { FileSchema } from './file.schema';
import { Contact } from './contacts.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum StoryStatus {
  NotPublished,
  Published,
}

export enum RepliedStatus {
  Replied,
  NotReplied,
}

export enum ReviewSource {
  Rooster,
  Facebook,
  Google,
  BBB,
  Yelp,
  Angi,
  YellowPages,
}

@Schema({ _id: false })
export class ReviewReply {
  @Prop()
  comment: string;

  @Prop()
  updateTime: string;
}

@Schema({ _id: false })
export class Review {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Contact.name })
  contact: string;

  @Prop()
  source: number;

  @Prop()
  rating: number;

  @Prop()
  description: string;

  @Prop()
  reviewer_name: string;

  @Prop()
  review_id: string;

  @Prop()
  review_date: Date;

  @Prop()
  review_update_date: Date;

  @Prop()
  reply: ReviewReply;

  @Prop()
  suggested_users: [any];

  @Prop()
  reviewer_image: string;
}

export type StoryDocument = Story & mongoose.Document;

@Schema({ timestamps: true })
export class Story {
  @Prop()
  comment: string;

  @Prop()
  images: [FileSchema];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Person.name })
  user_id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Company.name })
  company_id: string;

  @Prop({ default: StoryStatus.Published })
  status: number;

  @Prop()
  location: string;

  @Prop()
  tags: [string];

  @Prop({ default: RepliedStatus.NotReplied })
  replied: number;

  @Prop({ default: 0 })
  shared_count: number;

  @Prop({ default: 0 })
  reached: number;

  @Prop()
  review: Review;

  @Prop({ default: true })
  old: boolean;
}

export const StorySchema = SchemaFactory.createForClass(Story);
