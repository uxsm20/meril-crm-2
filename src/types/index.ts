export interface User {
  id: string;
  name: string;
  email: string;
  role: 'sales' | 'regulatory' | 'support' | 'leadership';
}

export interface Customer {
  id: string;
  name: string;
  type: 'hospital' | 'distributor' | 'doctor';
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  status: 'active' | 'inactive';
}

export interface Device {
  id: string;
  name: string;
  category: 'cardiovascular' | 'orthopedic' | 'diagnostics' | 'endo-surgery';
  certifications: Certification[];
  batchNumber: string;
  status: 'active' | 'recalled' | 'discontinued';
}

export interface Certification {
  id: string;
  type: 'FDA' | 'CE' | 'ISO';
  number: string;
  issueDate: string;
  expiryDate: string;
  status: 'active' | 'expired' | 'pending';
}

export interface Deal {
  id: string;
  customerId: string;
  deviceId: string;
  title: string;
  value: number;
  stage: 'lead' | 'qualification' | 'proposal' | 'negotiation' | 'closed';
  probability: number;
  expectedCloseDate: string;
  notes: string;
}

export interface AdverseEvent {
  id: string;
  deviceId: string;
  reportDate: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  status: 'reported' | 'investigating' | 'resolved';
  resolution?: string;
}

export interface ComplianceItem {
  id: string;
  deviceId: string;
  type: 'certification' | 'audit' | 'registration';
  title: string;
  dueDate: string;
  status: 'pending' | 'in_progress' | 'completed' | 'expired';
  assignedTo: string;
  priority: 'low' | 'medium' | 'high';
}

export interface InventoryItem {
  id: string;
  deviceId: string;
  batchNumber: string;
  quantity: number;
  location: string;
  expiryDate: string;
  status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'expired';
  lastUpdated: string;
  minimumStock: number;
}

export interface QualityRecord {
  id: string;
  deviceId: string;
  type: 'ncr' | 'capa' | 'audit' | 'complaint';
  title: string;
  description: string;
  status: 'open' | 'investigating' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  assignedTo: string;
  createdAt: string;
  resolvedAt?: string;
  dueDate: string;
}

export interface ReportMetric {
  id: string;
  category: 'sales' | 'quality' | 'inventory' | 'compliance';
  name: string;
  value: number;
  trend: number;
  period: string;
}