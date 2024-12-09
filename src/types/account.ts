export interface AccountInsight {
  pricing: string;
  painPoints: string;
}

export interface AccountAIState {
  selectedAccount: string;
  accounts: string[];
  insights: AccountInsight;
}
