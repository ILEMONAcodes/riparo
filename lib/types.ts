export type UserRole = 'ADMIN' | 'SALES_AGENT';

export type PropertyStatus = 'Available' | 'Pending' | 'Sold';

export type LeadStatus =
  | 'New'
  | 'Contacted'
  | 'Inspection Scheduled'
  | 'Negotiating'
  | 'Closed'
  | 'Lost';

export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  status: PropertyStatus;
  agentName: string;
  image: string;
  dateAdded: string;
}

export interface Lead {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  interestedProperty: string;
  budget: number;
  date: string;
  status: LeadStatus;
  assignedAgent: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  avatar: string;
  assignedLeads: number;
  closedDeals: number;
  revenueGenerated: number;
  performancePercent: number;
  status: 'Active' | 'On Leave' | 'Inactive';
}

export interface Appointment {
  id: string;
  clientName: string;
  propertyName: string;
  date: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}