import React, { Component } from "react";
import { Modal, Text } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components";

export class WSModalComponent extends Component {
  render() {
    return (
      <Modal transparent visible={!this.props.connected}>
        <Container>
          <Text>Connection to the server lost !</Text>
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
  background-color: aqua;
  justify-content: center;
  align-items: center;
`;
