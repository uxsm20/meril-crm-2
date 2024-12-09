import { create } from 'zustand';
import { Customer } from '../types';

interface CustomerStore {
  customers: Customer[];
  addCustomer: (customer: Customer) => void;
  updateCustomer: (id: string, customer: Partial<Customer>) => void;
  deleteCustomer: (id: string) => void;
}

export const useCustomerStore = create<CustomerStore>((set) => ({
  customers: [
    {
      id: '1',
      name: 'Apollo Hospitals',
      type: 'hospital',
      contactPerson: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@apollo.com',
      phone: '+91 98765 43210',
      address: 'Plot No. 1, Industrial Area, Mumbai',
      status: 'active',
    },
    // More sample data...
  ],
  addCustomer: (customer) =>
    set((state) => ({ customers: [...state.customers, customer] })),
  updateCustomer: (id, updatedCustomer) =>
    set((state) => ({
      customers: state.customers.map((c) =>
        c.id === id ? { ...c, ...updatedCustomer } : c
      ),
    })),
  deleteCustomer: (id) =>
    set((state) => ({
      customers: state.customers.filter((c) => c.id !== id),
    })),
}));