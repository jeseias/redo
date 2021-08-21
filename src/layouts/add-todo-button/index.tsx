import { Flex, FlexProps, Tooltip } from '@chakra-ui/react';
import { setTodoModalVisibility } from '@redux/todo/todo.actions';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';

export const AddTodoButton = ({ ...rest }: FlexProps) => {
  const dispatch = useDispatch();

  const openModal = () => dispatch(setTodoModalVisibility(true));

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
