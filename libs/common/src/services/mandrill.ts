import { ConfigService } from '@nestjs/config';
import mailchimp from '@mailchimp/mailchimp_transactional';

export enum MandrillTemplates {
  Verification = 'Account Verification',
  ForgotPassword = 'Forgot Password New',
  // ForgotPassword = 'Forgot Password',
  ContactsUploaded = 'Contacts Uploaded',
  AddToTeamInvitation = 'Add To Team Invitation',
  AddToTeamNotification = 'Add to Team Notification',
  CampaignEmailTemplate1 = 'Campaign Email Template 1',
  CampaignEmailTemplate2 = 'Campaign Email Template 2',
  NewLead = 'New Lead',
  NewReply = 'New Reply',
  NewReview = 'New Review',
  SignupNotification = 'Signup Notification',
  OpportunitySummary = 'Opportunity Summary',
  ReconnectionNotification = 'Reconnection Notification',
}

export class MandrillMail {
  EMAIL: string;
  NAME: string;
  mailchimpTx: any;

  constructor(private configService: ConfigService) {
    this.EMAIL = configService.get('MANDRILL_EMAIL');
    this.NAME = configService.get('MANDRILL_NAME');

    this.mailchimpTx = mailchimp(configService.get('MANDRILL_API_KEY'));
  }

  async sendEmail(
    template: MandrillTemplates,
    data: any,
    to_email: string,
    to_name: string,
  ): Promise<boolean> {
    try {
      const vars = [];
      const keys = Object.keys(data);
      const values = Object.values(data);
      for (let i = 0; i < keys.length; ++i) {
        vars.push({
          name: keys[i],
          content: values[i],
        });
      }
      await this.mailchimpTx.messages.sendTemplate({
        template_name: template,
        template_content: [{}],
        message: {
          from_email: this.EMAIL,
          from_name: this.NAME,
          to: [
            {
              email: to_email,
              name: to_name,
              type: 'to',
            },
          ],
          merge_language: 'handlebars',
          global_merge_vars: vars,
        },
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async sendToMultipleEmails(
    template: MandrillTemplates,
    data: any,
    to_emails: string[],
    to_names: string[],
  ): Promise<boolean> {
    try {
      const vars = [];
      const keys = Object.keys(data);
      const values = Object.values(data);
      for (let i = 0; i < keys.length; ++i) {
        vars.push({
          name: keys[i],
          content: values[i],
        });
      }
      const to = [];
      for (let i = 0; i < to_emails.length; ++i) {
        to.push({
          email: to_emails[i],
          name: to_names[i],
          type: 'to',
        });
      }
      await this.mailchimpTx.messages.sendTemplate({
        template_name: template,
        template_content: [{}],
        message: {
          from_email: 'noreply@reputationrooster.com',
          from_name: 'Reputation Rooster',
          to,
          merge_language: 'handlebars',
          global_merge_vars: vars,
        },
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
