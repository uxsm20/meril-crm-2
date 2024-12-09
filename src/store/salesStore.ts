import { create } from 'zustand';
import { Deal } from '../types';

interface SalesStore {
  deals: Deal[];
  addDeal: (deal: Deal) => void;
  updateDeal: (id: string, deal: Partial<Deal>) => void;
  deleteDeal: (id: string) => void;
}

export const useSalesStore = create<SalesStore>((set) => ({
  deals: [
    {
      id: '1',
      customerId: '1',
      deviceId: '1',
      title: 'Apollo Hospitals - MyVal THV System',
      value: 500000,
      stage: 'proposal',
      probability: 60,
      expectedCloseDate: '2024-06-30',
      notes: 'Proposal submitted, awaiting technical review',
    },
  ],
  addDeal: (deal) => set((state) => ({ deals: [...state.deals, deal] })),
  updateDeal: (id, updatedDeal) =>
    set((state) => ({
      deals: state.deals.map((d) =>
        d.id === id ? { ...d, ...updatedDeal } : d
      ),
    })),
  deleteDeal: (id) =>
    set((state) => ({
      deals: state.deals.filter((d) => d.id !== id),
    })),
}));