import React, { Component } from "react";
import styled from "styled-components";

export class Header extends Component {
  render() {
    return <StyledHeader />;
  }
}

const StyledHeader = styled.View`
  background-color: aqua;
  height: 50px;
  width: 50px;
`;
