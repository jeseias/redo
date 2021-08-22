import { addNewTodo, removeTodo, setTodoModalVisibility } from './todo.actions';
import { TodoActionEnums, TodoStateEnums } from './todo.enums';
import { ITodo } from './todo.types';

describe('Todo Action', () => {
  it(`should create a valid ${TodoActionEnums.ADD_TODO} action object`, () => {
    const data = {
      description: 'todo description',
      state: TodoStateEnums.Todo,
      title: 'todo title',
      createAt: '08-03-2021',
      deuDate: '08-03-2022',
      startDate: '08-03-2023',
    } as ITodo;

    expect(addNewTodo(data)).toStrictEqual({
      type: TodoActionEnums.ADD_TODO,
      payload: data,
    });
  });

  it(`should create a valid ${TodoActionEnums.REMOVE_TODO} action object`, () => {
    const todoId = 'todo_id';

    expect(removeTodo(todoId)).toStrictEqual({
      type: TodoActionEnums.REMOVE_TODO,
      payload: todoId,
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
