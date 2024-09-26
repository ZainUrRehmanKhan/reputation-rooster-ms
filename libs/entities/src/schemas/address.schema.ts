import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Address {
  @Prop()
  address: string;

  @Prop()
  country: string;

  @Prop()
  unit: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  zip_code: string;
}
