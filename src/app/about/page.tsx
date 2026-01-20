"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Award, Target, Users, Globe, Leaf, Building2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const timeline = [
  { year: "1985", title: "Foundation", description: "SAMKO Lubricants was founded with a vision to provide premium quality lubricants." },
  { year: "1995", title: "International Expansion", description: "Expanded operations to 15 countries, establishing SAMKO as a global player." },
  { year: "2005", title: "R&D Center Launch", description: "Opened state-of-the-art research and development center." },
  { year: "2015", title: "Sustainability Initiative", description: "Launched eco-friendly product line and sustainable practices." },
  { year: "2025", title: "Global Leadership", description: "Serving 50+ countries with 500+ products worldwide." },
];

const values = [
  { icon: Award, title: "Excellence", description: "Striving for excellence in every product and service." },
  { icon: Target, title: "Innovation", description: "Continuous research for cutting-edge solutions." },
  { icon: Users, title: "Partnership", description: "Building lasting relationships with stakeholders." },
  { icon: Leaf, title: "Sustainability", description: "Committed to environmentally responsible practices." },
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management" },
  { name: "ISO 14001:2015", description: "Environmental Management" },
  { name: "API Licensed", description: "Petroleum Institute" },
  { name: "ACEA Approved", description: "European Standards" },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className={cn("min-h-screen transition-colors", isDark ? "bg-industrial-darker" : "bg-white")}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className={cn(
          "absolute inset-0",
          isDark ? "bg-gradient-to-b from-industrial-dark to-industrial-darker" : "bg-gradient-to-b from-gray-100 to-white"
        )} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className={cn(
              "inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-6",
              isDark ? "text-samko-yellow border-l-2 border-samko-yellow bg-samko-yellow/10" : "text-samko-dark-red border-l-2 border-samko-dark-red bg-samko-red/5"
            )}>
              About SAMKO
            </span>
            <h1 className={cn("font-heading text-4xl md:text-6xl font-semibold mb-6", isDark ? "text-white" : "text-gray-900")}>
              Engineering <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Excellence</span> Since 1985
            </h1>
            <p className={cn("text-xl mb-8", isDark ? "text-gray-400" : "text-gray-600")}>
              For over 40 years, SAMKO Lubricants has been at the forefront of lubrication technology.
            </p>
            <div className="flex flex-wrap gap-8">
              {[{ value: "40+", label: "Years" }, { value: "50+", label: "Countries" }, { value: "500+", label: "Products" }].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={cn("text-4xl font-semibold", isDark ? "text-samko-yellow" : "text-samko-dark-red")}>{stat.value}</div>
                  <div className={isDark ? "text-gray-400 text-sm" : "text-gray-600 text-sm"}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={cn("py-20", isDark ? "bg-industrial-dark" : "bg-gray-50")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className={cn("rounded-sm p-8", isDark ? "bg-white/5 border border-white/5" : "bg-white border border-gray-100")}>
              <div className="w-12 h-12 rounded-sm bg-samko-yellow flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-industrial-dark" />
              </div>
              <h2 className={cn("text-2xl font-semibold mb-4", isDark ? "text-white" : "text-gray-900")}>Our Mission</h2>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                To provide world-class lubrication solutions that enhance equipment performance and reduce environmental impact.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className={cn("rounded-sm p-8", isDark ? "bg-white/5 border border-white/5" : "bg-white border border-gray-100")}>
              <div className="w-12 h-12 rounded-sm bg-samko-red flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className={cn("text-2xl font-semibold mb-4", isDark ? "text-white" : "text-gray-900")}>Our Vision</h2>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                To be the global leader in industrial lubrication, recognized for innovation, quality, and sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={cn("py-20", isDark ? "bg-industrial-darker" : "bg-white")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className={cn("font-heading text-4xl font-semibold", isDark ? "text-white" : "text-gray-900")}>
              Our Core <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Values</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={cn("rounded-sm p-6 text-center", isDark ? "bg-white/5 border border-white/5" : "bg-gray-50 border border-gray-100")}>
                <div className={cn("w-12 h-12 rounded-sm mx-auto flex items-center justify-center mb-4", isDark ? "bg-samko-yellow/10" : "bg-samko-red/5")}>
                  <value.icon className={cn("w-6 h-6", isDark ? "text-samko-yellow" : "text-samko-dark-red")} />
                </div>
                <h3 className={cn("text-lg font-semibold mb-2", isDark ? "text-white" : "text-gray-900")}>{value.title}</h3>
                <p className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={cn("py-20", isDark ? "bg-industrial-dark" : "bg-gray-50")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className={cn("font-heading text-4xl font-semibold", isDark ? "text-white" : "text-gray-900")}>
              Our <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Journey</span>
            </h2>
          </motion.div>
          <div className="relative">
            <div className={cn("absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block", isDark ? "bg-white/10" : "bg-gray-200")} />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className={cn("md:flex items-center gap-8", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
                  <div className={cn("md:w-1/2 text-center md:text-right", index % 2 !== 0 && "md:text-left")}>
                    <span className={cn("text-3xl font-semibold", isDark ? "text-samko-yellow" : "text-samko-dark-red")}>{item.year}</span>
                  </div>
                  <div className={cn("relative w-4 h-4 rounded-full hidden md:block z-10", isDark ? "bg-samko-yellow" : "bg-samko-dark-red")} />
                  <div className={cn("md:w-1/2 p-6 rounded-sm", isDark ? "bg-white/5 border border-white/5" : "bg-white border border-gray-100")}>
                    <h3 className={cn("text-lg font-semibold mb-2", isDark ? "text-white" : "text-gray-900")}>{item.title}</h3>
                    <p className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className={cn("py-20", isDark ? "bg-industrial-darker" : "bg-white")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className={cn("font-heading text-4xl font-semibold", isDark ? "text-white" : "text-gray-900")}>
              Certifications & <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Standards</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div key={cert.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={cn("text-center p-6 rounded-sm", isDark ? "bg-white/5 border border-white/5" : "bg-gray-50 border border-gray-100")}>
                <div className={cn("w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4", isDark ? "bg-samko-yellow/10" : "bg-samko-red/5")}>
                  <Award className={cn("w-8 h-8", isDark ? "text-samko-yellow" : "text-samko-dark-red")} />
                </div>
                <h3 className={cn("text-lg font-semibold mb-1", isDark ? "text-white" : "text-gray-900")}>{cert.name}</h3>
                <p className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-samko-yellow via-samko-gold to-samko-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-industrial-dark mb-4">Ready to Partner with Us?</h2>
          <p className="text-lg text-industrial-dark/70 mb-8">Join thousands of satisfied customers worldwide</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-industrial-dark text-white font-semibold text-sm hover:bg-industrial-darker transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
