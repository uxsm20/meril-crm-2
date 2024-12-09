export interface PipelineStage {
  name: string;
  converted: number;
  open: number;
  lost: number;
}

export interface PipelineData {
  bookings: number;
  bookingsChangePercent: number;
  coverageRatio: number;
  totalCoverageValue: number;
  totalDeals: number;
  stages: PipelineStage[];
}
