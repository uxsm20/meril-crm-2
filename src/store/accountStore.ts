import { create } from 'zustand';
import { AccountAIState } from '../types/account';

export const useAccountStore = create<AccountAIState>((set) => ({
  selectedAccount: 'BitForge',
  accounts: ['BitForge', 'Recurve', 'TresJolie', 'MediTech', 'HealthCare Plus'],
  insights: {
    pricing: 'Pricing is a challenge for mid-tier SKUs. Last discussed at $10k annual.',
    painPoints: 'Main pain point: integration complexity with their legacy CRM system.'
  }
}));
