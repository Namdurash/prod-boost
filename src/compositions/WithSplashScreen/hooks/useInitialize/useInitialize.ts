import { useCallback, useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';

import { AsyncStorageKeys } from '@app/constants/AsyncStorageKeys';
import { TableNames } from '@app/constants/TableNames';
import { useTablesPopulate } from '@app/hooks/useTablesPopulate';
import { getFromStorage } from '@app/managers/AsyncStorageManager';
import { queryExecutor } from '@app/managers/QueryManager';
import { useUserStore } from '@app/stores/UserStore/useUserStore';

import type { UserModel } from '@app/models/UserModel';

export const useInitialize = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { verifyCreatedTables } = useTablesPopulate();
  const hydrateUser = useUserStore(state => state.hydrateUser);
  const setHasCompletedOnboarding = useUserStore(
    state => state.setHasCompletedOnboarding,
  );

  const setUserInitialData = useCallback(async () => {
    try {
      const hasCompletedOnboarding = await getFromStorage(
        AsyncStorageKeys.HAS_COMPLETED_ONBOARDING,
      );

      if (hasCompletedOnboarding) {
        const { rows } = await queryExecutor.select<UserModel>({
          tableName: TableNames.USER_TABLE,
          valuesToSelect: ['totalTokens', 'name', 'motivation', 'timeSpent'],
        });

        console.log('Rows fetched during initialization:', rows);

        const userData = rows?.item(0) as unknown as UserModel;

        if (userData) {
          hydrateUser(userData);
          setHasCompletedOnboarding(true);
        } else {
          setHasCompletedOnboarding(false);
        }
      } else {
        setHasCompletedOnboarding(false);
      }
    } catch {
      setHasCompletedOnboarding(false);
    }
  }, [hydrateUser, setHasCompletedOnboarding]);

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
