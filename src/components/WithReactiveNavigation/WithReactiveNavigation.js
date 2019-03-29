import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { isNil } from 'ramda';

export const withReactiveNavigationHOC = WrappedComponent => class WrappedComponentClass extends PureComponent {
  componentDidUpdate(prevProps) {
    const { token, navigation } = this.props;
    const { token: prevToken } = prevProps;
    if (!isNil(token) && isNil(prevToken)) {
      navigation.navigate('Home');
    }
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

const mapStateToProps = ({ authenticationReducer: { token } }) => ({
  token,
});

const mapDispatchToProps = dispatch => ({
  // refreshBulbs: () => dispatch(refreshBulbs()),
  // selectBulb: bulb => dispatch(selectBulbAction(bulb)),
});

export const withReactiveNavigation = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withReactiveNavigationHOC,
  withNavigation,
);
