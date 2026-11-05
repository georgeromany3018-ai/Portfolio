"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0E11]/85 light:bg-[#F8FAFC]/90 backdrop-blur-md shadow-lg border-b border-white/[0.06] light:border-black/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F299] rounded-lg"
            aria-label="George Romany Portfolio Homepage"
          >
            {/* 🔽 تم استبدال حاوية النص القديمة باللوجو المحدث 🔽 */}
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-all duration-200">
              <img 
                src="/logo.png" 
                alt="GR Tech Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-semibold text-base sm:text-lg tracking-tight text-white light:text-[#0D0E11] flex items-center gap-1.5">
                George Romany
                <span className="w-2 h-2 rounded-full bg-[#00F299] inline-block animate-pulse" />
              </span>
              <span className="text-xs text-[#94A3B8] light:text-[#475569] font-normal">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#161B1E]/60 light:bg-white/70 border border-white/[0.08] light:border-black/[0.08] backdrop-blur-md px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#00F299] light:text-[#006B4B] font-semibold"
                      : "text-[#94A3B8] light:text-[#475569] hover:text-white light:hover:text-[#0D0E11]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-[#00F299]/10 light:bg-[#006B4B]/10 border border-[#00F299]/30 light:border-[#006B4B]/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/201055387922"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#00F299] to-[#00A36C] light:from-[#006B4B] light:to-[#008F63] text-[#0D0E11] light:text-white shadow-[0_0_15px_rgba(0,242,153,0.3)] hover:shadow-[0_0_20px_rgba(0,242,153,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Let&apos;s Talk</span>
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden w-10 h-10 rounded-xl bg-white/[0.05] light:bg-black/[0.05] border border-white/[0.1] light:border-black/[0.1] flex items-center justify-center text-white light:text-[#0D0E11] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0D0E11]/98 light:bg-[#F8FAFC]/98 border-b border-white/[0.08] light:border-black/[0.08] backdrop-blur-xl px-6 py-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-[#94A3B8] light:text-[#475569] hover:text-[#00F299] light:hover:text-[#006B4B] hover:bg-white/[0.03] light:hover:bg-black/[0.03] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.08] light:border-black/[0.08] flex flex-col gap-3">
                <a
                  href="https://wa.me/201055387922"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-[#00F299] light:bg-[#006B4B] text-[#0D0E11] light:text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp (+201055387922)</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
