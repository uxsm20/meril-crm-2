import React, { useState } from 'react';
import { ChevronDown, Search, MessageSquare } from 'lucide-react';
import { useAccountStore } from '../../store/accountStore';

export default function AccountAIPanel() {
  const { selectedAccount, accounts, insights } = useAccountStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [isAsking, setIsAsking] = useState(false);

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsAsking(true);
    // TODO: Implement AI query functionality
    setTimeout(() => {
      setIsAsking(false);
      setQuestion('');
    }, 1000);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Account AI</h2>
            <p className="text-sm text-gray-500">
              Get AI-generated answers based on recent calls and emails
            </p>
          </div>
          
          {/* Account Selector */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {selectedAccount}
              <ChevronDown className="h-4 w-4" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {accounts.map((account) => (
                  <button
                    key={account}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      // TODO: Implement account selection
                      setIsDropdownOpen(false);
                    }}
                  >
                    {account}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Pricing</h3>
          <p className="text-sm text-gray-600">{insights.pricing}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Pain Points</h3>
          <p className="text-sm text-gray-600">{insights.painPoints}</p>
        </div>
      </div>

      {/* Ask Question Section */}
      <div className="mt-auto">
        <form onSubmit={handleAskQuestion}>
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything about this account..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full pl-4 pr-12 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isAsking}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600"
            >
              {isAsking ? (
                <div className="h-5 w-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
              ) : (
                <MessageSquare className="h-5 w-5" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
