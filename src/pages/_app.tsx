import { ChakraProvider } from '@chakra-ui/react';
import { AddTodoModal } from '@layouts/add-todo-modal';
import { wrapper } from '@redux/store';
import { positions, Provider as AlertProvider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { customTheme } from '../../styles/theme';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 2000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Component {...pageProps} />
        <AddTodoModal />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(App);
