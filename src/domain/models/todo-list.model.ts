/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { TodoItem } from './todo-item.model';


@Schema()
export class TodoList extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TodoItem' }] })
  todoItems: TodoItem[];
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList);
