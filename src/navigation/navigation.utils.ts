import { createNavigationContainerRef } from '@react-navigation/native'
import { ApplicationStackParamsList } from './navigators/ApplicationNavigator/ApplicationNavigator.types'

export const navigationRef = createNavigationContainerRef<ApplicationStackParamsList>()