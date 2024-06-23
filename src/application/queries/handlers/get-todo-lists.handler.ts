/* eslint-disable prettier/prettier */
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetTodoListsQuery } from '../get-todo-lists.query';
import { TodoListRepository } from 'src/domain/repositories/todo-list.repository';

@QueryHandler(GetTodoListsQuery)
export class GetTodoListsHandler implements IQueryHandler<GetTodoListsQuery> {
  constructor(private readonly todoListRepository: TodoListRepository) {}

  async execute(query: GetTodoListsQuery) {
    const { userId } = query;
    return this.todoListRepository.findByUserId(userId);
  }
}
