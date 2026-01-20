"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Prices", href: "/prices" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? isDark
              ? "bg-industrial-dark/95 backdrop-blur-lg shadow-xl border-b border-white/5"
              : "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <div className="w-12 h-12 rounded-full bg-samko-yellow flex items-center justify-center overflow-hidden shadow-md">
                  <Image
                    src="/logo.svg"
                    alt="SAMKO Lubricants"
                    width={48}
                    height={48}
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className={cn(
                  "text-xl font-bold tracking-tight transition-colors duration-300",
                  isDark ? "text-white group-hover:text-samko-yellow" : "text-gray-900 group-hover:text-samko-dark-red"
                )}>
                  SAMKO
                </span>
                <span className={cn(
                  "text-[10px] uppercase tracking-[0.2em] font-medium",
                  isDark ? "text-samko-yellow/80" : "text-samko-dark-red"
                )}>
                  Lubricants
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200",
                    pathname === link.href
                      ? isDark
                        ? "text-samko-yellow"
                        : "text-samko-dark-red"
                      : isDark
                        ? "text-white/70 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-0.5",
                        isDark ? "bg-samko-yellow" : "bg-samko-dark-red"
                      )}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className={cn(
                    "p-2.5 rounded-full transition-all duration-200",
                    isDark
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  )}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                  <AnimatePresence mode="wait">
                    {isDark ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Moon className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Sun className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden md:block"
              >
                <Link
                  href="/contact"
                  className="btn-premium inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-samko-yellow to-samko-gold text-industrial-dark font-semibold text-sm rounded-md hover:shadow-lg hover:shadow-samko-yellow/20 transition-all duration-200"
                >
                  Get a Quote
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2 transition-colors",
                  isDark ? "text-white" : "text-gray-700"
                )}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed top-20 left-0 right-0 z-40 backdrop-blur-lg border-b lg:hidden overflow-hidden",
              isDark
                ? "bg-industrial-dark/98 border-white/5"
                : "bg-white/98 border-gray-200"
            )}
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                      pathname === link.href
                        ? isDark
                          ? "text-samko-yellow bg-samko-yellow/10"
                          : "text-samko-dark-red bg-samko-red/5"
                        : isDark
                          ? "text-white/70 hover:text-white hover:bg-white/5"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 bg-gradient-to-r from-samko-yellow to-samko-gold text-industrial-dark font-semibold rounded-md"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
