import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { connect } from 'react-redux';
import { BulbItem, withContainer } from '../../components';
import { refreshBulbs } from '../../actions/yeelight';

class BulbsListComponent extends Component {
  goToBulbDetails = (bulb) => {
    const { navigation } = this.props;
    navigation.navigate('BulbDetails', {
      bulb,
    });
  };

  renderItem = ({ item }) => (
    <Transition shared={item._id} appear="scale" disappear="scale">
      <BulbItem bulb={item} onPress={() => this.goToBulbDetails(item)} />
    </Transition>
  );

  render() {
    const { bulbs, refreshing, refreshBulbs } = this.props;
    return (
      <FlatList
        data={bulbs}
        renderItem={this.renderItem}
        keyExtractor={item => item._id}
        refreshing={refreshing}
        onRefresh={refreshBulbs}
      />
    );
  }
}

const mapStateToProps = ({ yeelightReducer: { bulbs, refreshing } }) => ({
  bulbs,
  refreshing,
});

const mapDispatchToProps = dispatch => ({
  refreshBulbs: () => dispatch(refreshBulbs()),
});

export const BulbsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withContainer(BulbsListComponent));
