import { Box, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';
import { ActionIcon } from '@components/action-icon';
import { ITodo } from '@redux/todo/todo.types';
import { FaCalendar } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';

export const Todo = ({ title, description, startDate, deuDate }: ITodo) => {
  return (
    <Box>
      <Flex alignItems="center" borderBottom="2px solid" borderColor="whatsAlpha.900">
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
          <ActionIcon Icon={MdEdit} />
          <ActionIcon Icon={MdDelete} />
        </Flex>
      </Flex>
    </Box>
  );
};
