import React from 'react';
import { useQualityStore } from '../store/qualityStore';
import { useDeviceStore } from '../store/deviceStore';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function Quality() {
  const { records } = useQualityStore();
  const { devices } = useDeviceStore();

  const getDeviceName = (deviceId: string) =>
    devices.find((d) => d.id === deviceId)?.name || 'Unknown Device';

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'closed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'investigating':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Quality Management
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Create Record
        </button>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {records.map((record, recordIdx) => (
                <li key={record.id}>
                  <div className="relative pb-8">
                    {recordIdx !== records.length - 1 ? (
                      <span
                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>{getStatusIcon(record.status)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">
                              {record.title}
                            </span>
                            <span className="text-gray-500 ml-2">
                              {getDeviceName(record.deviceId)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                                record.priority
                              )}`}
                            >
                              {record.priority}
                            </span>
                            <span className="text-sm text-gray-500">
                              {new Date(record.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          {record.description}
                        </p>
                        <div className="mt-2 flex items-center justify-between text-sm">
                          <span className="text-gray-500">
                            Assigned to: {record.assignedTo}
                          </span>
                          <span className="text-gray-500">
                            Due: {new Date(record.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}