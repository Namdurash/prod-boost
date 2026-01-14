export interface TaskModel {
  id: number;
  title: string;
  rewardTokens: number;
  isCompleted: 1 | 0;
  completionLimit: number;
  userId: number;
  // isRepetative
}

export const TasksColumn = [
  'id INTEGER PRIMARY KEY AUTOINCREMENT',
  'title varchar(255) NOT NULL',
  'rewardTokens INTEGER NOT NULL',
  'isCompleted BOOLEAN NOT NULL DEFAULT 0',
  'completionLimit INTEGER NOT NULL DEFAULT 1',
  'userId INTEGER',
  'FOREIGN KEY (userId) REFERENCES Users(id)',
];
