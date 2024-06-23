/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTodoListCommand } from '../../application/commands/create-todo-list.command';
import { GetTodoListsQuery } from '../../application/queries/get-todo-lists.query';
import { CreateTodoItemCommand } from '../../application/commands/create-todo-item.command';
import { GetTodoItemsQuery } from '../../application/queries/get-todo-items.query';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Post('create-list')
  async createTodoList(@Body() body: { userId: string; title: string }) {
    const { userId, title } = body;
    await this.commandBus.execute(new CreateTodoListCommand(userId, title));
  }

  @Get('user/:userId')
  async getTodoLists(@Param('userId') userId: string) {
    return this.queryBus.execute(new GetTodoListsQuery(userId));
  }

  @Post('create-item')
  async createTodoItem(@Body() body: { todoListId: string; title: string; description: string; priority: number }) {
    const { todoListId, title, description, priority } = body;
    await this.commandBus.execute(new CreateTodoItemCommand(todoListId, title, description, priority));
  }

  @Get('list/:todoListId/items')
  async getTodoItems(@Param('todoListId') todoListId: string) {
    return this.queryBus.execute(new GetTodoItemsQuery(todoListId));
  }
}
