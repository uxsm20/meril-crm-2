import React from 'react';
import { useDeviceStore } from '../../store/deviceStore';
import { Package, Tag, CheckCircle, AlertCircle } from 'lucide-react';

export default function DeviceList() {
  const { devices } = useDeviceStore();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {devices.map((device) => (
        <div
          key={device.id}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {device.name}
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                {device.category}
              </span>
            </div>
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                device.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : device.status === 'recalled'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {device.status}
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Tag className="h-4 w-4 mr-2" />
              Batch: {device.batchNumber}
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Certifications
              </h4>
              <div className="space-y-2">
                {device.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="flex items-center">
                      {cert.status === 'active' ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                      )}
                      {cert.type}
                    </span>
                    <span className="text-gray-500">
                      Expires: {new Date(cert.expiryDate).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}