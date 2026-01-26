import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useShallow } from 'zustand/shallow';

import { TableNames } from '@app/constants/TableNames';
import { QueryManager } from '@app/managers/QueryManager';
import { CREATE_TASK_SCREEN } from '@app/navigation/paths';
import { useUserStore } from '@app/stores/UserStore/useUserStore';

import type { TaskModel } from '@app/models/TasksModel';
import type { UserModel } from '@app/models/UserModel';
import type { MainNavigation } from '@app/navigation/navigators/MainNavigator/MainNavigator.types';

const queryExecutor = new QueryManager();

export const useMainScreen = () => {
  const [userTasks, setUserTasks] = useState<TaskModel[]>([]);

  const {
    increaseTotalTokens,
    decreaseTotalTokens,
    totalTokens,
    motivation,
    name,
  } = useUserStore(
    useShallow(state => ({
      increaseTotalTokens: state.increaseTotalTokens,
      decreaseTotalTokens: state.decreaseTotalTokens,
      totalTokens: state.totalTokens,
      motivation: state.motivation,
      name: state.name,
    })),
  );

  const { navigate } = useNavigation<MainNavigation>();

  const changeUserTotalTokens = async (isDecrease: boolean) => {
    const newUserTotalTokens = isDecrease ? totalTokens - 1 : totalTokens + 1;
    try {
      await queryExecutor.update<UserModel>(
        TableNames.USER_TABLE,
        ['totalTokens'],
        [newUserTotalTokens],
        'id=1',
      );
      const changeTokensAmount = isDecrease
        ? decreaseTotalTokens
        : increaseTotalTokens;

      changeTokensAmount();
    } catch {
      throw new Error('Error changing the number of total tokens');
    }
  };

  const navigateToCreateTaskScreen = () => {
    navigate(CREATE_TASK_SCREEN);
  };

  const getUserTasks = async () => {
    try {
      const { rows } = await queryExecutor.select<TaskModel>({
        tableName: TableNames.TASKS_TABLE,
        valuesToSelect: '*',
      });
      const tasksList = rows?._array as unknown as TaskModel[];
      setUserTasks(tasksList);
      console.log('TASKS', rows);
    } catch (error) {
      throw new Error(`Error retrieving user tasks ${error}`);
    }
  };

  const handleMoveToEnd = () => {
    const sortedTasksList = userTasks.reduce((prev: TaskModel[], curr) => {
      if (curr.isCompleted) {
        prev.push(curr);
      } else {
        prev.unshift(curr);
      }
      return prev;
    }, []);
    setUserTasks(sortedTasksList);
  };

  return {
    changeUserTotalTokens,
    navigateToCreateTaskScreen,
    getUserTasks,
    handleMoveToEnd,
    userTasks,
    totalTokens,
    motivation,
    name,
  };
};
