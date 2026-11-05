"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, MapPin, CheckCircle, Terminal } from "lucide-react";
import { cvData } from "@/data/cvData";

export const Certifications: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 bg-[#0A1112] light:bg-[#FFFFFF] border-t border-b border-white/[0.04] light:border-black/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16251E] light:bg-[#DDF7EC] border border-[#00F299]/30 light:border-[#006B4B]/30 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00F299] light:text-[#006B4B]">
              Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-[#0D0E11]">
            Courses &amp; Certifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8] light:text-[#475569] max-w-2xl">
            Specialized diplomas and structured computer science coursework strengthening core fundamentals and modern full-stack workflows.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cvData.courses.map((course, idx) => {
            const isMern = course.title.toLowerCase().includes("mern");
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between ${
                  isMern
                    ? "bg-[#101916]/80 light:bg-[#F8FAFC] border-2 border-[#00F299]/40 light:border-[#006B4B]/40 shadow-[0_0_25px_rgba(0,242,153,0.1)]"
                    : "bg-[#0D0E11] light:bg-white border border-white/[0.08] light:border-black/[0.08] hover:border-[#8F7CFF]/40 shadow-md hover:shadow-xl"
                }`}
              >
                <div>
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isMern
                          ? "bg-[#00F299]/15 text-[#00F299] light:text-[#006B4B]"
                          : "bg-[#8F7CFF]/15 text-[#8F7CFF] light:text-[#5B4ACB]"
                      }`}
                    >
                      {isMern ? <Award className="w-5 h-5" /> : <Terminal className="w-5 h-5" />}
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] light:bg-black/[0.05] text-[#94A3B8] light:text-[#475569] border border-white/[0.05]">
                      {course.provider}
                    </span>
                  </div>

                  {/* Title & Metadata */}
                  <h3 className="text-lg font-bold text-white light:text-[#0D0E11] mb-2">
                    {course.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#94A3B8] light:text-[#475569] mb-4">
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B]" />
                      {course.date_range}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {course.location}
                    </span>
                  </div>

                  {/* Details Description */}
                  <p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed mb-6">
                    {course.details}
                  </p>
                </div>

                {/* Bottom Verification Note */}
                <div className="pt-4 border-t border-white/[0.06] light:border-black/[0.06] flex items-center gap-2 text-[11px] text-[#00F299] light:text-[#006B4B] font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Curriculum</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

