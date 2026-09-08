import React from 'react';
import { Rocket, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

export default function HomeCTA({
  title = "Ready to start your project?",
  subtitle = "Partner with A3S Digital Technologies to engineer your digital future. Let's discuss your timeline, scope, and technical roadmap today.",
  buttonText = "Get a Free Consultation",
  buttonLink = "/contact"
}) {
  return (
    <section className="bg-brand-navy py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 via-brand-purple/20 to-brand-blue/20 rounded-3xl blur-2xl" />

        <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-card via-brand-navy-light to-brand-navy border border-brand-teal/30 p-8 sm:p-14 text-center sm:text-left overflow-hidden shadow-2xl">
          {/* Radial center glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/15 text-brand-mint border border-brand-teal/30">
                <Sparkles className="w-3.5 h-3.5" />
                Let's Build Something Exceptional
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs sm:text-sm text-brand-muted">
                <span className="flex items-center gap-1.5 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-brand-mint" />
                  Free 30-min discovery call
                </span>
                <span className="flex items-center gap-1.5 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-brand-mint" />
                  NDA protected
                </span>
                <span className="flex items-center gap-1.5 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-brand-mint" />
                  Clear roadmap & proposal in 48h
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-4">
              <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-teal/20 to-brand-mint/10 border border-brand-teal/40 text-brand-mint shadow-glow-teal mb-2">
                <Rocket className="w-10 h-10 animate-pulse-slow" />
              </div>
              <Button
                to={buttonLink}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-glow-teal font-bold"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
