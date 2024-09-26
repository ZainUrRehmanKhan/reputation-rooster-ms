import { Model } from 'mongoose';
import { TeamRole } from '@app/entities';
import { Person } from '@app/entities';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account, AccountDocument } from '@app/entities/schemas/account.schema';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private readonly model: Model<AccountDocument>,
  ) {}

  async fetchPopulated(id: string) {
    if (id)
      return await this.model
        .findById(id)
        .populate({
          path: 'team',
          populate: [
            {
              path: 'person',
              model: Person.name,
            },
          ],
        })
        .exec();
    return await this.model
      .find()
      .populate({
        path: 'team',
        populate: [
          {
            path: 'person',
            model: Person.name,
          },
        ],
      })
      .exec();
  }

  async create(data: any) {
    return this.model.create(data);
  }

  update(id: string, data: any) {
    return this.model.findByIdAndUpdate(id, data).exec();
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }

  async changeRole(accountId: string, personId: string, role: number) {
    const acc = await this.model.findById(accountId).exec();
    for (let i = 0; i < acc.team.length; ++i) {
      if (personId == acc.team[i].person) {
        if (role == TeamRole.Delete) {
          acc.team.splice(i, 1);
        } else {
          acc.team[i].role = role;
        }
        return await this.update(acc._id, acc);
      }
    }
  }

  async addToTeam(accountId: string, invitedPersonId: string, role = 2) {
    const acc = await this.model.findById(accountId).exec();
    if (acc.team) {
      acc.team.push({
        person: invitedPersonId,
        role,
      });
    } else {
      acc.team = [
        {
          person: invitedPersonId,
          role,
        },
      ];
    }
    return await acc.save();
  }
}
