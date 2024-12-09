import { create } from 'zustand';
import { InventoryItem } from '../types';

interface InventoryStore {
  items: InventoryItem[];
  addItem: (item: InventoryItem) => void;
  updateItem: (id: string, item: Partial<InventoryItem>) => void;
  deleteItem: (id: string) => void;
}

export const useInventoryStore = create<InventoryStore>((set) => ({
  items: [
    {
      id: '1',
      deviceId: '1',
      batchNumber: 'BATCH-2024-001',
      quantity: 150,
      location: 'Mumbai Warehouse',
      expiryDate: '2025-12-31',
      status: 'in_stock',
      lastUpdated: '2024-03-15',
      minimumStock: 50,
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