import { View } from 'react-native';
import { styles } from './CreateTaskScreen.styles';
import { useHandleForm } from './CreateTaskScreen.hooks';
import { TextInput } from '../../components/TextInput/TextInput';
import { NeomorphButton } from '../../components/NeomorphButton/NeomorphButton';

export const CreateTaskScreen = () => {
  const { control, onSubmit } = useHandleForm();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput control={control} name="taskTitle" rules={{ required: true }} placeholder="Task title" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput control={control} name="tokensEarn" rules={{ required: true }} placeholder="Tokens earn" />
        </View>
      </View>

      <NeomorphButton text="Create task" style={styles.button} onPress={onSubmit} />
    </View>
  );
};
