import { Flex, Heading } from '@chakra-ui/react';
import { AddTodoButton } from '@layouts/add-todo-button';

export const Header = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      p="2rem"
      gridColumn="2/3"
      gridRow="1/2"
      bg="blackAlpha.500"
      maxHeight="8rem"
      justifyContent="space-between"
    >
      <Heading>Redo</Heading>
      <AddTodoButton h="4rem" w="4rem" />
    </Flex>
  );
};
