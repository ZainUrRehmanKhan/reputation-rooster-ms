import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class SettingResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  sms_lead: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  email_lead: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  email_review: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  email_weekly: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  email_monthly: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  user_id: string;
}

export class SettingCreateUpdateRequest {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  sms_lead: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  email_lead: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  email_review: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  email_weekly: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  email_monthly: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  user_id: string;
}
