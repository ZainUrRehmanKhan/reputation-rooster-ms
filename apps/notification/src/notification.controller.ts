import { NotificationService } from './notification.service';
import { Controller, Get, Param, Patch } from '@nestjs/common';

@Controller()
export class NotificationController {
  constructor(private readonly service: NotificationService) {}

  @Get('company/:id/:person')
  fetchByUserId(@Param('id') id: string, @Param('person') person: string) {
    return this.service.fetchByCompanyId(id, person);
  }

  @Patch('mark-seen/:company/:person')
  markSeen(@Param('company') company: string, @Param('person') person: string) {
    return this.service.markSeen(company, person);
  }
}
