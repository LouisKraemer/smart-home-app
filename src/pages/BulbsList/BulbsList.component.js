import React, { Component } from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { BulbItem } from "../../components";
import { connect } from "react-redux";

class BulbsListComponent extends Component {
  render() {
    return (
      <Container>
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

const mapStateToProps = ({ yeelight }) => ({
  bulbs: yeelight.bulbs.map(({ id, power, name }) => ({
    id,
    power,
    name
  }))
});

export const BulbsList = connect(mapStateToProps)(BulbsListComponent);

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  display: flex;
  padding-top: ${StatusBar.currentHeight};
`;
