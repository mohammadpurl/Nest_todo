/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoItem } from '../models/todo-item.model';

@Injectable()
export class TodoItemRepository {
    constructor(@InjectModel('TodoItem') private readonly todoItemModel: Model<TodoItem>) {}

    async create(todoItem: Partial<TodoItem>): Promise<TodoItem> {
      const newTodoItem = new this.todoItemModel(todoItem);
      return await newTodoItem.save();
    }

  async findAllByTodoListId(todoListId: string): Promise<TodoItem[]> {
    return await this.todoItemModel.find({ todoList: todoListId }).exec();
  }
}
