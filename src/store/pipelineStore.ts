import { create } from 'zustand';
import { PipelineData } from '../types/pipeline';

interface PipelineStore {
  pipeline: PipelineData;
}

export const usePipelineStore = create<PipelineStore>(() => ({
  pipeline: {
    bookings: 135500,
    bookingsChangePercent: 16,
    coverageRatio: 2.3,
    totalCoverageValue: 1540000,
    totalDeals: 27,
    stages: [
      {
        name: 'Qualified',
        converted: 2,
        open: 1,
        lost: 1
      },
      {
        name: 'Develop',
        converted: 1,
        open: 3,
        lost: 0
      }
    ]
  }
}));
