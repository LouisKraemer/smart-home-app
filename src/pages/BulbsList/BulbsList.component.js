import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { connect } from 'react-redux';
import { BulbItem, withContainer } from '../../components';
import { refreshBulbs, selectBulbAction } from '../../actions/yeelight';
import { getAll } from '../../services/yeelight';

class BulbsListComponent extends Component {
  goToBulbDetails = (bulb) => {
    const { navigation, selectBulb } = this.props;
    selectBulb(bulb);
    navigation.navigate('BulbDetails', {
      bulb,
    });
  };

  renderItem = ({ item }) => (
    <Transition shared={item.deviceId} appear="scale" disappear="scale">
      <BulbItem bulb={item} onPress={() => this.goToBulbDetails(item)} />
    </Transition>
  );

  render() {
    const { bulbs, refreshing, refreshBulbs } = this.props;
    return (
      <FlatList
        data={bulbs}
        renderItem={this.renderItem}
        keyExtractor={item => item.deviceId}
        refreshing={refreshing}
        onRefresh={() => {
          refreshBulbs();
          getAll();
        }}
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
  selectBulb: bulb => dispatch(selectBulbAction(bulb)),
});

export const BulbsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withContainer(BulbsListComponent));
