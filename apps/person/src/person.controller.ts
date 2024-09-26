import { Controller } from '@nestjs/common';
import { PersonService } from './person.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @MessagePattern('VALIDATE_USERNAME_PASSWORD')
  fetchFromUsernameAndPassword(@Payload() data: any) {
    return this.personService.validateUsernameAndPassword(
      data.username,
      data.password,
    );
  }

  @MessagePattern('FETCH_USER')
  fetchById(@Payload() data: any) {
    // throw new RpcException('Not implemented');
    return this.personService.fetch(data.id);
  }
}
