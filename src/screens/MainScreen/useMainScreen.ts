import { useCallback, useEffect, useState } from 'react';
import { QueryManager } from '../../managers/QueryManager';
import { TableNames } from '../../constants/TableNames';
import { TaskModel } from '../../models/TasksModel';
import { useNavigation } from '@react-navigation/native';
import { MainNavigation } from '../../navigation/navigators/MainNavigator/MainNavigator.types';
import { CREATE_TASK_SCREEN } from '../../navigation/paths';
import { UserModel } from '../../models/UserModel';
import { useUserStore } from '../../stores/UserStore/useUserStore';
import { useShallow } from 'zustand/shallow';

const queryExecutor = new QueryManager();

export const useMainScreen = () => {
  const [userTasks, setUserTasks] = useState<TaskModel[]>([]);

  const { hydrateUser, increaseTotalTokens, decreaseTotalTokens, totalTokens, motivation } = useUserStore(
    useShallow((state) => ({
      hydrateUser: state.hydrateUser,
      increaseTotalTokens: state.increaseTotalTokens,
      decreaseTotalTokens: state.decreaseTotalTokens,
      totalTokens: state.totalTokens,
      motivation: state.motivation,
    })),
  );

  const { navigate } = useNavigation<MainNavigation>();

  const changeUserTotalTokens = async (isDecrease: boolean) => {
    const newUserTotalTokens = isDecrease ? totalTokens - 1 : totalTokens + 1;
    try {
      await queryExecutor.update<UserModel>(TableNames.USER_TABLE, ['totalTokens'], [newUserTotalTokens], 'id=1');
      isDecrease ? decreaseTotalTokens() : increaseTotalTokens();
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
    } catch {
      throw new Error('Error retrieving user tasks');
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

  const setUserInitialData = useCallback(async () => {
    try {
      const { rows } = await queryExecutor.select<UserModel>({
        tableName: TableNames.USER_TABLE,
        valuesToSelect: ['totalTokens', 'name', 'motivation', 'timeSpent'],
      });
      hydrateUser(rows?.item(0) as unknown as UserModel);
    } catch {
      throw new Error('Error initializing user data');
    }
  }, [hydrateUser]);

  // const insertUserMotivation = async () => {
  //   await queryExecutor.insert(TableNames.USER_TABLE, ['name', 'motivation'], ['Funny User', 'Play video games'])
  // }

  useEffect(() => {
    setUserInitialData();
  }, [setUserInitialData]);

  return {
    changeUserTotalTokens,
    navigateToCreateTaskScreen,
    getUserTasks,
    handleMoveToEnd,
    userTasks,
    totalTokens,
    motivation,
  };
};
