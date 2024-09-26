import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CampaignMessageCreate {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  type: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  contact: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  is_delivered: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  open: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  clicks: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  goal: boolean;
}

export class CampaignMessageStatsDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  subject: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  clicked: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sent: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  opened: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  scored: number;

  @ApiProperty({ description: '0: SMS, 1: EMAIL' })
  @IsOptional()
  @IsNumber()
  type: number;
}
