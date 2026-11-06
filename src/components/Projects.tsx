"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowUpRight,
  Code2,
  PackageCheck,
} from "lucide-react";
import { cvData } from "@/data/cvData";

export const Projects: React.FC = () => {
  const [project1, project2] = cvData.projects;

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
          {/* Project 1: E-Commerce Client */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group rounded-3xl bg-[#0D0E11] light:bg-[#F8FAFC] border border-[#00F299]/20 light:border-black/[0.08] hover:border-[#00F299]/50 overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(0,242,153,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Visual Interactive Preview with Screenshot */}
              <div className="relative h-64 sm:h-72 w-full bg-[#0D1614] overflow-hidden border-b border-white/[0.08] light:border-black/[0.08]">
                {/* Visual Top Bar Mockup */}
                <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-[#0D0E11]/90 backdrop-blur-md border-b border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    <span className="ml-2 font-mono text-[11px] text-[#00F299] truncate max-w-[160px] sm:max-w-xs">
                      e-commerce-alpha-three-89.vercel.app
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00F299]/10 border border-[#00F299]/20 text-[10px] text-[#00F299] light:text-[#006B4B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F299] animate-pulse" />
                    <span>Live Storefront</span>
                  </div>
                </div>

                {/* Screenshot Display */}
                <a
                  href={project1.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full h-full pt-8 cursor-pointer group/preview"
                  aria-label="View E-Commerce Client live demo"
                >
                  <Image
                    src={project1.image || "/screenshots/HomPage.png"}
                    alt="E-Commerce Client Homepage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </a>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-[#00F299] light:text-[#006B4B] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {project1.date_range}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#00F299]/10 text-[#00F299] light:text-[#006B4B] font-semibold">
                    {project1.badge || "Client Storefront"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white light:text-[#0D0E11] mb-3 group-hover:text-[#00F299] light:group-hover:text-[#006B4B] transition-colors">
                  <a
                    href={project1.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none"
                  >
                    {project1.title}
                  </a>
                </h3>

                <p className="text-sm text-[#94A3B8] light:text-[#475569] leading-relaxed mb-5">
                  {project1.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 mb-6">
                  {project1.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8] light:text-[#475569]">
                      <PackageCheck className="w-4 h-4 text-[#00F299] light:text-[#006B4B] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Tech Stack & Action Links */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="pt-4 border-t border-white/[0.08] light:border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project1.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-[#94A3B8] light:text-[#475569] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={project1.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#00F299] light:bg-[#006B4B] text-[#0D0E11] light:text-white hover:opacity-95 shadow-[0_0_15px_rgba(0,242,153,0.25)] hover:shadow-[0_0_20px_rgba(0,242,153,0.4)] transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project1.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] light:bg-black/[0.05] border border-white/[0.1] light:border-black/[0.1] text-white light:text-[#0D0E11] hover:text-[#00F299] light:hover:text-[#006B4B] hover:border-[#00F299]/40 light:hover:border-[#006B4B]/40 transition-all hover:scale-105 active:scale-95"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2: E-Commerce Admin Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group rounded-3xl bg-[#0D0E11] light:bg-[#F8FAFC] border border-[#00F299]/20 light:border-black/[0.08] hover:border-[#8F7CFF]/50 overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Visual Interactive Preview with Screenshot */}
              <div className="relative h-64 sm:h-72 w-full bg-[#10111E] overflow-hidden border-b border-white/[0.08] light:border-black/[0.08]">
                {/* Visual Top Bar Mockup */}
                <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-[#0D0E11]/90 backdrop-blur-md border-b border-white/[0.08] light:border-black/[0.08] text-xs text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    <span className="ml-2 font-mono text-[11px] text-[#8F7CFF] truncate max-w-[160px] sm:max-w-xs">
                      .../dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#8F7CFF]/10 border border-[#8F7CFF]/20 text-[10px] text-[#8F7CFF] light:text-[#5B4ACB]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8F7CFF] animate-pulse" />
                    <span>Admin Portal</span>
                  </div>
                </div>

                {/* Screenshot Display */}
                <a
                  href={project2.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full h-full pt-8 cursor-pointer group/preview"
                  aria-label="View E-Commerce Admin Dashboard live demo"
                >
                  <Image
                    src={project2.image || "/screenshots/AdminPage.png"}
                    alt="E-Commerce Admin Dashboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </a>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-[#8F7CFF] light:text-[#5B4ACB] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {project2.date_range}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#8F7CFF]/10 text-[#8F7CFF] light:text-[#5B4ACB] font-semibold">
                    {project2.badge || "Admin Dashboard"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white light:text-[#0D0E11] mb-3 group-hover:text-[#8F7CFF] light:group-hover:text-[#5B4ACB] transition-colors">
                  <a
                    href={project2.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none"
                  >
                    {project2.title}
                  </a>
                </h3>

                <p className="text-sm text-[#94A3B8] light:text-[#475569] leading-relaxed mb-5">
                  {project2.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 mb-6">
                  {project2.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8] light:text-[#475569]">
                      <PackageCheck className="w-4 h-4 text-[#8F7CFF] light:text-[#5B4ACB] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Tech Stack & Action Links */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="pt-4 border-t border-white/[0.08] light:border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project2.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-[#94A3B8] light:text-[#475569] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={project2.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#8F7CFF] light:bg-[#5B4ACB] text-[#0D0E11] light:text-white hover:opacity-95 shadow-[0_0_15px_rgba(143,124,255,0.25)] hover:shadow-[0_0_20px_rgba(143,124,255,0.4)] transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project2.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] light:bg-black/[0.05] border border-white/[0.1] light:border-black/[0.1] text-white light:text-[#0D0E11] hover:text-[#8F7CFF] light:hover:text-[#5B4ACB] hover:border-[#8F7CFF]/40 light:hover:border-[#5B4ACB]/40 transition-all hover:scale-105 active:scale-95"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>GitHub</span>
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
