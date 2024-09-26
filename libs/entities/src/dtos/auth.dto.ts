import {
  IsBoolean,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IResponse } from '@app/common';
import { HttpMessage } from '@app/entities';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class AccessToken {
  @ApiProperty()
  access_token: string;
}

export class AccessTokenResponse implements IResponse {
  @ApiProperty({ type: AccessToken })
  data?: AccessToken;

  @ApiProperty({ example: HttpMessage.SIGN_IN_SUCCESSFUL })
  message?: string | [string];

  @ApiProperty()
  error?: any;

  @ApiProperty({ example: HttpStatus.CREATED })
  statusCode?: number;
}

export class UnauthorizedResponse {
  @ApiProperty({ example: 401 })
  statusCode: number;

  @ApiProperty({ example: HttpMessage.UNAUTHORIZED })
  message: string;
}

export class SignInRequest {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  password: string;
}

export class SignUpRequest {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  first_name: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  timezone: string;

  @ApiProperty({ default: 1 })
  @IsNumber()
  @IsOptional()
  role: number;
}

export class SocialSignInRequest {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  first_name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  last_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  fromMobile: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty()
  timezone: string;
}

export class SignUpFromInviteRequest {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  first_name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  last_name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  password: string;

  @IsString()
  @IsMongoId()
  @ApiProperty()
  type_id: string;

  @IsNumber()
  @ApiProperty()
  type: number;

  @IsNumber()
  @ApiProperty()
  role: number;

  @IsOptional()
  @ApiProperty({ required: false })
  @IsNumber()
  step: number;
}
