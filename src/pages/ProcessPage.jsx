import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Rocket, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import ProcessStepper from '../components/process/ProcessStepper';
import HomeCTA from '../components/home/HomeCTA';
import { SectionHeader } from '../components/ui/SectionHeader';

export default function ProcessPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-navy">
      {/* Breadcrumb & Header */}
      <div className="py-14 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-hero-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-brand-mint transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-mint">Process</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our Process:{' '}
              <span className="text-gradient-teal">From Blueprint to Launch</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              We eliminate ambiguity through a rigorous 5-step agile engineering framework. With transparent sprint milestones, live preview builds, and daily client alignment, we ensure your project ships on schedule.
            </p>
          </div>
        </div>
      </div>

      {/* Stepper Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ProcessStepper />
      </div>

      {/* Agile Principles Breakdown */}
      <section className="bg-brand-navy-light py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Engineering Discipline"
            badgeVariant="teal"
            title="How We Guarantee"
            highlight="Execution Quality"
            description="Our agile delivery framework combines strict code standards, continuous client reviews, and automated telemetry."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-7 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-mint flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Bi-Weekly Sprints</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Work is partitioned into focused 14-day sprints with testable staging releases delivered at the conclusion of each cycle.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Automated QA & Audits</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Automated unit tests, Core Web Vitals checks, and cross-browser device testing precede every pull request.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Dedicated Project Lead</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Direct single-point-of-contact technical lead who understands your domain and answers questions within hours, not days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA banner from prompt */}
      <HomeCTA
        title="Ready to start your project?"
        subtitle="Step into our structured 5-phase delivery process. We turn complex requirements into launch-ready digital products."
        buttonText="Book a Kickoff Call"
      />
    </div>
  );
}
