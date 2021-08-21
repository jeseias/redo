/* eslint-disable no-case-declarations */
import { v4 } from 'uuid';

import { ADD_TODO, REMOVE_TODO, SET_MODAL_VISIBILITY } from './todo.actions';
import { TodoStateEnums } from './todo.enums';
import { ITodoState } from './todo.types';

const DEFAULT_STATE: ITodoState = {
  todos: [],
  modal: {
    isVisible: true,
  },
};

export const todoReducer = (state: ITodoState = DEFAULT_STATE, action): ITodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload, id: v4(), state: TodoStateEnums.Todo }],
      };
    case SET_MODAL_VISIBILITY:
      return { ...state, modal: { isVisible: action.payload } };
    case REMOVE_TODO:
      const newTodos = state.todos.filter(todo => todo.id !== action.payload);
      return { ...state, todos: [...newTodos] };
    default:
      return { ...state };
  }
};
