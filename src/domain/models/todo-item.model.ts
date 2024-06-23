/* eslint-disable prettier/prettier */
import { Schema, Document, model } from 'mongoose';

export interface TodoItem extends Document {
  todoList: any;
  title: string;
  description: string;
  priority: number;
}

const TodoItemSchema = new Schema<TodoItem>({
  todoList: { type: Schema.Types.ObjectId, ref: 'TodoList', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: Number, required: true },
});

export const TodoItemModel = model<TodoItem>('TodoItem', TodoItemSchema);

