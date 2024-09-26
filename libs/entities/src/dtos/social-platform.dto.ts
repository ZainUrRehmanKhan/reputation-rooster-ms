import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export enum DisconnectionIssueType {
  ReviewSite,
  SocialSite,
}

export class SocialPlatformResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  type: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  background: string;

  @ApiProperty()
  @IsOptional()
  data: any;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;
}

export class SocialPlatformCreateRequest {
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  type: number;

  @ApiProperty()
  @IsOptional()
  data: any;

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  company_id: string;
}

export class SocialPlatformUpdateRequest extends PartialType(
  SocialPlatformCreateRequest,
) {
  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  connected: boolean;

  @IsOptional()
  @ApiProperty()
  @IsString()
  background: string;

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  auto_sharing: boolean;
}

export class SocialPlatformUpdateBackgroundRequest {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: true })
  background: string;

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  company_id: string;
}
