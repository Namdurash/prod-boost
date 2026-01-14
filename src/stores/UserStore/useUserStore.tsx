import { create } from 'zustand';
import { UserModel } from '../../models/UserModel';

export type UserStoreState = Omit<UserModel, 'id'>;

export type UserStoreActions = {
  increaseTotalTokens: () => void;
  decreaseTotalTokens: () => void;
  setTotalTokens: (newTotalTokens: number) => void;
  setMotivation: (newMotivation: string) => void;
  hydrateUser: (user: UserModel) => void;
};

export const useUserStore = create<UserStoreState & UserStoreActions>((set) => ({
  motivation: '',
  totalTokens: 0,
  name: '',
  timeSpent: 0,
  increaseTotalTokens: () => set((state: UserStoreState) => ({ totalTokens: state.totalTokens + 1 })),
  decreaseTotalTokens: () => set((state: UserStoreState) => ({ totalTokens: state.totalTokens - 1 })),
  setTotalTokens: (newTotalTokens: number) => set(() => ({ totalTokens: newTotalTokens })),
  setMotivation: (newMotivation: string) => set(() => ({ motivation: newMotivation })),
  hydrateUser: (user) => set(() => ({ ...user })),
}));
