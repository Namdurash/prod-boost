import { NavigationProp } from '@react-navigation/native'
import * as PATHS from '../../paths'
import { TaskModel } from '../../../models/TasksModel'

export type MainStackParamsList = {
  [PATHS.MAIN_SCREEN]: undefined
  [PATHS.CREATE_TASK_SCREEN]: undefined
  [PATHS.EDIT_TASK_SCREEN]: {
    item: TaskModel
  }
}

export type MainNavigation = NavigationProp<MainStackParamsList>