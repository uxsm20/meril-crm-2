import { create } from 'zustand';
import { AdverseEvent } from '../types';

interface PostMarketStore {
  events: AdverseEvent[];
  addEvent: (event: AdverseEvent) => void;
  updateEvent: (id: string, event: Partial<AdverseEvent>) => void;
  deleteEvent: (id: string) => void;
}

export const usePostMarketStore = create<PostMarketStore>((set) => ({
  events: [
    {
      id: '1',
      deviceId: '1',
      reportDate: '2024-03-15',
      severity: 'medium',
      description: 'Device malfunction during routine check',
      status: 'investigating',
    },
  ],
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  updateEvent: (id, updatedEvent) =>
    set((state) => ({
      events: state.events.map((e) =>
        e.id === id ? { ...e, ...updatedEvent } : e
      ),
    })),
  deleteEvent: (id) =>
    set((state) => ({
      events: state.events.filter((e) => e.id !== id),
    })),
}));