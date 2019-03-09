import styled from 'styled-components';
import { Animated, Platform, StatusBar } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  /* background-color: ${({ theme, background }) => (theme.colors[background]
    ? theme.colors[background]
    : theme.colors.darkBackground)}; */
  display: flex;
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 20};
`;
