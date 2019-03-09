import React, { Component } from 'react';
import { Switch } from 'react-native';
import styled from 'styled-components';

import { setPower } from '../../services/yeelight';

export class BulbItemComponent extends Component {
  showDetails = () => {
    const { onPress, bulb } = this.props;
    onPress(bulb);
  };

  hideDetails = () => {};

  render() {
    const {
      isDetail,
      onPress,
      bulb: { name, id, on },
    } = this.props;
    return (
      <Container>
        <LabelContainer onPress={isDetail ? () => {} : onPress} activeOpacity={1}>
          <Label>{name}</Label>
        </LabelContainer>
        <Switch onPress={() => setPower(id, !on)} value={on} />
      </Container>
    );
  }
}

export const BulbItem = BulbItemComponent;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: ${({ theme }) => theme.padding.m};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  margin: ${({ theme }) => theme.padding.m};
  border-radius: 5;
`;

const LabelContainer = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-left: ${({ theme }) => theme.padding.m};
`;

const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.contrast};
`;
