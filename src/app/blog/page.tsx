"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const articles = [
  {
    id: 1,
    title: "The Future of Industrial Lubrication",
    excerpt: "Exploring emerging technologies and trends shaping the lubricants industry.",
    category: "Industry Trends",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
  },
  {
    id: 2,
    title: "Choosing the Right Gear Oil",
    excerpt: "A comprehensive guide to selecting gear oils for different applications.",
    category: "Technical Guide",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=800",
  },
  {
    id: 3,
    title: "Sustainable Lubricants: A Growing Necessity",
    excerpt: "How eco-friendly lubricants are becoming essential for modern operations.",
    category: "Sustainability",
    date: "Jan 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800",
  },
  {
    id: 4,
    title: "Hydraulic System Maintenance Best Practices",
    excerpt: "Essential maintenance tips to extend hydraulic system life.",
    category: "Maintenance",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800",
  },
  {
    id: 5,
    title: "Understanding Viscosity Grades",
    excerpt: "A detailed look at viscosity ratings and their importance.",
    category: "Education",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800",
  },
  {
    id: 6,
    title: "SAMKO Expands to New Markets",
    excerpt: "Announcing our expansion into three new regional markets.",
    category: "Company News",
    date: "Dec 15, 2024",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800",
  },
];

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className={cn("min-h-screen transition-colors", isDark ? "bg-industrial-darker" : "bg-white")}>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className={cn("absolute inset-0", isDark ? "bg-gradient-to-b from-industrial-dark to-industrial-darker" : "bg-gradient-to-b from-gray-100 to-white")} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className={cn("inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-6",
              isDark ? "text-samko-yellow border-l-2 border-samko-yellow bg-samko-yellow/10" : "text-samko-dark-red border-l-2 border-samko-dark-red bg-samko-red/5")}>
              News & Insights
            </span>
            <h1 className={cn("font-heading text-4xl md:text-6xl font-semibold mb-6", isDark ? "text-white" : "text-gray-900")}>
              Industry <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Insights</span>
            </h1>
            <p className={cn("text-xl max-w-2xl mx-auto", isDark ? "text-gray-400" : "text-gray-600")}>
              Expert articles, technical guides, and company news
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="group">
                <Link href={`/blog/${article.id}`}
                  className={cn("block rounded-sm overflow-hidden transition-all duration-300", isDark ? "bg-white/5 border border-white/5 hover:border-samko-yellow/30" : "bg-white border border-gray-100 hover:shadow-lg")}>
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${article.image})` }} />
                    <div className={cn("absolute inset-0", isDark ? "bg-gradient-to-t from-industrial-darker to-transparent" : "bg-gradient-to-t from-white/80 to-transparent")} />
                  </div>
                  <div className="p-6">
                    <span className={cn("inline-block px-2 py-1 text-xs font-medium rounded-sm mb-3", isDark ? "bg-samko-yellow/10 text-samko-yellow" : "bg-samko-red/5 text-samko-dark-red")}>
                      {article.category}
                    </span>
                    <h2 className={cn("text-xl font-semibold mb-2 transition-colors", isDark ? "text-white group-hover:text-samko-yellow" : "text-gray-900 group-hover:text-samko-dark-red")}>
                      {article.title}
                    </h2>
                    <p className={cn("text-sm mb-4", isDark ? "text-gray-400" : "text-gray-600")}>{article.excerpt}</p>
                    <div className={cn("flex items-center gap-4 text-xs", isDark ? "text-gray-500" : "text-gray-500")}>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={cn("py-20", isDark ? "bg-industrial-dark" : "bg-gray-50")}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={cn("font-heading text-3xl font-semibold mb-4", isDark ? "text-white" : "text-gray-900")}>
            Stay <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Updated</span>
          </h2>
          <p className={cn("mb-8", isDark ? "text-gray-400" : "text-gray-600")}>Subscribe to our newsletter for the latest industry insights</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Enter your email"
              className={cn("flex-1 px-4 py-3 rounded-sm text-sm focus:outline-none focus:ring-2",
                isDark ? "bg-white/5 border border-white/10 text-white focus:ring-samko-yellow/50" : "bg-white border border-gray-200 text-gray-900 focus:ring-samko-dark-red/50")} />
            <button type="submit" className="px-6 py-3 bg-samko-yellow text-industrial-dark font-semibold text-sm hover:bg-samko-gold transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
