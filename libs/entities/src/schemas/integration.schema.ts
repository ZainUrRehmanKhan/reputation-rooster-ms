import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Company } from './company.schema';

export enum IntegrationType {
  QuickBooks = 'QuickBooks',
}

@Schema({ timestamps: true })
export class Integration {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Company.name,
    unique: false,
  })
  company_id: string;

  @Prop()
  quickbooks_company_name: string;

  @Prop({ type: Object })
  data: any;

  @Prop({ default: false })
  is_connected: boolean;

  @Prop()
  type: string;

  @Prop({ default: 0 })
  delay: number;
}

export const IntegrationSchema = SchemaFactory.createForClass(Integration);
