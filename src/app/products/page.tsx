"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { 
  Droplets, 
  Gauge, 
  Cog, 
  Factory, 
  Truck, 
  Ship,
  Search,
  ArrowRight,
  CheckCircle,
  Beaker
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All Products", icon: Beaker },
  { id: "engine", name: "Engine Oils", icon: Gauge },
  { id: "hydraulic", name: "Hydraulic Fluids", icon: Droplets },
  { id: "gear", name: "Gear Oils", icon: Cog },
  { id: "industrial", name: "Industrial Oils", icon: Factory },
  { id: "transport", name: "Transport Fluids", icon: Truck },
  { id: "marine", name: "Marine Lubricants", icon: Ship },
];

const products = [
  {
    id: 1,
    category: "engine",
    name: "SAMKO Turbo Diesel 15W-40",
    description: "Premium heavy-duty diesel engine oil for commercial vehicles",
    specifications: ["API CI-4/SL", "ACEA E7", "Meets OEM standards"],
    featured: true,
  },
  {
    id: 2,
    category: "engine",
    name: "SAMKO Synthetic 5W-30",
    description: "Full synthetic engine oil for modern passenger vehicles",
    specifications: ["API SN Plus", "ILSAC GF-6", "dexos1 Gen 2"],
    featured: true,
  },
  {
    id: 3,
    category: "hydraulic",
    name: "SAMKO Hydraulic AW 46",
    description: "Anti-wear hydraulic oil for industrial systems",
    specifications: ["ISO 46", "DIN 51524 Part 2", "Zinc-based AW"],
    featured: false,
  },
  {
    id: 4,
    category: "hydraulic",
    name: "SAMKO Bio Hydraulic",
    description: "Biodegradable hydraulic fluid for environmentally sensitive areas",
    specifications: ["HEES Type", "Biodegradable", "Low toxicity"],
    featured: false,
  },
  {
    id: 5,
    category: "gear",
    name: "SAMKO Gear EP 80W-90",
    description: "Extreme pressure gear oil for heavy-duty transmissions",
    specifications: ["API GL-5", "MT-1", "MIL-PRF-2105E"],
    featured: true,
  },
  {
    id: 6,
    category: "gear",
    name: "SAMKO Synthetic Gear 75W-90",
    description: "Full synthetic gear oil for extended drain intervals",
    specifications: ["API GL-5", "Synthetic base", "Low temperature fluidity"],
    featured: false,
  },
  {
    id: 7,
    category: "industrial",
    name: "SAMKO Compressor Oil",
    description: "High-performance oil for rotary and reciprocating compressors",
    specifications: ["ISO VG 46/68", "Oxidation resistant", "Anti-foam"],
    featured: false,
  },
  {
    id: 8,
    category: "industrial",
    name: "SAMKO Turbine Oil",
    description: "Premium turbine oil for steam and gas turbines",
    specifications: ["ISO VG 32/46", "DIN 51515", "Extended life"],
    featured: true,
  },
  {
    id: 9,
    category: "transport",
    name: "SAMKO Fleet HD 15W-40",
    description: "Heavy-duty fleet oil for maximum protection",
    specifications: ["API CK-4", "ACEA E9", "Volvo VDS-4.5"],
    featured: false,
  },
  {
    id: 10,
    category: "transport",
    name: "SAMKO ATF Dexron VI",
    description: "Automatic transmission fluid for modern vehicles",
    specifications: ["Dexron VI", "Mercon LV", "Multi-vehicle"],
    featured: false,
  },
  {
    id: 11,
    category: "marine",
    name: "SAMKO Marine Diesel",
    description: "Marine engine oil for commercial and recreational vessels",
    specifications: ["API CF", "NMMA FC-W", "Salt water resistant"],
    featured: true,
  },
  {
    id: 12,
    category: "marine",
    name: "SAMKO Outboard 2T",
    description: "Two-stroke oil for outboard engines",
    specifications: ["NMMA TC-W3", "Low smoke", "Biodegradable option"],
    featured: false,
  },
];

