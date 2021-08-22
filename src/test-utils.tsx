/* eslint-disable import/no-extraneous-dependencies */
import { ChakraProvider } from '@chakra-ui/react';
import { wrapper } from '@redux/store';
import { render as __render } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { customTheme } from '../styles/theme';

export { default as userEvent } from '@testing-library/user-event';
export { screen } from '@testing-library/react';

const Wrapper = (): FC => ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <AlertProvider template={AlertTemplate}>
        <div id="__next">{children}</div>
      </AlertProvider>
    </ChakraProvider>
  );
};

const customRender = (reactElement: ReactElement) =>
  __render(reactElement, {
    wrapper: wrapper.withRedux(Wrapper()),
  });

export { customRender as render };
export * from '@testing-library/react';
