import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingService {
  getHello(): string {
    return 'Hello World!';
  }
}
