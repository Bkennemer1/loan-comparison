import React from 'react';
import ComparisonTable from './components/ComparisonTable';
import CostChart from './components/CostChart';
import PaymentBreakdown from './components/PaymentBreakdown';

const App: React.FC = () => {
  const handlePrint = () => {
    // Ensure window is focused before printing (helps in some iframe environments)
    window.focus();
    // Small timeout to ensure any pending renders or focus events settle
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0 print:min-h-0">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden print:shadow-none print:max-w-none print:rounded-none print:overflow-visible">
        
        {/* Header Section */}
        <div className="bg-slate-900 text-white p-8 text-center print:bg-slate-900 print:text-white print:p-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Loan Comparison Snapshot
          </h1>
          <p className="text-slate-300 text-lg font-light tracking-wide uppercase">
            Side-by-Side Breakdown
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-10 print:p-4">
          
          {/* Top Column Headers (Desktop Only - Sticky) */}
          <div className="hidden md:flex items-center mb-6 pb-2 border-b-2 border-slate-800 sticky top-0 bg-white z-10 print:static print:flex">
            <div className="flex-1 font-bold text-slate-800 text-lg pl-4">Item</div>
            <div className="w-1/4 font-semibold text-slate-500 text-lg text-left">Other Lender</div>
            <div className="w-1/4 font-bold text-slate-800 text-lg text-right pr-4">Guarantee Mortgage</div>
          </div>

          <ComparisonTable />

          <div className="my-10 border-t border-slate-200 print:my-6"></div>

          <PaymentBreakdown />
          
          <div className="my-10 border-t border-slate-200 print:my-6"></div>

          <CostChart />
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-6 text-center border-t border-slate-100 print:bg-white print:border-t-2 print:border-slate-200">
          <p className="text-slate-500 text-sm italic">
            Numbers shown above are based on the most recent estimates and appraisal values from each lender.
          </p>
          <div className="mt-4 text-xs text-slate-400 uppercase tracking-widest">
            Confidential • For Comparison Purposes Only
          </div>
        </div>
      </div>
      
      {/* Floating Action Button (Screen Only) */}
      <div className="fixed bottom-6 right-6 print:hidden">
        <button 
          onClick={handlePrint} 
          className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
          </svg>
          Print / Save PDF
        </button>
      </div>
    </div>
  );
};

export default App;