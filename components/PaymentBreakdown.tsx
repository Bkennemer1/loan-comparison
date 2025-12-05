import React from 'react';

const PaymentBreakdown: React.FC = () => {
  return (
    <div className="w-full mt-10 mb-8 break-inside-avoid">
      <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-6 border-b border-slate-200 pb-1">
        Payment Comparison (Including Escrow — Same Loan Amount)
      </h3>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 print:grid-cols-2">
        
        {/* Guarantee Mortgage Table */}
        <div className="bg-white rounded-xl border border-emerald-100 shadow-sm overflow-hidden flex flex-col break-inside-avoid">
          <div className="bg-emerald-50 px-5 py-4 border-b border-emerald-100 flex justify-between items-center print:bg-emerald-50 print:border-emerald-100">
            <div>
              <h4 className="font-bold text-emerald-900 text-lg">Guarantee Mortgage</h4>
              <div className="text-xs text-emerald-700 font-medium mt-1 inline-block bg-emerald-100 px-2 py-0.5 rounded-full print:bg-emerald-100">
                3.999% → 4.999% → 5.999%
              </div>
            </div>
            <div className="h-8 w-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center print:bg-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 12c0 5.05 3.129 9.38 7.625 11.185a.75.75 0 00.558 0C16.92 20.916 20.25 16.32 20.25 11.458c0-1.87-.294-3.665-.834-5.325a.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zM12 4.25a.75.75 0 01.53.22 8.212 8.212 0 006.012 2.373c.3.945.458 1.956.458 3.015 0 3.844-2.58 7.243-6.22 8.825a15.772 15.772 0 01-6.22-8.825c0-1.298.24-2.522.673-3.655a8.212 8.212 0 005.237-2.173A.75.75 0 0112 4.25z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-emerald-900 bg-emerald-50/30 border-b border-emerald-100 print:bg-emerald-50">
                  <th className="py-3 px-4 font-semibold">Period</th>
                  <th className="py-3 px-2 font-medium text-emerald-700/70 text-right">P&I</th>
                  <th className="py-3 px-2 font-medium text-emerald-700/70 text-right">MI</th>
                  <th className="py-3 px-2 font-medium text-emerald-700/70 text-right">Escrow</th>
                  <th className="py-3 px-4 font-bold text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                <tr>
                  <td className="py-3 px-4 text-slate-700 font-medium">Year 1</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$3,264.41</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$133</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$1,090</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold text-right bg-emerald-50/30 print:bg-emerald-50">$4,487.41</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-700 font-medium">Year 2</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$3,670.64</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$133</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$1,090</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold text-right bg-emerald-50/30 print:bg-emerald-50">$4,893.64</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-700 font-medium">Years 3–30</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$3,989.10</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$133</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$1,090</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold text-right bg-emerald-50/30 print:bg-emerald-50">$5,212.10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Other Lender Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col break-inside-avoid">
          <div className="bg-slate-50 px-5 py-4 border-b border-slate-200 flex justify-between items-center print:bg-slate-50">
             <div>
              <h4 className="font-bold text-slate-700 text-lg">Other Lender</h4>
              <div className="text-xs text-slate-500 font-medium mt-1 inline-block bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                4.500% → 5.500% → 6.500%
              </div>
            </div>
            <div className="h-8 w-8 bg-red-50 text-red-500 rounded-full flex items-center justify-center print:bg-red-50">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                </svg>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-slate-600 bg-slate-50/30 border-b border-slate-100 print:bg-slate-50">
                  <th className="py-3 px-4 font-semibold">Period</th>
                  <th className="py-3 px-2 font-medium text-slate-400 text-right">P&I</th>
                  <th className="py-3 px-2 font-medium text-slate-400 text-right">MI</th>
                  <th className="py-3 px-2 font-medium text-slate-400 text-right">Escrow</th>
                  <th className="py-3 px-4 font-bold text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 text-slate-700 font-medium">Year 1</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$3,375.00</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$307</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$1,211</td>
                  <td className="py-3 px-4 text-slate-700 font-bold text-right bg-slate-50/50 print:bg-slate-50">$4,893.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-700 font-medium">Year 2</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$3,785.00</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$307</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$1,211</td>
                  <td className="py-3 px-4 text-slate-700 font-bold text-right bg-slate-50/50 print:bg-slate-50">$5,303.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-700 font-medium">Years 3–30</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$4,207.00</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$307</td>
                  <td className="py-3 px-2 text-slate-500 text-right">$1,211</td>
                  <td className="py-3 px-4 text-slate-700 font-bold text-right bg-slate-50/50 print:bg-slate-50">$5,725.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Summary Chips */}
      <div className="mt-8 bg-slate-50 rounded-lg p-5 border border-slate-100 break-inside-avoid print:bg-slate-50 print:border">
        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Monthly Savings with Guarantee Mortgage</h5>
        <div className="flex flex-col md:flex-row gap-4 justify-around">
          <div className="flex items-center justify-between md:flex-col md:justify-center bg-white p-3 rounded-md shadow-sm border border-slate-100 flex-1 print:border">
            <span className="text-sm font-medium text-slate-500 mb-0 md:mb-1">Year 1</span>
            <span className="text-lg font-bold text-emerald-600">~$405/mo lower</span>
          </div>
          <div className="flex items-center justify-between md:flex-col md:justify-center bg-white p-3 rounded-md shadow-sm border border-slate-100 flex-1 print:border">
            <span className="text-sm font-medium text-slate-500 mb-0 md:mb-1">Year 2</span>
            <span className="text-lg font-bold text-emerald-600">~$409/mo lower</span>
          </div>
          <div className="flex items-center justify-between md:flex-col md:justify-center bg-white p-3 rounded-md shadow-sm border border-slate-100 flex-1 print:border">
            <span className="text-sm font-medium text-slate-500 mb-0 md:mb-1">Years 3–30</span>
            <span className="text-lg font-bold text-emerald-600">~$513/mo lower</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBreakdown;