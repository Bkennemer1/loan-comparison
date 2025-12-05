export interface ComparisonRowData {
  label: string;
  valueA: string; // Other Lender
  valueB: string; // Guarantee Mortgage
  highlight?: boolean;
  valueAClassName?: string; // Optional: specific styling for Other Lender value
  description?: string; // Optional: helper text below the label
}

export interface ComparisonSectionData {
  title: string;
  rows: ComparisonRowData[];
}

export interface ChartDataPoint {
  name: string;
  "Other Lender": number;
  "Guarantee Mortgage": number;
}