import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, MessageCircle, PhoneCall, Mail } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfoCard from '../components/contact/ContactInfoCard';
import MapEmbed from '../components/contact/MapEmbed';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-navy">
      {/* Dark Header */}
      <div className="py-14 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-hero-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-brand-mint transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-mint">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Contact Us:{' '}
              <span className="text-gradient-teal">Let's Discuss Your Growth</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              Have a new product idea, a redesign requirement, or need to scale your engineering team? Connect directly with our Madurai team. We respond within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Two-Column Section: Form + Contact Info Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right: Contact Information Card */}
          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>
        </div>

        {/* Embedded Map Section Below */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Find Our Madurai Studio
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              Located conveniently at Koodal Nagar, Madurai, Tamil Nadu.
            </p>
          </div>
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}
