import { ADD_TODO, SET_MODAL_VISIBILITY } from './todo.actions';
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
      return { ...state, todos: [...state.todos, action.payload] };
    case SET_MODAL_VISIBILITY:
      return { ...state, modal: { isVisible: action.payload } };
    default:
      return { ...state };
  }
};
