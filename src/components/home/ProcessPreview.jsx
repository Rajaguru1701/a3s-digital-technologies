import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Rocket } from 'lucide-react';
import { processData } from '../../data/processData';
import { SectionHeader } from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function ProcessPreview() {
  return (
    <section className="bg-brand-navy py-24 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Methodology"
          badgeVariant="teal"
          title="A Proven 5-Step Journey"
          highlight="From Idea to Scaled Product"
          description="We take the guesswork out of digital execution. Our battle-tested 5-step agile workflow ensures transparent delivery, continuous velocity, and predictable results."
          align="center"
          className="mb-16"
        />

        {/* 5-step horizontal stepper on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {processData.map((item, index) => {
            const stepColors = {
              teal: 'border-brand-teal text-brand-teal bg-brand-teal/10 group-hover:bg-brand-teal group-hover:text-brand-navy',
              purple: 'border-purple-400 text-purple-300 bg-purple-500/10 group-hover:bg-purple-500 group-hover:text-white',
              blue: 'border-blue-400 text-blue-300 bg-blue-500/10 group-hover:bg-blue-500 group-hover:text-white',
              mint: 'border-brand-mint text-brand-mint bg-brand-mint/10 group-hover:bg-brand-mint group-hover:text-brand-navy',
            };

            const colorClass = stepColors[item.color] || stepColors.teal;

            return (
              <div
                key={item.step}
                className="group glass-card rounded-2xl p-6 border border-white/10 hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg border-2 transition-all duration-300 ${colorClass}`}>
                      {item.step}
                    </div>
                    {index < processData.length - 1 && (
                      <span className="hidden lg:block text-brand-muted/40 font-mono text-sm">&rarr;</span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-mint transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-brand-mint/90 font-medium">
                  Deliverable: {item.deliverable.split('&')[0]}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA link to dedicated Process page */}
        <div className="mt-12 text-center">
          <Button
            to="/process"
            variant="secondary"
            size="md"
            icon={ArrowRight}
          >
            Explore Detailed Delivery Process & Sprints
          </Button>
        </div>
      </div>
    </section>
  );
}
