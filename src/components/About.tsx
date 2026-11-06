"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileCheck2,
  Cpu,
  Layers,
  ShieldCheck,
  MapPin,
  Languages,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { cvData } from "@/data/cvData";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#0A1112] light:bg-[#FFFFFF] border-t border-b border-white/[0.04] light:border-black/[0.04]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00A36C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16251E] light:bg-[#DDF7EC] border border-[#00F299]/30 light:border-[#006B4B]/30 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00F299] light:text-[#006B4B]">
              Professional Profile
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-[#0D0E11]">
            About Me
          </h2>
<p className="mt-3 text-base sm:text-lg text-[#94A3B8] light:text-[#475569] max-w-2xl">
  Software Engineer focused on building modern, scalable, and user-friendly web applications.
</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Profile Card & Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00F299]/30 via-[#00A36C]/20 to-[#8F7CFF]/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl bg-[#0D0E11] light:bg-white border border-white/[0.1] light:border-black/[0.1] p-4 sm:p-6 shadow-2xl">
                {/* Profile Image with subtle framing */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-[#161B1E] border border-white/[0.08] light:border-black/[0.08]">
                  <Image
                    src="/profile_image.jpg"
                    alt="George Romany — Software Engineer & Full-Stack Web Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11]/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-[#0D0E11]/85 backdrop-blur-md border border-white/[0.1]">
                    <div className="flex items-center gap-1.5 text-white">
                      <MapPin className="w-3.5 h-3.5 text-[#00F299]" />
                      <span>{cvData.personal_information.location}</span>
                    </div>
                    <span className="text-[#00F299] font-medium font-mono text-[11px]">
                      Full-Stack Dev
                    </span>
                  </div>
                </div>

                {/* Key metadata chips */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between py-2 border-b border-white/[0.06] light:border-black/[0.06] text-xs">
                    <span className="text-[#94A3B8] light:text-[#475569] flex items-center gap-1.5">
                      <Languages className="w-3.5 h-3.5 text-[#8F7CFF] light:text-[#5B4ACB]" />
                      Languages
                    </span>
                    <span className="text-white light:text-[#0D0E11] font-medium">
                      Arabic (Native), English (B2)
                    </span>
                  </div>

<div className="flex items-center justify-between py-2 text-xs">
  <span className="text-[#94A3B8] light:text-[#475569] flex items-center gap-1.5">
    <FileCheck2 className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
    Development Focus
  </span>
  <span className="text-white light:text-[#0D0E11] font-medium">
    Full Stack Web Development
  </span>
</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description & Engineering Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="bg-[#101916]/70 light:bg-[#F8FAFC] border border-[#00F299]/20 light:border-[#006B4B]/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white light:text-[#0D0E11] mb-3">
                Full-Stack Engineer with Architectural Precision
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] light:text-[#475569] leading-relaxed mb-4">
                {cvData.summary}
              </p>
              <div className="border-t border-white/[0.08] light:border-black/[0.08] pt-4 mt-4">
                <p className="text-xs sm:text-sm text-[#94A3B8] light:text-[#475569] leading-relaxed">
I focus on building clean, maintainable, and scalable web applications, combining modern frontend technologies with reliable backend solutions. My approach emphasizes code quality, structured development, and creating seamless user experiences.
                </p>
              </div>
            </div>

            {/* Highlights Quad Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] light:bg-black/[0.02] border border-white/[0.08] light:border-black/[0.08] hover:border-[#00F299]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#00F299]/15 light:bg-[#006B4B]/15 flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5 text-[#00F299] light:text-[#006B4B]" />
                </div>
                <h4 className="text-sm font-semibold text-white light:text-[#0D0E11] mb-1">
                  Frontend Mastery
                </h4>
                <p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed">
                  Next.js App Router, React.js, Tailwind CSS, component-based architectures, and responsive UI.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] light:bg-black/[0.02] border border-white/[0.08] light:border-black/[0.08] hover:border-[#00F299]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#00F299]/15 light:bg-[#006B4B]/15 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5 text-[#00F299] light:text-[#006B4B]" />
                </div>
                <h4 className="text-sm font-semibold text-white light:text-[#0D0E11] mb-1">
                  Backend &amp; APIs
                </h4>
                <p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed">
                  Node.js, Express.js RESTful API design, Axios integration, and MongoDB database fundamentals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] light:bg-black/[0.02] border border-white/[0.08] light:border-black/[0.08] hover:border-[#8F7CFF]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#8F7CFF]/15 light:bg-[#5B4ACB]/15 flex items-center justify-center mb-3">
                  <FileCheck2 className="w-5 h-5 text-[#8F7CFF] light:text-[#5B4ACB]" />
                </div>
                <h4 className="text-sm font-semibold text-white light:text-[#0D0E11] mb-1">
  Structured Development
</h4>
<p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed">
  Strong focus on code quality, organized workflows, maintainable architecture, and attention to detail.
</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] light:bg-black/[0.02] border border-white/[0.08] light:border-black/[0.08] hover:border-[#00F299]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#00F299]/15 light:bg-[#006B4B]/15 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#00F299] light:text-[#006B4B]" />
                </div>
                <h4 className="text-sm font-semibold text-white light:text-[#0D0E11] mb-1">
                  Forms &amp; State
                </h4>
                <p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed">
                  Redux Toolkit, Context API, Formik, Yup validation, and bulletproof user interactions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

