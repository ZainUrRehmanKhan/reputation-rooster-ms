import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class QuickbooksInitResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  url: string;
}

export class QuickbooksAccessTokenResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  access_token: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  refresh_token: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  realmId: string;
}

export class QuickbooksCredentialRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  code: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  realmId: string;
}

export class QuickbooksAccessTokenRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty({ default: 0 })
  @IsNumber()
  @IsOptional()
  delay: number;
}

export class QuickbooksCreateDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  quickbooks_company_name: string;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  data: any;

  @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  is_connected: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  type: string;

  @ApiProperty({ default: 0 })
  @IsNumber()
  @IsOptional()
  delay: number;
}

export class QuickbooksUpdateDto {
  @ApiProperty({ default: 0 })
  @IsNotEmpty()
  @IsNumber()
  delay: number;
}
