import { FileDTO } from './file.dto';
import { ApiProperty } from '@nestjs/swagger';
import { PersonDTO } from './person.dto';
import { CompanyResponse } from './company.dto';
import { ContactResponse } from './contact.dto';
import {
  IsArray,
  IsBoolean,
  IsMongoId,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum StoryOpportunitiesFilter {
  NotShared,
  NotPublished,
  NotReviewed,
  NotMatched,
  NotReplied,
}

export enum TimeFilterDTO {
  AllTime,
  Yesterday,
  LastWeek,
  LastMonth,
  LastYear,
}

export enum SentimentFilter {
  Positive,
  Neutral,
  Negative,
}

export class ReviewResponseDto {
  @ApiProperty()
  @IsOptional()
  @IsObject()
  contact: ContactResponse;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  source: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewer_name: string;

  @ApiProperty()
  @IsOptional()
  review_date: Date;

  @ApiProperty()
  @IsOptional()
  review_update_date: Date;

  @ApiProperty({ type: () => ReviewReplyDTO })
  @IsOptional()
  @IsObject()
  reply: any;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  suggested_users: [any];

  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewer_image: string;
}

export class ReviewReplyDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  comment: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  updateTime: string;
}

export class ReviewCreateDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  contact: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  source: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewer_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  review_id: string;

  @ApiProperty()
  @IsOptional()
  review_date: Date;

  @ApiProperty()
  @IsOptional()
  review_update_date: Date;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  reply: ReviewReplyDTO;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  suggested_users: any[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewer_image: string;
}

export class StoryResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  comment: string;

  @ApiProperty({ type: [FileDTO] })
  @IsOptional()
  @IsArray()
  images: [FileDTO];

  @ApiProperty()
  @IsOptional()
  @IsObject()
  user_id: PersonDTO;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  company_id: CompanyResponse;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  status: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  tags: [string];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  reached: number;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  review: ReviewResponseDto;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  old: boolean;
}

export class StoryPaginationResponse {
  @ApiProperty({ type: [StoryResponse] })
  @IsOptional()
  @IsArray()
  stories: [StoryResponse];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  count: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page: number;
}

export class StoryPaginationRequest {
  @IsMongoId()
  @ApiProperty({ description: 'Company ID' })
  @IsOptional()
  id: string;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  page: number;
}

export class StoryCreateUpdateRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  comment: string;

  @ApiProperty({ type: [FileDTO] })
  @IsOptional()
  @IsArray()
  images: [FileDTO];

  @IsMongoId()
  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  user_id: string;

  @IsMongoId()
  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  status: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location: string;

  @ApiProperty({ type: [String] })
  @IsOptional()
  @IsArray()
  tags: [string];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  reached: number;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  review: ReviewCreateDto;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  shared: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  replied: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  old: boolean;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  suggested_users: [any];
}

export class ScheduledStoryDto {
  @ApiProperty({ type: StoryCreateUpdateRequest })
  @IsOptional()
  @IsObject()
  story: StoryCreateUpdateRequest;

  @ApiProperty()
  @IsOptional()
  @IsString()
  image: string;
}

export class ScheduledStoryRequest {
  @ApiProperty({ type: [ScheduledStoryDto] })
  @IsOptional()
  @IsArray()
  list: [ScheduledStoryDto];
}

export class WidgetFilterRequest {
  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  company_id: string;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  page: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  type: number;
}

export class FilterStoriesRequest {
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
  sites: [number];

  @ApiProperty({ type: [Number] })
  @IsOptional()
  @IsArray()
  sentiments: [number];

  @ApiProperty()
  @IsOptional()
  @IsString()
  members: [string];

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page: number;
}

export class FetchFromCompanyAndContactRequest {
  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  user_id: string;

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  company_id: string;
}

export class CompanyReviewsAverage {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  total_reviews: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  average_rating: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  facebook: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  google: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  bbb: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  yelp: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rooster: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  angi: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  yellowpages: number;
}

export class MicrositeReview {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  comment: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  contactID: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  messageId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;
}

export class ReplyToReview {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  type: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  story_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  review_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  reply: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewerEmail: string;
}

export class TrustShieldAverageRatingDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  count: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  type: number;
}

export class TrustedShieldWidgetResponse {
  @ApiProperty({ type: [TrustShieldAverageRatingDto] })
  @IsOptional()
  @IsArray()
  review_list: TrustShieldAverageRatingDto[];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  total_reviews: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  total_average_rating: number;

  @ApiProperty({ type: [StoryResponse] })
  @IsOptional()
  @IsArray()
  stories: StoryResponse[];
}

export class OpportunitySummaryRequest {
  @ApiProperty({ description: '1: Monthly, 0: Weekly' })
  @IsOptional()
  @IsNumber()
  monthly: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;
}

export class OpportunitySummaryResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewer_initials: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewer_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  review_text: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  stars: any[];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  new_reviews: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  new_photos: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  new_invitations: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  new_shares: number;
}

export class WidgetStoryRequest {
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
