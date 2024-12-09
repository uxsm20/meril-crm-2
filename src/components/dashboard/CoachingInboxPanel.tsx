import React, { useState } from 'react';
import { ChevronDown, AlertCircle, MessageSquare } from 'lucide-react';
import { useCoachingStore } from '../../store/coachingStore';

const requestTypes = ['Feedback Requests', 'All Requests', 'Pending Reviews'];
const callCategories = ['All call categories', 'Presentations', 'Discovery Calls', 'Demo Calls'];

export default function CoachingInboxPanel() {
  const { coachingInbox, setFilters } = useCoachingStore();
  const [isRequestTypeOpen, setIsRequestTypeOpen] = useState(false);
  const [isCallCategoryOpen, setIsCallCategoryOpen] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header with Filters */}
      <div className="mb-6 space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">Coaching Inbox</h2>
        
        <div className="flex gap-2">
          {/* Request Type Filter */}
          <div className="relative">
            <button
              onClick={() => setIsRequestTypeOpen(!isRequestTypeOpen)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {coachingInbox.filters.requestType}
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {isRequestTypeOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {requestTypes.map((type) => (
                  <button
                    key={type}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setFilters({ requestType: type });
                      setIsRequestTypeOpen(false);
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Call Category Filter */}
          <div className="relative">
            <button
              onClick={() => setIsCallCategoryOpen(!isCallCategoryOpen)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {coachingInbox.filters.callCategory}
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {isCallCategoryOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {callCategories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setFilters({ callCategory: category });
                      setIsCallCategoryOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4 flex-grow">
        {coachingInbox.items.map((item, index) => (
          <button
            key={index}
            className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => {/* TODO: Implement request details view */}}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {item.requestor} requested feedback
                </p>
                <p className="mt-1 text-sm text-gray-600">{item.callTitle}</p>
                <div className="mt-2 flex items-center gap-4">
                  <span className="text-xs text-gray-500">
                    {formatDate(item.timestamp)}
                  </span>
                  {item.interactionAlerts > 0 && (
                    <span className="flex items-center gap-1 text-xs font-medium text-amber-600">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {item.interactionAlerts} Interaction Alerts
                    </span>
                  )}
                </div>
              </div>
              <MessageSquare className="h-5 w-5 text-gray-400 flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>

      {/* Action Button */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button 
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Review All Requests
        </button>
      </div>
    </div>
  );
}
