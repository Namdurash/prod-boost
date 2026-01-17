import { View } from 'react-native';

import { NeomorphButton } from '@app/components/NeomorphButton/NeomorphButton';
import { TextInput } from '@app/components/TextInput/TextInput';

import { useHandleForm } from './CreateTaskScreen.hooks';
import { styles } from './CreateTaskScreen.styles';

export const CreateTaskScreen = () => {
  const { control, onSubmit } = useHandleForm();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            control={control}
            name="taskTitle"
            rules={{ required: true }}
            placeholder="Task title"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            control={control}
            name="tokensEarn"
            rules={{ required: true }}
            placeholder="Tokens earn"
          />
        </View>
      </View>

      <NeomorphButton
        text="Create task"
        style={styles.button}
        onPress={onSubmit}
      />
    </View>
  );
};
