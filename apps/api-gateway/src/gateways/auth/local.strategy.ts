import { Person } from '@app/entities';
import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private service: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<Person> {
    return await this.service.validateUser(username, password);
  }
}
