'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { EditorialReveal, StaggerContainer, StaggerItem } from './EditorialReveal';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqs = [
    {
      q: 'Which types of Managed Service Providers are most suitable for Cynestia?',
      category: 'Scope & Suitability',
      a: 'Our primary focus is established, independent U.S. MSPs with approximately 11 to 50 employees who sell recurring managed IT, cybersecurity (EDR/MDR/SOC), M365 security, or managed cloud services. These businesses typically have established onboarding workflows, stable engineering delivery, and a desire to grow beyond sporadic word-of-mouth referrals. We also work with appropriate larger providers (51–200 employees) expanding into specific regions or verticals.',
    },
    {
      q: 'What is included in the flagship Pipeline Engine engagement?',
      category: 'Scope & Suitability',
      a: 'Pipeline Engine is an end-to-end outbound prospecting service. It encompasses ideal-customer-profile refinement, target-account research, decision-maker identification (Owners, CEOs, CFOs), multi-touch messaging strategy, technical deliverability infrastructure, response qualification, meeting coordination directly onto your leadership calendar, pre-call prospect dossiers, and bi-weekly pipeline review meetings.',
    },
    {
      q: 'How does Cynestia define a "qualified sales opportunity"?',
      category: 'Scope & Suitability',
      a: 'A qualified opportunity is not a contact merely downloading an eBook or saying "send info." We define it as an introductory commercial discovery conversation confirmed with a vetted business decision-maker whose company matches your agreed seat thresholds and geographic parameters, has a confirmed commercial need or upcoming contract renewal window, and has agreed to discuss their managed IT or cybersecurity posture.',
    },
    {
      q: 'Do you guarantee closed clients or specific revenue figures?',
      category: 'Commercial Honesty',
      a: 'No, and we advise caution regarding any marketing agency that makes such guarantees. While Cynestia is strictly accountable for targeted account research, deliverability hygiene, message discipline, response qualification, and scheduling vetted meetings, closing the sale depends on your pricing, competitive positioning, technical audit, proposal quality, and sales responsiveness. We track qualified opportunities pursued rather than fabricating vanity revenue guarantees.',
    },
    {
      q: 'How much time is required from our leadership team each week?',
      category: 'Operations & Delivery',
      a: 'During the initial 2-week calibration phase, we require approximately 2–3 hours of collaborative workshops to map your target verticals, qualification boundaries, and commercial differentiation. Once outreach launches, your primary commitment is attending scheduled discovery meetings, providing brief post-call feedback, and participating in a 30-minute bi-weekly pipeline review.',
    },
    {
      q: 'How does remote service delivery from India work for U.S. clients?',
      category: 'Operations & Delivery',
      a: 'All client-facing communications, prospecting cadences, calendar scheduling, and partner meetings are fully aligned with U.S. business hours (Eastern, Central, Mountain, and Pacific time zones). Our outreach copy is written to pristine North American B2B standards, and all discovery sessions are booked directly into your local calendar without friction or time-zone disconnects.',
    },
    {
      q: 'Can Cynestia integrate with our existing PSA or CRM platforms?',
      category: 'Operations & Delivery',
      a: 'Yes, where applicable. We can route qualified opportunities and prospect notes into systems such as HubSpot, ConnectWise Manage, Autotask, or HaloPSA. Integration scope depends on your platform edition, API permissions, and internal data structure, which we verify collaboratively during onboarding.',
    },
    {
      q: 'What is the contract structure and onboarding timeline?',
      category: 'Commercial Honesty',
      a: 'Engagements operate on a dedicated monthly service retainer with clear operational deliverables. We do not impose rigid multi-year lock-in contracts; we believe ongoing collaboration should be sustained by consistent pipeline generation. Initial setup and calibration take 10 to 14 days, with active outbound outreach commencing in the third week.',
    },
  ];

  const categories = ['All', 'Scope & Suitability', 'Operations & Delivery', 'Commercial Honesty'];

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter((f) => f.category === selectedCategory);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-warm-ivory-light border-b border-soft-taupe">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <EditorialReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-editorial-burgundy font-semibold block mb-3">
              Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-rich-charcoal leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-warm-stone-dark leading-relaxed">
              Direct, transparent answers regarding our scope, standards, and operational process.
            </p>
          </div>
        </EditorialReveal>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIdx(0);
              }}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-semibold transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-editorial-burgundy text-warm-ivory border-editorial-burgundy shadow-xs'
                  : 'bg-warm-ivory border-soft-taupe text-warm-stone-dark hover:border-rich-charcoal/40 hover:text-rich-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accessible Accordion with Stagger */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className={`bg-warm-ivory border transition-all duration-200 ${
                  isOpen
                    ? 'border-editorial-burgundy shadow-xs'
                    : 'border-soft-taupe hover:border-soft-taupe-light hover:border-rich-charcoal/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-burgundy"
                  aria-expanded={isOpen}
                >
                  <div className="pr-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-warm-stone block mb-1">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-serif font-semibold text-rich-charcoal leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-none border border-soft-taupe flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-editorial-burgundy text-warm-ivory rotate-180 border-editorial-burgundy'
                        : 'text-rich-charcoal bg-warm-ivory-light'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 sm:px-7 pt-1 border-t border-soft-taupe/60">
                        <p className="text-sm text-warm-stone-dark leading-relaxed font-normal">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
