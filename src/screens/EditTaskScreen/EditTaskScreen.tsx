import { Text, View } from 'react-native';

import { NeomorphButton } from '@app/components/NeomorphButton/NeomorphButton';
import { TextInput } from '@app/components/TextInput/TextInput';

import { useEditTaskScreen } from './EditTaskScreen.hooks';
import { styles } from './EditTaskScreen.styles';

import type { EditTaskScreenProps } from './types';

export const EditTaskScreen = ({ route }: EditTaskScreenProps) => {
  const { control, onSubmit } = useEditTaskScreen(route.params.item);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit task</Text>

      <View style={styles.inputContainer}>
        <TextInput
          defaultValue={route.params.item.title}
          control={control}
          name="taskTitle"
          rules={{ required: true }}
          placeholder="Task title"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          defaultValue={route.params.item.rewardTokens}
          keyboardType="number-pad"
          control={control}
          name="tokensEarn"
          rules={{ required: true }}
          placeholder="Tokens reward"
        />
      </View>

      <NeomorphButton
        text="End Edit"
        onPress={onSubmit}
        style={styles.button}
      />
    </View>
  );
};
