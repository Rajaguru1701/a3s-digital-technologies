import React from 'react';
import { Target, Compass, Sparkles, ShieldCheck } from 'lucide-react';

export default function PillarsRow() {
  const pillars = [
    {
      title: "Our Mission",
      desc: "To empower visionary entrepreneurs and businesses with transformative digital engineering, iconic design, and measurable growth strategies.",
      icon: Target,
      color: "teal",
      border: "border-brand-teal/40",
      glow: "hover:shadow-glow-teal/20"
    },
    {
      title: "Our Vision",
      desc: "To be recognized as South India's foremost global digital innovation powerhouse, revered for exceptional engineering craft and uncompromising client success.",
      icon: Compass,
      color: "purple",
      border: "border-purple-500/40",
      glow: "hover:shadow-purple-500/20"
    },
    {
      title: "Our Approach",
      desc: "Zero cookie-cutter solutions. We partner as dedicated co-creators, merging behavioral data insights with agile engineering sprints and transparent communication.",
      icon: Sparkles,
      color: "blue",
      border: "border-blue-500/40",
      glow: "hover:shadow-blue-500/20"
    },
    {
      title: "Our Promise",
      desc: "On-time milestone delivery, airtight code quality, enterprise security, and proactive 24/7 post-deployment support that guarantees your investment thrives.",
      icon: ShieldCheck,
      color: "mint",
      border: "border-brand-mint/40",
      glow: "hover:shadow-glow-mint/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pillars.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className={`glass-card rounded-2xl p-7 border ${item.border} ${item.glow} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-mint mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6">
              <span className="text-xs font-semibold text-brand-mint">A3S Core Foundation</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
