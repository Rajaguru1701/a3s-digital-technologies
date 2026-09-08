import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Layers, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ServiceBlock from '../components/services/ServiceBlock';
import HomeCTA from '../components/home/HomeCTA';
import Button from '../components/ui/Button';

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Light Page Header */}
      <div className="bg-brand-light text-brand-dark py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-teal">Services</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Full-Spectrum Digital Services Designed for{' '}
              <span className="text-gradient-teal">Sustainable Scale</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Whether you need a high-conversion web application, a world-class brand identity, multi-channel lead acquisition, or custom enterprise automation, A3S delivers end-to-end craft.
            </p>

            {/* Quick jump pills */}
            <div className="flex flex-wrap gap-2.5 pt-6">
              {servicesData.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:border-brand-teal hover:text-brand-teal transition-colors shadow-sm"
                >
                  {s.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4 Alternating Service Sections */}
      <div>
        {servicesData.map((service, index) => (
          <ServiceBlock
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* Technology & Frameworks Ribbon */}
      <section className="bg-brand-navy-light py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-mint font-bold">
            Built On Battle-Tested Modern Technologies
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-white/80">
            {["React 18", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "React Native", "PostgreSQL", "Docker", "AWS Cloud", "Figma Systems"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-teal/40 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA Banner */}
      <HomeCTA
        title="Have a specific service requirement in mind?"
        subtitle="Let's schedule a 30-minute discovery session with our tech lead and design director to shape your specifications."
        buttonText="Request Service Proposal"
      />
    </div>
  );
}
