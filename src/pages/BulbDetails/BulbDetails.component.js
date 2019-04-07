import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import Slider from '@react-native-community/slider';
import { Transition } from 'react-navigation-fluid-transitions';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { isNil } from 'ramda';

import { withContainer, BulbItem, ColorPicker } from '../../components';
import { resetSelectedBulbAction } from '../../actions/yeelight';
import { setBright, get, setColorTemperature } from '../../services/yeelight';
import { colorTemperatureToRGB } from '../../services/color';

const lightJSON = require('../../assets/lottie/light_bulb.json');

class BulbDetailsComponent extends Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.bulb = navigation.getParam('bulb');
    get(this.bulb.deviceId);
  }

  componentWillUnmount() {
    const { resetSelectedBulbAction } = this.props;
    resetSelectedBulbAction();
  }

  onColorChange = (deviceId, colorMode, value) => {
    if (colorMode === 1) {
      // Change RGB
    }
    if (colorMode === 2) {
      setColorTemperature(deviceId, value);
    }
  };

  bulb;

  render() {
    const { selectedBulb } = this.props;
    return (
      <Fragment>
        <AnimationContainer>
          <LottieView source={lightJSON} autoPlay loop={false} />
        </AnimationContainer>
        <Transition shared={this.bulb.deviceId}>
          <BulbItem bulb={isNil(selectedBulb) ? this.bulb : selectedBulb} isDetail />
        </Transition>
        {!isNil(selectedBulb) && (
          <DetailsContainer>
            <Section>
              <Slider
                minimumValue={1}
                maximumValue={100}
                step={1}
                onSlidingComplete={(value) => {
                  setBright(selectedBulb.deviceId, value);
                }}
                value={selectedBulb.bright}
                style={{ flex: 1 }}
              />
            </Section>
            <Section>
              {Object.keys(colorTemperatureToRGB).map((kelvin) => {
                const intKelvin = parseInt(kelvin, 10);
                const isSelected = selectedBulb.color_mode === 2 && intKelvin === selectedBulb.ct;
                return (
                  <ColorPicker
                    key={intKelvin}
                    kelvin={intKelvin}
                    isSelected={isSelected}
                    onPress={(ct) => {
                      this.onColorChange(selectedBulb.deviceId, 2, ct);
                    }}
                  />
                );
              })}
            </Section>
            <Section />
          </DetailsContainer>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ yeelightReducer: { selectedBulb } }) => ({
  selectedBulb,
});

const mapDispatchToProps = dispatch => ({
  resetSelectedBulbAction: () => dispatch(resetSelectedBulbAction()),
});

export const BulbDetails = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withContainer,
)(BulbDetailsComponent);

const AnimationContainer = styled.View`
  flex: 4;
`;

const Section = styled.View`
  margin: ${({ theme }) => `${theme.padding.s} 0`};
  padding: ${({ theme }) => theme.padding.m};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

const DetailsContainer = styled.View`
  flex: 5;
`;
