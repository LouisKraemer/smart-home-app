import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Container } from "../../components";
import { resetSelectedBulbAction } from "../../actions/yeelight";

class BulbDetailsComponent extends Component {
  // componentWillUnmount() {
  //   console.log("fezkjnlfze");
  //   this.props.resetSelectedBulb();
  // }

  render() {
    console.log("this.props.selectedBulb", this.props.selectedBulb);
    return <Container>{/* <Animation source={lightBulb} /> */}</Container>;
  }
}

const mapStateToProps = ({ yeelightReducer: { selectedBulb } }) => ({
  selectedBulb
});

const mapDispatchToProps = dispatch => ({
  resetSelectedBulb: () => dispatch(resetSelectedBulbAction)
});

export const BulbDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(BulbDetailsComponent);
