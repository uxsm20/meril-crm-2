import { TrendingUp, Users, Package, AlertCircle, FileText, Shield, HeartPulse, Award } from 'lucide-react';
import { useRoleStore } from '../store/roleStore';

export const useDashboardData = () => {
  const { currentRole } = useRoleStore();

  const dashboardData = {
    sales: {
      title: 'Sales Dashboard',
      stats: [
        {
          name: 'Total Sales',
          value: '₹2.4M',
          change: '+12.3%',
          icon: TrendingUp,
        },
        {
          name: 'Active Customers',
          value: '1,234',
          change: '+3.2%',
          icon: Users,
        },
        {
          name: 'Products',
          value: '456',
          change: '+2.4%',
          icon: Package,
        },
        {
          name: 'Pending Actions',
          value: '23',
          change: '-5.1%',
          icon: AlertCircle,
        },
      ],
    },
    regulatory: {
      title: 'Regulatory Dashboard',
      stats: [
        {
          name: 'Active Submissions',
          value: '45',
          change: '+5.3%',
          icon: FileText,
        },
        {
          name: 'Pending Approvals',
          value: '12',
          change: '-2.1%',
          icon: Shield,
        },
        {
          name: 'Compliance Rate',
          value: '98.5%',
          change: '+0.5%',
          icon: Award,
        },
        {
          name: 'Due Renewals',
          value: '8',
          change: '+1',
          icon: AlertCircle,
        },
      ],
    },
    'customer support': {
      title: 'Customer Support Dashboard',
      stats: [
        {
          name: 'Open Tickets',
          value: '156',
          change: '-12.3%',
          icon: AlertCircle,
        },
        {
          name: 'Avg Response Time',
          value: '2.4h',
          change: '-15.2%',
          icon: TrendingUp,
        },
        {
          name: 'Customer Satisfaction',
          value: '4.8/5',
          change: '+0.2',
          icon: HeartPulse,
        },
        {
          name: 'Active Cases',
          value: '34',
          change: '-8.1%',
          icon: Package,
        },
      ],
    },
    leadership: {
      title: 'Leadership Dashboard',
      stats: [
        {
          name: 'Revenue',
          value: '₹12.4M',
          change: '+15.3%',
          icon: TrendingUp,
        },
        {
          name: 'Market Share',
          value: '23.5%',
          change: '+2.1%',
          icon: Award,
        },
        {
          name: 'Customer Base',
          value: '5,234',
          change: '+8.4%',
          icon: Users,
        },
        {
          name: 'Growth Rate',
          value: '18.2%',
          change: '+3.1%',
          icon: TrendingUp,
        },
      ],
    },
  };

  return dashboardData[currentRole];
};
