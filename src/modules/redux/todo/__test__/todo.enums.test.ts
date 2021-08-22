import { TodoActionEnums, TodoStateEnums } from '../todo.enums';

describe('Todo Enums', () => {
  it('TodoActionEnums', () => {
    expect(TodoActionEnums.ADD_TODO).toStrictEqual('ADD_TODO');
    expect(TodoActionEnums.REMOVE_TODO).toStrictEqual('REMOVE_TODO');
    expect(TodoActionEnums.UPDATE_TODO).toStrictEqual('UPDATE_TODO');
    expect(TodoActionEnums.SET_MODAL_VISIBILITY).toStrictEqual('SET_MODAL_VISIBILITY');
  });

  it('TodoStateEnums', () => {
    expect(TodoStateEnums.Completed).toStrictEqual('Completed');
    expect(TodoStateEnums.Todo).toStrictEqual('Todo');
  });
});
