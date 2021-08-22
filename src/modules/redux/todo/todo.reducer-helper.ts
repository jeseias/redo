import { v4 } from 'uuid';

import { TodoStateEnums } from './todo.enums';
import {
  IAddTodoAction,
  IRemoveTodoAction,
  ISetModalVisibilityAction,
  IStartEditTodoAction,
  IUpdateTodoAction,
  TodoReducer,
} from './todo.types';

export const addTodo: TodoReducer<IAddTodoAction> = (state, action) => {
  return {
    ...state,
    todos: [...state.todos, { ...action.payload, id: v4(), state: TodoStateEnums.Todo }],
  };
};

export const removeTodo: TodoReducer<IRemoveTodoAction> = (state, action) => {
  const newTodos = state.todos.filter(todo => todo.id !== action.payload);
  return { ...state, todos: [...newTodos] };
};

export const updateTodo: TodoReducer<IUpdateTodoAction> = (state, action) => {
  const newEditedTodos = state.todos.map(todo => {
    if (todo.id === action.payload.id) {
      return action.payload.todo;
    }

    return todo;
  });

  return { ...state, todos: newEditedTodos };
};

export const setTodoModalVisibility: TodoReducer<ISetModalVisibilityAction> = (state, action) => {
  return { ...state, modal: { isVisible: action.payload } };
};

export const startEditTodo: TodoReducer<IStartEditTodoAction> = (state, action) => {
  const editTodo = state.todos.filter(todo => todo.id === action.payload)[0];
  return { ...state, modal: { isVisible: true, todo: { ...editTodo } } };
};
