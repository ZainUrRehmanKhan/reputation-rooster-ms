import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUrlShortenerDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  long_url: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  hash: string;
}

export class UrlShortenerResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  long_url: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  token: string;
}
