import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class InstaFBLinkedInCreatePost {
  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewText: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  postText: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  source: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewer: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bg: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  story_image: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  generated_image: string;
}

export class CommonSocialPostDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewText: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  postText: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  source: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  reviewer: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bg: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  story_image: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  insta_generated_image: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fb_generated_image: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  linkedin_generated_image: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  twitter_generated_image: string;
}

export class CreateSocialPostDto {
  @ApiProperty()
  @IsOptional()
  @IsObject()
  instagram: InstaFBLinkedInCreatePost;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  facebook: InstaFBLinkedInCreatePost;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  linkedin: InstaFBLinkedInCreatePost;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  twitter: InstaFBLinkedInCreatePost;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  common: CommonSocialPostDto;

  @ApiProperty()
  @IsOptional()
  @IsString()
  story_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_name: string;
}

export class SocialPostResponseDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  instagram: InstaFBLinkedInCreatePost;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  facebook: InstaFBLinkedInCreatePost;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  linkedin: InstaFBLinkedInCreatePost;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  twitter: InstaFBLinkedInCreatePost;

  @ApiProperty()
  @IsOptional()
  @IsString()
  story_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_name: string;
}
