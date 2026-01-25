import { NavigationContainer } from '@react-navigation/native';

import { WithSplashScreen } from '@app/compositions/WithSplashScreen/WithSplashScreen';

import { MainNavigator } from './navigators/MainNavigator/MainNavigator';

export const AppNavigation = () => {
  return (
    <WithSplashScreen>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </WithSplashScreen>
  );
};
