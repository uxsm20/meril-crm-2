import React from 'react';
import { useSalesStore } from '../store/salesStore';
import { useCustomerStore } from '../store/customerStore';
import { useDeviceStore } from '../store/deviceStore';
import { IndianRupee, ArrowRight } from 'lucide-react';

export default function SalesPipeline() {
  const { deals } = useSalesStore();
  const { customers } = useCustomerStore();
  const { devices } = useDeviceStore();

  const stages = ['lead', 'qualification', 'proposal', 'negotiation', 'closed'];

  const getCustomerName = (customerId: string) =>
    customers.find((c) => c.id === customerId)?.name || 'Unknown Customer';

  const getDeviceName = (deviceId: string) =>
    devices.find((d) => d.id === deviceId)?.name || 'Unknown Device';

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Sales Pipeline</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add Deal
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {stages.map((stage) => (
          <div key={stage} className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900 capitalize">
                {stage}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {deals.filter((d) => d.stage === stage).length} deals
              </p>
            </div>

            <div className="space-y-4">
              {deals
                .filter((deal) => deal.stage === stage)
                .map((deal) => (
                  <div
                    key={deal.id}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                  >
                    <h4 className="font-medium text-gray-900">{deal.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {getCustomerName(deal.customerId)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {getDeviceName(deal.deviceId)}
                    </p>
                    <div className="flex items-center mt-2 text-sm">
                      <IndianRupee className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900 font-medium">
                        {deal.value.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <div
                        className="h-2 rounded-full bg-blue-200"
                        style={{ width: `${deal.probability}%` }}
                      >
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: `${deal.probability}%` }}
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        {deal.probability}%
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}