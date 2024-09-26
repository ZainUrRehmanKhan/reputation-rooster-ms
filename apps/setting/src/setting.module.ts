import { Module } from '@nestjs/common';
import { SettingController } from './setting.controller';
import { SettingService } from './setting.service';

@Module({
  imports: [],
  controllers: [SettingController],
  providers: [SettingService],
})
export class SettingModule {}
