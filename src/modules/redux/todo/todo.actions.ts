import { TodoActionEnums } from './todo.enums';
import { ITodo } from './todo.types';

// Todo Action Objects
export const { ADD_TODO, SET_MODAL_VISIBILITY } = TodoActionEnums;

// Todo Action Creates
export const addTodo = (todo: ITodo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const setTodoModalVisibility = (visibility: boolean) => ({
  type: SET_MODAL_VISIBILITY,
  payload: visibility,
});
