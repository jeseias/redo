import { Flex, FlexProps, Tooltip } from '@chakra-ui/react';
import { openTodoModal } from '@redux/todo/todo.dispatch';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';

export const AddTodoButton = ({ ...rest }: FlexProps) => {
  const dispatch = useDispatch();

  const openModal = () => dispatch(openTodoModal());

  return (
    <Tooltip label="add new todo">
      <Flex
        alignItems="center"
        justifyContent="center"
        w="5rem"
        h="5rem"
        bg="blue.500"
        borderRadius="100%"
        transition="all ease .2s"
        _hover={{ transform: 'scale(1.05)' }}
        cursor="pointer"
        {...rest}
        onClick={openModal}
      >
        <MdAdd size={30} />
      </Flex>
    </Tooltip>
  );
};
