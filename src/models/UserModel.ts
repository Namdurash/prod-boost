export interface UserModel {
  id: number;
  name: string;
  motivation: string;
  totalTokens: number;
  timeSpent: number;
}

export const UserColumns = [
  'id INTEGER PRIMARY KEY AUTOINCREMENT',
  'name varchar(255) NOT NULL',
  'motivation varchar(255) NOT NULL',
  'totalTokens INTEGER NOT NULL DEFAULT 8',
  'timeSpent INTEGER NOT NULL DEFAULT 0',
];
