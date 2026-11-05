"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  FileCheck2,
  Code2,
  Award,
} from "lucide-react";
import { cvData } from "@/data/cvData";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#0D0E11] light:bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16251E] light:bg-[#DDF7EC] border border-[#00F299]/30 light:border-[#006B4B]/30 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00F299] light:text-[#006B4B]">
              Career &amp; Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-[#0D0E11]">
            Experience &amp; Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8] light:text-[#475569] max-w-2xl">
            A balanced trajectory spanning rigorous Document Control discipline, formal MIS academic degree, and intensive full-stack development training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#00F299] via-[#8F7CFF] to-[#00A36C] opacity-30" />

          <div className="space-y-12">
            {/* Timeline Item 1: MERN Stack Web Development Trainee (AMIT Learning) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col sm:flex-row items-start gap-8 group"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0D0E11] light:bg-white border-2 border-[#00F299] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,242,153,0.4)]">
                <Code2 className="w-4 h-4 text-[#00F299]" />
              </div>

              {/* Left Column (Metadata on Desktop) */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-10 sm:text-right">
                <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-[#00F299]/10 text-[#00F299] light:text-[#006B4B] font-semibold mb-2">
                  Technical Training
                </span>
                <h3 className="text-xl font-bold text-white light:text-[#0D0E11]">
                  {cvData.professional_experience[0].role}
                </h3>
                <div className="text-sm font-semibold text-[#00F299] light:text-[#006B4B] mb-1">
                  {cvData.professional_experience[0].company}
                </div>
                <div className="flex items-center gap-3 text-xs text-[#94A3B8] light:text-[#475569] sm:justify-end">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cvData.professional_experience[0].date_range}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {cvData.professional_experience[0].location}
                  </span>
                </div>
              </div>

              {/* Right Column (Card with Responsibilities) */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-10">
                <div className="rounded-2xl bg-[#101916]/70 light:bg-white border border-[#00F299]/20 light:border-black/[0.08] p-5 sm:p-6 backdrop-blur-sm shadow-md group-hover:border-[#00F299]/50 transition-colors">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-[#94A3B8] light:text-[#475569] mb-3">
                    Core Curriculum &amp; Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed">
                    {cvData.professional_experience[0].responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00F299] light:text-[#006B4B] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Timeline Item 2: Document Control Professional (7 Years Experience) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col sm:flex-row-reverse items-start gap-8 group"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0D0E11] light:bg-white border-2 border-[#8F7CFF] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(143,124,255,0.4)]">
                <FileCheck2 className="w-4 h-4 text-[#8F7CFF]" />
              </div>

              {/* Right Column (Metadata on Desktop) */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-10 sm:text-left">
                <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-[#8F7CFF]/10 text-[#8F7CFF] light:text-[#5B4ACB] font-semibold mb-2">
                  Professional Experience
                </span>
                <h3 className="text-xl font-bold text-white light:text-[#0D0E11]">
                  Document Control Professional
                </h3>
                <div className="text-sm font-semibold text-[#8F7CFF] light:text-[#5B4ACB] mb-1">
                  7 Years Professional Experience
                </div>
                <div className="flex items-center gap-3 text-xs text-[#94A3B8] light:text-[#475569]">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    7 Years Career Track
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Cairo, Egypt
                  </span>
                </div>
              </div>

              {/* Left Column (Card with Transferable Impact) */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-10">
                <div className="rounded-2xl bg-[#101916]/70 light:bg-white border border-[#8F7CFF]/20 light:border-black/[0.08] p-5 sm:p-6 backdrop-blur-sm shadow-md group-hover:border-[#8F7CFF]/50 transition-colors">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-[#94A3B8] light:text-[#475569] mb-3">
                    Transferable Engineering Strengths:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8F7CFF] light:text-[#5B4ACB] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white light:text-[#0D0E11] font-medium">Quality Assurance &amp; Accuracy:</strong> Meticulous eye for detail cultivated over 7 years managing mission-critical technical records and engineering revisions.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8F7CFF] light:text-[#5B4ACB] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white light:text-[#0D0E11] font-medium">Workflow Management:</strong> Organizing structured lifecycle flows, tracking status changes, and ensuring compliance across complex multidisciplinary project deliverables.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8F7CFF] light:text-[#5B4ACB] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white light:text-[#0D0E11] font-medium">Version Control Discipline:</strong> Natural adherence to strict audit trails, documentation standards, and version integrity, directly mirroring Git workflow methodologies.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Timeline Item 3: Thebes Academy — Management Information Systems */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col sm:flex-row items-start gap-8 group"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0D0E11] light:bg-white border-2 border-[#00F299] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,242,153,0.4)]">
                <GraduationCap className="w-4 h-4 text-[#00F299]" />
              </div>

              {/* Left Column (Metadata on Desktop) */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-10 sm:text-right">
                <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-[#00F299]/10 text-[#00F299] light:text-[#006B4B] font-semibold mb-2">
                  Academic Degree
                </span>
                <h3 className="text-xl font-bold text-white light:text-[#0D0E11]">
                  {cvData.education[0].degree}
                </h3>
                <div className="text-sm font-semibold text-[#00F299] light:text-[#006B4B] mb-1">
                  {cvData.education[0].institution}
                </div>
                <div className="flex items-center gap-3 text-xs text-[#94A3B8] light:text-[#475569] sm:justify-end">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cvData.education[0].date_range}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {cvData.education[0].location}
                  </span>
                </div>
              </div>

              {/* Right Column (Card with Graduation Project) */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-10">
                <div className="rounded-2xl bg-[#101916]/70 light:bg-white border border-[#00F299]/20 light:border-black/[0.08] p-5 sm:p-6 backdrop-blur-sm shadow-md group-hover:border-[#00F299]/50 transition-colors">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-[#94A3B8] light:text-[#475569] mb-3">
                    Graduation Project &amp; Foundation:
                  </h4>
                  <p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed mb-3">
                    {cvData.education[0].details}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06] light:border-black/[0.06]">
                    {["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Database Management"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.06] text-[#94A3B8] light:text-[#475569]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

