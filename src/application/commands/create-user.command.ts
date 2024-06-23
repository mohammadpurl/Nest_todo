/* eslint-disable prettier/prettier */
import { ICommand } from '@nestjs/cqrs';

export class CreateUserCommand implements ICommand {
  constructor(
    public readonly username: string,
    public readonly password: string
  ) {}
}
