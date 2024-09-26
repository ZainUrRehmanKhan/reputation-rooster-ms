import { Controller, Get } from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller()
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  getHello(): string {
    return this.campaignService.getHello();
  }
}
