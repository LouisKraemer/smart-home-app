import React, { Fragment } from 'react';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { theme } from './src/assets/theme';
import { AppContainer } from './navigator';
import { rootReducer } from './src/reducers';

import { handleWs } from './src/services/websocket';

import { WSModal } from './src/components';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(handleWs);

const AppComponent = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <AppContainer />
        {/* <WSModal /> */}
      </Fragment>
    </ThemeProvider>
  </Provider>
);

export default AppComponent;
