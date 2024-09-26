import { Document } from 'mongoose';
import { AccountTeam } from './team.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AccountDocument = Account & Document;

@Schema({ timestamps: true })
export class Account {
  @Prop()
  team: [AccountTeam];
}

export const AccountSchema = SchemaFactory.createForClass(Account);
