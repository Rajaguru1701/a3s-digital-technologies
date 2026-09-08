import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Github,
  Heart
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear() || 2026;

  const socialIcons = {
    Linkedin: Linkedin,
    Twitter: Twitter,
    Instagram: Instagram,
    Facebook: Facebook,
    Github: Github,
  };

  return (
    <footer className="bg-brand-navy border-t border-white/10 relative overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Col 1: Brand blurb & socials */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-mint p-0.5 shadow-glow-teal">
                <div className="w-full h-full bg-brand-navy rounded-[10px] flex items-center justify-center">
                  <span className="text-white font-extrabold text-lg">
                    A<span className="text-brand-mint">3</span>S
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white">
                  A3S Digital
                </span>
                <span className="text-[10px] tracking-widest text-brand-mint uppercase font-semibold">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-sm text-brand-muted leading-relaxed">
              We empower startups and enterprises across the globe through high-converting web applications, memorable brand design, data-driven marketing, and scalable IT infrastructure.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {siteConfig.socials.map((social) => {
                  const Icon = socialIcons[social.icon] || Linkedin;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:text-brand-mint hover:bg-brand-teal/10 hover:border-brand-teal/40 transition-all duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-l-2 border-brand-teal pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-brand-muted hover:text-brand-mint transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-mint transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-muted hover:text-brand-mint transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-mint transition-colors" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-brand-muted hover:text-brand-mint transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-mint transition-colors" />
                  How We Work (Process)
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-brand-muted hover:text-brand-mint transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-mint transition-colors" />
                  Portfolio Showcase
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-muted hover:text-brand-mint transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-mint transition-colors" />
                  About A3S
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-brand-muted hover:text-brand-mint transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-mint transition-colors" />
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-brand-muted hover:text-brand-mint transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-mint transition-colors" />
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-muted hover:text-brand-mint transition-colors flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-mint transition-colors" />
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services List */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-l-2 border-brand-mint pl-3">
              Core Expertise
            </h3>
            <ul className="space-y-3 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-brand-muted hover:text-white transition-colors block"
                  >
                    <div className="font-medium text-white hover:text-brand-mint transition-colors">
                      {service.title}
                    </div>
                    <div className="text-xs text-brand-muted/70 mt-0.5 line-clamp-1">
                      {service.tagline}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-l-2 border-brand-blue pl-3">
              Agency Office
            </h3>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 text-brand-muted">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {siteConfig.address}
                </span>
              </div>

              <div className="flex items-center gap-3 text-brand-muted">
                <Phone className="w-4 h-4 text-brand-mint shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-brand-mint transition-colors font-semibold"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 text-brand-muted">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-brand-mint transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-3 text-brand-muted">
                <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {siteConfig.workingHours}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-mint hover:underline"
              >
                Schedule an in-person meeting
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>© 2026 A3S Digital Technologies. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-brand-mint transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-brand-mint transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1 text-brand-muted">
              Built with precision in Madurai
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
