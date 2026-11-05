"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Atom,
  Server,
  Network,
  CheckSquare,
  Database,
  Wrench,
  Sparkles,
  Search,
} from "lucide-react";
import { cvData } from "@/data/cvData";

interface SkillCategoryMeta {
  key: keyof typeof cvData.skills;
  title: string;
  icon: React.ReactNode;
  description: string;
  badge: string;
}

const skillCategoriesMeta: SkillCategoryMeta[] = [
  {
    key: "frontend_development",
    title: "Frontend Development",
    icon: <Code className="w-5 h-5 text-[#00F299] light:text-[#006B4B]" />,
    description: "Modern, performant, and responsive web user interfaces.",
    badge: "Core Stack",
  },
  {
    key: "react_js_development",
    title: "React Development",
    icon: <Atom className="w-5 h-5 text-[#00F299] light:text-[#006B4B]" />,
    description: "Scalable component architectures, lifecycle hooks, and state paradigms.",
    badge: "Architecture",
  },
  {
    key: "backend_development",
    title: "Backend Development",
    icon: <Server className="w-5 h-5 text-[#8F7CFF] light:text-[#5B4ACB]" />,
    description: "Server-side runtimes, controllers, and RESTful service architecture.",
    badge: "Server-Side",
  },
  {
    key: "api_integration_and_data_handling",
    title: "API Integration & Data Handling",
    icon: <Network className="w-5 h-5 text-[#00F299] light:text-[#006B4B]" />,
    description: "Robust HTTP pipelines, asynchronous data manipulation, and promises.",
    badge: "Data Pipelines",
  },
  {
    key: "forms_and_validation",
    title: "Forms & Validation",
    icon: <CheckSquare className="w-5 h-5 text-[#00F299] light:text-[#006B4B]" />,
    description: "Strict schema validation, controlled inputs, and error management.",
    badge: "Integrity",
  },
  {
    key: "database_fundamentals",
    title: "Database Fundamentals",
    icon: <Database className="w-5 h-5 text-[#8F7CFF] light:text-[#5B4ACB]" />,
    description: "NoSQL document persistence, data modeling, and storage concepts.",
    badge: "Persistence",
  },
  {
    key: "tools_and_version_control",
    title: "Tools & Version Control",
    icon: <Wrench className="w-5 h-5 text-[#00F299] light:text-[#006B4B]" />,
    description: "Developer tooling, package ecosystems, and distributed versioning.",
    badge: "Tooling",
  },
  {
    key: "software_development_practices",
    title: "Software Practices",
    icon: <Sparkles className="w-5 h-5 text-[#8F7CFF] light:text-[#5B4ACB]" />,
    description: "Clean code principles, debugging rigor, reusability, and testing mindset.",
    badge: "Best Practices",
  },
];

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = skillCategoriesMeta.filter((cat) => {
    if (selectedFilter !== "all" && cat.key !== selectedFilter) return false;
    if (searchQuery.trim() === "") return true;

    const query = searchQuery.toLowerCase();
    const matchesCat = cat.title.toLowerCase().includes(query);
    const matchesSkill = cvData.skills[cat.key].some((skill) =>
      skill.toLowerCase().includes(query)
    );
    return matchesCat || matchesSkill;
  });

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#0D0E11] light:bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16251E] light:bg-[#DDF7EC] border border-[#00F299]/30 light:border-[#006B4B]/30 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00F299] light:text-[#006B4B]">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-[#0D0E11]">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8] light:text-[#475569] max-w-2xl">
            Structured skillsets acquired through intensive MERN stack training, practical web development, and computer science coursework.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === "all"
                  ? "bg-[#00F299] text-[#0D0E11] font-semibold shadow-[0_0_12px_rgba(0,242,153,0.35)]"
                  : "bg-white/[0.04] light:bg-black/[0.04] text-[#94A3B8] light:text-[#475569] hover:text-white light:hover:text-[#0D0E11]"
              }`}
            >
              All Categories
            </button>
            {skillCategoriesMeta.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedFilter(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedFilter === cat.key
                    ? "bg-[#00F299] text-[#0D0E11] font-semibold shadow-[0_0_12px_rgba(0,242,153,0.35)]"
                    : "bg-white/[0.04] light:bg-black/[0.04] text-[#94A3B8] light:text-[#475569] hover:text-white light:hover:text-[#0D0E11]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] light:text-[#475569]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Next.js)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] text-white light:text-[#0D0E11] placeholder-[#617275] focus:outline-none focus:border-[#00F299] light:focus:border-[#006B4B] transition-colors"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredCategories.map((cat, idx) => {
              const skillsList = cvData.skills[cat.key];
              return (
                <motion.div
                  key={cat.key}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="group rounded-2xl bg-[#101916]/60 light:bg-white border border-[#00F299]/15 light:border-black/[0.08] hover:border-[#00F299]/50 light:hover:border-[#006B4B]/40 p-5 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#00F299]/10 light:bg-[#006B4B]/10 flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/[0.05] light:bg-black/[0.05] text-[#94A3B8] light:text-[#475569] border border-white/[0.05]">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white light:text-[#0D0E11] mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] light:text-[#475569] mb-4">
                      {cat.description}
                    </p>
                  </div>

                  {/* Skills Pill Cloud */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06] light:border-black/[0.06]">
                    {skillsList.map((skill) => {
                      const isHighlighted =
                        searchQuery.trim() !== "" &&
                        skill.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <span
                          key={skill}
                          className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                            isHighlighted
                              ? "bg-[#00F299]/25 text-[#00F299] border-[#00F299]"
                              : "bg-white/[0.03] light:bg-black/[0.03] text-[#94A3B8] light:text-[#475569] border-white/[0.05] light:border-black/[0.05] group-hover:border-[#00F299]/20"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

