import { create } from 'zustand';
import { QualityRecord } from '../types';

interface QualityStore {
  records: QualityRecord[];
  addRecord: (record: QualityRecord) => void;
  updateRecord: (id: string, record: Partial<QualityRecord>) => void;
  deleteRecord: (id: string) => void;
}

export const useQualityStore = create<QualityStore>((set) => ({
  records: [
    {
      id: '1',
      deviceId: '1',
      type: 'ncr',
      title: 'Package Integrity Issue',
      description: 'Multiple units found with compromised sterile packaging',
      status: 'investigating',
      priority: 'high',
      assignedTo: 'Quality Team Lead',
      createdAt: '2024-03-15',
      dueDate: '2024-03-22',
    },
  ],
  addRecord: (record) =>
    set((state) => ({ records: [...state.records, record] })),
  updateRecord: (id, updatedRecord) =>
    set((state) => ({
      records: state.records.map((r) =>
        r.id === id ? { ...r, ...updatedRecord } : r
      ),
    })),
  deleteRecord: (id) =>
    set((state) => ({
      records: state.records.filter((r) => r.id !== id),
    })),
}));