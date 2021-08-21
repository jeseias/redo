import { extendTheme } from '@chakra-ui/react';

import globalStyles from './global-styles';

export const customTheme = extendTheme({
  styles: {
    global: {
      ...globalStyles,
    },
  },
});
