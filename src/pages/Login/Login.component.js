import React, { Component, Fragment } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { compose } from 'redux';
import { isNil } from 'ramda';
import { Transition } from 'react-navigation-fluid-transitions';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { theme as globalTheme } from '../../assets/theme';
import { withContainer } from '../../components';
import { login } from '../../services/authentication';
import { initWebsocket } from '../../services/websocket';

class LoginComponent extends Component {
  state = {
    pseudo: '',
    password: '',
  };

  componentDidUpdate(prevProps) {
    const { token, navigation } = this.props;
    const { token: prevToken } = prevProps;
    if (!isNil(token) && isNil(prevToken)) {
      initWebsocket(token);
      navigation.navigate('Home');
    }
  }

  setPseudo = pseudo => this.setState({ pseudo });

  setPassword = password => this.setState({ password });

  login = () => {
    const { pseudo, password } = this.state;
    const { dispatchLogin } = this.props;
    if (pseudo !== '' && password !== '') {
      dispatchLogin({ pseudo, password });
    }
  };

  render() {
    const { navigation, pending } = this.props;
    return (
      <Fragment>
        <StatusBar backgroundColor="transparent" translucent />
        <InputContainer>
          <TextInput
            autoFocus
            placeholder="Pseudo"
            placeholderTextColor={globalTheme.colors.lightContrast}
            onChangeText={this.setPseudo}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={globalTheme.colors.lightContrast}
            onChangeText={this.setPassword}
            autoCapitalize="none"
          />
          <LoginButtonContainer>
            <LoginButton onPress={this.login}>
              {pending ? (
                <ActivityIndicator color={globalTheme.colors.contrast} />
              ) : (
                <LoginText>Login</LoginText>
              )}
            </LoginButton>
          </LoginButtonContainer>
        </InputContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authenticationReducer: { pending, token } }) => ({
  pending,
  token,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: payload => dispatch(login(payload)),
});

export const Login = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withContainer,
)(LoginComponent);

const InputContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const TextInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.contrast};
  margin: ${({ theme }) => theme.padding.s};
  padding: ${({ theme }) => theme.padding.s};
`;

const LoginButtonContainer = styled.View`
  margin: ${({ theme }) => theme.padding.s};
  padding: ${({ theme }) => theme.padding.s};
`;

const LoginButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40;
`;

const LoginText = styled.Text`
  color: ${({ theme }) => theme.colors.contrast};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
