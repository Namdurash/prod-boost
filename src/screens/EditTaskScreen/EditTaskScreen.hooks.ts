import { useForm } from 'react-hook-form';
import { TableNames } from '../../constants/TableNames';
import { queryExecutor } from '../../managers/QueryManager';
import { TaskModel } from '../../models/TasksModel';
import { useNavigation } from '@react-navigation/native';

export interface EditTaskInputs {
  taskTitle: string;
  tokensEarn: number;
}

export const useEditTaskScreen = (item?: TaskModel) => {
  const { control, handleSubmit } = useForm<EditTaskInputs>();
  const { goBack } = useNavigation();

  const onSubmit = async () => {
    await handleSubmit(async (data) => {
      try {
        await queryExecutor.update<TaskModel>(
          TableNames.TASKS_TABLE,
          ['title', 'rewardTokens'],
          [data.taskTitle, data.tokensEarn],
          `id=${item?.id}`,
        );
      } catch (err) {
        throw new Error(`Error editing a new task ${err}`);
      }
    })();

    goBack();
  };

  return {
    onSubmit,
    control,
  };
};
