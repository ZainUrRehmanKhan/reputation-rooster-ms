import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FileDTO {
  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  path: string;
}
