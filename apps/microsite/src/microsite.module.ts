import { Module } from '@nestjs/common';
import { MicrositeController } from './microsite.controller';
import { MicrositeService } from './microsite.service';

@Module({
  imports: [],
  controllers: [MicrositeController],
  providers: [MicrositeService],
})
export class MicrositeModule {}
