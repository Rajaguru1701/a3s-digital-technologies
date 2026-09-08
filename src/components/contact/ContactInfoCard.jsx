import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, PhoneCall, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function ContactInfoCard() {
  return (
    <div className="space-y-6">
      {/* Contact Information Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-brand-navy-light/90 border border-white/10 shadow-2xl backdrop-blur-xl space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-mint block mb-1">
            Direct Contacts
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Get in Touch With A3S
          </h3>
          <p className="text-xs text-brand-muted mt-1">
            Visit our Madurai engineering studio or call directly for quick support.
          </p>
        </div>

        <div className="space-y-5">
          {/* Office Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-teal/15 text-brand-teal flex items-center justify-center shrink-0 mt-0.5 border border-brand-teal/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Studio Address
              </div>
              <p className="text-sm font-medium text-white mt-0.5 leading-snug">
                {siteConfig.address}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-mint/15 text-brand-mint flex items-center justify-center shrink-0 mt-0.5 border border-brand-mint/30">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Direct Line
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-base font-bold text-white hover:text-brand-mint transition-colors block mt-0.5"
              >
                {siteConfig.phone}
              </a>
              <span className="text-[11px] text-brand-muted">Mon–Sat, Fast response guaranteed</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/15 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/30">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Email Inquiry
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-bold text-white hover:text-brand-mint transition-colors block mt-0.5"
              >
                {siteConfig.email}
              </a>
              <span className="text-[11px] text-brand-muted">For proposals and vendor partnerships</span>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-300 flex items-center justify-center shrink-0 mt-0.5 border border-purple-500/30">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Working Hours
              </div>
              <p className="text-sm font-medium text-white mt-0.5 leading-snug">
                {siteConfig.workingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Instant Action Buttons */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-brand-teal/20 text-xs font-bold text-white border border-white/10 hover:border-brand-teal/40 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5 text-brand-mint" />
            <span>Call Office</span>
          </a>

          <a
            href={`https://wa.me/917010646001?text=${encodeURIComponent("Hi A3S Digital Technologies, I would like to discuss a project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-xs font-bold text-emerald-300 border border-emerald-500/30 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Trust & Guarantee badge card */}
      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
        <ShieldCheck className="w-6 h-6 text-brand-mint shrink-0" />
        <div className="text-xs text-brand-muted leading-relaxed">
          <strong className="text-white block">Strict Confidentiality Guarantee</strong>
          Every consultation and client specification is handled with complete NDA compliance.
        </div>
      </div>
    </div>
  );
}
