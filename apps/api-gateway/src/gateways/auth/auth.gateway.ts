import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  AccessTokenResponse,
  SignInRequest,
  SignUpRequest,
  UnauthorizedResponse,
} from '@app/entities/dtos/auth.dto';
import { AuthService } from './auth.service';
import { ResponseHandler } from '@app/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { HttpMessage, PersonResponse } from '@app/entities';
import { ConflictDTO, ValidationError } from '@app/entities/dtos/common.dto';

@Controller('auth')
export class AuthGateway {
  constructor(private readonly service: AuthService) {}

  @ApiCreatedResponse({
    description: HttpMessage.SIGN_IN_SUCCESSFUL,
    type: AccessTokenResponse,
  })
  @ApiUnauthorizedResponse({
    description: HttpMessage.UNAUTHORIZED,
    type: UnauthorizedResponse,
  })
  @ApiBody({ type: SignInRequest })
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Request() request: any): Promise<AccessTokenResponse> {
    return ResponseHandler.return(await this.service.signIn(request.user));
  }

  @ApiOkResponse({ description: HttpMessage.SIGN_UP_SUCCESSFUL })
  @ApiBadRequestResponse({
    description: HttpMessage.BAD_REQUEST,
    type: ValidationError,
  })
  @ApiConflictResponse({
    description: HttpMessage.EMAIL_ALREADY_EXISTS,
    type: ConflictDTO,
  })
  @Post('sign-up')
  async signUp(@Body() data: SignUpRequest): Promise<any> {
    return ResponseHandler.return(await this.service.signUp(data));
  }

  // @Post('sign-up/invite')
  // signUpFromInvite(@Body() data: SignUpFromInviteRequest): Promise<any> {
  //   return this.service.signUpFromInvite(data);
  // }
  //
  // @Post('google')
  // signInWithGoogle(
  //   @Body() data: SocialSignInRequest,
  // ): Promise<AccessTokenResponse> {
  //   return this.service.signInWithSocial(data);
  // }
  //
  // @Post('apple')
  // signInWithApple(
  //   @Body() data: SocialSignInRequest,
  // ): Promise<AccessTokenResponse> {
  //   return this.service.signInWithSocial(data, false);
  // }

  @ApiBearerAuth('access-token')
  @ApiOkResponse({
    type: PersonResponse,
    description: HttpMessage.GET_YOUR_PROFILE,
  })
  @ApiUnauthorizedResponse({
    description: HttpMessage.UNAUTHORIZED,
    type: UnauthorizedResponse,
  })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() request): Promise<any> {
    return ResponseHandler.return(await this.service.profile(request.user));
  }
}
