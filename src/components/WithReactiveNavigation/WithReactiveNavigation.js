import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { isNil } from 'ramda';

import { getToken } from '../../services/storage';
import { loginSuccess } from '../../actions/authentication';

export const withReactiveNavigationHOC = WrappedComponent => class WrappedComponentClass extends PureComponent {
  componentDidMount() {
    this.initAppState();
  }

  componentDidUpdate(prevProps) {
    const { token, navigation } = this.props;
    const { token: prevToken } = prevProps;
    if (isNil(token)) {
      return navigation.navigate('Authentication');
    }
    if (!isNil(token) && isNil(prevToken)) {
      return navigation.navigate('Home');
    }
    return undefined;
  }

    initAppState = async () => {
      const { navigation, dispatchLoginSuccess } = this.props;
      const token = await getToken();
      if (token) {
        return dispatchLoginSuccess(token);
      }
      return navigation.navigate('Authentication');
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
};

const mapStateToProps = ({ authenticationReducer: { token } }) => ({
  token,
});

const mapDispatchToProps = dispatch => ({
  dispatchLoginSuccess: token => dispatch(loginSuccess(token)),
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
