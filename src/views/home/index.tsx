import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import { Todo } from '@components/todo';
import { openTodoModal } from '@redux/todo/todo.dispatch';
import { getAllTodos } from '@redux/todo/todo.selectors';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

export const HomeView = () => {
  const todos = useSelector(getAllTodos);
  const dispatch = useDispatch();

  const openModal = () => dispatch(openTodoModal());

  return (
    <Grid
      gridTemplateColumns="30rem 1fr"
      gridTemplateRows="8rem 1fr"
      bg="blackAlpha.900"
      h="100vh"
      w="100vw"
      color="whiteAlpha.800"
      overflow="hidden"
    >
      <Flex
        as="header"
        alignItems="center"
        p="2rem"
        gridColumn="2/3"
        gridRow="1/2"
        bg="blackAlpha.500"
        h="8rem"
      >
        <Heading>Redo</Heading>
      </Flex>
      <Box as="aside" gridColumn="1/2" gridRow="1/3" bg="blackAlpha.700" />
      <Box
        as="main"
        gridColumn="2/3"
        gridRow="2/3"
        position="relative"
        overflowY="scroll"
        bg="blackAlpha.900"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          position="absolute"
          bottom="7rem"
          right="7rem"
          w="5rem"
          h="5rem"
          bg="blue.500"
          borderRadius="100%"
          transition="all ease .2s"
          _hover={{ transform: 'scale(1.05)' }}
          cursor="pointer"
          onClick={openModal}
        >
          <MdAdd size={30} />
        </Flex>

        <Box maxWidth="108rem" width="90%" margin="4rem auto">
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};
