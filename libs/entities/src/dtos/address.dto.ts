import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AddressDTO {
  @IsOptional()
  @IsString()
  @ApiProperty()
  address: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  country: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  unit: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  city: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  state: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  zip_code: string;
}
