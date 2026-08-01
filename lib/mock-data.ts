// lib/mock-data.ts

import { Property, Lead, Agent, Appointment } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    name: 'Riparo Prime Palms Estate - Phase 1',
    location: 'Ilorin, Kwara State',
    price: 15000000, // N15,000,000 per plot
    status: 'Available',
    agentName: 'Amina Yusuf',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    dateAdded: '2026-07-10',
  },
  {
    id: 'prop-2',
    name: 'Riparo Commercial Hub & Office Complex',
    location: 'Fate Road, Ilorin, Kwara State',
    price: 120000000,
    status: 'Pending',
    agentName: 'Chidi Okechukwu',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    dateAdded: '2026-06-15',
  },
  {
    id: 'prop-3',
    name: 'Riparo Haven Luxury 4-Bed Terrace',
    location: 'GRA, Ilorin, Kwara State',
    price: 85000000,
    status: 'Sold',
    agentName: 'Amina Yusuf',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    dateAdded: '2026-05-20',
  },
  {
    id: 'prop-4',
    name: 'Riparo Verified Agro-Investment Plots',
    location: 'Ganmo, Kwara State',
    price: 8500000,
    status: 'Available',
    agentName: 'David Adeleke',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    dateAdded: '2026-07-25',
  },
];

export const MOCK_LEADS: Lead[] = [
  {
    id: 'lead-101',
    clientName: 'Dr. Samuel Alabi',
    phone: '+234 906 000 1552',
    email: 's.alabi@healthcore.ng',
    interestedProperty: 'Riparo Prime Palms Estate - Phase 1',
    budget: 30000000, // Interested in buying 2 plots
    date: '2026-07-28',
    status: 'Inspection Scheduled',
    assignedAgent: 'Amina Yusuf',
  },
  {
    id: 'lead-102',
    clientName: 'Florence Nwachukwu',
    phone: '+234 812 987 6543',
    email: 'fnwachukwu@corp.com',
    interestedProperty: 'Riparo Haven Luxury 4-Bed Terrace',
    budget: 90000000,
    date: '2026-07-31',
    status: 'New',
    assignedAgent: 'David Adeleke',
  },
  {
    id: 'lead-103',
    clientName: 'Kalu Ibrahim',
    phone: '+234 901 555 0192',
    email: 'kalu.i@venturecap.io',
    interestedProperty: 'Riparo Commercial Hub & Office Complex',
    budget: 120000000,
    date: '2026-07-22',
    status: 'Negotiating',
    assignedAgent: 'Chidi Okechukwu',
  },
];

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'agent-1',
    name: 'Amina Yusuf',
    email: 'amina@riparo.ng',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    assignedLeads: 24,
    closedDeals: 12,
    revenueGenerated: 420000000,
    performancePercent: 96,
    status: 'Active',
  },
  {
    id: 'agent-2',
    name: 'Chidi Okechukwu',
    email: 'chidi@riparo.ng',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    assignedLeads: 18,
    closedDeals: 7,
    revenueGenerated: 280000000,
    performancePercent: 88,
    status: 'Active',
  },
  {
    id: 'agent-3',
    name: 'David Adeleke',
    email: 'david@riparo.ng',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    assignedLeads: 14,
    closedDeals: 5,
    revenueGenerated: 165000000,
    performancePercent: 82,
    status: 'Active',
  },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'app-1',
    clientName: 'Dr. Samuel Alabi',
    propertyName: 'Riparo Prime Palms Estate - Phase 1',
    date: '2026-08-03',
    time: '10:00 AM',
    status: 'Scheduled',
  },
  {
    id: 'app-2',
    clientName: 'Alhaji Bashir Sanusi',
    propertyName: 'Riparo Verified Agro-Investment Plots',
    date: '2026-08-04',
    time: '02:00 PM',
    status: 'Scheduled',
  },
];