import React, { useState, useEffect } from 'react';
import { Bell, Settings, ChevronDown } from 'lucide-react';
import { useRoleStore } from '../../store/roleStore';
import clsx from 'clsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentRole, setRole } = useRoleStore();

  const roles = [
    { id: 'sales', label: 'Sales' },
    { id: 'regulatory', label: 'Regulatory' },
    { id: 'customer support', label: 'Customer Support' },
    { id: 'leadership', label: 'Leadership' },
  ] as const;

  useEffect(() => {
    // Force a re-render of the dashboard when role changes
    const reloadDashboard = () => {
      window.dispatchEvent(new Event('role-changed'));
    };
    reloadDashboard();
  }, [currentRole]);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://www.merillife.com/assets/images/logo.png"
              alt="Meril Life Sciences"
              className="h-8"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {roles.find(r => r.id === currentRole)?.label}
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        onClick={() => {
                          setRole(role.id as Role);
                          setIsOpen(false);
                        }}
                        className={clsx(
                          'block w-full text-left px-4 py-2 text-sm',
                          role.id === currentRole
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700 hover:bg-gray-50'
                        )}
                        role="menuitem"
                      >
                        {role.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="h-5 w-5 text-gray-500" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}