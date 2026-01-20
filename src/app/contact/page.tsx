"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will contact you shortly.");
  };

  return (
    <div className={cn("min-h-screen transition-colors", isDark ? "bg-industrial-darker" : "bg-white")}>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className={cn("absolute inset-0", isDark ? "bg-gradient-to-b from-industrial-dark to-industrial-darker" : "bg-gradient-to-b from-gray-100 to-white")} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className={cn("inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-6",
              isDark ? "text-samko-yellow border-l-2 border-samko-yellow bg-samko-yellow/10" : "text-samko-dark-red border-l-2 border-samko-dark-red bg-samko-red/5")}>
              Contact Us
            </span>
            <h1 className={cn("font-heading text-4xl md:text-6xl font-semibold mb-6", isDark ? "text-white" : "text-gray-900")}>
              Get in <span className={isDark ? "text-samko-yellow" : "text-samko-dark-red"}>Touch</span>
            </h1>
            <p className={cn("text-xl max-w-2xl mx-auto", isDark ? "text-gray-400" : "text-gray-600")}>
              Our team is ready to help with your lubrication needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className={cn("font-heading text-2xl font-semibold mb-6", isDark ? "text-white" : "text-gray-900")}>Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Address", content: "Industrial Zone, Block 7, Dubai, UAE" },
                    { icon: Phone, title: "Phone", content: "+971 4 123 4567" },
                    { icon: Mail, title: "Email", content: "info@samkolubricants.com" },
                    { icon: Clock, title: "Hours", content: "Mon-Fri: 8AM-6PM GST" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className={cn("w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0", isDark ? "bg-samko-yellow/10" : "bg-samko-red/5")}>
                        <item.icon className={cn("w-5 h-5", isDark ? "text-samko-yellow" : "text-samko-dark-red")} />
                      </div>
                      <div>
                        <h3 className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>{item.title}</h3>
                        <p className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <div className={cn("rounded-sm p-8", isDark ? "bg-white/5 border border-white/5" : "bg-gray-50 border border-gray-100")}>
                <h2 className={cn("font-heading text-2xl font-semibold mb-6", isDark ? "text-white" : "text-gray-900")}>Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: "name", label: "Full Name", type: "text" },
                      { name: "email", label: "Email", type: "email" },
                      { name: "company", label: "Company", type: "text" },
                      { name: "phone", label: "Phone", type: "tel" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className={cn("block text-sm font-medium mb-2", isDark ? "text-gray-300" : "text-gray-700")}>{field.label}</label>
                        <input type={field.type} value={formData[field.name as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                          className={cn("w-full px-4 py-3 rounded-sm text-sm focus:outline-none focus:ring-2",
                            isDark ? "bg-white/5 border border-white/10 text-white focus:ring-samko-yellow/50" : "bg-white border border-gray-200 text-gray-900 focus:ring-samko-dark-red/50")} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className={cn("block text-sm font-medium mb-2", isDark ? "text-gray-300" : "text-gray-700")}>Subject</label>
                    <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={cn("w-full px-4 py-3 rounded-sm text-sm focus:outline-none focus:ring-2",
                        isDark ? "bg-white/5 border border-white/10 text-white focus:ring-samko-yellow/50" : "bg-white border border-gray-200 text-gray-900 focus:ring-samko-dark-red/50")} />
                  </div>
                  <div>
                    <label className={cn("block text-sm font-medium mb-2", isDark ? "text-gray-300" : "text-gray-700")}>Message</label>
                    <textarea rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={cn("w-full px-4 py-3 rounded-sm text-sm focus:outline-none focus:ring-2 resize-none",
                        isDark ? "bg-white/5 border border-white/10 text-white focus:ring-samko-yellow/50" : "bg-white border border-gray-200 text-gray-900 focus:ring-samko-dark-red/50")} />
                  </div>
                  <button type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-samko-yellow text-industrial-dark font-semibold text-sm hover:bg-samko-gold transition-colors">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
