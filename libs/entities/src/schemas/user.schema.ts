import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ unique: true })
  username: string;

  @Prop({ select: false })
  password: string;
}
