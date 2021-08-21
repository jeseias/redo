import { Box, Grid } from '@chakra-ui/react';
import { Todo } from '@components';
import { AddTodoButton, Header, Sidebar } from '@layouts';
import { getAllTodos } from '@redux/todo/todo.selectors';
import { useSelector } from 'react-redux';

export const HomeView = () => {
  const todos = useSelector(getAllTodos);

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
      <Header />
      <Sidebar />
      <Box
        as="main"
        gridColumn="2/3"
        gridRow="2/3"
        position="relative"
        overflowY="scroll"
        bg="blackAlpha.900"
      >
        <AddTodoButton position="absolute" bottom="7rem" right="7rem" bg="blue.500" />
        <Box maxWidth="108rem" width="90%" margin="4rem auto">
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};
