import {
  ACCOUNT_QUEUE,
  HttpMessage,
  PERSON_QUEUE,
  Role,
  TeamRole,
} from '@app/entities';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { SignUpRequest } from '@app/entities/dtos/auth.dto';
import { ToPromise } from '@app/common/services/to-promise';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { AccountDocument } from '@app/entities/schemas/account.schema';
import { MandrillMail, MandrillTemplates, ResponseHandler } from '@app/common';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly configService: ConfigService,
    @Inject(PERSON_QUEUE) private readonly personService: ClientProxy,
    @Inject(ACCOUNT_QUEUE) private readonly accountService: ClientProxy,
  ) {}

  // private companyService: CompanyService,
  // private microSiteService: MicrositeService,
  // private settingService: SettingService,
  // private campaignService: CampaignService,
  // private stripeService: StripeService

  async validateUser(username: string, password: string) {
    try {
      const response = await ToPromise(
        this.personService.send('VALIDATE_USERNAME_PASSWORD', {
          username,
          password,
        }),
      );
      if (response && response.data && response.statusCode == HttpStatus.OK) {
        return response.data;
      }
      return null;
    } catch (_) {
      return null;
    }
  }

  async signIn(user: any) {
    try {
      return ResponseHandler.makeMessage(
        {
          access_token: await this.jwtService.signAsync({
            username: user.username,
            sub: user._id,
          }),
        },
        null,
        HttpStatus.CREATED,
        HttpMessage.SIGN_IN_SUCCESSFUL,
      );
    } catch (e) {
      return ResponseHandler.makeMessage(
        null,
        e,
        e.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
        e.message,
      );
    }
  }

  // if google boolean false, then it is apple
  // async signInWithSocial(data: SocialSignInRequest, google = true) {
  //   const person = (await this.personService.fetchByUsername(
  //     data.username,
  //   )) as PersonDocument;
  //   if (person) {
  //     if ((person.google && google) || person.apple) {
  //       return {
  //         access_token: await this.jwtService.signAsync({
  //           username: data.username,
  //           sub: person._id,
  //         }),
  //       };
  //     } else {
  //       throw new HttpException(
  //         'Account with this email already exists, kindly sign in with email and password!',
  //         HttpStatus.NOT_ACCEPTABLE,
  //       );
  //     }
  //   } else if (!data.fromMobile) {
  //     // Create new user
  //     let person;
  //     if (google) {
  //       person = (await this.personService.createFromSocial(
  //         data,
  //         google,
  //       )) as any;
  //     } else {
  //       person = (await this.personService.createFromSocial(
  //         data,
  //         google,
  //       )) as any;
  //     }
  //
  //     const account_team = {
  //       person: person._id,
  //       role: TeamRole.Owner,
  //     };
  //
  //     const customer = await this.stripeService.createCustomer({
  //       name: data.first_name + ' ' + data.last_name,
  //       email: data.username,
  //       payment_method: null,
  //     });
  //
  //     await this.stripeService.createSubscription({
  //       customer: customer.id,
  //       price: null,
  //       trial: true,
  //     });
  //
  //     const account = (await this.accountService.create({
  //       team: [account_team],
  //     })) as AccountDocument;
  //     const company = await this.companyService.createOnSignup({
  //       email: data.username,
  //       from_google: true,
  //       timezone: data.timezone,
  //       company_team: [
  //         {
  //           person: person._id,
  //           role: TeamRole.Owner,
  //           from_account: true,
  //         },
  //       ],
  //       account: account._id,
  //       name: 'My First Company',
  //       address: {
  //         country: 'United States',
  //       },
  //     });
  //     await this.settingService.createDefault(person._id);
  //
  //     await this.microSiteService.createDefault(company.name, company._id);
  //     await this.campaignService.createDefaultCampaign(company._id);
  //     await new MandrillMail().sendEmail(
  //       MandrillTemplates.SignupNotification,
  //       {
  //         name: data.first_name + ' ' + data.last_name,
  //         email: data.username,
  //         companyName: 'N/A (Signed up from google)',
  //         phone: 'N/A',
  //       },
  //       'todd@lockjawdigital.com',
  //       'Todd Seth',
  //     );
  //     return {
  //       access_token: await this.jwtService.signAsync({
  //         username: data.username,
  //         sub: person._id,
  //       }),
  //     };
  //   } else {
  //     throw new HttpException(
  //       'No Account with this email exists',
  //       HttpStatus.NOT_ACCEPTABLE,
  //     );
  //   }
  // }
  //
  // async signUpFromInvite(data: SignUpFromInviteRequest) {
  //   const personCreated = (await this.personService.createFromInvite(
  //     data,
  //   )) as PersonDocument;
  //   await this.settingService.createDefault(personCreated._id);
  //   if (data.type == InvitationType.Account) {
  //     await this.accountService.addToTeam(
  //       data.type_id,
  //       personCreated._id,
  //       data.role,
  //     );
  //     await this.companyService.addToAllCompanyTeamsOfAccount(
  //       data.type_id,
  //       personCreated._id,
  //       data.role,
  //     );
  //   } else {
  //     await this.companyService.addToTeam(
  //       data.type_id,
  //       personCreated._id,
  //       data.role,
  //     );
  //   }
  // }
  //
  async signUp(data: SignUpRequest) {
    const person = await ToPromise(this.personService.send('CREATE', data));
    if (data.role === Role.Admin) {
      return person;
    }

    const account_team = {
      person: person._id,
      role: TeamRole.Owner,
    };
    const account = (await ToPromise(
      this.accountService.send('CREATE', {
        team: [account_team],
      }),
    )) as AccountDocument;

    // const customer = await this.stripeService.createCustomer({
    //   name: data.first_name + ' ' + data.last_name,
    //   email: data.username,
    //   payment_method: null,
    // });
    //
    // await this.stripeService.createSubscription({
    //   customer: customer.id,
    //   price: null,
    //   trial: true,
    // });
    //
    // const company = await this.companyService.createOnSignup({
    //   name: data.company_name,
    //   email: data.username,
    //   phone: data.phone,
    //   timezone: data.timezone,
    //   company_team: [
    //     {
    //       person: person._id,
    //       role: TeamRole.Owner,
    //       from_account: true,
    //     },
    //   ],
    //   account: account._id,
    //   address: {
    //     country: 'United States',
    //   },
    // });
    //
    // await this.settingService.createDefault(person._id);
    //
    // await this.microSiteService.createDefault(data.company_name, company._id);
    // await this.campaignService.createDefaultCampaign(company._id);

    await new MandrillMail(this.configService).sendEmail(
      MandrillTemplates.SignupNotification,
      {
        name: data.first_name + ' ' + data.last_name,
        email: data.username,
        companyName: data.company_name,
        phone: data.phone,
      },
      this.configService.get('ADMIN_EMAIL'),
      this.configService.get('ADMIN_NAME'),
    );
  }

  async profile(user: any) {
    return await ToPromise(
      this.personService.send('FETCH_USER', { id: user._id }),
    );
  }
}
