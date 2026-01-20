// Oil price data types and utilities
export interface OilPrice {
  name: string;
  code: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  unit: string;
  lastUpdated: string;
}

export interface OilPriceResponse {
  success: boolean;
  data: OilPrice[];
  source: string;
  lastUpdated: string;
  error?: string;
}

// Fallback data when API is unavailable
export const fallbackOilPrices: OilPrice[] = [
  {
    name: "Brent Crude Oil",
    code: "BRENT",
    price: 78.45,
    change: 0.85,
    changePercent: 1.09,
    currency: "USD",
    unit: "barrel",
    lastUpdated: new Date().toISOString(),
  },
  {
    name: "WTI Crude Oil",
    code: "WTI",
    price: 74.32,
    change: 0.62,
    changePercent: 0.84,
    currency: "USD",
    unit: "barrel",
    lastUpdated: new Date().toISOString(),
  },
  {
    name: "Natural Gas",
    code: "NG",
    price: 2.85,
    change: -0.05,
    changePercent: -1.72,
    currency: "USD",
    unit: "MMBtu",
    lastUpdated: new Date().toISOString(),
  },
  {
    name: "Heating Oil",
    code: "HO",
    price: 2.42,
    change: 0.03,
    changePercent: 1.25,
    currency: "USD",
    unit: "gallon",
    lastUpdated: new Date().toISOString(),
  },
  {
    name: "Gasoline RBOB",
    code: "RB",
    price: 2.18,
    change: 0.02,
    changePercent: 0.93,
    currency: "USD",
    unit: "gallon",
    lastUpdated: new Date().toISOString(),
  },
];

// Format price with currency
export function formatPrice(price: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

// Format change with sign
export function formatChange(change: number): string {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}`;
}

// Format percent change
export function formatPercentChange(percent: number): string {
  const sign = percent >= 0 ? "+" : "";
  return `${sign}${percent.toFixed(2)}%`;
}

// Get trend direction
export function getTrend(change: number): "up" | "down" | "neutral" {
  if (change > 0) return "up";
  if (change < 0) return "down";
  return "neutral";
}
