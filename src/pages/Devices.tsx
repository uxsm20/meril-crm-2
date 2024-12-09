import React from 'react';
import DeviceList from '../components/devices/DeviceList';

export default function DevicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Devices</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add Device
        </button>
      </div>
      <DeviceList />
    </div>
  );
}