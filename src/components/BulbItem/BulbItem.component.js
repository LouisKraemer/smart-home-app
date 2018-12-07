import React, { Component } from "react";
import styled from "styled-components";
const bulbLogos = {
  on: require(`../../assets/bulb_on.png`),
  off: require(`../../assets/bulb_off.png`)
};

export class BulbItem extends Component {
  render() {
    return (
      <Container>
        <LabelContainer onPress={this.props.navigate}>
          <Label>{this.props.bulb.name}</Label>
        </LabelContainer>
        <LogoContainer
          onPress={() =>
            this.props.bulb.power === "on"
              ? console.log("Light off")
              : console.log("Light on")
          }
        >
          <Logo
            resizeMode="contain"
            source={bulbLogos[this.props.bulb.power]}
          />
        </LogoContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const LabelContainer = styled.TouchableOpacity`
  flex: 6;
  display: flex;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.l};
  padding-left: ${({ theme }) => theme.padding.m};
  color: ${({ theme }) => theme.colors.contrast};
`;

const LogoContainer = styled.TouchableOpacity`
  flex: 1;
  height: 80px;
  padding: ${({ theme }) => theme.padding.m};
`;

const Logo = styled.Image`
  flex: 1;
  height: undefined;
  width: undefined;
`;
