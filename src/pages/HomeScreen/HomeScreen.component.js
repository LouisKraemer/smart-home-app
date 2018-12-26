import React, { Component } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import { Container } from "../../components";

export class HomeScreen extends Component {
  render() {
    return (
      <StyledContainer>
        <StatusBar backgroundColor="transparent" translucent />
        <IconContainer
          onPress={() => this.props.navigation.navigate("BulbsList")}
        >
          <Icon
            resizeMode="contain"
            source={require("../../assets/bulb.png")}
          />
        </IconContainer>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled(Container)`
  flex-direction: row;
  align-items: flex-start;
`;

const IconContainer = styled.TouchableOpacity`
  width: 50%;
  height: 200px;
  padding: ${({ theme }) => theme.padding.m};
`;

const Icon = styled.Image`
  flex: 1;
  height: auto;
  width: auto;
`;
