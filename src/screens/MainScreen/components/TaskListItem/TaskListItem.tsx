import { Text, TouchableOpacity, View } from 'react-native';
import { TaskModel } from '../../../../models/TasksModel';
import { styles } from './TaskListItem.styles';
import { Checkbox } from '../../../../components/Checkbox/Checkbox';
import { Icons } from '../../../../constants/Icons';
import { queryExecutor } from '../../../../managers/QueryManager';
import { TableNames } from '../../../../constants/TableNames';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MainNavigation } from '../../../../navigation/navigators/MainNavigator/MainNavigator.types';
import { EDIT_TASK_SCREEN } from '../../../../navigation/paths';
import { UserModel } from '../../../../models/UserModel';
import { useUserStore } from '../../../../stores/UserStore/useUserStore';

export const TaskListItem = ({ item, onPress }: TaskListItemProps) => {
  const [currentTaskStatus, setCurrentTaskStatus] = useState(Boolean(item.isCompleted));
  const totalTokens = useUserStore((state) => state.totalTokens);
  const setTotalTokens = useUserStore((state) => state.setTotalTokens);
  const textStyles = currentTaskStatus ? [styles.text, styles.completedTask] : styles.text;

  const { navigate } = useNavigation<MainNavigation>();

  const handleOnCheckboxPress = async () => {
    const oppositeStatus = !currentTaskStatus;
    let newTotalTokens;
    console.log('ITEM', item.isCompleted);
    if (!currentTaskStatus) {
      newTotalTokens = totalTokens + item.rewardTokens;
    } else {
      newTotalTokens = Math.abs(totalTokens - item.rewardTokens);
    }
    await queryExecutor.update<UserModel>(
      TableNames.USER_TABLE,
      ['totalTokens'],
      [newTotalTokens],
      `id=${item.userId}`,
    );
    // TODO: Here code makes 2 rerenders instead of 1. It happens because of 2 different states.
    setTotalTokens(newTotalTokens);
    setCurrentTaskStatus(oppositeStatus);
    await queryExecutor.update<TaskModel>(TableNames.TASKS_TABLE, ['isCompleted'], [oppositeStatus], `id=${item.id}`);
    onPress?.();
  };

  const handleOnTaskPress = () => {
    navigate(EDIT_TASK_SCREEN, { item });
  };

  return (
    <TouchableOpacity onPress={handleOnTaskPress} style={styles.container} key={item.id}>
      <View style={styles.contentContainer}>
        <Text style={styles.rewardTokensText}>{item.rewardTokens}</Text>
        <Icons.Token width={20} height={20} style={styles.icon} />
        <Text style={textStyles}>{item.title}</Text>
      </View>
      <Checkbox currentStatus={currentTaskStatus} onCheckboxPress={handleOnCheckboxPress} />
    </TouchableOpacity>
  );
};

export interface TaskListItemProps {
  onPress?: () => void;
  item: TaskModel;
  index: number;
}
