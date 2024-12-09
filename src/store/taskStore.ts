import { create } from 'zustand';
import { TasksData } from '../types/task';

interface TaskStore {
  tasksData: TasksData;
}

export const useTaskStore = create<TaskStore>(() => ({
  tasksData: {
    tasks: [
      {
        type: 'Email',
        title: 'Send Email',
        stepInfo: 'Step 1 | PR UserGem',
        associatedAccount: 'Recurve',
        due: 'Today'
      },
      {
        type: 'Follow-up',
        title: 'Follow-up with Ryan L',
        stepInfo: 'Step 4 | You met with them 2 days ago',
        associatedAccount: 'TresJolie'
      },
      {
        type: 'Call',
        title: 'Call',
        stepInfo: 'Step 6 | Once a week call',
        associatedAccount: 'Client Giant'
      }
    ],
    additionalCount: 23,
    additionalAccounts: ['ApexMind', 'Cryptoglass', 'HealthTech Plus']
  }
}));
