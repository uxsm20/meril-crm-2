import React from 'react';
import CustomerList from '../components/customers/CustomerList';

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add Customer
        </button>
      </div>
      <CustomerList />
    </div>
  );
}