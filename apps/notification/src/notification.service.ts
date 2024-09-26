import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Notification,
  NotificationDocument,
} from '@app/entities/schemas/notifications.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private readonly model: Model<NotificationDocument>,
    private readonly httpService: HttpService,
  ) {}

  async subscribeToTopic(topic: string, token: string) {
    try {
      await this.httpService
        .post(
          'https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topic,
          null,
          {
            headers: {
              ContentType: 'application/json',
              Authorization: 'key=' + process.env.FCM_KEY,
            },
          },
        )
        .subscribe();
    } catch (e) {
      console.log(e);
    }
  }

  async sendNotificationToChannel(
    title: string,
    body: string,
    channel: string,
    action = '/notifications',
  ): Promise<any> {
    await this.httpService
      .post(
        'https://fcm.googleapis.com/fcm/send',
        {
          notification: {
            title: title,
            body: body,
            click_action: action,
          },
          to: '/topics/' + channel,
        },
        {
          headers: {
            ContentType: 'application/json',
            Authorization: 'key=' + process.env.FCM_KEY,
          },
        },
      )
      .subscribe(async (asd) => {
        console.log(asd.status, asd.statusText);
      });
  }

  async sendNotificationToSinglePerson(
    title: string,
    body: string,
    company_id: string,
    person: string,
    tokens: string[],
    action = '/notifications',
    save = true,
    data: any = null,
  ) {
    for (const token of tokens) {
      await this.httpService
        .post(
          'https://fcm.googleapis.com/fcm/send',
          {
            notification: {
              title,
              body,
            },
            action,
            to: token,
            data,
          },
          {
            headers: {
              ContentType: 'application/json',
              Authorization: 'key=' + process.env.FCM_KEY,
            },
          },
        )
        .subscribe(async () => {
          // console.log(asd.status, asd.statusText);
        });
    }
    if (save) {
      return await this.create({
        message: body,
        title: title,
        action_url: action,
        company_id,
        person,
      });
    }
  }

  async sendNotificationToMultiplePersons(
    title: string,
    body: string,
    company_id: string,
    persons: string[],
    tokens: string[][],
    action = '/notifications',
    save = true,
    data: any = null,
  ): Promise<any> {
    for (let i = 0; i < tokens.length; i++) {
      for (const token of tokens[i] ?? []) {
        await this.httpService
          .post(
            'https://fcm.googleapis.com/fcm/send',
            {
              notification: {
                title,
                body,
              },
              action: action,
              to: token,
              data,
            },
            {
              headers: {
                ContentType: 'application/json',
                Authorization: 'key=' + process.env.FCM_KEY,
              },
            },
          )
          .subscribe(async (asd) => {
            console.log(asd.status, asd.statusText);
          });
      }
      if (save) {
        return await this.create({
          message: body,
          title: title,
          action_url: action,
          company_id,
          person: persons && persons.length > 0 ? persons[i] : null,
        });
      }
    }
  }

  fetchByCompanyId(company_id: string, person: string) {
    return this.model
      .find({
        $or: [{ company_id }, { person }],
      })
      .sort({ createdAt: -1 })
      .exec();
  }

  markSeen(company_id: string, person: string) {
    return this.model
      .updateMany(
        {
          $or: [{ company_id }, { person }],
          seen: false,
        },
        { seen: true },
        { new: true },
      )
      .exec();
  }

  async create(data: any) {
    return this.model.create(data);
  }
}
