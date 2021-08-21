import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IActionIconProps extends BoxProps {
  icon: ReactNode;
}

export const ActionIcon = ({ icon, ...rest }: IActionIconProps) => (
  <Box
    {...rest}
    alignItems="center"
    justifyContent="center"
    transition="all ease .2s"
    cursor="pointer"
  >
    {icon}
  </Box>
);
