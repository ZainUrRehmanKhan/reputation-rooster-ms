import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { FileDTO } from './file.dto';
import { AddressDTO } from './address.dto';
import { AccountPopulatedDTO } from './account.dto';
import { FileSchema } from '../schemas/file.schema';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CompanyTeamDTO, CompanyTeamPopulatedDTO } from './team.dto';

export class DisconnectedSitesDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  source: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  issue_in: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  connection_issue: boolean;
}

export class CompanyCreateRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  phone: string;

  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty()
  person_id: string;

  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty()
  account_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  timezone: string;
}

export class UpdateDisconnectedSites {
  @ApiProperty({ type: [DisconnectedSitesDto] })
  @IsOptional()
  @IsArray()
  sites: DisconnectedSitesDto[];
}

export class CompanyUpdateRequest extends PartialType(CompanyCreateRequest) {
  @IsOptional()
  @ApiProperty()
  @IsObject()
  address: AddressDTO;

  @IsOptional()
  @ApiProperty()
  @IsObject()
  logo: FileDTO;

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  from_google: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty()
  website: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  timezone: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty()
  account: string;

  @ApiProperty({ type: [DisconnectedSitesDto] })
  @IsOptional()
  @IsArray()
  disconnected_sites: DisconnectedSitesDto[];
}

export class ChangeRoleRequest {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  role: number;

  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty()
  person_id: string;

  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty()
  company_id: string;
}

export class CompanyResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  address: AddressDTO;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  logo: FileDTO;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  logo_resized: FileSchema;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  logo_social: FileSchema;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  from_google: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  website: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  sdk_public_key: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_unique_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  timezone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  account: string;

  @ApiProperty({ type: [CompanyTeamDTO] })
  @IsOptional()
  @IsArray()
  company_team: [CompanyTeamDTO];

  @ApiProperty({ type: [DisconnectedSitesDto] })
  @IsOptional()
  @IsArray()
  disconnected_sites: DisconnectedSitesDto[];
}

export class CompanyResponsePopulated {
  @ApiProperty()
  @IsOptional()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  address: AddressDTO;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  logo: FileDTO;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  logo_resized: FileSchema;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  logo_social: FileSchema;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  from_google: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  website: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  sdk_public_key: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_unique_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  timezone: string;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  account: AccountPopulatedDTO;

  @ApiProperty({ type: [CompanyTeamPopulatedDTO] })
  @IsOptional()
  @IsArray()
  company_team: CompanyTeamPopulatedDTO[];

  @ApiProperty({ type: [DisconnectedSitesDto] })
  @IsOptional()
  @IsArray()
  disconnected_sites: DisconnectedSitesDto[];
}
