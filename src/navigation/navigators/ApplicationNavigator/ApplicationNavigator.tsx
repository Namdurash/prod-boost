import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as PATHS from '../../paths'
import { MainNavigator } from "../MainNavigator/MainNavigator";


const { Navigator, Screen } = createNativeStackNavigator();

export const ApplicationNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={PATHS.MAIN_STACK}>
      <Screen name={PATHS.MAIN_STACK} component={MainNavigator} />
    </Navigator>
  )
}
