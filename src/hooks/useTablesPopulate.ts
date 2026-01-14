import { useEffect } from 'react';
import { QueryManager } from '../managers/QueryManager';
import { getFromStorage, setToStorage } from '../managers/AsyncStorageManager';
import { TableNames } from '../constants/TableNames';
import { AsyncStorageKeys } from '../constants/AsyncStorageKeys';
import { UserColumns } from '../models/UserModel';
import { TasksColumn } from '../models/TasksModel';

export const useTablesPopulate = () => {
  const queryExecutor = new QueryManager();

  const createTables = async () => {
    // make a batch
    await queryExecutor.insert(TableNames.USER_TABLE, [1, 'UserName', 'Play Video Games', 8, 0]);
    await queryExecutor.createTable(TableNames.USER_TABLE, UserColumns);
    await queryExecutor.createTable(TableNames.TASKS_TABLE, TasksColumn);
  };

  const verifyCreatedTables = async () => {
    const hasTablesCreated = await getFromStorage(AsyncStorageKeys.IS_TABLES_CREATED);
    if (!hasTablesCreated) {
      createTables();
      await setToStorage(AsyncStorageKeys.IS_TABLES_CREATED, true);
    }
  };

  useEffect(() => {
    verifyCreatedTables();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
