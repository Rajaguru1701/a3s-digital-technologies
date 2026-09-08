import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  const preselectedProject = searchParams.get('project') || '';

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: preselectedService || 'Web & App Development',
    budget: '₹50,000 - ₹2,00,000',
    requirement: preselectedProject ? `I am interested in a project similar to ${preselectedProject}. ` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const servicesList = [
    'Web & App Development',
    'UI/UX & Branding',
    'Digital Marketing & Animation',
    'IT Consulting & Business Solutions',
    'Comprehensive All-in-One Package'
  ];

  const budgetRanges = [
    '< ₹50,000',
    '₹50,000 - ₹2,00,000',
    '₹2,00,000 - ₹5,00,000',
    '₹5,00,000+',
    'Flexible / Milestone Retainer'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.requirement.trim()) {
      setError('Please fill in your name, email, and project requirement.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-brand-navy-light/90 border border-brand-teal/50 text-center space-y-5 shadow-2xl backdrop-blur-xl">
        <div className="w-16 h-16 rounded-2xl bg-brand-teal/20 text-brand-mint border border-brand-teal/40 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Message Received!
        </h3>
        <p className="text-sm sm:text-base text-brand-muted max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-white">{formData.name}</strong>. Our senior technical consultant will review your requirement for <strong className="text-brand-mint">{formData.service}</strong> and get back to you within 24 hours.
        </p>
        <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-brand-muted text-left max-w-md mx-auto space-y-1">
          <div><strong className="text-white">Email:</strong> {formData.email}</div>
          {formData.phone && <div><strong className="text-white">Phone:</strong> {formData.phone}</div>}
          <div><strong className="text-white">Status:</strong> Queued for discovery review</div>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              businessName: '',
              email: '',
              phone: '',
              service: 'Web & App Development',
              budget: '₹50,000 - ₹2,00,000',
              requirement: '',
            });
          }}
          className="text-xs font-semibold text-brand-mint hover:underline pt-2"
        >
          Send another inquiry &rarr;
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-3xl bg-brand-navy-light/90 border border-white/10 shadow-2xl backdrop-blur-xl space-y-6"
    >
      <div className="border-b border-white/10 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <span>Project Inquiry Form</span>
          <Sparkles className="w-4 h-4 text-brand-mint" />
        </h3>
        <p className="text-xs text-brand-muted mt-1">
          Tell us about your objectives. We will deliver a free initial analysis and proposal.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
            Your Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Arvind Kumar"
            className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/15 text-white placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
            Business / Brand Name
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="e.g. Apex Enterprises"
            className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/15 text-white placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="arvind@company.com"
            className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/15 text-white placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="070106 46001 or +91..."
            className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/15 text-white placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
          />
        </div>
      </div>

      {/* Service Required & Estimated Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
            Service Required *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/15 text-white text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
          >
            {servicesList.map((srv) => (
              <option key={srv} value={srv} className="bg-brand-navy text-white">
                {srv}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
            Estimated Budget
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/15 text-white text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
          >
            {budgetRanges.map((b) => (
              <option key={b} value={b} className="bg-brand-navy text-white">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Requirement */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
          Project Requirement & Scope *
        </label>
        <textarea
          name="requirement"
          rows={4}
          required
          value={formData.requirement}
          onChange={handleChange}
          placeholder="Briefly describe your goals, required features, deadlines, or existing platform links..."
          className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/15 text-white placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all resize-none"
        />
      </div>

      {/* Submit button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={Send}
          disabled={isSubmitting}
          className="w-full shadow-glow-teal font-bold"
        >
          {isSubmitting ? 'Sending Proposal Request...' : 'Send Project Inquiry'}
        </Button>
        <p className="text-[11px] text-center text-brand-muted mt-3">
          Zero obligation. We guarantee privacy under NDA standards.
        </p>
      </div>
    </form>
  );
}
