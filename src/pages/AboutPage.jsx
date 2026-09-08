import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import PillarsRow from '../components/about/PillarsRow';
import WhyChooseUs from '../components/about/WhyChooseUs';
import { SectionHeader } from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-navy">
      {/* Dark Header */}
      <div className="py-14 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-hero-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-brand-mint transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-mint">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-brand-mint font-extrabold block mb-2">
              Your Digital Growth Partner
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              About A3S Digital{' '}
              <span className="text-gradient-teal">Technologies</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              Based in the historic cultural hub of Madurai, Tamil Nadu, A3S Digital Technologies was founded with a singular ambition: to bridge cutting-edge digital engineering craft with high-velocity business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Two-Column "Who We Are" Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/15 text-brand-mint border border-brand-teal/30">
              <Sparkles className="w-3.5 h-3.5" />
              Who We Are
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Engineering Digital Products That Command Attention & Drive Revenue
            </h2>

            <p className="text-base text-brand-muted leading-relaxed">
              At A3S Digital Technologies, we aren't just developers or designers — we are business technologists. We believe every pixel must serve a purpose, and every line of code must perform under peak load.
            </p>

            <p className="text-base text-brand-muted leading-relaxed">
              From our headquarters at Thiruvalluvar Street, Koodal Nagar, Madurai, our multi-disciplinary team collaborates with fast-growing brands across India, Southeast Asia, Europe, and North America. By unifying engineering, brand identity, performance marketing, and enterprise IT under one synchronized roof, we eliminate communication silos and fast-track product time-to-market.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-mint">250+</div>
                <div className="text-xs text-brand-muted mt-1">Shipped Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">98%</div>
                <div className="text-xs text-brand-muted mt-1">Client Retention</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-teal">5+ Years</div>
                <div className="text-xs text-brand-muted mt-1">Proven Track Record</div>
              </div>
            </div>
          </div>

          {/* Right Visual: Agency Studio Representation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-card to-brand-navy-light p-6 border border-white/15 shadow-2xl space-y-5">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-teal/20 via-brand-navy to-brand-purple/40 border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-navy/90 text-brand-mint border border-brand-teal/40">
                    Madurai HQ Studio
                  </span>
                  <MapPin className="w-5 h-5 text-brand-teal" />
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="text-lg font-bold text-white">A3S Engineering Studio</div>
                  <div className="text-xs text-brand-muted leading-snug">
                    {siteConfig.address}
                  </div>
                </div>
              </div>

              {/* Working Hours snippet */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-brand-muted block">Consultation Hours</span>
                  <span className="text-white font-semibold">{siteConfig.workingHours}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-teal/20 text-brand-mint font-bold text-[11px]">
                  Open Now
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4-Card Row: Mission, Vision, Approach, Promise */}
      <section className="bg-brand-navy-light py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Guiding Principles"
            badgeVariant="teal"
            title="The 4 Pillars That Define"
            highlight="Our Standard"
            description="Our core values shape every client relationship, technical architecture decision, and design sprint."
            align="center"
            className="mb-14"
          />

          <PillarsRow />
        </div>
      </section>

      {/* Why Choose Us? 6 items checklist */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Our Advantage"
          badgeVariant="teal"
          title="Why Choose"
          highlight="A3S Digital Technologies?"
          description="Six concrete reasons why fast-growing enterprises trust us as their dedicated technology growth partner."
          align="center"
          className="mb-14"
        />

        <WhyChooseUs />
      </section>

      {/* Dark CTA Strip from prompt */}
      <section className="bg-brand-navy py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-brand-navy-card via-brand-navy-light to-brand-teal/10 border border-brand-teal/30 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Let's build something amazing for your business.
            </h3>
            <p className="text-sm text-brand-muted">
              Connect with our Madurai team today for a free discovery session and technical roadmap.
            </p>
          </div>
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            className="shrink-0 shadow-glow-teal font-bold"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
