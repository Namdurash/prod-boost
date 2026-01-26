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
    await queryExecutor.createTableAsync(TableNames.USER_TABLE, UserColumns);
    await queryExecutor.createTableAsync(TableNames.TASKS_TABLE, TasksColumn);
  };

  const verifyCreatedTables = async () => {
    const hasTablesCreated = await getFromStorage(
      AsyncStorageKeys.IS_TABLES_CREATED,
    );
    if (!hasTablesCreated) {
      await createTables();
      await setToStorage(AsyncStorageKeys.IS_TABLES_CREATED, true);
    }
  };

  return {
    verifyCreatedTables,
  };
};
