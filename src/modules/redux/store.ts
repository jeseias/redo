import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import rootReducer from './root-reducer';

export const makeStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export const wrapper = createWrapper(makeStore, {});
