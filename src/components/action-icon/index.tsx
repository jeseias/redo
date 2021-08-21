import { Flex } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

export const ActionIcon = ({ Icon }: { Icon: IconType }) => (
  <Flex alignItems="center" justifyContent="center">
    <Icon size="3rem" />
  </Flex>
);
