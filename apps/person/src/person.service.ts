import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ResponseHandler } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from '@app/entities/schemas/person.schema';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private readonly model: Model<PersonDocument>,
  ) {}

  create(data: any) {
    return this.model.create(data);
  }

  async fetch(id?: string) {
    if (id) {
      return ResponseHandler.makeMessage(await this.model.findById(id).exec());
    }
    return ResponseHandler.makeMessage(this.model.find().exec());
  }

  async validateUsernameAndPassword(username: string, password: string) {
    return ResponseHandler.makeMessage(
      await this.model
        .findOne({ username, password })
        .select({ username: 1, _id: 1 })
        .exec(),
    );
  }
}
