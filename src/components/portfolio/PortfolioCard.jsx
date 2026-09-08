import React from 'react';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

export default function PortfolioCard({ project, onSelect }) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-2xl bg-brand-navy-light/80 border border-white/10 hover:border-brand-teal/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg hover:shadow-card-hover"
    >
      {/* Thumbnail / Graphic Representation */}
      <div className={`relative h-48 sm:h-52 w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
        {/* Decorative Grid Pattern inside Card */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        
        {/* Category Badge */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-navy/90 text-white backdrop-blur-md border border-white/10">
            {project.categoryLabel}
          </span>
          <span className="w-8 h-8 rounded-full bg-white/10 text-white group-hover:bg-brand-teal group-hover:text-brand-navy flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>

        {/* Dynamic Metric Tag */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-navy/80 text-brand-mint text-xs font-bold backdrop-blur-md border border-brand-mint/30">
            <Sparkles className="w-3 h-3" />
            <span>{project.metric}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs text-brand-muted font-medium mb-1">
            Client: {project.client}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-mint transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted mt-2 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-brand-muted border border-white/5 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
