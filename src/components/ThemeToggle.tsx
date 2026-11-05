"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ThemeToggleProps {
  className?: string;
}

/**
 * ThemeToggle Component
 *
 * Client component that safely updates theme state after mounting to DOM.
 * Includes standard mounted guard (useEffect) to eliminate Next.js SSR hydration mismatches.
 * Renders default dark state icon during SSR / initial static render.
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Standard mounted check ensuring SSR compatibility
  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or before mounting, render safe static placeholder matching default dark theme
  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-label="Toggle theme"
        className={`w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#94A3B8] opacity-80 cursor-default ${className}`}
      >
        <Sun className="w-5 h-5 text-[#00F299]" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`w-10 h-10 rounded-xl bg-white/[0.05] light:bg-black/[0.05] border border-white/[0.1] light:border-black/[0.1] flex items-center justify-center text-[#94A3B8] light:text-[#475569] hover:text-[#00F299] light:hover:text-[#006B4B] hover:border-[#00F299]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F299] ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-[#00F299]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-[#006B4B]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;

