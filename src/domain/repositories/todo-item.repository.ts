/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoItem } from '../models/todo-item.model';
// import { TodoItem } from '../../domain/entities/todo-item.entity';

@Injectable()
export class TodoItemRepository {
  constructor(
    @InjectModel('TodoItem') public readonly todoItemModel: Model<TodoItem>
  ) {}

  async create(todoListId: string, title: string, description: string, priority: number): Promise<TodoItem> {
    const todoItem = new this.todoItemModel({ todoList: todoListId, title, description, priority });
    return await todoItem.save();
  }

  async findAllByTodoListId(todoListId: string): Promise<TodoItem[]> {
    return await this.todoItemModel.find({ todoList: todoListId }).exec();
  }
}
