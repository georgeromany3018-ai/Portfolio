"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Cpu,
  PackageCheck,
  ListTodo,
  Tag,
  Star,
  Check,
  Plus,
} from "lucide-react";
import { cvData } from "@/data/cvData";

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-[#0A1112] light:bg-[#FFFFFF] border-t border-b border-white/[0.04] light:border-black/[0.04]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00F299]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#8F7CFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16251E] light:bg-[#DDF7EC] border border-[#00F299]/30 light:border-[#006B4B]/30 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00F299] light:text-[#006B4B]">
              Portfolio Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-[#0D0E11]">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8] light:text-[#475569] max-w-2xl">
            Real-world applications showcasing client-side routing, REST API integration, global state management, and responsive interfaces.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 1: E-commerce Web Application */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group rounded-3xl bg-[#0D0E11] light:bg-[#F8FAFC] border border-[#00F299]/20 light:border-black/[0.08] hover:border-[#00F299]/50 overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(0,242,153,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Visual Interactive Preview */}
              <div className="relative h-64 sm:h-72 w-full bg-gradient-to-br from-[#12241C] via-[#0D1614] to-[#0A1112] p-5 flex flex-col justify-between overflow-hidden border-b border-white/[0.08] light:border-black/[0.08]">
                {/* Visual Top Bar Mockup */}
                <div className="flex items-center justify-between text-xs text-[#94A3B8] border-b border-white/[0.1] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    <span className="ml-2 font-mono text-[11px] text-[#00F299]">DummyJSON REST API</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px]">
                    <ShoppingCart className="w-3 h-3 text-[#00F299]" />
                    <span>Redux Cart (3 Items)</span>
                  </div>
                </div>

                {/* Mockup Product Grid Cards inside */}
                <div className="grid grid-cols-2 gap-3 my-auto">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] text-[#94A3B8] mb-1">
                      <span className="font-medium text-white">Smart Gadget</span>
                      <span className="text-[#00F299] font-mono">$189.99</span>
                    </div>
                    <p className="text-[10px] text-[#617275] line-clamp-1 mb-2">High-performance wireless device</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00F299]/20 text-[#00F299]">In Stock</span>
                      <span className="text-[10px] text-white/80 flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" /> 4.9
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] text-[#94A3B8] mb-1">
                      <span className="font-medium text-white">Audio Tech</span>
                      <span className="text-[#00F299] font-mono">$79.50</span>
                    </div>
                    <p className="text-[10px] text-[#617275] line-clamp-1 mb-2">Noise-cancelling headphone</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#8F7CFF]/20 text-[#8F7CFF]">Wishlist</span>
                      <span className="text-[10px] text-white/80 flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" /> 4.8
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom status */}
                <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                  <span>Axios HTTP Handler</span>
                  <span className="text-[#00F299]">Redux Toolkit Sync</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-[#00F299] light:text-[#006B4B] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {cvData.projects[0].date_range}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#00F299]/10 text-[#00F299] light:text-[#006B4B] font-semibold">
                    Full Web App
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white light:text-[#0D0E11] mb-3 group-hover:text-[#00F299] light:group-hover:text-[#006B4B] transition-colors">
                  {cvData.projects[0].title}
                </h3>

                <p className="text-sm text-[#94A3B8] light:text-[#475569] leading-relaxed mb-5">
                  Responsive multi-page e-commerce application featuring product catalog discovery, detailed views, cart management, and dashboard navigation.
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 mb-6">
                  {cvData.projects[0].details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8] light:text-[#475569]">
                      <PackageCheck className="w-4 h-4 text-[#00F299] light:text-[#006B4B] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Tech Stack & Links */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="pt-4 border-t border-white/[0.08] light:border-black/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {cvData.projects[0].technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* الروابط الحقيقية لمشروع الـ E-commerce الخاص بك */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#94A3B8] hover:text-[#00F299] transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href="https://vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-[#00F299] hover:underline transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};
