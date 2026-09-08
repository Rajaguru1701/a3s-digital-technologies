import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-brand-navy-light border border-brand-teal/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/20 text-brand-mint border border-brand-teal/40">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-brand-muted">
              Client: {project.client}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-brand-mint font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Highlight metric */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-mint flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-brand-muted">Demonstrated Result</div>
            <div className="text-base font-bold text-white">{project.metric}</div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Case Overview:</h4>
          <p className="text-sm text-brand-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies used */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">Tech & Tools:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg bg-white/10 text-xs font-medium text-white">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
          <Button
            to={`/contact?project=${encodeURIComponent(project.title)}`}
            variant="primary"
            size="md"
            icon={ArrowRight}
            className="w-full sm:w-auto shadow-glow-teal"
            onClick={onClose}
          >
            Start a Similar Project
          </Button>
          <Button
            variant="ghost"
            size="md"
            onClick={onClose}
            className="w-full sm:w-auto text-brand-muted hover:text-white"
          >
            Close Details
          </Button>
        </div>
      </div>
    </div>
  );
}
