import { TODOSTATESENUMS } from './todo.enums';

export interface ITodo {
  id: string;
  title: string;
  description: string;
  createAt: string;
  deuDate: string;
  startDate: string;
  state: TODOSTATESENUMS;
}

export interface ITodoAction {
  type: string;
  payload: ITodo;
}

export type TTodoReducer = (state: ITodo[], action: { type: string; payload: ITodo }) => ITodo;

export interface ITodoState {
  todos: ITodo[];
  modal: {
    isVisible: boolean;
  };
}
