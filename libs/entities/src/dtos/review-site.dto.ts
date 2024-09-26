import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ReviewSiteResponse {
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
  @IsBoolean()
  invite: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  connected: boolean;

  @ApiProperty()
  @IsOptional()
  data: any;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;
}

export class ReviewSiteCreateRequest {
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  type: number;

  @IsBoolean()
  // Invite Customer to Leave Reviews
  @ApiProperty()
  @IsOptional()
  invite: boolean;

  @ApiProperty()
  @IsOptional()
  data: any;

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  company_id: string;
}

export class ReviewSiteUpdateRequest extends PartialType(
  ReviewSiteCreateRequest,
) {
  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  connected: boolean;
}

export class FacebookPagesResponse {
  @ApiProperty()
  @IsOptional()
  user: any;

  @ApiProperty()
  @IsOptional()
  pages: any;
}

export class GoogleAccountRequest {
  @ApiProperty()
  @IsString()
  @IsOptional()
  code: string;
}

export class GoogleAccountResponse {
  @ApiProperty()
  @IsString()
  @IsOptional()
  access_token: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  refresh_token: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  account: any;

  @ApiProperty()
  @IsString()
  @IsOptional()
  locations: any;
}
