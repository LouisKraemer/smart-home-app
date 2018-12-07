import React from "react";
import { AppContainer } from "./navigator";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/assets/theme";

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    );
  }
}
