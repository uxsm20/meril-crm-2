import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Package,
  PieChart,
  ClipboardList,
  Shield,
  Box,
  FileText,
  AlertCircle
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Devices', href: '/devices', icon: Package },
  { name: 'Sales Pipeline', href: '/sales', icon: PieChart },
  { name: 'Post-Market', href: '/post-market', icon: AlertCircle },
  { name: 'Compliance', href: '/compliance', icon: Shield },
  { name: 'Inventory', href: '/inventory', icon: Box },
  { name: 'Quality', href: '/quality', icon: ClipboardList },
  { name: 'Reports', href: '/reports', icon: FileText },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="flex flex-col p-4 gap-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md text-sm ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}