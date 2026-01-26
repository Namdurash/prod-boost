import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CreateTaskScreen } from '@app/screens/CreateTaskScreen/CreateTaskScreen';
import { EditTaskScreen } from '@app/screens/EditTaskScreen/EditTaskScreen';
import { MainScreen } from '@app/screens/MainScreen/MainScreen';
import { OnboardingScreen } from '@app/screens/OnboardingScreen/OnboardingScreen';
import { useUserStore } from '@app/stores/UserStore/useUserStore';

import * as PATHS from '../../paths';

import type { MainStackParamsList } from './MainNavigator.types';

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamsList>();

export const MainNavigator = () => {
  const hasCompletedOnboarding = useUserStore(
    state => state.hasCompletedOnboarding,
  );

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={
        hasCompletedOnboarding ? PATHS.MAIN_SCREEN : PATHS.ONBOARDING_SCREEN
      }>
      <Screen name={PATHS.ONBOARDING_SCREEN} component={OnboardingScreen} />
      <Screen name={PATHS.MAIN_SCREEN} component={MainScreen} />
      <Screen name={PATHS.CREATE_TASK_SCREEN} component={CreateTaskScreen} />
      <Screen name={PATHS.EDIT_TASK_SCREEN} component={EditTaskScreen} />
    </Navigator>
  );
};
