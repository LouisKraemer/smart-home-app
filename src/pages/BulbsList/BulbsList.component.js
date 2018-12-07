import React, { Component } from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { BulbItem } from "../../components";

export class BulbsList extends Component {
  render() {
    return (
      <Container>
        <BulbItem
          bulb={{
            id: "xxxxxxx",
            name: "Chambre",
            power: "off"
          }}
          navigate={() =>
            this.props.navigation.navigate("BulbDetails", { id: "xxxxxxx" })
          }
        />
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  display: flex;
  padding-top: ${StatusBar.currentHeight};
`;
