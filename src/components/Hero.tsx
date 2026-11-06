"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hero3D } from "./Hero3D";
import {
  ArrowDown,
  Mail,
  MessageCircle,
  Code2,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0D0E11] light:bg-[#F8FAFC]"
    >
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00F299]/10 light:bg-[#006B4B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8F7CFF]/10 light:bg-[#5B4ACB]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#00A36C]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] light:opacity-[0.04] pointer-events-none bg-[radial-gradient(#00F299_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16251E] light:bg-[#DDF7EC] border border-[#00F299]/30 light:border-[#006B4B]/30 mb-6 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F299] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F299]" />
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-[#00F299] light:text-[#006B4B]">
                Available for Full-Stack Opportunities
              </span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-[#0D0E11] leading-[1.1] mb-3"
            >
              George Romany
            </motion.h1>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl sm:text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F299] via-[#2CF766] to-[#8F7CFF] light:from-[#006B4B] light:via-[#008F63] light:to-[#5B4ACB] mb-6"
            >
              Software Engineer | Full-Stack Web Developer
            </motion.div>

            {/* Engaging Profile Summary */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.7 }}
  className="text-base sm:text-lg text-[#94A3B8] light:text-[#475569] leading-relaxed max-w-2xl mb-6 font-normal"
>
  I specialize in designing and developing modern, responsive, and
  high-performance web applications, combining clean user interfaces
  with scalable backend solutions. Using{" "}
  <strong className="text-white light:text-[#0D0E11] font-medium">
    React, Next.js, Node.js, and Express.js
  </strong>
  , I focus on building seamless user experiences, reusable components,
  efficient application architecture, and reliable API integrations.
</motion.p>

            {/* Transferable Skills Quick Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
 <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8] light:text-[#475569]">
  <Layers className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
  <span>Next.js &amp; React.js</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8] light:text-[#475569]">
  <Code2 className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
  <span>JavaScript</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8] light:text-[#475569]">
  <Code2 className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
  <span>Node.js &amp; Express.js</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8] light:text-[#475569]">
  <Code2 className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
  <span>REST APIs</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8] light:text-[#475569]">
  <Layers className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
  <span>Redux Toolkit</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8] light:text-[#475569]">
  <Code2 className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
  <span>MongoDB &amp; Mongoose</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8] light:text-[#475569]">
  <Layers className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
  <span>Tailwind CSS &amp; Bootstrap</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8] light:text-[#475569]">
  <Code2 className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
  <span>Git &amp; GitHub</span>
</div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#00F299] to-[#00A36C] light:from-[#006B4B] light:to-[#008F63] text-[#0D0E11] light:text-white shadow-[0_0_25px_rgba(0,242,153,0.35)] hover:shadow-[0_0_35px_rgba(0,242,153,0.55)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.05] light:bg-black/[0.05] border border-white/[0.12] light:border-black/[0.12] text-white light:text-[#0D0E11] hover:border-[#00F299] light:hover:border-[#006B4B] hover:bg-white/[0.08] light:hover:bg-black/[0.08] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#00F299] light:text-[#006B4B]" />
                <span>Contact Me</span>
              </a>

              <a
                href="https://wa.me/201055387922"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-[#00F299] light:text-[#006B4B] hover:bg-[#00F299]/10 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="sm:inline">WhatsApp</span>
              </a>
            
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            {/* Interactive 3D Model Card Container */}
            <div className="w-full relative flex items-center justify-center">
              <div className="w-full max-w-[480px]">
                <Hero3D />
              </div>

              {/* Floating Interaction Prompt Badge */}
              <div className="absolute -bottom-2 sm:bottom-4 px-3.5 py-1.5 rounded-full bg-[#0D0E11]/80 light:bg-white/80 border border-white/[0.1] light:border-black/[0.1] backdrop-blur-md text-[11px] font-mono text-[#94A3B8] light:text-[#475569] flex items-center gap-2 shadow-lg pointer-events-none">
                <Sparkles className="w-3 h-3 text-[#00F299] light:text-[#006B4B]" />
                <span>Interactive 3D • Move cursor to explore</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

