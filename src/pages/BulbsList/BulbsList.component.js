import React, { Component } from "react";
import styled from "styled-components";
import { BulbItem } from "../../components";
import { connect } from "react-redux";
import { Container } from "../../components";

class BulbsListComponent extends Component {
  render() {
    return (
      <Container background="darkIndigo">
        {this.props.bulbs.map(bulb => (
          <BulbItem
            key={bulb.id}
            bulb={bulb}
            navigate={() =>
              this.props.navigation.navigate("BulbDetails", { id: bulb.id })
            }
          />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = ({ yeelightReducer: { bulbs } }) => ({
  bulbs
});

export const BulbsList = connect(mapStateToProps)(BulbsListComponent);
