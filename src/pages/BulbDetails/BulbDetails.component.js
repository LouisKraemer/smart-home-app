import React, { Component } from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { BulbItem } from "../../components";

export class BulbDetails extends Component {
  render() {
    return <Container />;
  }
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  display: flex;
  padding-top: ${StatusBar.currentHeight};
`;
