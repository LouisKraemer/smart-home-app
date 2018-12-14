import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { yeelightActions } from "../../actions";

const bulbLogos = {
  on: require(`../../assets/bulb_on.png`),
  off: require(`../../assets/bulb_off.png`)
};

export class BulbItemComponent extends Component {
  render() {
    return (
      <Container>
        <LabelContainer onPress={this.props.navigate}>
          <Label>{this.props.bulb.name}</Label>
        </LabelContainer>
        <LogoContainer
          onPress={() =>
            this.props.setPower(
              this.props.bulb.id,
              this.props.bulb.power === "on" ? "off" : "on"
            )
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

const mapDispatchToProps = dispatch => ({
  setPower: (id, power) => {
    dispatch(yeelightActions.setPower(id, power));
  }
});

export const BulbItem = connect(
  null,
  mapDispatchToProps
)(BulbItemComponent);

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
`;

const LabelContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  padding-left: ${({ theme }) => theme.padding.m};
`;

const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.contrast};
`;

const LogoContainer = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  padding: ${({ theme }) => theme.padding.m};
`;

const Logo = styled.Image`
  flex: 1;
  height: undefined;
  width: undefined;
`;
