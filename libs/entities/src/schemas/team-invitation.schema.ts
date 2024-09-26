import { Document } from 'mongoose';
import { TeamRole } from './person.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum InvitationType {
  Account,
  Company,
}

export type TeamInvitationDocument = TeamInvitation & Document;

@Schema({ timestamps: true })
export class TeamInvitation {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  hash: string;

  @Prop({ required: true })
  type: number;

  @Prop({ default: TeamRole.Member })
  role: number;

  @Prop({ required: true })
  type_id: string;

  @Prop({ required: true })
  person_id: string;
}

export const TeamInvitationSchema =
  SchemaFactory.createForClass(TeamInvitation);
