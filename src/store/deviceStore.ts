import { create } from 'zustand';
import { Device } from '../types';

interface DeviceStore {
  devices: Device[];
  addDevice: (device: Device) => void;
  updateDevice: (id: string, device: Partial<Device>) => void;
  deleteDevice: (id: string) => void;
}

export const useDeviceStore = create<DeviceStore>((set) => ({
  devices: [
    {
      id: '1',
      name: 'MyVal™ THV System',
      category: 'cardiovascular',
      certifications: [
        {
          id: 'cert1',
          type: 'CE',
          number: 'CE-2023-001',
          issueDate: '2023-01-01',
          expiryDate: '2025-01-01',
          status: 'active',
        },
      ],
      batchNumber: 'BATCH-2024-001',
      status: 'active',
    },
    // More sample data...
  ],
  addDevice: (device) =>
    set((state) => ({ devices: [...state.devices, device] })),
  updateDevice: (id, updatedDevice) =>
    set((state) => ({
      devices: state.devices.map((d) =>
        d.id === id ? { ...d, ...updatedDevice } : d
      ),
    })),
  deleteDevice: (id) =>
    set((state) => ({
      devices: state.devices.filter((d) => d.id !== id),
    })),
}));