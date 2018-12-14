import React from "react";
import { AppContainer } from "./navigator";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/assets/theme";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { rootReducer } from "./src/reducers";

import { handleWs } from "./src/services/websocket";

const store = createStore(rootReducer);

export default class App extends React.Component {
  componentDidMount() {
    handleWs();
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    );
  }
}
