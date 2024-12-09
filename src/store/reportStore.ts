import { create } from 'zustand';
import { ReportMetric } from '../types';

interface ReportStore {
  metrics: ReportMetric[];
  addMetric: (metric: ReportMetric) => void;
  updateMetric: (id: string, metric: Partial<ReportMetric>) => void;
  deleteMetric: (id: string) => void;
}

export const useReportStore = create<ReportStore>((set) => ({
  metrics: [
    {
      id: '1',
      category: 'sales',
      name: 'Monthly Revenue',
      value: 2500000,
      trend: 12.5,
      period: '2024-03',
    },
    {
      id: '2',
      category: 'quality',
      name: 'Open NCRs',
      value: 5,
      trend: -20,
      period: '2024-03',
    },
    {
      id: '3',
      category: 'inventory',
      name: 'Stock Value',
      value: 10000000,
      trend: 5.2,
      period: '2024-03',
    },
  ],
  addMetric: (metric) =>
    set((state) => ({ metrics: [...state.metrics, metric] })),
  updateMetric: (id, updatedMetric) =>
    set((state) => ({
      metrics: state.metrics.map((m) =>
        m.id === id ? { ...m, ...updatedMetric } : m
      ),
    })),
  deleteMetric: (id) =>
    set((state) => ({
      metrics: state.metrics.filter((m) => m.id !== id),
    })),
}));