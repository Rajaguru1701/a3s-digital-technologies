import React, { useState } from 'react';
import { 
  Search, 
  FileCode2, 
  Code, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { processData } from '../../data/processData';

export default function ProcessStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const iconMap = {
    Search: Search,
    FileCode2: FileCode2,
    Code: Code,
    Rocket: Rocket,
    TrendingUp: TrendingUp,
  };

  return (
    <div className="space-y-16">
      {/* Stepper Navigation Bar */}
      <div className="relative">
        {/* Connecting line on desktop */}
        <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-white/10 -z-0">
          <div 
            className="h-full bg-gradient-to-r from-brand-teal via-brand-mint to-brand-blue transition-all duration-500"
            style={{ width: `${(activeStep / (processData.length - 1)) * 100}%` }}
          />
        </div>

        {/* 5 Step Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
          {processData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Search;
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-brand-navy-card border-brand-teal shadow-glow-teal/30 scale-105'
                    : 'bg-brand-navy-light/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm border-2 transition-all ${
                      isActive
                        ? 'bg-brand-teal text-brand-navy border-brand-teal shadow-glow-teal'
                        : isCompleted
                        ? 'bg-brand-teal/20 text-brand-mint border-brand-teal/40'
                        : 'bg-white/5 text-brand-muted border-white/10'
                    }`}
                  >
                    {item.step}
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-brand-mint animate-ping" />
                  )}
                </div>

                <div>
                  <div className={`text-base font-bold transition-colors ${isActive ? 'text-brand-mint' : 'text-white'}`}>
                    {item.title}
                  </div>
                  <div className="text-xs text-brand-muted mt-0.5 line-clamp-1">
                    {item.headline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Showcase Card */}
      {processData[activeStep] && (
        <div className="glass-dark rounded-3xl p-6 sm:p-10 border border-brand-teal/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Step Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-teal/20 text-brand-mint border border-brand-teal/40">
                  STEP {processData[activeStep].step} OF 05
                </span>
                <span className="text-xs text-brand-muted font-medium uppercase tracking-wider">
                  Agile Sprint Phase
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {processData[activeStep].title}:{' '}
                  <span className="text-brand-mint font-normal text-xl sm:text-2xl block sm:inline">
                    {processData[activeStep].headline}
                  </span>
                </h3>
                <p className="mt-3 text-base text-brand-muted leading-relaxed max-w-2xl">
                  {processData[activeStep].desc}
                </p>
              </div>

              {/* Action activities */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  Sprint Actions & Quality Checks:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {processData[activeStep].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-brand-muted">
                      <CheckCircle2 className="w-4 h-4 text-brand-mint shrink-0" />
                      <span className="text-white/90">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverable Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-navy-light to-brand-navy border border-white/15 space-y-4">
                <div className="flex items-center gap-2 text-brand-teal">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Tangible Milestone</span>
                </div>
                <div className="text-lg font-bold text-white leading-snug">
                  {processData[activeStep].deliverable}
                </div>
                <div className="text-xs text-brand-muted leading-relaxed">
                  Every phase wraps with a tangible, reviewable asset and client sign-off before advancing to the subsequent sprint.
                </div>
                
                {/* Stepper controls */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
                  <button
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="text-brand-muted hover:text-white disabled:opacity-30 transition-colors font-semibold"
                  >
                    &larr; Prev Phase
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => Math.min(processData.length - 1, prev + 1))}
                    disabled={activeStep === processData.length - 1}
                    className="text-brand-mint hover:text-white disabled:opacity-30 transition-colors font-semibold flex items-center gap-1"
                  >
                    Next Phase &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
