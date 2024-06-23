/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';

export class GetTodoItemsQuery implements IQuery {
  constructor(public readonly todoListId: string) {}
}
