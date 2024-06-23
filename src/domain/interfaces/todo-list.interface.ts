/* eslint-disable prettier/prettier */
export interface IUser {
  id: string;
  username: string;
  password: string;
  todoLists: ITodoList[];
}

export interface ITodoList {
  id: string;
  userId: string;
  title: string;
  todoItems: ITodoItem[];
}

export interface ITodoItem {
  id: string;
  todoListId: string;
  title: string;
  description: string;
  priority: number;
}
