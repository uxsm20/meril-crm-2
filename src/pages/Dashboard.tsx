import React, { useEffect, useState } from 'react';
import { useDashboardData } from '../hooks/useDashboardData';
import { AlertCircle, TrendingUp, Users, Package } from 'lucide-react';
import AccountAIPanel from '../components/dashboard/AccountAIPanel';
import PipelinePanel from '../components/dashboard/PipelinePanel';
import TasksPanel from '../components/dashboard/TasksPanel';
import CoachingInboxPanel from '../components/dashboard/CoachingInboxPanel';

export default function Dashboard() {
  const [key, setKey] = useState(0);
  const { title, stats } = useDashboardData();

  useEffect(() => {
    const handleRoleChange = () => {
      setKey(prev => prev + 1);
    };

    window.addEventListener('role-changed', handleRoleChange);
    return () => window.removeEventListener('role-changed', handleRoleChange);
  }, []);

  return (
    <div key={key} className="min-h-screen bg-[#F5F5FA] p-6">
      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>

        {/* First Row - Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.name}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row - Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Account AI Panel - Spans 2 columns */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <AccountAIPanel />
          </div>

          {/* Your Pipeline Panel */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <PipelinePanel />
          </div>
        </div>

        {/* Third Row - Tasks and Coaching */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tasks Panel - Spans 2 columns */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <TasksPanel />
          </div>

          {/* Coaching Inbox Panel */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <CoachingInboxPanel />
          </div>
        </div>
      </div>
    </div>
  );
}