import { FileDTO } from './file.dto';
import { AddressDTO } from './address.dto';
import { StoryResponse } from './story.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum ContactOpportunity {
  NoReview,
  NoReviewInvite,
}

export enum ContactCampaigns {
  GetReviews,
  Recommendations,
}

export class ContactCreateRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  image: FileDTO;

  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  position: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  tags: [string];

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  invitation_status: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_name: string;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  address: AddressDTO;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  activity: [any];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  last_message_activity: number;

  @ApiProperty()
  @IsOptional()
  last_message_activity_date: Date;

  @ApiProperty()
  @IsOptional()
  last_activity_date: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  review: string;

  //to schedule invitation
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  is_checkin: boolean;
}

export class ContactUpdateRequest extends PartialType(ContactCreateRequest) {}

export class ContactResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  image: FileDTO;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  position: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  tags: [string];

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_name: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  type: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  status: number;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  address: AddressDTO;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  invitation_status: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  activity: [any];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  last_message_activity: number;

  @ApiProperty()
  @IsOptional()
  last_message_activity_date: Date;

  @ApiProperty()
  @IsOptional()
  last_activity_date: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  review: string;
}

export class ContactPopulatedResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  image: FileDTO;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  position: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  tags: [string];

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_name: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  type: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  status: number;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  address: AddressDTO;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  invitation_status: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  activity: [any];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  last_message_activity: number;

  @ApiProperty()
  @IsOptional()
  last_message_activity_date: Date;

  @ApiProperty()
  @IsOptional()
  last_activity_date: Date;

  @ApiProperty({ type: () => StoryResponse })
  @IsOptional()
  @IsObject()
  review: StoryResponse;
}

export class ContactFilterResponse {
  @ApiProperty({ type: [ContactPopulatedResponse] })
  @IsOptional()
  @IsArray()
  contacts: [ContactPopulatedResponse];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  count: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  total_pages: number;
}

export class ContactFilterRequest {
  @ApiProperty({ description: 'Page No - Starting Page is 1' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page: number;

  @ApiProperty({ description: 'Company ID' })
  @IsOptional()
  @IsString()
  id: string;
}

export class ContactSearchRequest {
  @ApiProperty({ description: 'Company  ID' })
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty({ description: 'Name or Email' })
  @IsOptional()
  @IsString()
  query: string;

  @ApiProperty({
    description: 'True: Get all contact, False: Search from name/email',
  })
  @IsOptional()
  @IsString()
  all: string;
}

export class PaginatedSearchRequest {
  @ApiProperty({ description: 'Company ID' })
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty({ description: 'Name or Email' })
  @IsOptional()
  @IsString()
  query: string;

  @ApiProperty({ description: 'Page No - Starting page is 1' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page: number;
}

export class BulkUploadDTO {
  @ApiProperty({
    required: true,
    type: 'string',
    format: 'binary',
    description: 'CSV File',
  })
  @IsOptional()
  @IsObject()
  image: FileDTO;

  @ApiProperty({ description: 'Company ID' })
  @IsOptional()
  @IsString()
  company_id: string;
}

export class CreateMultipleContactsDTO {
  @ApiProperty({ type: [ContactCreateRequest] })
  @IsOptional()
  @IsArray()
  contacts: [ContactCreateRequest];
}

export class LeadContactRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  data: any;
}

export class ContactMergeRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  from_contact: string;
}

export class ContactsFilterRequest {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  timePeriod: number;

  @ApiProperty({ type: [Number] })
  @IsOptional()
  @IsArray()
  opportunities: [number];

  @ApiProperty({ type: [Number] })
  @IsOptional()
  @IsArray()
  sentiments: [number];

  @ApiProperty({ type: [Number] })
  @IsOptional()
  @IsArray()
  contacts: [number];

  @ApiProperty({ type: [Number] })
  @IsOptional()
  @IsArray()
  campaigns: [number];

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page: number;
}
