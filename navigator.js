import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';
import { Home } from './src/pages/HomeScreen';
import { BulbsList } from './src/pages/BulbsList';
import { BulbDetails } from './src/pages/BulbDetails';
import { Login } from './src/pages/Login';
import { Loading } from './src/pages/Loading';
import { theme } from './src/assets/theme';

const AppNavigator = createFluidNavigator(
  {
    Home,
    BulbsList,
    BulbDetails,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle: { opacity: 1, backgroundColor: theme.colors.darkBackground },
  },
);

const RootNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
    Authentication: Login,
    AuthenticationPending: Loading,
  },
  {
    initialRouteName: 'AuthenticationPending',
  },
);

export const AppContainer = createAppContainer(RootNavigator);
