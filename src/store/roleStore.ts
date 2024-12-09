import { create } from 'zustand';

type Role = 'sales' | 'regulatory' | 'customer support' | 'leadership';

interface RoleState {
  currentRole: Role;
  setRole: (role: Role) => void;
}

export const useRoleStore = create<RoleState>((set) => ({
  currentRole: 'sales',
  setRole: (role) => set({ currentRole: role }),
}));
