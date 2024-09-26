import mongoose from 'mongoose';
import { Person } from './person.schema';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ _id: false })
export class AccountTeam {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Person.name })
  person: string;

  @Prop()
  role: number;
}

@Schema({ _id: false })
export class CompanyTeam {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Person.name })
  person: string;

  @Prop()
  role: number;

  @Prop()
  from_account: boolean;
}
