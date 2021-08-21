import { ADD_TODO, SET_MODAL_VISIBILITY } from './todo.actions';
import { ITodo } from './todo.types';

export const openTodoModal = () => ({
  type: SET_MODAL_VISIBILITY,
  payload: true,
});

export const closeTodoModal = () => ({
  type: SET_MODAL_VISIBILITY,
  payload: false,
});

export const addNewTodo = (todo: ITodo) => ({
  type: ADD_TODO,
  payload: todo,
});
