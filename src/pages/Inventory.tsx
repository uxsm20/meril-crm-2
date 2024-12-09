import React from 'react';
import { useInventoryStore } from '../store/inventoryStore';
import { useDeviceStore } from '../store/deviceStore';
import { Box, AlertTriangle, Clock, Package } from 'lucide-react';

export default function Inventory() {
  const { items } = useInventoryStore();
  const { devices } = useDeviceStore();

  const getDeviceName = (deviceId: string) =>
    devices.find((d) => d.id === deviceId)?.name || 'Unknown Device';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_stock':
        return 'text-green-600 bg-green-50';
      case 'low_stock':
        return 'text-yellow-600 bg-yellow-50';
      case 'out_of_stock':
        return 'text-red-600 bg-red-50';
      case 'expired':
        return 'text-gray-600 bg-gray-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Inventory Management
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add Stock
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {getDeviceName(item.deviceId)}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Batch: {item.batchNumber}
                </p>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status.replace('_', ' ')}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Package className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.quantity}
                  </p>
                  <p className="text-xs text-gray-500">In Stock</p>
                </div>
              </div>
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.minimumStock}
                  </p>
                  <p className="text-xs text-gray-500">Min Stock</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Location:</span>
                <span className="font-medium">{item.location}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-500">Expiry Date:</span>
                <span className="font-medium">
                  {new Date(item.expiryDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-500">Last Updated:</span>
                <span className="font-medium">
                  {new Date(item.lastUpdated).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}