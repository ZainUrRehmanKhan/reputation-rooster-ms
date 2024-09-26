import { Controller, Get } from '@nestjs/common';
import { MicrositeService } from './microsite.service';

@Controller()
export class MicrositeController {
  constructor(private readonly micrositeService: MicrositeService) {}

  @Get()
  getHello(): string {
    return this.micrositeService.getHello();
  }
}