export default function ProductsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      isDark ? "bg-industrial-darker" : "bg-white"
    )}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className={cn(
          "absolute inset-0",
          isDark 
            ? "bg-gradient-to-b from-industrial-dark to-industrial-darker" 
            : "bg-gradient-to-b from-gray-100 to-white"
        )} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className={cn(
              "inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-6",
              isDark 
                ? "text-samko-yellow border-l-2 border-samko-yellow bg-samko-yellow/10" 
                : "text-samko-dark-red border-l-2 border-samko-dark-red bg-samko-red/5"
            )}>
              Product Catalog
            </span>
            <h1 className={cn(
              "font-heading text-4xl md:text-6xl font-semibold mb-6",
              isDark ? "text-white" : "text-gray-900"
            )}>
              Our <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Product Range</span>
            </h1>
            <p className={cn(
              "text-xl max-w-2xl mx-auto",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              Comprehensive lubrication solutions engineered for every industrial application
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className={cn(
        "relative py-6 border-y sticky top-20 z-30",
        isDark 
          ? "bg-industrial-dark/95 backdrop-blur-lg border-white/10" 
          : "bg-white/95 backdrop-blur-lg border-gray-200"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5",
                isDark ? "text-gray-500" : "text-gray-400"
              )} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "w-full pl-12 pr-4 py-3 rounded-sm text-sm focus:outline-none focus:ring-2 transition-all",
                  isDark 
                    ? "bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:ring-samko-yellow/50" 
                    : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-samko-dark-red/50"
                )}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200",
                    selectedCategory === category.id
                      ? "bg-samko-yellow text-industrial-dark"
                      : isDark
                        ? "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  )}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              Showing <span className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>{filteredProducts.length}</span> products
            </p>
          </div>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <div className={cn(
                    "relative h-full rounded-sm overflow-hidden transition-all duration-300",
                    isDark 
                      ? "bg-white/5 border border-white/5 hover:border-samko-yellow/30" 
                      : "bg-white border border-gray-100 hover:shadow-lg"
                  )}>
                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-samko-yellow text-industrial-dark text-xs font-semibold">
                        Featured
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={cn(
                          "px-2 py-1 text-xs font-medium rounded-sm",
                          isDark 
                            ? "bg-samko-yellow/10 text-samko-yellow" 
                            : "bg-samko-red/5 text-samko-dark-red"
                        )}>
                          {categories.find(c => c.id === product.category)?.name}
                        </span>
                      </div>
                      <h3 className={cn(
                        "text-xl font-semibold mb-2 transition-colors",
                        isDark 
                          ? "text-white group-hover:text-samko-yellow" 
                          : "text-gray-900 group-hover:text-samko-dark-red"
                      )}>
                        {product.name}
                      </h3>
                      <p className={cn(
                        "text-sm mb-4",
                        isDark ? "text-gray-400" : "text-gray-600"
                      )}>
                        {product.description}
                      </p>

                      {/* Specifications */}
                      <div className="space-y-2 mb-6">
                        {product.specifications.slice(0, 2).map((spec, i) => (
                          <div key={i} className={cn(
                            "flex items-center gap-2 text-sm",
                            isDark ? "text-gray-500" : "text-gray-500"
                          )}>
                            <CheckCircle className={cn(
                              "w-3 h-3",
                              isDark ? "text-samko-yellow" : "text-samko-dark-red"
                            )} />
                            {spec}
                          </div>
                        ))}
                      </div>

                      {/* Action */}
                      <button className={cn(
                        "flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3",
                        isDark 
                          ? "text-samko-yellow" 
                          : "text-samko-dark-red"
                      )}>
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Beaker className={cn(
                "w-16 h-16 mx-auto mb-4",
                isDark ? "text-gray-700" : "text-gray-300"
              )} />
              <h3 className={cn(
                "text-xl font-semibold mb-2",
                isDark ? "text-white" : "text-gray-900"
              )}>
                No products found
              </h3>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-samko-yellow via-samko-gold to-samko-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-industrial-dark mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-industrial-dark/70 mb-8">
              Our technical team can help you find the perfect lubricant for your specific application
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-industrial-dark text-white font-semibold text-sm hover:bg-industrial-darker transition-colors"
            >
              Contact Our Experts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
