import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { faqData } from '../../data/faqData';

export default function FAQAccordion({ limit }) {
  const [openId, setOpenId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData
    .filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, limit || faqData.length);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* Optional Search Bar if not limited */}
      {!limit && (
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" />
          <input
            type="text"
            placeholder="Search questions (e.g. pricing, timeline, maintenance)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-brand-navy-light/90 border border-white/15 text-white placeholder-brand-muted/40 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
          />
        </div>
      )}

      {/* Accordion Items */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 glass-card rounded-2xl text-brand-muted text-sm">
            No matching questions found for "{searchQuery}". Please reach out to our team directly!
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-brand-navy-light border-brand-teal/50 shadow-glow-teal/20'
                    : 'bg-brand-navy-light/40 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isOpen ? 'bg-brand-teal text-brand-navy' : 'bg-white/5 text-brand-muted'
                    }`}>
                      0{faq.id}
                    </span>
                    <span className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-brand-mint' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-mint' : 'text-brand-muted'
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-brand-muted leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
