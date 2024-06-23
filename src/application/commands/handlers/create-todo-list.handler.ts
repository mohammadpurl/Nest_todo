/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTodoListCommand } from '../create-todo-list.command';
import { TodoListRepository } from '../../../domain/repositories/todo-list.repository';


@CommandHandler(CreateTodoListCommand)
export class CreateTodoListHandler implements ICommandHandler<CreateTodoListCommand> {
  constructor(private readonly todoListRepository: TodoListRepository) {}

  async execute(command: CreateTodoListCommand): Promise<void> {
    const { userId, title } = command;
    const todoList: any = { userId, title, todoItems: [] };
    await this.todoListRepository.create(todoList);
  }
}
