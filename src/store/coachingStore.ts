import { create } from 'zustand';
import { CoachingInboxData } from '../types/coaching';

interface CoachingStore {
  coachingInbox: CoachingInboxData;
  setFilters: (filters: Partial<CoachingInboxData['filters']>) => void;
}

export const useCoachingStore = create<CoachingStore>((set) => ({
  coachingInbox: {
    filters: {
      requestType: 'Feedback Requests',
      callCategory: 'All call categories'
    },
    items: [
      {
        requestor: 'Elizabeth Burke',
        requestType: 'Feedback',
        callTitle: 'Presentation with Sample',
        timestamp: '2024-08-22T11:16:00Z',
        interactionAlerts: 2,
        summary: 'Call brief'
      },
      {
        requestor: 'Alex Castillo',
        requestType: 'Feedback',
        callTitle: 'Call brief',
        timestamp: '2024-08-20T09:30:00Z',
        interactionAlerts: 0,
        summary: 'Call brief'
      }
    ]
  },
  setFilters: (newFilters) =>
    set((state) => ({
      coachingInbox: {
        ...state.coachingInbox,
        filters: { ...state.coachingInbox.filters, ...newFilters }
      }
    }))
}));
