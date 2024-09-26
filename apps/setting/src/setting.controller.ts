import { Controller, Get } from '@nestjs/common';
import { SettingService } from './setting.service';

@Controller()
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Get()
  getHello(): string {
    return this.settingService.getHello();
  }
}
