import React from 'react';
import { usePostMarketStore } from '../store/postMarketStore';
import { useDeviceStore } from '../store/deviceStore';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function PostMarket() {
  const { events } = usePostMarketStore();
  const { devices } = useDeviceStore();

  const getDeviceName = (deviceId: string) =>
    devices.find((d) => d.id === deviceId)?.name || 'Unknown Device';

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-50';
      case 'high':
        return 'text-orange-600 bg-orange-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-green-600 bg-green-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'investigating':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Post-Market Surveillance
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Report Event
        </button>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {events.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {eventIdx !== events.length - 1 ? (
                      <span
                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>{getStatusIcon(event.status)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-gray-500">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-medium text-gray-900">
                                {getDeviceName(event.deviceId)}
                              </span>
                              <span className="ml-2 text-gray-500">
                                {new Date(event.reportDate).toLocaleDateString()}
                              </span>
                            </div>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(
                                event.severity
                              )}`}
                            >
                              {event.severity}
                            </span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-900">
                          {event.description}
                        </p>
                        {event.resolution && (
                          <p className="mt-2 text-sm text-gray-500">
                            Resolution: {event.resolution}
                          </p>
                        )}
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