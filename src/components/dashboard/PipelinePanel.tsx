import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { usePipelineStore } from '../../store/pipelineStore';
import { formatCurrency } from '../../utils/format';

const COLORS = {
  converted: '#3B82F6', // blue
  open: '#8B5CF6',     // purple
  lost: '#F472B6'      // pink
};

export default function PipelinePanel() {
  const { pipeline } = usePipelineStore();

  // Transform data for the stacked bar chart
  const chartData = pipeline.stages.map(stage => ({
    name: stage.name,
    Converted: stage.converted,
    Open: stage.open,
    Lost: stage.lost
  }));

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Your Pipeline</h2>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">Bookings</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-gray-900">
              {formatCurrency(pipeline.bookings)}
            </span>
            <span className={`text-sm font-medium ${
              pipeline.bookingsChangePercent >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {pipeline.bookingsChangePercent > 0 ? '+' : ''}
              {pipeline.bookingsChangePercent}%
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">Coverage</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-gray-900">
              {pipeline.coverageRatio}x
            </span>
            <span className="text-sm text-gray-500">
              ({formatCurrency(pipeline.totalCoverageValue)} / {pipeline.totalDeals} deals)
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-grow mb-6" style={{ minHeight: '150px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
            barSize={32}
          >
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              axisLine={false}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
            <Legend 
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '12px' }}
            />
            <Bar 
              dataKey="Converted" 
              stackId="a" 
              fill={COLORS.converted}
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="Open" 
              stackId="a" 
              fill={COLORS.open}
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="Lost" 
              stackId="a" 
              fill={COLORS.lost}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <button 
          onClick={() => {/* TODO: Implement navigation */}}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Go to Forecast
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
