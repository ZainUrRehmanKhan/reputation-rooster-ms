import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class LeadDTO {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  collect: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  btn_text: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  form_title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  submit_btn: string;
}

export class CheckinsDTO {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  invite: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  delay: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  url: string;
}

export class MicroSiteCreateUpdateRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  auto_publish: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  auto_publish_minimum_review: number;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  lead: LeadDTO;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  checkins: CheckinsDTO;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;
}

export class MicroSiteResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({ default: true })
  @IsOptional()
  @IsBoolean()
  auto_publish: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  auto_publish_minimum_review: number;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  lead: LeadDTO;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  checkins: CheckinsDTO;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;
}

export class RedirectRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  message: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  contact: string;
}
