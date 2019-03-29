import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { isNil } from 'ramda';

import { getToken } from '../../services/storage';
import { loginSuccess } from '../../actions/authentication';
import { initWebsocket } from '../../services/websocket';

export const withReactiveNavigationHOC = WrappedComponent => class WrappedComponentClass extends PureComponent {
  componentDidMount() {
    this.initAppState();
  }

  componentDidUpdate(prevProps) {
    const { token, navigation } = this.props;
    const { token: prevToken } = prevProps;
    if (isNil(token)) {
      navigation.navigate('Authentication');
    } else if (!isNil(token) && isNil(prevToken)) {
      initWebsocket(token);
      navigation.navigate('Home');
    }
  }

    initAppState = async () => {
      const { navigation, dispatchLoginSuccess } = this.props;
      const token = await getToken();
      if (token) {
        initWebsocket(token);
        dispatchLoginSuccess(token);
      } else {
        navigation.navigate('Authentication');
      }
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
});

export const withReactiveNavigation = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withReactiveNavigationHOC,
  withNavigation,
);
