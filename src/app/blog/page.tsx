"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Calendar, ArrowRight, Clock, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { type BlogPost } from "@/lib/blog";

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch("/api/blog/posts?published=true");
      const data = await response.json();
      if (data.success) {
        setArticles(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const isDark = mounted ? resolvedTheme === "dark" : true;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className={cn("min-h-screen transition-colors", isDark ? "bg-industrial-darker" : "bg-white")}>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className={cn("absolute inset-0", isDark ? "bg-gradient-to-b from-industrial-dark to-industrial-darker" : "bg-gradient-to-b from-gray-100 to-white")} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className={cn("inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6",
              isDark ? "text-samko-yellow border-l-2 border-samko-yellow bg-samko-yellow/10" : "text-samko-dark-red border-l-2 border-samko-dark-red bg-samko-red/5")}>
              News & Insights
            </span>
            <h1 className={cn("font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6", isDark ? "text-white" : "text-gray-900")}>
              Industry <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Insights</span>
            </h1>
            <p className={cn("text-lg md:text-xl max-w-2xl mx-auto mb-8", isDark ? "text-gray-400" : "text-gray-600")}>
              Expert articles, technical guides, and company news
            </p>
            {/* Admin Link */}
            <Link
              href="/admin/blog"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium transition-colors",
                isDark ? "text-gray-400 hover:text-samko-yellow" : "text-gray-500 hover:text-samko-dark-red"
              )}
            >
              <Settings className="w-4 h-4" />
              Admin Panel
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-samko-yellow border-t-transparent" />
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-20">
              <p className={isDark ? "text-gray-400" : "text-gray-500"}>No articles found</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="group">
                  <Link href={`/blog/${article.slug}`}
                    className={cn("block rounded-sm overflow-hidden transition-all duration-300", isDark ? "bg-white/5 border border-white/5 hover:border-samko-yellow/30" : "bg-white border border-gray-100 hover:shadow-lg")}>
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${article.image})` }} />
                      <div className={cn("absolute inset-0", isDark ? "bg-gradient-to-t from-industrial-darker to-transparent" : "bg-gradient-to-t from-white/80 to-transparent")} />
                      {article.featured && (
                        <div className="absolute top-4 right-4 px-2 py-1 bg-samko-yellow text-industrial-dark text-xs font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <span className={cn("inline-block px-2 py-1 text-xs font-medium rounded-sm mb-3", isDark ? "bg-samko-yellow/10 text-samko-yellow" : "bg-samko-red/5 text-samko-dark-red")}>
                        {article.category}
                      </span>
                      <h2 className={cn("text-xl font-semibold mb-2 line-clamp-2 transition-colors", isDark ? "text-white group-hover:text-samko-yellow" : "text-gray-900 group-hover:text-samko-dark-red")}>
                        {article.title}
                      </h2>
                      <p className={cn("text-sm mb-4 line-clamp-2", isDark ? "text-gray-400" : "text-gray-600")}>{article.excerpt}</p>
                      <div className={cn("flex items-center gap-4 text-xs", isDark ? "text-gray-500" : "text-gray-500")}>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(article.publishedAt)}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
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
