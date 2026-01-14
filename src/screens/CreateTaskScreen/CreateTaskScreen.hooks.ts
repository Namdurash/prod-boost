import { useForm } from 'react-hook-form';
import { queryExecutor } from '../../managers/QueryManager';
import { TableNames } from '../../constants/TableNames';
import { TaskModel } from '../../models/TasksModel';

export interface CreateTaskInputs {
  taskTitle: string;
  tokensEarn: number;
}

export const useHandleForm = () => {
  const { control, handleSubmit } = useForm<CreateTaskInputs>({ defaultValues: { taskTitle: '', tokensEarn: 0 } });

  const onSubmit = () => {
    handleSubmit(async (data) => {
      try {
        await queryExecutor.insert<TaskModel>(TableNames.TASKS_TABLE, {
          title: data.taskTitle,
          rewardTokens: data.tokensEarn,
          userId: 1,
        });
      } catch {
        throw new Error('Error creating a new task');
      }
    })();
  };

  return {
    onSubmit,
    control,
  };
};
