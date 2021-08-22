import {
  addNewTodo,
  removeTodo,
  setTodoModalVisibility,
  startEditTodo,
  updateTodo,
} from '../todo.actions';
import { TodoActionEnums, TodoStateEnums } from '../todo.enums';
import { ITodo } from '../todo.types';

const todoData = {
  description: 'todo description',
  state: TodoStateEnums.Todo,
  title: 'todo title',
  createAt: '08-03-2021',
  deuDate: '08-03-2022',
  startDate: '08-03-2023',
} as ITodo;

describe('Todo Action', () => {
  it(`should create a valid ${TodoActionEnums.ADD_TODO} action object`, () => {
    expect(addNewTodo(todoData)).toStrictEqual({
      type: TodoActionEnums.ADD_TODO,
      payload: todoData,
    });
  });

  it(`should create a valid ${TodoActionEnums.REMOVE_TODO} action object`, () => {
    const todoId = 'todo_id';

    expect(removeTodo(todoId)).toStrictEqual({
      type: TodoActionEnums.REMOVE_TODO,
      payload: todoId,
    });
  });

  it(`should create a valid ${TodoActionEnums.UPDATE_TODO} action object`, () => {
    const { id, todo } = {
      id: 'test_id',
      todo: todoData,
    };

    expect(updateTodo(id, todo)).toStrictEqual({
      type: TodoActionEnums.UPDATE_TODO,
      payload: { id, todo },
    });
  });

  it(`should create a valid ${TodoActionEnums.START_EDIT_TODO} action object`, () => {
    const data = 'test_id';

    expect(startEditTodo(data)).toStrictEqual({
      type: TodoActionEnums.START_EDIT_TODO,
      payload: data,
    });
  });

  it(`it should create a valid ${TodoActionEnums.SET_MODAL_VISIBILITY} action object`, () => {
    const visibility = false;

    expect(setTodoModalVisibility(visibility)).toStrictEqual({
      type: TodoActionEnums.SET_MODAL_VISIBILITY,
      payload: visibility,
    });
  });
});
