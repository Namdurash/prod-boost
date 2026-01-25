import { useCallback, useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';

import { TableNames } from '@app/constants/TableNames';
import { useTablesPopulate } from '@app/hooks/useTablesPopulate';
import { queryExecutor } from '@app/managers/QueryManager';
import { useUserStore } from '@app/stores/UserStore/useUserStore';

import type { UserModel } from '@app/models/UserModel';

export const useInitialize = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { verifyCreatedTables } = useTablesPopulate();
  const hydrateUser = useUserStore(state => state.hydrateUser);

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

  const initialize = useCallback(async () => {
    try {
      await verifyCreatedTables();
      await setUserInitialData();
    } catch {
      throw new Error('Error hiding splash screen');
    } finally {
      setIsInitialized(true);
      BootSplash.hide({ fade: true });
    }
  }, [setUserInitialData, verifyCreatedTables]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return { isInitialized };
};
