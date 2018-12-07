import styled from "styled-components";
import { StatusBar } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  display: flex;
  padding-top: ${StatusBar.currentHeight};
`;
