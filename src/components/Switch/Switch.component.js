import React from 'react';
import { Switch } from 'react-native';
import styled from 'styled-components';

const BORDER_RADIUS = 50;
const HIT_SLOP = 15;

export const SwitchComponent = (props) => {
  const { onPress, value } = props;
  return (
    <Container>
      <Switch value={value} />
      <TouchableOverlay
        activeOpacity={0.5}
        hitSlop={{
          top: HIT_SLOP,
          bottom: HIT_SLOP,
          right: HIT_SLOP,
          left: HIT_SLOP,
        }}
        onPress={onPress}
      />
    </Container>
  );
};

const Container = styled.View`
  border-radius: ${BORDER_RADIUS};
`;

const TouchableOverlay = styled.TouchableOpacity`
  border-radius: ${BORDER_RADIUS};
  opacity: 0;
  background-color: ${({ theme }) => theme.colors.darkBackground}
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
