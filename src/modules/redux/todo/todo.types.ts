import { Action } from 'redux';

import { TodoStateEnums } from './todo.enums';

export interface ITodo {
  id: string;
  title: string;
  description: string;
  createAt: string;
  deuDate: string;
  startDate: string;
  state: TodoStateEnums;
}

export interface IAddTodoAction extends Action<String> {
  payload: ITodo;
}
export interface IRemoveTodoAction extends Action<String> {
  payload: string;
}
export interface IUpdateTodoAction extends Action<String> {
  payload: {
    id: string;
    todo: ITodo;
  };
}
export interface ISetModalVisibilityAction extends Action<String> {
  payload: boolean;
}
export interface IStartEditTodoAction extends Action<String> {
  payload: string;
}

export interface ITodoState {
  todos: ITodo[];
  modal: {
    isVisible: boolean;
    todo?: ITodo;
  };
}

// eslint-disable-next-line no-unused-vars
export type TodoReducer<T = any> = (state: ITodoState, action?: T) => ITodoState;
