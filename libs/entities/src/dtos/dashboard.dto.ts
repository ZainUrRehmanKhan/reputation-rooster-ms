import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class WeeklyAnalyticsResponse {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  total_reviews: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  mon: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  tue: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  wed: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  thu: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  fri: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sat: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sun: number;
}

export class MonthlyAnalyticsResponse {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  total_reviews: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  jan: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  feb: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  mar: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  apr: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  may: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  jun: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  jul: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  aug: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sep: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  oct: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  nov: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  dec: number;
}

export class MonthlyAnalyticsResponseWithoutTotal {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  jan: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  feb: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  mar: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  apr: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  may: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  jun: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  jul: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  aug: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sep: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  oct: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  nov: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  dec: number;
}

export class ReviewsCountBySentiments {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  total: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  positive: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  neutral: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  negative: number;
}

export class ReviewsCountBySites {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  Google: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  Facebook: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  Yelp: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  BBB: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  'Reputation Rooster': number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  Angi: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  YellowPages: number;
}

export class DashboardResponse {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  contacts: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  reviews: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sites: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  invites: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  new_reviews: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  old_reviews: number;
}

class Rating {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  5: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  4: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  3: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  2: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  1: number;
}

export class ReviewSummaryResponse {
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
  reviews_by_rating: Rating;
}

export class AllCompaniesInsightsRequest {
  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  year: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  site: number;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  companies: string[];
}

export class ReviewSummaryFilterRequest {
  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  time: number;

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  site: number;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  companies: string[];
}

export class YearlyInsightResponse {
  @ApiProperty()
  @IsOptional()
  @IsObject()
  Rooster: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  Facebook: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  Google: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  Yelp: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  BBB: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  Angi: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  YellowPages: MonthlyAnalyticsResponseWithoutTotal;
}

export class YearlyRatingInsightResponse {
  @ApiProperty()
  @IsOptional()
  @IsObject()
  1: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  2: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  3: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  4: MonthlyAnalyticsResponseWithoutTotal;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  5: MonthlyAnalyticsResponseWithoutTotal;
}

export class PersonStatsResponse {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  locations: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  reviews: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  relationships: number;
}
