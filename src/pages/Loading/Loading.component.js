import React from 'react';
import { StatusBar } from 'react-native';
import { compose } from 'redux';
import { withContainer, withReactiveNavigation } from '../../components';

const LoadingComponent = () => <StatusBar backgroundColor="transparent" translucent />;

export const Loading = compose(
  withContainer,
  withReactiveNavigation,
)(LoadingComponent);
