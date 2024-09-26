import { ApiProperty } from '@nestjs/swagger';
import { PersonDTO } from './person.dto';
import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class AccountTeamPopulatedDTO {
  @ApiProperty({ type: () => PersonDTO })
  @IsOptional()
  @IsObject()
  person: PersonDTO;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  role: number;
}

export class CompanyTeamDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  person: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  role: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  from_account: boolean;
}

export class CompanyTeamPopulatedDTO {
  @ApiProperty({ type: () => PersonDTO })
  @IsOptional()
  @IsObject()
  person: PersonDTO;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  role: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  from_account: boolean;
}
