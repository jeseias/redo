import { Box, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';
import { ActionIcon } from '@components';
import { removeTodo, startEditTodo } from '@redux/todo/todo.actions';
import { ITodo } from '@redux/todo/todo.types';
import { FaCalendar } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';

export const Todo = ({ id, title, description, startDate, deuDate }: ITodo) => {
  const dispatch = useDispatch();

  const deleteTodo = () => dispatch(removeTodo(id));

  const editTodo = () => {
    dispatch(startEditTodo(id));
  };

  return (
    <Flex alignItems="center" borderBottom="1px solid" borderColor="whatsAlpha.900" mb="2rem">
      <Box h="100%" width="5rem" />
      <Flex flexDirection="column" flex="1">
        <Heading as="h4">{title}</Heading>
        <Text>{description}</Text>
      </Flex>
      <Flex flexDirection="column">
        <Flex>
          <FaCalendar size="" />
          <Flex alignItems="center" ml="0.5rem">
            <Tooltip label="Created On" placement="top">
              <Text>{startDate}</Text>
            </Tooltip>
            <Box h="2px" w=".5rem" bg="blue.500" m="0 1rem" />
            <Tooltip label="Due Date" placement="top">
              <Text>{deuDate}</Text>
            </Tooltip>
          </Flex>
        </Flex>
        <Box
          p=".25rem 2rem"
          bg="blue.500"
          fontSize="2xl"
          textAlign="center"
          fontWeight="bold"
          textTransform="uppercase"
          borderRadius=".5rem"
          border="1px solid"
          borderColor="blackAlpha.400"
        >
          todo
        </Box>
      </Flex>
      <Flex p="2rem" alignItems="center">
        <ActionIcon
          icon={<MdEdit size="3rem" />}
          _hover={{ color: 'blue.500' }}
          onClick={editTodo}
        />
        <ActionIcon
          icon={<MdDelete size="3rem" />}
          onClick={deleteTodo}
          _hover={{ color: 'red.500' }}
        />
      </Flex>
    </Flex>
  );
};
