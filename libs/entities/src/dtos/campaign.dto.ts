import {
  IsArray,
  IsBoolean,
  IsMongoId,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class MessageTemplateDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  message_body: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  message_title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  message_button_text: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  message_subject: string;
}

export class MessageDto {
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  type: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  subject: string;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  sent: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  opened: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  clicked: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  scored: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  status: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  edited: boolean;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  template: MessageTemplateDTO;
}

export class CampaignResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  status: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  people_entered: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  people_enrolled: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  people_exited: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  total_reviews: number;

  @ApiProperty({ type: [MessageDto] })
  @IsOptional()
  @IsArray()
  messages: [MessageDto];
}

export class CampaignStatusUpdateRequest {
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  status: number;
}

export class CampaignCreateRequest {
  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  company_id: string;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  status: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  people_entered: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  people_enrolled: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  people_exited: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  total_reviews: number;

  @ApiProperty({ type: [MessageDto] })
  @IsOptional()
  @IsArray()
  messages: [MessageDto];
}

export class CampaignUpdateRequest extends PartialType(CampaignCreateRequest) {}
