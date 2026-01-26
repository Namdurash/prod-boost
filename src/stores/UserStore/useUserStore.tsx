import { create } from 'zustand';

import type { UserModel } from '@app/models/UserModel';

export type UserStoreState = Omit<UserModel, 'id'> & {
  hasCompletedOnboarding: boolean;
};

export type UserStoreActions = {
  increaseTotalTokens: () => void;
  decreaseTotalTokens: () => void;
  setTotalTokens: (newTotalTokens: number) => void;
  setMotivation: (newMotivation: string) => void;
  setHasCompletedOnboarding: (value: boolean) => void;
  hydrateUser: (user: UserModel) => void;
};

export const useUserStore = create<UserStoreState & UserStoreActions>(set => ({
  motivation: '',
  totalTokens: 0,
  name: '',
  timeSpent: 0,
  hasCompletedOnboarding: false,
  increaseTotalTokens: () =>
    set((state: UserStoreState) => ({ totalTokens: state.totalTokens + 1 })),
  decreaseTotalTokens: () =>
    set((state: UserStoreState) => ({ totalTokens: state.totalTokens - 1 })),
  setTotalTokens: (newTotalTokens: number) =>
    set(() => ({ totalTokens: newTotalTokens })),
  setMotivation: (newMotivation: string) =>
    set(() => ({ motivation: newMotivation })),
  setHasCompletedOnboarding: (value: boolean) =>
    set(() => ({ hasCompletedOnboarding: value })),
  hydrateUser: user => set(() => ({ ...user })),
}));
