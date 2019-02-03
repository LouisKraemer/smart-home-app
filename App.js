import React, { Fragment } from "react";
import createSagaMiddleware from "redux-saga";

import { AppContainer } from "./navigator";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/assets/theme";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./src/reducers";

import { handleWs } from "./src/services/websocket";

import { WSModal } from "./src/components";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(handleWs);

export default class AppComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Fragment>
            <AppContainer />
            <WSModal />
          </Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}
