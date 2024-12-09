import React from 'react';
import { Mail, Phone, Clock, ArrowRight, RefreshCw } from 'lucide-react';
import { useTaskStore } from '../../store/taskStore';
import { TaskType } from '../../types/task';

const getTaskIcon = (type: TaskType) => {
  switch (type) {
    case 'Email':
      return Mail;
    case 'Call':
      return Phone;
    case 'Follow-up':
      return RefreshCw;
    default:
      return Clock;
  }
};

export default function TasksPanel() {
  const { tasksData } = useTaskStore();

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          What's on your plate for today
        </h2>
      </div>

      {/* Tasks List */}
      <div className="space-y-4 mb-6 flex-grow">
        {tasksData.tasks.map((task, index) => {
          const Icon = getTaskIcon(task.type);
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Icon className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {task.title}
                  </h3>
                  {task.due && (
                    <span className="text-xs text-gray-500">{task.due}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{task.stepInfo}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-xs font-medium text-blue-700">
                    {task.associatedAccount}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Tasks Info */}
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <p className="text-sm text-blue-700">
          <span className="font-medium">{tasksData.additionalCount} more tasks</span>
          {' '}across{' '}
          <span className="font-medium">
            {tasksData.additionalAccounts.slice(0, 2).join(', ')}
            {tasksData.additionalAccounts.length > 2 ? ' and others' : ''}
          </span>
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <button 
          onClick={() => {/* TODO: Implement navigation */}}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          See all to-dos
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
