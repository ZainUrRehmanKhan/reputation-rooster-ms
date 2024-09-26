import { IsArray, IsOptional, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class NotificationTemplateCreateDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  message: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  channel: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  title: string;
}

export class TestNotificationTemplate {
  @ApiProperty({ type: [String] })
  @IsOptional()
  @IsArray()
  emails: [string];

  @ApiProperty()
  @IsOptional()
  @IsString()
  message: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  title: string;
}

export class NotificationTemplateUpdateDto extends PartialType(
  NotificationTemplateCreateDto,
) {}

export class NotificationTemplateResponseDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  message: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  channel: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  title: string;
}
