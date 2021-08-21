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
import { addNewTodo, closeTodoModal } from '@redux/todo/todo.dispatch';
import { TODOSTATESENUMS } from '@redux/todo/todo.enums';
import { getTodoVisibility } from '@redux/todo/todo.selectors';
import { ITodo } from '@redux/todo/todo.types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

export const AddTodoModal = () => {
  const isOpen = useSelector(getTodoVisibility);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(closeTodoModal());

  const [todo, setTodo] = useState<ITodo>({} as ITodo);

  const addTodo = () => {
    const now = new Date();

    setTodo(previousState => ({
      ...previousState,
      id: v4(),
      createAt: previousState.createAt || String(now),
      state: TODOSTATESENUMS.Todo,
    }));

    dispatch(addNewTodo(todo));
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
          <Button textAlign="center" m="0 auto" onClick={addTodo}>
            Add
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
