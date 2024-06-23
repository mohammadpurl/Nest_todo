/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserRepository } from '../../../domain/repositories/user.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(public readonly userRepository: UserRepository) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const { username, password } = command;
    const user = new this.userRepository.userModel({ username, password, todoLists: [] });
    await this.userRepository.create(user);
  }
}
