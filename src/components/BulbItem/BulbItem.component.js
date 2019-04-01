import React from 'react';
import styled from 'styled-components';
import { Switch } from '../Switch';

import { setPower } from '../../services/yeelight';

export const BulbItem = (props) => {
  const {
    isDetail,
    onPress,
    bulb: { name, deviceId, power },
  } = props;
  return (
    <Container>
      <LabelContainer onPress={isDetail ? () => {} : onPress} activeOpacity={1}>
        <Label>{name}</Label>
      </LabelContainer>
      <SwitchContainer>
        <Switch value={power} onPress={() => setPower(deviceId, !power)} />
      </SwitchContainer>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: ${({ theme }) => `0 ${theme.padding.m}`};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  margin: ${({ theme }) => theme.padding.m};
  border-radius: 5;
`;

const LabelContainer = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => `${theme.padding.m} ${theme.padding.s}`};
`;

const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.contrast};
`;

const SwitchContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
