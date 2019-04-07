import React, { Component } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';

import { colorTemperatureToRGB } from '../../services/color';

const CONTAINER_HEIGHT = 50;
const PICKER_HEIGHT = 25;
const DURATION = 200;

export class ColorPickerComponent extends Component {
  state = {
    animatedScale: new Animated.Value(1),
  };

  componentDidMount() {
    const { isSelected } = this.props;
    const { animatedScale } = this.state;
    if (isSelected) {
      Animated.timing(animatedScale, {
        toValue: 2,
        useNativeDriver: true,
        duration: DURATION,
      }).start();
    }
  }

  componentDidUpdate(prevProps) {
    const { isSelected: wasSelected } = prevProps;
    const { isSelected } = this.props;
    const { animatedScale } = this.state;
    if (wasSelected && !isSelected) {
      Animated.timing(animatedScale, {
        toValue: 1,
        useNativeDriver: true,
        duration: DURATION,
      }).start();
    }
    if (!wasSelected && isSelected) {
      Animated.timing(animatedScale, {
        toValue: 2,
        useNativeDriver: true,
        duration: DURATION,
      }).start();
    }
  }

  render() {
    const {
      rgb, isSelected, onPress, kelvin,
    } = this.props;
    const { animatedScale } = this.state;
    return (
      <Container>
        <ColorPicker
          activeOpacity={0.2}
          onPress={() => onPress(kelvin)}
          rgb={rgb}
          kelvin={kelvin}
          isSelected={isSelected}
          style={{
            transform: [
              {
                scale: animatedScale,
              },
            ],
          }}
          hitSlop={{
            top: isSelected ? 0 : PICKER_HEIGHT,
            bottom: isSelected ? 0 : PICKER_HEIGHT,
            left: isSelected ? 0 : PICKER_HEIGHT,
            right: isSelected ? 0 : PICKER_HEIGHT,
          }}
        />
      </Container>
    );
  }
}

const Container = styled.View`
  height: ${CONTAINER_HEIGHT};
  width: ${CONTAINER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorPicker = styled.TouchableOpacity`
  border-radius: ${PICKER_HEIGHT / 2};
  height: ${PICKER_HEIGHT};
  width: ${PICKER_HEIGHT};
  background-color: ${({ color, kelvin }) => (kelvin ? colorTemperatureToRGB[kelvin] : color)};
`;
