import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCustomerRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  payment_method: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;
}

export class UpdateCustomerPaymentMethodRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  payment_method: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  old_payment_method: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;
}

export class CreateSubscriptionRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  customer: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  price: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  trial: boolean;
}

export class extendTrialRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  customer: string;

  @ApiProperty()
  @IsOptional()
  date: Date;
}

export class CancellationRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  person: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  cancel: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  reason: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  immediately: boolean;
}

//------------------ Coupon ----------------//

export enum CouponType {
  Amount = 2,
  Percentage = 1,
}

export class CreateCoupon {
  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  promo_code: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  type: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  discount: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  max_redemptions: number;

  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'once, repeating or forever' })
  @IsOptional()
  duration: string;

  @IsOptional()
  @ApiProperty({
    type: Number,
    description: 'e.g duration_in_months: 3',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  durationInMonths: number;
}
