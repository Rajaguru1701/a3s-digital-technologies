import React from 'react';
import { CheckCircle2, Award, Clock, ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "End-to-End Capabilities",
      desc: "No juggling 4 separate agencies. We handle UI/UX, full-stack development, cloud architecture, and digital marketing under one synchronized roof.",
      icon: Award
    },
    {
      title: "Agile 2-Week Sprints & Full Transparency",
      desc: "Regular demo reviews, staging URLs, and open Slack/WhatsApp channels so you're never left wondering about project momentum.",
      icon: Clock
    },
    {
      title: "Enterprise-Grade Clean Code & Security",
      desc: "Built with scalable component architectures, TypeScript, automated test pipelines, and rigorous OWASP security hardening.",
      icon: ShieldCheck
    },
    {
      title: "Obsession with Speed & Core Web Vitals",
      desc: "We engineer lightweight, sub-second web applications that rank higher on Google search results and maximize conversion rates.",
      icon: Zap
    },
    {
      title: "Local Dedication, Global Engineering Standards",
      desc: "Rooted in Madurai, Tamil Nadu, we bring world-class engineering discipline with personalized care and transparent local pricing.",
      icon: Users
    },
    {
      title: "24/7 Ongoing Post-Launch Partnership",
      desc: "Our collaboration doesn't end at deployment. We offer proactive maintenance, security monitoring, and conversion optimization.",
      icon: Sparkles
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reasons.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-teal/40 transition-all duration-300 flex items-start gap-4 hover:bg-white/[0.05]"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-mint shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-lg font-bold text-white">
                {item.title}
              </h4>
              <p className="text-sm text-brand-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
