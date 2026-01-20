"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Check, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Standard",
    description: "For small businesses and workshops",
    price: "Contact",
    features: ["Basic product range", "Standard delivery", "Email support", "Product datasheets", "30-day payment terms"],
  },
  {
    name: "Professional",
    description: "For medium-sized operations",
    price: "Contact",
    popular: true,
    features: ["Extended product range", "Priority delivery", "Phone & email support", "Technical consultation", "60-day payment terms", "Volume discounts"],
  },
  {
    name: "Enterprise",
    description: "For large industrial operations",
    price: "Custom",
    features: ["Full product catalog", "Express delivery", "Dedicated account manager", "On-site support", "Custom payment terms", "Maximum discounts", "Training programs"],
  },
];

const faqs = [
  { question: "What is the minimum order quantity?", answer: "Minimum order quantities vary by product. Standard products have an MOQ of 20L, while specialty products may have higher requirements." },
  { question: "Do you offer technical support?", answer: "Yes, our technical team provides support for product selection, application guidance, and troubleshooting." },
  { question: "What are your delivery timeframes?", answer: "Standard delivery is 5-7 business days. Priority delivery options are available for urgent requirements." },
  { question: "Do you offer custom formulations?", answer: "Yes, our R&D team can develop custom lubricant formulations based on your specific requirements." },
];

export default function PricesPage() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
              Pricing
            </span>
            <h1 className={cn("font-heading text-4xl md:text-6xl font-semibold mb-6", isDark ? "text-white" : "text-gray-900")}>
              Partnership <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Plans</span>
            </h1>
            <p className={cn("text-xl max-w-2xl mx-auto", isDark ? "text-gray-400" : "text-gray-600")}>
              Flexible pricing options designed to meet your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={cn("relative rounded-sm p-8", plan.popular 
                  ? "bg-gradient-to-b from-samko-yellow/10 to-transparent border-2 border-samko-yellow" 
                  : isDark ? "bg-white/5 border border-white/10" : "bg-gray-50 border border-gray-200")}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-samko-yellow text-industrial-dark text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className={cn("text-2xl font-semibold mb-2", isDark ? "text-white" : "text-gray-900")}>{plan.name}</h3>
                <p className={cn("text-sm mb-6", isDark ? "text-gray-400" : "text-gray-600")}>{plan.description}</p>
                <div className="mb-6">
                  <span className={cn("text-3xl font-semibold", isDark ? "text-white" : "text-gray-900")}>{plan.price}</span>
                  {plan.price !== "Custom" && <span className={isDark ? "text-gray-400" : "text-gray-600"}> for pricing</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className={cn("w-4 h-4", isDark ? "text-samko-yellow" : "text-samko-dark-red")} />
                      <span className={cn("text-sm", isDark ? "text-gray-300" : "text-gray-700")}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={cn("block w-full text-center py-3 font-semibold text-sm transition-colors", plan.popular 
                    ? "bg-samko-yellow text-industrial-dark hover:bg-samko-gold" 
                    : isDark ? "bg-white/10 text-white hover:bg-white/20" : "bg-gray-900 text-white hover:bg-gray-800")}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className={cn("py-20", isDark ? "bg-industrial-dark" : "bg-gray-50")}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className={cn("font-heading text-4xl font-semibold", isDark ? "text-white" : "text-gray-900")}>
              Frequently Asked <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Questions</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={cn("rounded-sm overflow-hidden", isDark ? "bg-white/5 border border-white/5" : "bg-white border border-gray-200")}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left">
                  <span className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>{faq.question}</span>
                  <ChevronDown className={cn("w-5 h-5 transition-transform", openFaq === index && "rotate-180", isDark ? "text-gray-400" : "text-gray-500")} />
                </button>
                {openFaq === index && (
                  <div className={cn("px-6 pb-6", isDark ? "text-gray-400" : "text-gray-600")}>
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-samko-yellow via-samko-gold to-samko-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-industrial-dark mb-4">Need a Custom Quote?</h2>
          <p className="text-lg text-industrial-dark/70 mb-8">Our team will create a tailored solution for your requirements</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-industrial-dark text-white font-semibold text-sm hover:bg-industrial-darker transition-colors">
            Request Custom Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
