import { TodoActionEnums } from './todo.enums';
import { ITodo } from './todo.types';

// Todo Action Objects
export const {
  ADD_TODO,
  SET_MODAL_VISIBILITY,
  REMOVE_TODO,
  UPDATE_TODO,
  START_EDIT_TODO,
} = TodoActionEnums;

// Todo Action Creates
export const addNewTodo = (todo: ITodo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (todoId: string) => ({
  type: REMOVE_TODO,
  payload: todoId,
});

export const updateTodo = (id: string, todo: ITodo) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    todo,
  },
});

export const startEditTodo = (id: string) => ({
  type: START_EDIT_TODO,
  payload: id,
});

export const setTodoModalVisibility = (visibility: boolean) => ({
  type: SET_MODAL_VISIBILITY,
  payload: visibility,
});
