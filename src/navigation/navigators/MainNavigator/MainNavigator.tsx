import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../../../screens/MainScreen/MainScreen';
import * as PATHS from '../../paths';
import { CreateTaskScreen } from '../../../screens/CreateTaskScreen/CreateTaskScreen';
import { EditTaskScreen } from '../../../screens/EditTaskScreen/EditTaskScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={PATHS.MAIN_SCREEN} component={MainScreen} />
      <Screen name={PATHS.CREATE_TASK_SCREEN} component={CreateTaskScreen} />
      <Screen name={PATHS.EDIT_TASK_SCREEN} component={EditTaskScreen} />
    </Navigator>
  );
};
