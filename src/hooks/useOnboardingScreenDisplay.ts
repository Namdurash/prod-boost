import { useState, useEffect } from 'react';

import { TableNames } from '@app/constants/TableNames';
import { queryExecutor } from '@app/managers/QueryManager';

export const useOnboardingScreenDisplay = () => {
  const [hasData, setHasData] = useState<boolean>(false);

  useEffect(() => {
    const check = async () => {
      const { rows } = await queryExecutor.select({
        tableName: TableNames.USER_TABLE,
        valuesToSelect: ['name', 'motivation'],
      });
      const user = rows?.item(0);
      setHasData(!!(user?.name && user?.motivation));
    };
    check();
  }, []);

  return hasData;
};
