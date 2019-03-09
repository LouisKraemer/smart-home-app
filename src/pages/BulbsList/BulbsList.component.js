import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { connect } from 'react-redux';
import { BulbItem, Container } from '../../components';

class BulbsListComponent extends Component {
  goToBulbDetails = (bulb) => {
    const { navigation } = this.props;
    navigation.navigate('BulbDetails', {
      bulb,
    });
  };

  renderItem = ({ item }) => (
    <Transition shared={item.id} appear="scale" disappear="scale">
      <BulbItem bulb={item} onPress={() => this.goToBulbDetails(item)} />
    </Transition>
  );

  render() {
    const { bulbs } = this.props;
    return (
      <Container>
        <FlatList data={bulbs} renderItem={this.renderItem} keyExtractor={item => item.id} />
      </Container>
    );
  }
}

const mapStateToProps = ({ yeelightReducer: { bulbs } }) => ({
  bulbs,
});

export const BulbsList = connect(mapStateToProps)(BulbsListComponent);
