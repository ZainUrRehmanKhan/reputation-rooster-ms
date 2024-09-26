import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UrlShortenerDocument = UrlShortener & mongoose.Document;

@Schema()
export class UrlShortener {
  @Prop({ required: true })
  long_url: string;

  @Prop({ required: true })
  token: string;
}

export const UrlShortenerSchema = SchemaFactory.createForClass(UrlShortener);
