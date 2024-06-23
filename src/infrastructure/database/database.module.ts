/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoList, TodoListSchema } from '../../domain/models/todo-list.model';
import { TodoItem, TodoItemSchema } from '../../domain/models/todo-item.model';
import { User, UserSchema } from '../../domain/models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TodoList.name, schema: TodoListSchema }]),
    MongooseModule.forFeature([{ name: TodoItem.name, schema: TodoItemSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: TodoList.name, schema: TodoListSchema }]),
    MongooseModule.forFeature([{ name: TodoItem.name, schema: TodoItemSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class DatabaseModule {}
