"use client";

import React from "react";
import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A1112] light:bg-[#FFFFFF] border-t border-white/[0.08] light:border-black/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] light:border-black/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-all duration-200">
              <img 
                src="/logo.png" 
                alt="GR Tech Logo" 
                className="w-full h-full object-contain"
              />
            </div>
              <div>
                <span className="font-bold text-lg text-white light:text-[#0D0E11] tracking-tight block">
                  George Romany
                </span>
                <span className="text-xs text-[#94A3B8] light:text-[#475569]">
                  Software Engineer | Full-Stack Web Developer
                </span>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8] light:text-[#475569] max-w-sm leading-relaxed mb-6">
Engineering responsive, modern web applications with React, Next.js, and Node.js. Combining software engineering with 7 years of professional experience, bringing strong organizational skills, attention to detail, and structured workflow management.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/201055387922"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] flex items-center justify-center text-[#94A3B8] light:text-[#475569] hover:text-[#00F299] light:hover:text-[#006B4B] hover:border-[#00F299]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:george.romany.dev@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] flex items-center justify-center text-[#94A3B8] light:text-[#475569] hover:text-[#00F299] light:hover:text-[#006B4B] hover:border-[#00F299]/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="sms:+201055387922"
                aria-label="SMS"
                className="w-9 h-9 rounded-xl bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] flex items-center justify-center text-[#94A3B8] light:text-[#475569] hover:text-[#8F7CFF] light:hover:text-[#5B4ACB] hover:border-[#8F7CFF]/40 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-white/[0.04] light:bg-black/[0.04] border border-white/[0.08] light:border-black/[0.08] flex items-center justify-center text-[#94A3B8] light:text-[#475569] hover:text-[#00F299] light:hover:text-[#006B4B] hover:border-[#00F299]/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white light:text-[#0D0E11] font-semibold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8] light:text-[#475569]">
              <li>
                <a href="#about" className="hover:text-[#00F299] light:hover:text-[#006B4B] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#00F299] light:hover:text-[#006B4B] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#00F299] light:hover:text-[#006B4B] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#00F299] light:hover:text-[#006B4B] transition-colors">
                  Experience &amp; Education
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#00F299] light:hover:text-[#006B4B] transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00F299] light:hover:text-[#006B4B] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-white light:text-[#0D0E11] font-semibold mb-4">
                Direct Channels
              </h4>
              <ul className="space-y-2 text-xs text-[#94A3B8] light:text-[#475569]">
                <li>Cairo, Egypt</li>
                <li>
                  <a
                    href="mailto:george.romany.dev@gmail.com"
                    className="hover:text-[#00F299] light:hover:text-[#006B4B] transition-colors"
                  >
                    george.romany.dev@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/201055387922"
                    className="hover:text-[#00F299] light:hover:text-[#006B4B] transition-colors"
                  >
                    +20 105 538 7922
                  </a>
                </li>
              </ul>
            </div>

            {/* Back to Top Button */}
            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] light:bg-black/[0.05] border border-white/[0.08] light:border-black/[0.08] text-white light:text-[#0D0E11] hover:border-[#00F299] hover:text-[#00F299] transition-all"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#617275] light:text-[#94A3B8] gap-4">
          <p>© 2026 George Romany. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, Three.js, React Three Fiber &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
