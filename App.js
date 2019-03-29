import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { theme } from './src/assets/theme';
import { AppContainer } from './navigator';
import { rootReducer } from './src/reducers';

import { WSModal } from './src/components';

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

const AppComponent = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <AppContainer />
        <WSModal />
      </Fragment>
    </ThemeProvider>
  </Provider>
);

export default AppComponent;
