import type { MainStackParamsList } from '@app/navigation/navigators/MainNavigator/MainNavigator.types';
import type * as PATHS from '@app/navigation/paths';
import type { RouteProp } from '@react-navigation/native';

export interface EditTaskScreenProps {
  route: RouteProp<MainStackParamsList, typeof PATHS.EDIT_TASK_SCREEN>;
}
