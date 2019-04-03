import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { getToken } from '../../services/storage';
import { withContainer } from '../../components';
import { loginSuccess } from '../../actions/authentication';
import { initWebsocket } from '../../services/websocket';

class LoadingComponent extends Component {
  componentDidMount() {
    this.initAppState();
  }

  initAppState = async () => {
    const { navigation, dispatchLoginSuccess } = this.props;
    const token = await getToken();
    if (token) {
      initWebsocket(token);
      dispatchLoginSuccess(token);
      navigation.navigate('Home');
    } else {
      navigation.navigate('Authentication');
    }
  };

  render() {
    return <StatusBar backgroundColor="transparent" translucent />;
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLoginSuccess: token => dispatch(loginSuccess(token)),
});
export const Loading = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withContainer,
  withNavigation,
)(LoadingComponent);
