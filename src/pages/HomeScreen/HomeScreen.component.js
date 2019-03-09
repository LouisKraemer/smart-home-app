import React from 'react';
import { StatusBar } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import styled from 'styled-components';
import { Container } from '../../components';

import bulbImage from '../../assets/bulb.png';

export const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent />
      <Row>
        <Transition appear="left" disappear="left">
          <IconContainer onPress={() => navigation.navigate('BulbsList')}>
            <Icon resizeMode="contain" source={bulbImage} />
          </IconContainer>
        </Transition>
        <Spacer />
      </Row>
    </Container>
  );
};

const IconContainer = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
  padding: ${({ theme }) => theme.padding.m};
`;

const Icon = styled.Image`
  flex: 1;
  height: auto;
  width: auto;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 200px;
`;

const Spacer = styled.View`
  width: 200px;
`;
