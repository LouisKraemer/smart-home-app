import React from "react";
import createSagaMiddleware from "redux-saga";

import { AppContainer } from "./navigator";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/assets/theme";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./src/reducers";

import { handleWs } from "./src/services/websocket";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(handleWs);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}
