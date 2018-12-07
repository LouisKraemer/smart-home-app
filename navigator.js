import { createStackNavigator, createAppContainer } from "react-navigation";
import { Easing } from "react-native";

import { HomeScreen } from "./src/pages/HomeScreen";
import { BulbsList } from "./src/pages/BulbsList";
import { BulbDetails } from "./src/pages/BulbDetails";

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 250,
      easing: Easing.elastic(),
      // timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene } = sceneProps;

      const width = layout.initWidth;

      const thisSceneIndex = scene.index;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, -width]
      });

      return { translateX };
    }
  };
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    BulbsList,
    BulbDetails
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    transitionConfig
  }
);

export const AppContainer = createAppContainer(AppNavigator);
