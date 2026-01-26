import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { TableNames } from '@app/constants/TableNames';
import { queryExecutor } from '@app/managers/QueryManager';
import { MAIN_SCREEN } from '@app/navigation/paths';

import type { UserModel } from '@app/models/UserModel';
import type { MainNavigation } from '@app/navigation/navigators/MainNavigator/MainNavigator.types';

interface OnboardingFormData {
  name: string;
  motivation: string;
}

export const useOnboardingScreen = () => {
  const { navigate } = useNavigation<MainNavigation>();
  const { control, handleSubmit } = useForm<OnboardingFormData>({
    defaultValues: {
      name: '',
      motivation: '',
    },
  });

  const onComplete = () => {
    navigate(MAIN_SCREEN);
  };

  const onSubmit = handleSubmit(async data => {
    try {
      await queryExecutor.insert<UserModel>(TableNames.USER_TABLE, {
        name: data.name,
        motivation: data.motivation,
        totalTokens: 0,
        timeSpent: 0,
      });
      onComplete();
    } catch (error) {
      throw new Error(`Error saving user data: ${error}`);
    }
  });

  return {
    control,
    onSubmit,
  };
};
