import { ApiProperty } from '@nestjs/swagger';
import { AccountTeamPopulatedDTO } from './team.dto';
import { IsArray, IsOptional } from 'class-validator';

export class AccountPopulatedDTO {
  @ApiProperty({ type: [AccountTeamPopulatedDTO] })
  @IsOptional()
  @IsArray()
  team: [AccountTeamPopulatedDTO];
}
