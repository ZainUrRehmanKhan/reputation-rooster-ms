import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsMongoId, IsOptional, IsString } from 'class-validator';

export class NotificationsCreateDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  message: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  title: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  action_url: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  seen: boolean;

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  company_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  persons: string;
}

export class NotificationsResponseDto extends PartialType(
  NotificationsCreateDto,
) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;
}
