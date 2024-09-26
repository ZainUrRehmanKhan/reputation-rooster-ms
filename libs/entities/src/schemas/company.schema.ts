import * as mongoose from 'mongoose';
import { FileSchema } from './file.schema';
import { Address } from './address.schema';
import { Account } from './account.schema';
import { CompanyTeam } from './team.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: false, _id: false })
export class DisconnectedSites {
  @Prop()
  source: string;

  @Prop()
  issue_in: number;

  @Prop()
  connection_issue: boolean;
}

export type CompanyDocument = Company & mongoose.Document;

@Schema({ timestamps: true })
export class Company {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  address: Address;

  @Prop()
  website: string;

  @Prop()
  logo: FileSchema;

  @Prop()
  logo_resized: FileSchema;

  @Prop()
  logo_social: FileSchema;

  @Prop({ default: false })
  from_google: boolean;

  @Prop()
  sdk_public_key: string;

  @Prop()
  company_unique_id: string;

  @Prop()
  timezone: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Account.name })
  account: string;

  @Prop()
  company_team: [CompanyTeam];

  @Prop()
  disconnected_sites: [DisconnectedSites];
}

export const CompanySchema = SchemaFactory.createForClass(Company);
