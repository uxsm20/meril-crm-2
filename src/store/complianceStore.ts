import { create } from 'zustand';
import { ComplianceItem } from '../types';

interface ComplianceStore {
  items: ComplianceItem[];
  addItem: (item: ComplianceItem) => void;
  updateItem: (id: string, item: Partial<ComplianceItem>) => void;
  deleteItem: (id: string) => void;
}

export const useComplianceStore = create<ComplianceStore>((set) => ({
  items: [
    {
      id: '1',
      deviceId: '1',
      type: 'certification',
      title: 'CE Mark Renewal',
      dueDate: '2024-12-31',
      status: 'in_progress',
      assignedTo: 'John Doe',
      priority: 'high',
    },
  ],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  updateItem: (id, updatedItem) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, ...updatedItem } : i
      ),
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),
}));