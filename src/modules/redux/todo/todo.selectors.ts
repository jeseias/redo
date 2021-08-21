import { IStore } from '@redux/store.types';

export const getAllTodos = (state: IStore) => state.todo.todos;

export const getTodoModal = (state: IStore) => state.todo.modal;

export const getTodoVisibility = (state: IStore) => state.todo.modal.isVisible;
