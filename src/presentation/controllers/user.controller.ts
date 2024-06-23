/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../../application/commands/create-user.command';
import { GetUserQuery } from '../../application/queries/get-user.query';

@Controller('users')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Post('create')
  async createUser(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    await this.commandBus.execute(new CreateUserCommand(username, password));
  }

  @Get(':userId')
  async getUser(@Param('userId') userId: string) {
    return this.queryBus.execute(new GetUserQuery(userId));
  }
}
