import { createNavigationContainerRef } from '@react-navigation/native';

import type { ApplicationStackParamsList } from './navigators/ApplicationNavigator/ApplicationNavigator.types';

export const navigationRef =
  createNavigationContainerRef<ApplicationStackParamsList>();
