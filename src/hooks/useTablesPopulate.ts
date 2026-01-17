import { useEffect } from 'react';

import { AsyncStorageKeys } from '@app/constants/AsyncStorageKeys';
import { TableNames } from '@app/constants/TableNames';
import {
  getFromStorage,
  setToStorage,
} from '@app/managers/AsyncStorageManager';
import { QueryManager } from '@app/managers/QueryManager';
import { TasksColumn } from '@app/models/TasksModel';
import { UserColumns } from '@app/models/UserModel';

export const useTablesPopulate = () => {
  const queryExecutor = new QueryManager();

  const createTables = async () => {
    // make a batch
    await queryExecutor.insert(TableNames.USER_TABLE, [
      1,
      'UserName',
      'Play Video Games',
      8,
      0,
    ]);
    await queryExecutor.createTable(TableNames.USER_TABLE, UserColumns);
    await queryExecutor.createTable(TableNames.TASKS_TABLE, TasksColumn);
  };

  const verifyCreatedTables = async () => {
    const hasTablesCreated = await getFromStorage(
      AsyncStorageKeys.IS_TABLES_CREATED,
    );
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
