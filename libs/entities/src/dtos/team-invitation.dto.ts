import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TeamInvitationResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  hash: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  type: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  role: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  type_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  person_id: string;
}

export class TeamInvitationCreateRequest {
  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  type: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  role: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  type_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  person_id: string;
}

export class ChangeAccountRole {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  role: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  account_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  person_id: string;
}
