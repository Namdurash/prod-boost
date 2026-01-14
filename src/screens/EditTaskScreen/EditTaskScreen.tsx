import { RouteProp } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { MainStackParamsList } from '../../navigation/navigators/MainNavigator/MainNavigator.types';
import { TextInput } from '../../components/TextInput/TextInput';
import { NeomorphButton } from '../../components/NeomorphButton/NeomorphButton';
import { styles } from './EditTaskScreen.styles';
import { useEditTaskScreen } from './EditTaskScreen.hooks';

export const EditTaskScreen = ({ route }: EditTaskScreenProps) => {
  const { control, onSubmit } = useEditTaskScreen(route.params?.item);

  console.log(route.params?.item);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit task</Text>

      <View style={styles.inputContainer}>
        <TextInput
          defaultValue={route.params?.item.title}
          control={control}
          name="taskTitle"
          rules={{ required: true }}
          placeholder="Task title"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          defaultValue={route.params?.item.rewardTokens}
          keyboardType="number-pad"
          control={control}
          name="tokensEarn"
          rules={{ required: true }}
          placeholder="Tokens reward"
        />
      </View>

      <NeomorphButton text="End Edit" onPress={onSubmit} style={styles.button} />
    </View>
  );
};

export interface EditTaskScreenProps {
  route: RouteProp<MainStackParamsList>;
}
