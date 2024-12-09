export type TaskType = 'Email' | 'Follow-up' | 'Call';

export interface Task {
  type: TaskType;
  title: string;
  stepInfo: string;
  associatedAccount: string;
  due?: string;
}

export interface TasksData {
  tasks: Task[];
  additionalCount: number;
  additionalAccounts: string[];
}
