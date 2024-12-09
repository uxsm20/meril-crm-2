export interface CoachingFilters {
  requestType: string;
  callCategory: string;
}

export interface CoachingRequest {
  requestor: string;
  requestType: string;
  callTitle: string;
  timestamp: string;
  interactionAlerts: number;
  summary: string;
}

export interface CoachingInboxData {
  filters: CoachingFilters;
  items: CoachingRequest[];
}
