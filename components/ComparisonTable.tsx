import React from 'react';
import { COMPARISON_DATA } from '../constants';

const ComparisonTable: React.FC = () => {
  return (
    <div className="space-y-8">
      {COMPARISON_DATA.map((section, index) => (
        <div key={index} className="w-full break-inside-avoid">
          <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3 border-b border-slate-200 pb-1">
            {section.title}
          </h3>
          
          <div className="w-full text-left border-collapse">
             {/* Header Row for the section (Hidden visually for cleaner look as main header handles it, but semantic for screen readers) */}
             <div className="hidden md:flex bg-slate-50 text-slate-500 text-xs font-medium uppercase py-2 px-4 rounded-t-lg print:flex print:bg-slate-100">
                <div className="flex-1">Item</div>
                <div className="w-1/3 md:w-1/4">Other Lender</div>
                <div className="w-1/3 md:w-1/4 text-right">Guarantee Mortgage</div>
             </div>

            <div className="flex flex-col">
              {section.rows.map((row, rIndex) => (
                <div 
                  key={rIndex} 
                  className={`
                    flex flex-col md:flex-row md:items-center justify-between py-3 px-2 md:px-4 
                    border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors
                    ${row.highlight ? 'bg-slate-50/50 print:bg-slate-50' : ''}
                  `}
                >
                  <div className="flex-1 text-slate-700 font-medium text-sm md:text-base mb-1 md:mb-0">
                    {row.label}
                    {row.description && (
                      <div className="text-xs text-slate-400 font-normal mt-0.5 italic">
                        {row.description}
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile Layout: Label is above, values are side-by-side below */}
                  <div className="flex w-full md:w-auto md:contents text-sm md:text-base">
                    <div className={`w-1/2 md:w-1/4 ${row.valueAClassName ? row.valueAClassName : 'text-slate-500 md:text-slate-600'}`}>
                      <span className="md:hidden text-xs text-slate-400 block mb-1 print:hidden">Other Lender</span>
                      {row.valueA}
                    </div>
                    <div className={`w-1/2 md:w-1/4 text-right ${row.highlight ? 'font-bold text-slate-900' : 'text-slate-800'}`}>
                      <span className="md:hidden text-xs text-slate-400 block mb-1 print:hidden">Guarantee Mortgage</span>
                      {row.valueB}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonTable;