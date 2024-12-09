import React from 'react';
import { useCustomerStore } from '../../store/customerStore';
import { Building2, User, Phone, Mail, MapPin } from 'lucide-react';

export default function CustomerList() {
  const { customers } = useCustomerStore();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {customer.name}
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                {customer.type}
              </span>
            </div>
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                customer.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {customer.status}
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <User className="h-4 w-4 mr-2" />
              {customer.contactPerson}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              {customer.phone}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              {customer.email}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {customer.address}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}