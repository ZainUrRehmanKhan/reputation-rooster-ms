import { IResponse } from '@app/common';
import { HttpStatus } from '@nestjs/common';
import { HttpMessage } from '@app/entities';
import { ApiProperty } from '@nestjs/swagger';

export class ValidationError implements IResponse {
  @ApiProperty({
    type: [String],
    example: ['username should not be empty', 'password must be a string'],
  })
  message: [string];

  @ApiProperty({ example: HttpMessage.BAD_REQUEST })
  error: any;

  @ApiProperty({ example: HttpStatus.BAD_REQUEST })
  statusCode: number;
}

export class ConflictDTO implements IResponse {
  @ApiProperty({
    type: String,
    example: HttpMessage.EMAIL_ALREADY_EXISTS,
  })
  message: string;

  @ApiProperty()
  error: any;

  @ApiProperty()
  data: any;

  @ApiProperty({ example: HttpStatus.CONFLICT })
  statusCode: number;
}
