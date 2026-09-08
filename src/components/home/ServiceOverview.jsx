import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Cpu, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { SectionHeader } from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function ServiceOverview() {
  const iconMap = {
    Code2: Code2,
    Palette: Palette,
    TrendingUp: TrendingUp,
    Cpu: Cpu,
  };

  const borderAccents = {
    teal: 'hover:border-brand-teal group-hover:shadow-glow-teal/20',
    purple: 'hover:border-brand-purple group-hover:shadow-purple-500/20',
    blue: 'hover:border-brand-blue group-hover:shadow-blue-500/20',
    mint: 'hover:border-brand-mint group-hover:shadow-glow-mint/20',
  };

  const iconBgs = {
    teal: 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
    purple: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
    blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    mint: 'bg-brand-mint/10 text-brand-teal-dark border-brand-mint/30',
  };

  return (
    <section className="bg-brand-light text-brand-dark py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Soft decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          theme="light"
          badge="What We Do"
          badgeVariant="teal"
          title="End-to-End Digital Solutions"
          highlight="Under One Roof"
          description="From pixel-perfect brand identity to high-velocity full-stack engineering and multi-channel customer acquisition, we fuel your digital expansion."
          align="center"
          className="mb-16"
        />

        {/* 4 Mini-cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            const borderAccent = borderAccents[service.accentColor] || borderAccents.teal;
            const iconBg = iconBgs[service.accentColor] || iconBgs.teal;

            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card-soft hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative hover:-translate-y-1.5 ${borderAccent}`}
              >
                {/* Number Watermark */}
                <div className="absolute top-6 right-6 text-3xl font-black text-slate-100 group-hover:text-slate-200 transition-colors pointer-events-none">
                  0{index + 1}
                </div>

                <div>
                  {/* Service Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-110 ${iconBg}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Offerings snippet */}
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.offerings.slice(0, 3).map((item) => (
                      <li key={item.name} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More link */}
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal hover:text-brand-teal-dark group-hover:gap-3 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner in light section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-brand-navy rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">
              Looking for a custom combination of services?
            </h4>
            <p className="text-sm text-brand-muted max-w-xl">
              We create tailored cross-disciplinary agile teams combining development, branding, and marketing for your unique roadmap.
            </p>
          </div>
          <Button
            to="/contact"
            variant="primary"
            size="md"
            icon={ArrowRight}
            className="shrink-0 shadow-glow-teal"
          >
            Request Custom Scope
          </Button>
        </div>
      </div>
    </section>
  );
}
