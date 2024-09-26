import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsMongoId,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { FileDTO } from './file.dto';
import { IResponse } from '@app/common';
import { ApiProperty } from '@nestjs/swagger';
import { HttpMessage } from '@app/entities/enums/http-message.enum';
import { HttpStatus } from "@nestjs/common";

export class PersonUpdateRequest {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: true })
  first_name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  username: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  last_name: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ type: Boolean })
  account_deleted: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty()
  phone: string;

  @IsOptional()
  @IsObject()
  @ApiProperty()
  image: FileDTO;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  step: number;

  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  scopes: [string];

  @IsOptional()
  @ApiProperty({ type: [String] })
  @IsArray()
  applied_promo_codes: [string];
}

export class PersonDTO {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  is_verified: boolean;

  @ApiProperty()
  account_deleted: boolean;

  @ApiProperty()
  google: boolean;

  @ApiProperty()
  apple: boolean;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  image: FileDTO;

  @ApiProperty()
  verification_hash: string;

  @ApiProperty()
  step: number;

  @ApiProperty()
  payment: any;

  @ApiProperty()
  subscription: any;

  @ApiProperty()
  role: number;

  @ApiProperty({ type: [String] })
  scopes: [string];

  @ApiProperty({ type: [String] })
  applied_promo_codes: [string];

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}

export class PersonResponse implements IResponse {
  @ApiProperty()
  data: PersonDTO;

  @ApiProperty({ example: HttpMessage.OK })
  message: string;

  @ApiProperty()
  error: any;

  @ApiProperty({ example: HttpStatus.OK })
  statusCode: number;
}

export class PasswordUpdateRequest {
  @IsMongoId()
  @ApiProperty({ required: true, description: 'Person Id' })
  @IsOptional()
  person_id: string;

  @IsString()
  @ApiProperty({ required: true })
  @IsOptional()
  oldPassword: string;

  @IsString()
  @ApiProperty({ required: true })
  @IsOptional()
  newPassword: string;
}

export class AccountVerification {
  @IsString()
  @ApiProperty()
  @IsOptional()
  hash: string;

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  id: string;
}

export class AccountVerificationEmail {
  @IsEmail()
  @ApiProperty()
  @IsOptional()
  email: string;

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  id: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;
}

export class ResetPassword {
  @IsString()
  @ApiProperty()
  @IsOptional()
  hash: string;

  @IsString()
  @ApiProperty({ type: String, format: 'password' })
  @IsOptional()
  password: string;
}

export class ForgotPasswordRequest {
  @IsEmail()
  @ApiProperty()
  @IsOptional()
  email: string;
}

export class SaveFileDTO {
  @ApiProperty({ required: true, type: 'string', format: 'binary' })
  @IsOptional()
  @IsObject()
  image: FileDTO;
}

export class SignUpRequestDtoForAdminRoute {
  @IsEmail()
  @ApiProperty()
  @IsOptional()
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  password: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  first_name: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  last_name: string;

  @ApiProperty({ default: 1 })
  @IsOptional()
  @IsNumber()
  role: number;

  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  @IsOptional()
  scopes: [string];
}
