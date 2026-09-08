import React from 'react';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Terminal, 
  Sparkles, 
  BarChart3, 
  Workflow 
} from 'lucide-react';
import Button from '../ui/Button';

export default function ServiceBlock({ service, index }) {
  const isEven = index % 2 === 1;

  const iconMap = {
    Code2: Code2,
    Palette: Palette,
    TrendingUp: TrendingUp,
    Cpu: Cpu,
  };

  const Icon = iconMap[service.icon] || Code2;

  // Custom visual illustration for each service
  const renderVisual = () => {
    if (service.id === 'web-app-development') {
      return (
        <div className="relative rounded-2xl bg-brand-navy p-5 border border-white/10 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-teal" />
              <span className="text-xs font-mono text-white">a3s-stack: deploy --prod</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-brand-teal/20 text-brand-mint font-semibold">99.9% Vitals</span>
          </div>

          <div className="font-mono text-xs space-y-2 text-slate-300">
            <p className="text-brand-muted"><span className="text-brand-mint">&gt;</span> bundling React 18 + Vite + Tailwind</p>
            <p className="text-brand-muted"><span className="text-brand-mint">&gt;</span> optimizing edge APIs & database latency</p>
            <div className="p-3 bg-brand-navy-light rounded-lg border border-white/5 space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-white">Lighthouse Performance</span>
                <span className="text-brand-mint font-bold">100 / 100</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-brand-teal to-brand-mint" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {service.techStack?.map((tech) => (
              <span key={tech} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-brand-muted border border-white/5 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    }

    if (service.id === 'ui-ux-branding') {
      return (
        <div className="relative rounded-2xl bg-brand-navy p-5 border border-purple-500/30 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold text-white">Brand Tokens & Typography</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold">Figma Verified</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl bg-brand-teal/20 border border-brand-teal/40 text-center">
              <div className="text-[10px] text-brand-muted">Primary</div>
              <div className="text-xs font-bold text-brand-mint">#17A1AB</div>
            </div>
            <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-400/40 text-center">
              <div className="text-[10px] text-brand-muted">Secondary</div>
              <div className="text-xs font-bold text-purple-300">#403458</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-400/40 text-center">
              <div className="text-[10px] text-brand-muted">Tertiary</div>
              <div className="text-xs font-bold text-cyan-300">#0065AB</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-2">
            <div className="text-xs font-semibold text-white">Omnichannel Component Library</div>
            <div className="text-[11px] text-brand-muted">Atomic buttons, responsive cards, modals, and design tokens built for scale.</div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {service.techStack?.map((tech) => (
              <span key={tech} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-purple-200 border border-white/5 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    }

    if (service.id === 'digital-marketing-animation') {
      return (
        <div className="relative rounded-2xl bg-brand-navy p-5 border border-blue-500/30 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-semibold text-white">Full-Funnel Growth Telemetry</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 font-semibold">Live ROI +380%</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-xs text-brand-muted">Paid Search CAC</span>
              <span className="text-xs font-bold text-brand-mint">-38% Decreased</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-xs text-brand-muted">Qualified Pipeline Leads</span>
              <span className="text-xs font-bold text-white">4,850 / month</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-xs text-brand-muted">Organic SEO Ranking (#1-3)</span>
              <span className="text-xs font-bold text-cyan-300">120+ Keywords</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {service.techStack?.map((tech) => (
              <span key={tech} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-cyan-200 border border-white/5 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    }

    // IT Consulting & Business Solutions
    return (
      <div className="relative rounded-2xl bg-brand-navy p-5 border border-brand-mint/30 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Workflow className="w-4 h-4 text-brand-mint" />
            <span className="text-xs font-semibold text-white">Enterprise Systems Architecture</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-brand-mint/20 text-brand-mint font-semibold">Zero Downtime</span>
        </div>

        <div className="space-y-2.5">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-white">Automated ERP Pipeline</div>
              <div className="text-[10px] text-brand-muted">Connected 4 warehouses with cloud sync</div>
            </div>
            <span className="text-xs font-bold text-brand-mint">Active</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-white">Custom CRM Engine</div>
              <div className="text-[10px] text-brand-muted">Real-time GST invoicing & lead routing</div>
            </div>
            <span className="text-xs font-bold text-brand-mint">Scalable</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {service.techStack?.map((tech) => (
            <span key={tech} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-brand-mint border border-white/5 font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      id={service.id}
      className={`py-16 sm:py-20 border-b border-slate-200/80 last:border-b-0 ${
        isEven ? 'bg-white' : 'bg-brand-light'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
          
          {/* Content Column */}
          <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border"
              style={{
                borderColor: `${service.accentHex}40`,
                backgroundColor: `${service.accentHex}15`,
                color: service.accentColor === 'teal' ? '#12828b' : service.accentColor === 'purple' ? '#403458' : service.accentColor === 'blue' ? '#0065AB' : '#12828b'
              }}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>0{index + 1} &bull; {service.title}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {service.tagline}
            </h3>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {service.description}
            </p>

            {/* Two-column bullet list of offerings from prompt */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Key Offerings & Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.offerings.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-brand-teal/40 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-normal">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colored CTA Button */}
            <div className="pt-2">
              <Button
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                variant="primary"
                size="md"
                icon={ArrowRight}
                className={service.buttonClass}
              >
                Discuss {service.shortTitle} Project
              </Button>
            </div>
          </div>

          {/* Visual Column on Alternating Side */}
          <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              {/* Soft glow background */}
              <div 
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 transform -rotate-1 scale-95"
                style={{ backgroundColor: service.accentHex }}
              />
              {renderVisual()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
