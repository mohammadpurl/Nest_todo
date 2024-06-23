/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTodoItemCommand } from '../create-todo-item.command';
import { TodoItemRepository } from '../../../domain/repositories/todo-item.repository';
import { TodoListRepository } from '../../../domain/repositories/todo-list.repository';

@CommandHandler(CreateTodoItemCommand)
export class CreateTodoItemHandler implements ICommandHandler<CreateTodoItemCommand> {
  constructor(
    private readonly todoItemRepository: TodoItemRepository,
    private readonly todoListRepository: TodoListRepository
  ) {}

  async execute(command: CreateTodoItemCommand): Promise<void> {
    const { todoListId, title, description, priority } = command;
    
    // Create a new todoItem
    const todoItem = await this.todoItemRepository.create({
      todoList: todoListId,
      title,
      description,
      priority
    });

    // Retrieve todoList and update todoItems array
    const todoList = await this.todoListRepository.findById(todoListId);
    todoList.todoItems.push(todoItem); 
    await this.todoListRepository.update(todoListId, { todoItems: todoList.todoItems });
  }
}
