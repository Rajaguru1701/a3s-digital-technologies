import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-brand-navy">
      {/* Background radial glowing effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Eyebrow Tag */}
            <div className="inline-flex justify-center lg:justify-start">
              <Badge variant="teal" className="shadow-glow-teal/30 text-xs sm:text-sm py-1.5 px-4">
                {siteConfig.eyebrow}
              </Badge>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Build. Brand. Market.{' '}
              <span className="text-gradient-teal drop-shadow-sm">
                Grow.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We design and build award-winning web platforms, native mobile apps, and iconic brand identities. From high-growth startups to established enterprises, we engineer digital solutions that scale revenue.
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-brand-muted pt-1">
              <span className="flex items-center gap-1.5 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-brand-mint" />
                Agile 2-Week Sprints
              </span>
              <span className="flex items-center gap-1.5 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-brand-mint" />
                WCAG & Core Web Vitals Ready
              </span>
              <span className="flex items-center gap-1.5 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-brand-mint" />
                Dedicated Post-Launch Care
              </span>
            </div>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-glow-teal"
              >
                Get a Free Consultation
              </Button>
              <Button
                to="/services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Micro proof counter */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-brand-muted">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-brand-navy bg-brand-teal flex items-center justify-center text-[10px] font-bold text-white">AS</div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-navy bg-brand-purple flex items-center justify-center text-[10px] font-bold text-white">RK</div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-navy bg-brand-blue flex items-center justify-center text-[10px] font-bold text-white">VN</div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-navy bg-brand-mint flex items-center justify-center text-[10px] font-bold text-brand-navy">+50</div>
              </div>
              <div>
                <span className="text-white font-semibold block">Trusted by 200+ Businesses</span>
                <span className="text-[11px]">Madurai &bull; Chennai &bull; Global Clients</span>
              </div>
            </div>
          </div>

          {/* Right Hero Mockup Area (Laptop + Phone visualization) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative background glow behind mockups */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 via-brand-mint/15 to-brand-purple/20 rounded-3xl filter blur-2xl transform rotate-3 scale-95" />

              {/* Modern Laptop Mockup */}
              <div className="relative rounded-2xl bg-gradient-to-b from-white/15 to-white/5 p-2 shadow-2xl border border-white/10 backdrop-blur-xl">
                {/* Browser top bar */}
                <div className="bg-brand-navy-light rounded-t-xl px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="bg-brand-navy px-4 py-1 rounded-md text-[11px] text-brand-muted border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-mint animate-pulse" />
                    a3sdigital.com/dashboard
                  </div>
                  <div className="text-[10px] text-brand-teal font-semibold">Live v2.4</div>
                </div>

                {/* Laptop Screen Content: Interactive SaaS Dashboard preview */}
                <div className="bg-brand-navy p-4 sm:p-5 rounded-b-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div>
                      <div className="text-xs text-brand-muted">Performance Overview</div>
                      <div className="text-lg font-bold text-white flex items-center gap-2">
                        ₹48.6 Lakhs <span className="text-[11px] font-semibold text-brand-mint bg-brand-mint/10 px-2 py-0.5 rounded-full">+42.8%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-semibold">Q1 Analytics</span>
                    </div>
                  </div>

                  {/* Visual mini chart bars */}
                  <div className="space-y-2">
                    <div className="text-[11px] text-brand-muted flex justify-between">
                      <span>Conversion Velocity</span>
                      <span className="text-brand-mint font-semibold">98.4% Health</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2 h-16 items-end pt-2">
                      {[40, 65, 55, 80, 70, 95, 88].map((val, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div 
                            className="w-full rounded-t bg-gradient-to-t from-brand-teal to-brand-mint transition-all duration-500 hover:brightness-125"
                            style={{ height: `${val}%` }}
                          />
                          <span className="text-[9px] text-brand-muted">D{idx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini cards row */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="text-[10px] text-brand-muted">Cloud Uptime</div>
                      <div className="text-sm font-bold text-white">99.98% SLA</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="text-[10px] text-brand-muted">Avg Load Time</div>
                      <div className="text-sm font-bold text-brand-mint">0.42s Blitz</div>
                    </div>
                  </div>
                </div>
              </div>

                {/* Floating Mobile App Mockup */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-48 sm:w-56 rounded-3xl bg-brand-navy-light p-2.5 shadow-2xl border-2 border-brand-teal/40 backdrop-blur-xl animate-float">
                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-2" />
                <div className="bg-brand-navy rounded-2xl p-3 space-y-2.5 border border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-teal to-brand-mint flex items-center justify-center text-brand-navy font-bold text-xs">
                      A3
                    </div>
                    <span className="text-[10px] bg-brand-mint/20 text-brand-mint px-2 py-0.5 rounded-full font-medium">Active</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-brand-muted">Mobile Storefront</div>
                    <div className="text-xs font-bold text-white">12,450 Orders</div>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-brand-mint rounded-full" />
                  </div>
                  <div className="text-[9px] text-brand-muted flex justify-between">
                    <span>Speed Score</span>
                    <span className="text-brand-mint font-semibold">100 / 100</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge on Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 glass-card px-3.5 py-2.5 rounded-xl flex items-center gap-3 border border-brand-mint/30 shadow-glow-mint/30 animate-pulse-slow">
                <div className="w-8 h-8 rounded-lg bg-brand-mint/20 flex items-center justify-center text-brand-mint">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-brand-muted">Client Rating</div>
                  <div className="text-xs font-bold text-white">4.9 / 5.0 (250+ Reviews)</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
