import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, HelpCircle, PhoneCall, Mail } from 'lucide-react';
import FAQAccordion from '../components/faq/FAQAccordion';
import HomeCTA from '../components/home/HomeCTA';
import Button from '../components/ui/Button';
import { siteConfig } from '../data/siteConfig';

export default function FAQPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-navy">
      {/* Header */}
      <div className="py-14 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-hero-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-brand-mint transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-mint">FAQ</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Frequently Asked{' '}
              <span className="text-gradient-teal">Questions</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              Find detailed information regarding our technical capabilities, pricing transparency, sprint delivery cadence, and dedicated post-launch support.
            </p>
          </div>
        </div>
      </div>

      {/* Main Accordion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <FAQAccordion />

        {/* Can't find question callout */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-navy-light/70 border border-brand-teal/30 text-center space-y-4 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Have a question not answered here?
          </h3>
          <p className="text-sm text-brand-muted max-w-lg mx-auto">
            Our technical consultants are available to provide immediate clarity on timelines, technical architectures, and custom scopes.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="md"
            >
              Ask an Engineer
            </Button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brand-mint" />
              <span>Call: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <HomeCTA />
    </div>
  );
}
