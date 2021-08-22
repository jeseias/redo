/* eslint-disable no-case-declarations */
import {
  ADD_TODO,
  REMOVE_TODO,
  SET_MODAL_VISIBILITY,
  START_EDIT_TODO,
  UPDATE_TODO,
} from './todo.actions';
import {
  addTodo,
  removeTodo,
  setTodoModalVisibility,
  startEditTodo,
  updateTodo,
} from './todo.reducer-helper';
import { ITodoState } from './todo.types';

const DEFAULT_STATE: ITodoState = {
  todos: [],
  modal: {
    isVisible: false,
  },
};

export const todoReducer = (state: ITodoState = DEFAULT_STATE, action): ITodoState => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case REMOVE_TODO:
      return removeTodo(state, action);
    case UPDATE_TODO:
      return updateTodo(state, action);
    case SET_MODAL_VISIBILITY:
      return setTodoModalVisibility(state, action);
    case START_EDIT_TODO:
      return startEditTodo(state, action);
    default:
      return { ...state };
  }
};
