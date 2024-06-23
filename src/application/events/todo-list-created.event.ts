/* eslint-disable prettier/prettier */
import { IEvent } from '@nestjs/cqrs';

export class TodoListCreatedEvent implements IEvent {
  constructor(
    public readonly userId: string,
    public readonly title: string
  ) {}
}
