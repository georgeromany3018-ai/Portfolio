"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { cvData } from "@/data/cvData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters long.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormErrors({});
      } else {
        setSubmitError(data.error || "Failed to deliver message. Please try WhatsApp.");
      }
    } catch {
      setSubmitError("Network connection error. Please connect directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#0D0E11] light:bg-[#F8FAFC]"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00F299]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16251E] light:bg-[#DDF7EC] border border-[#00F299]/30 light:border-[#006B4B]/30 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00F299] light:text-[#006B4B]">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-[#0D0E11]">
            Contact Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8] light:text-[#475569] max-w-2xl">
            Available for software engineering positions, full-stack projects, and technical collaborations.
          </p>
        </div>

        {/* 3 Main Direct Communication Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* Method 1: WhatsApp */}
          <a
            href="https://wa.me/201055387922"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-[#101916]/80 light:bg-white border border-[#00F299]/25 light:border-black/[0.08] hover:border-[#00F299] p-6 shadow-md hover:shadow-[0_0_25px_rgba(0,242,153,0.2)] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00F299]/15 light:bg-[#006B4B]/15 text-[#00F299] light:text-[#006B4B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#00F299] light:text-[#006B4B]">
                Instant Messaging
              </span>
              <h3 className="text-lg font-bold text-white light:text-[#0D0E11] mt-1 mb-2">
                WhatsApp
              </h3>
              <p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed">
                Open a direct WhatsApp conversation to discuss project opportunities and availability.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.06] light:border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#00F299] light:text-[#006B4B]">
              <span>+20 105 538 7922</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          {/* Method 2: SMS */}
          <a
            href="sms:+201055387922"
            className="group rounded-2xl bg-[#101916]/80 light:bg-white border border-[#8F7CFF]/25 light:border-black/[0.08] hover:border-[#8F7CFF] p-6 shadow-md hover:shadow-[0_0_25px_rgba(143,124,255,0.2)] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#8F7CFF]/15 light:bg-[#5B4ACB]/15 text-[#8F7CFF] light:text-[#5B4ACB] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8F7CFF] light:text-[#5B4ACB]">
                Mobile Messaging
              </span>
              <h3 className="text-lg font-bold text-white light:text-[#0D0E11] mt-1 mb-2">
                Direct SMS
              </h3>
              <p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed">
                Launch your device&apos;s default text messaging app directly to send a standard SMS.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.06] light:border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#8F7CFF] light:text-[#5B4ACB]">
              <span>+20 105 538 7922</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          {/* Method 3: Direct Email */}
          <div className="group rounded-2xl bg-[#101916]/80 light:bg-white border border-white/[0.08] light:border-black/[0.08] hover:border-[#00F299]/50 p-6 shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] light:bg-black/[0.05] text-[#00F299] light:text-[#006B4B] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] light:text-[#475569]">
                Electronic Mail
              </span>
              <h3 className="text-lg font-bold text-white light:text-[#0D0E11] mt-1 mb-2">
                Direct Inbox
              </h3>
              <p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed">
                Send professional inquiries, recruitment packets, or interview requests.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.06] light:border-black/[0.06] flex items-center justify-between text-xs">
              <a
                href="mailto:george.romany.dev@gmail.com"
                className="font-semibold text-white light:text-[#0D0E11] hover:text-[#00F299] transition-colors truncate mr-2"
              >
                george.romany.dev@gmail.com
              </a>
              <button
                onClick={() => copyToClipboard("george.romany.dev@gmail.com", "email")}
                aria-label="Copy email address"
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-[#00F299]/20 text-[#94A3B8] hover:text-[#00F299] transition-colors shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#00F299]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Form & Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Metadata Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#0A1112] light:bg-white border border-white/[0.08] light:border-black/[0.08] p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white light:text-[#0D0E11] mb-2">
                George Romany
              </h3>
              <p className="text-xs text-[#94A3B8] light:text-[#475569] leading-relaxed mb-6">
                Software Engineer &amp; Full-Stack Web Developer. Always receptive to technical discussions, engineering opportunities, and product challenges.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] light:bg-black/[0.02] border border-white/[0.06] light:border-black/[0.06]">
                  <MapPin className="w-4 h-4 text-[#00F299] light:text-[#006B4B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white light:text-[#0D0E11] block">
                      Primary Location
                    </span>
                    <span className="text-[#94A3B8] light:text-[#475569]">
                      Cairo, Egypt (Open to Remote &amp; Hybrid)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] light:bg-black/[0.02] border border-white/[0.06] light:border-black/[0.06]">
                  <Clock className="w-4 h-4 text-[#8F7CFF] light:text-[#5B4ACB] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white light:text-[#0D0E11] block">
                      Response Time
                    </span>
                    <span className="text-[#94A3B8] light:text-[#475569]">
                      Typically responds within 24 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] light:bg-black/[0.02] border border-white/[0.06] light:border-black/[0.06]">
                  <Sparkles className="w-4 h-4 text-[#00F299] light:text-[#006B4B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white light:text-[#0D0E11] block">
                      Preferred Contact
                    </span>
                    <span className="text-[#94A3B8] light:text-[#475569]">
                      WhatsApp &amp; Direct Email
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Email Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0A1112] light:bg-white border border-[#00F299]/20 light:border-black/[0.08] p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white light:text-[#0D0E11] mb-2">
                Send an Email Message
              </h3>
              <p className="text-xs text-[#94A3B8] light:text-[#475569] mb-6">
                Deliver a direct message securely to George&apos;s verified developer inbox.
              </p>

              {/* Success Notification */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-[#00F299]/15 border border-[#00F299]/40 flex items-start gap-3 text-xs text-[#00F299] light:text-[#006B4B]">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Message Delivered</strong>
                    <span>{submitSuccess}</span>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/40 flex items-start gap-3 text-xs text-red-400">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Delivery Warning</strong>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-[#94A3B8] light:text-[#475569] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs bg-white/[0.04] light:bg-black/[0.04] border ${
                        formErrors.name
                          ? "border-red-500"
                          : "border-white/[0.08] light:border-black/[0.08]"
                      } text-white light:text-[#0D0E11] placeholder-[#617275] focus:outline-none focus:border-[#00F299] light:focus:border-[#006B4B] transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-[#94A3B8] light:text-[#475569] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.connor@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs bg-white/[0.04] light:bg-black/[0.04] border ${
                        formErrors.email
                          ? "border-red-500"
                          : "border-white/[0.08] light:border-black/[0.08]"
                      } text-white light:text-[#0D0E11] placeholder-[#617275] focus:outline-none focus:border-[#00F299] light:focus:border-[#006B4B] transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-[#94A3B8] light:text-[#475569] mb-1.5"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full-Stack Opportunity / Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs bg-white/[0.04] light:bg-black/[0.04] border ${
                      formErrors.subject
                        ? "border-red-500"
                        : "border-white/[0.08] light:border-black/[0.08]"
                    } text-white light:text-[#0D0E11] placeholder-[#617275] focus:outline-none focus:border-[#00F299] light:focus:border-[#006B4B] transition-colors`}
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-[#94A3B8] light:text-[#475569] mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here (requirements, project timeline, role overview)..."
                    className={`w-full px-4 py-3 rounded-xl text-xs bg-white/[0.04] light:bg-black/[0.04] border ${
                      formErrors.message
                        ? "border-red-500"
                        : "border-white/[0.08] light:border-black/[0.08]"
                    } text-white light:text-[#0D0E11] placeholder-[#617275] focus:outline-none focus:border-[#00F299] light:focus:border-[#006B4B] transition-colors resize-y`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#00F299] to-[#00A36C] light:from-[#006B4B] light:to-[#008F63] text-[#0D0E11] light:text-white shadow-[0_0_20px_rgba(0,242,153,0.3)] hover:shadow-[0_0_30px_rgba(0,242,153,0.5)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

