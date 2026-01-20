"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowRight, Droplets, Gauge, Cog, Factory, Truck, Ship } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "engine",
    name: "Engine Oils",
    description: "High-performance lubricants for automotive and industrial engines",
    icon: Gauge,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1932",
  },
  {
    id: "hydraulic",
    name: "Hydraulic Fluids",
    description: "Advanced fluids for optimal hydraulic system performance",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070",
  },
  {
    id: "gear",
    name: "Gear Oils",
    description: "Specialized lubricants for gearboxes and transmissions",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2074",
  },
  {
    id: "industrial",
    name: "Industrial Oils",
    description: "Comprehensive solutions for manufacturing and processing",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
  },
  {
    id: "transport",
    name: "Transport Fluids",
    description: "Reliable lubricants for heavy-duty transportation",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070",
  },
  {
    id: "marine",
    name: "Marine Lubricants",
    description: "Specialized formulations for marine applications",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
  },
];

export default function ProductsShowcase() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section className={cn(
      "relative py-24 transition-colors duration-300",
      isDark 
        ? "bg-industrial-darker" 
        : "bg-gray-50"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className={cn(
              "inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-4",
              isDark 
                ? "text-samko-yellow border-l-2 border-samko-yellow bg-samko-yellow/10" 
                : "text-samko-dark-red border-l-2 border-samko-dark-red bg-samko-red/5"
            )}>
              Our Products
            </span>
            <h2 className={cn(
              "font-heading text-4xl md:text-5xl font-semibold tracking-tight",
              isDark ? "text-white" : "text-gray-900"
            )}>
              Premium <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Lubrication</span> Solutions
            </h2>
          </div>
          <Link
            href="/products"
            className={cn(
              "group inline-flex items-center gap-2 text-sm font-semibold transition-colors",
              isDark 
                ? "text-samko-yellow hover:text-samko-gold" 
                : "text-samko-dark-red hover:text-samko-red"
            )}
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/products?category=${product.id}`}
                className={cn(
                  "group block relative overflow-hidden rounded-sm transition-all duration-300",
                  isDark 
                    ? "bg-white/5 hover:bg-white/10 border border-white/5" 
                    : "bg-white hover:shadow-lg border border-gray-100"
                )}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className={cn(
                    "absolute inset-0",
                    isDark 
                      ? "bg-gradient-to-t from-industrial-darker via-industrial-darker/50 to-transparent" 
                      : "bg-gradient-to-t from-white via-white/50 to-transparent"
                  )} />
                </div>

                {/* Content */}
                <div className="relative p-6 -mt-12">
                  <div className={cn(
                    "inline-flex items-center justify-center w-12 h-12 rounded-sm mb-4",
                    isDark 
                      ? "bg-samko-yellow text-industrial-dark" 
                      : "bg-samko-yellow text-industrial-dark"
                  )}>
                    <product.icon className="w-5 h-5" />
                  </div>
                  <h3 className={cn(
                    "text-xl font-semibold mb-2",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {product.name}
                  </h3>
                  <p className={cn(
                    "text-sm mb-4",
                    isDark ? "text-gray-400" : "text-gray-600"
                  )}>
                    {product.description}
                  </p>
                  <span className={cn(
                    "inline-flex items-center gap-1 text-sm font-medium",
                    isDark 
                      ? "text-samko-yellow group-hover:text-samko-gold" 
                      : "text-samko-dark-red group-hover:text-samko-red"
                  )}>
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
