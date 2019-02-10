import React, { Component } from "react";
import { Modal, Text } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components";
import LottieView from "lottie-react-native";

export class WSModalComponent extends Component {
  render() {
    return (
      <Modal
        transparent
        visible={!this.props.connected}
        animationType="fade"
        onRequestClose={() => {}}
      >
        <Container>
          <Popup>
            <InfoText>Connection lost</InfoText>
            <AnimationContainer>
              <LottieView
                source={require("../../assets/lottie/loader.json")}
                autoPlay
              />
            </AnimationContainer>
          </Popup>
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = ({ websocketReducer: { connected } }) => ({
  connected
});

export const WSModal = connect(mapStateToProps)(WSModalComponent);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.overlay};
`;

const Popup = styled.View`
  justify-content: space-between;
  height: 200;
  width: 200;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: ${({ theme }) => theme.padding.m};
  elevation: 40;
`;

const AnimationContainer = styled.View`
  flex: 1;
`;

const InfoText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  color: ${({ theme }) => theme.colors.contrast};
`;
