import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import LottieView from "lottie-react-native";

const toggleJSON = require("../../assets/lottie/toggle.json");

export class SwitchComponent extends Component {
  componentDidMount() {
    if (this.props.value) {
      this.animation.play(20, 21); // Set the switch ton the "on" position
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.toggle(this.props.value);
    }
  }

  toggle = state => {
    this.animation.play(state ? 0 : 20, state ? 20 : 41);
  };

  render() {
    return (
      <TouchableContainer onPress={this.props.onPress} activeOpacity={0.5}>
        <LottieView
          source={toggleJSON}
          resizeMode="cover"
          ref={animation => {
            this.animation = animation;
          }}
          loop={false}
        />
      </TouchableContainer>
    );
  }
}

const TouchableContainer = styled.TouchableOpacity`
  width: 90;
`;
