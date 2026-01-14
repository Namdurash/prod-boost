import { NavigationProp, NavigatorScreenParams } from '@react-navigation/native'
import * as PATHS from '../../paths'
import { MainStackParamsList } from '../MainNavigator/MainNavigator.types'

export type ApplicationStackParamsList = {
  [PATHS.MAIN_STACK]: NavigatorScreenParams<MainStackParamsList>
}

export type ApplicationNavigation = NavigationProp<ApplicationStackParamsList>