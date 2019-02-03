import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { BulbItem, Container } from "../../components";
import { get } from "../../services/yeelight";

class BulbsListComponent extends Component {
  render() {
    return (
      <Container background="darkIndigo">
        {this.props.bulbs.map(bulb => (
          <BulbItem
            key={bulb.id}
            bulb={bulb}
            navigate={() => {
              get(bulb.id);
              this.props.navigation.navigate("BulbDetails", { id: bulb.id });
            }}
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
