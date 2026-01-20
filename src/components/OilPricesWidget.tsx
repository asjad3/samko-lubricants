"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  RefreshCw,
  Fuel,
  Flame
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  formatPrice, 
  formatChange, 
  formatPercentChange, 
  getTrend,
  type OilPrice 
} from "@/lib/oil-prices";

interface OilPricesWidgetProps {
  className?: string;
  compact?: boolean;
}

export default function OilPricesWidget({ className, compact = false }: OilPricesWidgetProps) {
  const [prices, setPrices] = useState<OilPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    fetchPrices();
    
    // Refresh prices every 5 minutes
    const interval = setInterval(fetchPrices, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchPrices = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/oil-prices");
      const data = await response.json();
      
      if (data.success) {
        setPrices(data.data);
        setLastUpdated(data.lastUpdated);
      }
    } catch (error) {
      console.error("Failed to fetch oil prices:", error);
    } finally {
      setLoading(false);
    }
  };

  const isDark = mounted ? resolvedTheme === "dark" : true;

  const getTrendIcon = (change: number) => {
    const trend = getTrend(change);
    if (trend === "up") return <TrendingUp className="w-4 h-4" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getTrendColor = (change: number) => {
    const trend = getTrend(change);
    if (trend === "up") return "text-green-500";
    if (trend === "down") return "text-red-500";
    return isDark ? "text-gray-400" : "text-gray-500";
  };

  if (compact) {
    // Compact version for navbar or sidebar
    return (
      <div className={cn("flex items-center gap-4 overflow-x-auto", className)}>
        {prices.slice(0, 2).map((price) => (
          <div key={price.code} className="flex items-center gap-2 whitespace-nowrap">
            <Fuel className={cn("w-4 h-4", isDark ? "text-samko-yellow" : "text-samko-dark-red")} />
            <span className={cn("text-sm font-medium", isDark ? "text-white" : "text-gray-900")}>
              {price.code}
            </span>
            <span className={cn("text-sm", isDark ? "text-gray-300" : "text-gray-600")}>
              {formatPrice(price.price)}
            </span>
            <span className={cn("text-xs", getTrendColor(price.change))}>
              {formatPercentChange(price.changePercent)}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn(
      "rounded-sm overflow-hidden",
      isDark 
        ? "bg-white/5 border border-white/10" 
        : "bg-white border border-gray-200 shadow-sm",
      className
    )}>
      {/* Header */}
      <div className={cn(
        "flex items-center justify-between px-6 py-4 border-b",
        isDark ? "border-white/10" : "border-gray-100"
      )}>
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-sm flex items-center justify-center",
            isDark ? "bg-samko-yellow/10" : "bg-samko-red/5"
          )}>
            <Flame className={cn(
              "w-5 h-5",
              isDark ? "text-samko-yellow" : "text-samko-dark-red"
            )} />
          </div>
          <div>
            <h3 className={cn(
              "font-semibold",
              isDark ? "text-white" : "text-gray-900"
            )}>
              Oil Prices
            </h3>
            <p className={cn(
              "text-xs",
              isDark ? "text-gray-400" : "text-gray-500"
            )}>
              Live market data
            </p>
          </div>
        </div>
        <button
          onClick={fetchPrices}
          disabled={loading}
          className={cn(
            "p-2 rounded-sm transition-colors",
            isDark 
              ? "hover:bg-white/10 text-gray-400 hover:text-white" 
              : "hover:bg-gray-100 text-gray-500 hover:text-gray-700",
            loading && "animate-spin"
          )}
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Prices */}
      <div className="p-4">
        {loading && prices.length === 0 ? (
          <div className="flex items-center justify-center py-8">
            <RefreshCw className={cn(
              "w-6 h-6 animate-spin",
              isDark ? "text-samko-yellow" : "text-samko-dark-red"
            )} />
          </div>
        ) : (
          <div className="space-y-3">
            {prices.map((price, index) => (
              <motion.div
                key={price.code}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "flex items-center justify-between p-3 rounded-sm",
                  isDark 
                    ? "bg-white/5 hover:bg-white/10" 
                    : "bg-gray-50 hover:bg-gray-100",
                  "transition-colors"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold",
                    isDark 
                      ? "bg-samko-yellow/10 text-samko-yellow" 
                      : "bg-samko-red/5 text-samko-dark-red"
                  )}>
                    {price.code.slice(0, 2)}
                  </div>
                  <div>
                    <p className={cn(
                      "text-sm font-medium",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      {price.name}
                    </p>
                    <p className={cn(
                      "text-xs",
                      isDark ? "text-gray-400" : "text-gray-500"
                    )}>
                      per {price.unit}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={cn(
                    "font-semibold",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {formatPrice(price.price, price.currency)}
                  </p>
                  <div className={cn("flex items-center gap-1 justify-end text-xs", getTrendColor(price.change))}>
                    {getTrendIcon(price.change)}
                    <span>{formatChange(price.change)}</span>
                    <span>({formatPercentChange(price.changePercent)})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {lastUpdated && (
        <div className={cn(
          "px-6 py-3 text-xs text-center border-t",
          isDark 
            ? "border-white/10 text-gray-500" 
            : "border-gray-100 text-gray-400"
        )}>
          Last updated: {new Date(lastUpdated).toLocaleString()}
        </div>
      )}
    </div>
  );
}
