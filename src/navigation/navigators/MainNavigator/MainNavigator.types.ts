import type * as PATHS from '../../paths';
import type { TaskModel } from '@app/models/TasksModel';
import type { NavigationProp } from '@react-navigation/native';

export type MainStackParamsList = {
  [PATHS.MAIN_SCREEN]: undefined;
  [PATHS.CREATE_TASK_SCREEN]: undefined;
  [PATHS.EDIT_TASK_SCREEN]: {
    item: TaskModel;
  };
};

export type MainNavigation = NavigationProp<MainStackParamsList>;
