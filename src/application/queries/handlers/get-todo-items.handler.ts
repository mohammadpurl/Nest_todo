/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTodoItemsQuery } from '../get-todo-items.query';
import { TodoItemRepository } from '../../../domain/repositories/todo-item.repository';

@QueryHandler(GetTodoItemsQuery)
export class GetTodoItemsHandler implements IQueryHandler<GetTodoItemsQuery> {
  constructor(private readonly todoItemRepository: TodoItemRepository) {}

  async execute(query: GetTodoItemsQuery): Promise<any> {
    return this.todoItemRepository.findAllByTodoListId(query.todoListId);
  }
}
