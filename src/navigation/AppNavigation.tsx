import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './navigators/MainNavigator/MainNavigator';

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
