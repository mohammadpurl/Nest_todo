/* eslint-disable prettier/prettier */
import { ICommand } from '@nestjs/cqrs';

export class CreateTodoItemCommand implements ICommand {
  constructor(
    public readonly todoListId: string,
    public readonly title: string,
    public readonly description: string,
    public readonly priority: number
  ) {}
}
