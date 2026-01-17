import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';

import { IconButton } from '../../components/IconButton/IconButton';
import { COLORS } from '../../constants/Colors';
import { Icons } from '../../constants/Icons';
import { useRenderCount } from '../../hooks/useRenderCount';

import { TaskListItem } from './components/TaskListItem/TaskListItem';
import { styles } from './MainScreen.styles';
import { useMainScreen } from './useMainScreen';

import type { TaskModel } from '@app/models/TasksModel';

export const MainScreen = () => {
  useRenderCount('MainScreen');
  const {
    totalTokens: userTotalTokens,
    userTasks,
    getUserTasks,
    changeUserTotalTokens,
    navigateToCreateTaskScreen,
    handleMoveToEnd,
  } = useMainScreen();

  useFocusEffect(
    useCallback(() => {
      getUserTasks();
    }, []),
  );

  const renderItem = useCallback(
    ({ item, index }: { item: TaskModel; index: number }) => (
      <TaskListItem item={item} index={index} onPress={handleMoveToEnd} />
    ),
    [handleMoveToEnd],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boost your productivity</Text>
      <View style={styles.totalTokensContainer}>
        <Icons.Token width={75} height={95} />
        <View style={styles.manageTokensPanel}>
          <IconButton
            iconComponent={
              <Icons.Minus width={25} height={25} stroke={COLORS.pureWhite} />
            }
            onPress={() => changeUserTotalTokens(true)}
          />
          <Text style={styles.totalTokensText}>{userTotalTokens}</Text>
          <IconButton
            iconComponent={
              <Icons.Plus width={25} height={25} stroke={COLORS.pureWhite} />
            }
            onPress={() => changeUserTotalTokens(false)}
          />
        </View>
      </View>

      <View style={styles.tasksHeadingContainer}>
        <Text style={styles.tasksHeading}>Daily possibilities</Text>
        <IconButton
          iconComponent={
            <Icons.Plus width={25} height={25} stroke={COLORS.pureWhite} />
          }
          onPress={navigateToCreateTaskScreen}
        />
      </View>

      <FlatList
        data={userTasks}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={styles.taskListContainer}
      />
    </View>
  );
};
