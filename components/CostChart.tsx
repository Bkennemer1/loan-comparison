import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { CHART_DATA } from '../constants';

const CostChart: React.FC = () => {
  // Calculated Difference: 255628 - 232340 = 23288
  const savingsAmount = 23288;

  return (
    <div className="mt-8 mb-4 break-inside-avoid">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        
        {/* Chart Section */}
        <div className="flex-1 h-80">
          <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4 border-b border-slate-200 pb-1">
            5-Year Cost Comparison (P&I + MI Only)
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={CHART_DATA}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={80}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                stroke="#64748b" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="#64748b" 
                fontSize={12} 
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} 
                tickLine={false} 
                axisLine={false}
              />
              <Tooltip 
                cursor={{fill: '#f1f5f9'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              />
              <Legend wrapperStyle={{paddingTop: '20px'}} />
              {/* Red for Other Lender (More expensive) */}
              <Bar 
                dataKey="Other Lender" 
                fill="#ef4444" 
                radius={[4, 4, 0, 0]} 
                label={{ position: 'top', fill: '#ef4444', fontSize: 12, formatter: (val: number) => `$${val.toLocaleString()}` }} 
              />
              {/* Green for Guarantee Mortgage (Cheaper) */}
              <Bar 
                dataKey="Guarantee Mortgage" 
                fill="#10b981" 
                radius={[4, 4, 0, 0]} 
                label={{ position: 'top', fill: '#10b981', fontSize: 12, fontWeight: 'bold', formatter: (val: number) => `$${val.toLocaleString()}` }} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Hero Metric Section - Total Savings */}
        <div className="md:w-72 bg-emerald-50 rounded-xl p-6 border border-emerald-100 flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden print:bg-emerald-50 print:border">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
          
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs mb-3">
            Total 5-Year Savings
          </span>
          
          <span className="text-4xl md:text-5xl font-extrabold text-emerald-700 tracking-tight my-2">
            ${savingsAmount.toLocaleString()}
          </span>
          
          <div className="w-12 h-1 bg-emerald-200 rounded-full my-4 print:bg-emerald-200"></div>

          <div className="text-xs text-emerald-800/70 font-medium leading-relaxed">
            With Guarantee Mortgage, you save over <strong>$23k</strong> in the first 5 years through lower rates and lower MI.
          </div>
        </div>

      </div>
    </div>
  );
};

export default CostChart;