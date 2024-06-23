/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './presentation/controllers/todo.controller';
import { UserController } from './presentation/controllers/user.controller';
import { CreateTodoListHandler } from './application/commands/handlers/create-todo-list.handler';
import { GetTodoListsHandler } from './application/queries/handlers/get-todo-lists.handler';
import { CreateTodoItemHandler } from './application/commands/handlers/create-todo-item.handler';
import { GetTodoItemsHandler } from './application/queries/handlers/get-todo-items.handler';
import { CreateUserHandler } from './application/commands/handlers/create-user.handler';
import { GetUserHandler } from './application/queries/handlers/get-user.handler';
import { TodoListRepository } from './domain/repositories/todo-list.repository';
import { TodoItemRepository } from './domain/repositories/todo-item.repository';
import { UserRepository } from './domain/repositories/user.repository';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forRoot('mongodb://localhost/todo-app'),
    DatabaseModule,
  ],
  controllers: [TodoController, UserController],
  providers: [
    CreateTodoListHandler,
    GetTodoListsHandler,
    CreateTodoItemHandler,
    GetTodoItemsHandler,
    CreateUserHandler,
    GetUserHandler,
    TodoListRepository,
    TodoItemRepository,
    UserRepository,
  ],
})
export class TodoModule {}
