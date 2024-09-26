import { Injectable } from '@nestjs/common';

@Injectable()
export class MicrositeService {
  getHello(): string {
    return 'Hello World!';
  }
}
