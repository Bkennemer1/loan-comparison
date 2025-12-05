import { ComparisonSectionData, ChartDataPoint } from './types';

export const COMPARISON_DATA: ComparisonSectionData[] = [
  {
    title: "Section 1: Interest Rate & Payment",
    rows: [
      { label: "Interest Rate", valueA: "6.500%", valueB: "5.999%" },
      { label: "Monthly Payment (Years 1–12)", valueA: "$5,751", valueB: "$5,212" },
      { label: "Mortgage Insurance", valueA: "$307/mo", valueB: "$133/mo" },
      { label: "Total Monthly Payment", valueA: "$5,751", valueB: "$5,212", highlight: true },
    ],
  },
  {
    title: "Section 2: Temporary Buydown",
    rows: [
      { label: "Buydown Type", valueA: "2-1", valueB: "2-1" },
      { label: "Year 1 Rate Basis", valueA: "4.5%", valueB: "3.999%" },
      { label: "Year 2 Rate Basis", valueA: "5.5%", valueB: "4.999%" },
    ],
  },
  {
    title: "Section 3: Appraisal Impact",
    rows: [
      { label: "Appraised Value", valueA: "$670,500", valueB: "$686,000" },
      { label: "Max Loan Allowed (97%)", valueA: "$650,385", valueB: "Reflected correctly" },
      { label: "Loan Amount on LE", valueA: "$669,750", valueB: "$665,420" },
      { label: "Adjustment Needed", valueA: "–$19,365", valueB: "None", highlight: true },
    ],
  },
  {
    title: "Section 4: Cash to Close (assuming no change in sales price from $705,000)",
    rows: [
      { label: "Cash to Close (LE)", valueA: "$45,412", valueB: "$39,079" },
      { label: "Adjustment for Appraisal", valueA: "+$19,365", valueB: "Included" },
      { 
        label: "Actual Cash to Close", 
        valueA: "$64,777", 
        valueB: "$39,079", 
        highlight: true,
        valueAClassName: "text-red-600 font-extrabold" 
      },
    ],
  },
  {
    title: "Section 5: Total Costs",
    rows: [
      { label: "Total Loan Costs", valueA: "~$31,000+", valueB: "$16,813" },
      { 
        label: "APR", 
        valueA: "7.182%", 
        valueB: "6.41%",
        description: "Higher APR indicates higher upfront loan costs and fees."
      },
    ],
  },
];

// Calculation Logic used for these values:
// Loan Amount: $665,420 (Same for both for comparison purposes)
// Term: 30 Years
//
// Guarantee Mortgage:
// Year 1 (3.999%): PMT ~$3,171.39 + MI $133 = $3,304.39/mo * 12 = $39,652.68
// Year 2 (4.999%): PMT ~$3,568.08 + MI $133 = $3,701.08/mo * 12 = $44,412.96
// Years 3-5 (5.999%): PMT ~$3,985.73 + MI $133 = $4,118.73/mo * 36 = $148,274.28
// Total: ~$232,340
//
// Other Lender:
// Year 1 (4.500%): PMT ~$3,371.55 + MI $307 = $3,678.55/mo * 12 = $44,142.60
// Year 2 (5.500%): PMT ~$3,778.12 + MI $307 = $4,085.12/mo * 12 = $49,021.44
// Years 3-5 (6.500%): PMT ~$4,205.90 + MI $307 = $4,512.90/mo * 36 = $162,464.40
// Total: ~$255,628

export const CHART_DATA: ChartDataPoint[] = [
  {
    name: "5-Year Total Cost",
    "Other Lender": 255628,
    "Guarantee Mortgage": 232340,
  },
];