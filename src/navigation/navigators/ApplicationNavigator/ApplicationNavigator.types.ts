import type * as PATHS from '../../paths';
import type { MainStackParamsList } from '../MainNavigator/MainNavigator.types';
import type {
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type ApplicationStackParamsList = {
  [PATHS.MAIN_STACK]: NavigatorScreenParams<MainStackParamsList>;
};

export type ApplicationNavigation = NavigationProp<ApplicationStackParamsList>;
