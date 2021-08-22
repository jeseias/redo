import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { addNewTodo, setTodoModalVisibility, updateTodo } from '@redux/todo/todo.actions';
import { getEditTodo, getTodoVisibility } from '@redux/todo/todo.selectors';
import { ITodo } from '@redux/todo/todo.types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const TodoModal = () => {
  const isOpen = useSelector(getTodoVisibility);
  const editedTodo = useSelector(getEditTodo);

  const dispatch = useDispatch();

  const [todo, setTodo] = useState<ITodo>({ ...editedTodo } as ITodo);

  useEffect(() => {
    setTodo({ ...editedTodo });
  }, [editedTodo]);

  const closeModal = () => dispatch(setTodoModalVisibility(false));

  const addTodo = () => {
    dispatch(addNewTodo(todo));
    setTodo({} as ITodo);
  };

  const editTodo = () => {
    dispatch(updateTodo(todo.id, todo));
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent maxWidth="50rem" width="90%" pt="2rem">
        <ModalHeader>
          <Heading>Add a new Todo</Heading>
        </ModalHeader>
        <ModalBody pb="2rem">
          <Box my="2rem">
            <FormControl mb="1rem">
              <Text mb=".8rem" fontWeight="bold">
                Title:
              </Text>
              <Input
                placeholder="nao esquecer"
                value={todo.title}
                onChange={e => setTodo({ ...todo, title: e.target.value })}
              />
            </FormControl>
            <FormControl mb="1rem">
              <Text mb=".8rem" fontWeight="bold">
                Description:
              </Text>
              <Input
                placeholder="nao esquecer"
                value={todo.description}
                onChange={e => setTodo({ ...todo, description: e.target.value })}
              />
            </FormControl>
            <FormControl mb="1rem">
              <Text mb=".8rem" fontWeight="bold">
                Start Date:
              </Text>
              <Input
                type="date"
                placeholder="nao esquecer"
                value={todo.startDate}
                onChange={e => setTodo({ ...todo, startDate: e.target.value })}
              />
            </FormControl>
            <FormControl mb="1rem">
              <Text mb=".8rem" fontWeight="bold">
                Due Date:
              </Text>
              <Input
                type="date"
                placeholder="nao esquecer"
                value={todo.deuDate}
                onChange={e => setTodo({ ...todo, deuDate: e.target.value })}
              />
            </FormControl>
          </Box>
          {todo && todo.id ? (
            <Button textAlign="center" m="0 auto" onClick={editTodo}>
              Edit
            </Button>
          ) : (
            <Button textAlign="center" m="0 auto" onClick={addTodo}>
              Add
            </Button>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
