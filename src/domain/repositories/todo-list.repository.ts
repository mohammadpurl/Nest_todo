/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoList } from '../models/todo-list.model';

export class TodoListRepository {
  constructor(@InjectModel(TodoList.name) private readonly todoListModel: Model<TodoList>) {}

  async create(todoList: TodoList): Promise<TodoList> {
    const newTodoList = new this.todoListModel(todoList);
    return newTodoList.save();
  }

  async findByUserId(userId: string): Promise<TodoList[]> {
    return this.todoListModel.find({ userId }).populate('todoItems').exec();
  }

  async findById(id: string): Promise<TodoList> {
    return this.todoListModel.findById(id).populate('todoItems').exec();
  }

  async update(id: string, todoList: Partial<TodoList>): Promise<TodoList> {
    return this.todoListModel.findByIdAndUpdate(id, todoList, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.todoListModel.findByIdAndDelete(id).exec();
  }
}
