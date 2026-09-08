import React from 'react';
import { Award, Users, Calendar, HeadphonesIcon, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function StatsBar() {
  const statIcons = [Award, Users, Calendar, HeadphonesIcon];

  return (
    <section className="bg-brand-navy-light py-12 border-y border-white/10 relative overflow-hidden">
      {/* Subtle backdrop lights */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-10 border-b border-white/10">
          {siteConfig.stats.map((stat, idx) => {
            const Icon = statIcons[idx] || Award;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-teal/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-mint mb-3 group-hover:scale-110 group-hover:bg-brand-teal/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  <span className="text-gradient-teal">{stat.value}</span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-brand-muted mt-0.5">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trusted By Client Logos Row */}
        <div className="pt-8">
          <p className="text-center text-xs uppercase tracking-widest text-brand-muted font-semibold mb-6">
            Trusted by Ambitious Brands & Enterprise Teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 hover:opacity-100 transition-opacity">
            {siteConfig.clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-brand-teal/30 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-brand-mint" />
                <span className="text-sm font-bold text-white tracking-wide">{client.name}</span>
                <span className="text-[10px] text-brand-muted bg-white/5 px-1.5 py-0.5 rounded">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
