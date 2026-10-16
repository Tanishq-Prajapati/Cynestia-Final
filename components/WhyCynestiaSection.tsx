'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal, Target, Cpu, CheckCircle, Info } from 'lucide-react';
import { EditorialReveal, StaggerContainer, StaggerItem } from './EditorialReveal';

export function WhyCynestiaSection() {
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [selectedInvariant, setSelectedInvariant] = useState<number>(0);

  const pillars = [
    {
      title: 'Built Exclusively for the MSP Model',
      tagline: 'Deep Industry Alignment',
      icon: ShieldCheck,
      description:
        'Generic marketing agencies treat MSPs like dental clinics or SaaS startups. We understand MRR economics, seat-tier pricing, onboarding bandwidth, SLA commitments, and the crucial distinction between co-managed IT and fully outsourced services.',
      details: [
        'Fluent in Managed Cybersecurity, EDR/MDR, and Business Continuity language',
        'Targeting calibrated specifically around commercial risk and insurance mandates',
        'Respectful of the high trust required to outsource business-critical IT operations',
      ],
    },
    {
      title: 'Engineered Technical Execution',
      tagline: 'Systems & Data Automation',
      icon: Terminal,
      description:
        'Our foundation is grounded in robust software engineering (Python, Go, SQL, APIs, automated data pipelines, and workflow orchestration). We treat prospect research and domain health as systematic engineering disciplines rather than creative guesswork.',
      details: [
        'Multi-stage data verification pipelines filtering out inactive corporations',
        'Custom scraping and API scripts to cross-reference leadership registries',
        'Rigorous technical DNS and inbox deliverability monitoring (SPF, DKIM, DMARC)',
      ],
    },
    {
      title: 'Commercially Honest Accountability',
      tagline: 'Real Pipeline Conversations',
      icon: Target,
      description:
        'We do not celebrate vanity metrics like impressions, generic open rates, or clicks on generic newsletters. Our work is measured by the quality of commercial discovery conversations held with legitimate business decision-makers.',
      details: [
        'Clear criteria for what constitutes a qualified sales conversation',
        'Transparent weekly reporting on activity, sentiment, and objections',
        'Direct alignment with your internal sales capacity and deal size requirements',
      ],
    },
  ];

  const invariants = [
    {
      label: 'No purchased generic lists',
      context: 'Generic lists have 25%+ stale or invalid data that burns inbox domain reputation immediately.',
    },
    {
      label: 'No unverified email coordinates',
      context: 'Every coordinate is multi-source validated across SMTP handshakes and MX records before delivery.',
    },
    {
      label: 'Multi-channel respectful cadence',
      context: 'Outreach is paced with strategic breathing room, never overwhelming prospect inboxes.',
    },
    {
      label: 'Full U.S. business hours alignment',
      context: 'All discovery meetings and client communication sync seamlessly with North American time zones.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-warm-ivory-light border-b border-soft-taupe">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <EditorialReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-soft-taupe">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-editorial-burgundy font-semibold block mb-3">
                Strategic Differentiation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-medium text-rich-charcoal leading-[1.2] tracking-tight">
                Why partner with a dedicated MSP pipeline specialist?
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm text-warm-stone-dark leading-relaxed">
                We combine deep familiarity with managed IT and cybersecurity services with the operational discipline of software engineering.
              </p>
            </div>
          </div>
        </EditorialReveal>

        {/* 3 Core Pillars */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === idx;
            return (
              <StaggerItem key={idx}>
                <div
                  onClick={() => setActivePillar(isSelected ? null : idx)}
                  className={`cursor-pointer bg-warm-ivory border p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_12px_rgba(33,29,30,0.02)] h-full ${
                    isSelected
                      ? 'border-editorial-burgundy ring-1 ring-editorial-burgundy/20 bg-warm-ivory-light'
                      : 'border-soft-taupe hover:border-editorial-burgundy/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-soft-taupe/60">
                      <div
                        className={`w-8 h-8 border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-editorial-burgundy text-warm-ivory border-editorial-burgundy'
                            : 'bg-warm-ivory-light border-soft-taupe text-editorial-burgundy'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-warm-stone">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-xs uppercase tracking-wider text-editorial-burgundy font-semibold block mb-2">
                      {pillar.tagline}
                    </span>

                    <h3 className="text-xl font-serif font-semibold text-rich-charcoal mb-4">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-warm-stone-dark leading-relaxed mb-6 font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-soft-taupe/60 space-y-2.5">
                    {pillar.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-warm-stone-dark">
                        <CheckCircle className="w-3.5 h-3.5 text-editorial-burgundy shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Engineering Philosophy Callout Box */}
        <EditorialReveal>
          <div className="bg-warm-ivory border border-soft-taupe p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-warm-stone font-medium mb-3">
                  <Cpu className="w-4 h-4 text-editorial-burgundy" />
                  <span>Our Operational Philosophy</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-rich-charcoal mb-4">
                  Treating B2B pipeline as an engineered system, not creative guesswork.
                </h3>
                <p className="text-xs sm:text-sm text-warm-stone-dark leading-relaxed">
                  Sales development fails when it relies on episodic bursts of energy or generic copy blasted across unverified lists. By applying rigorous data processing, continuous verification, and disciplined follow-up cadences, we build a pipeline engine that produces steady, qualified sales conversations week after week.
                </p>
              </div>

              <div className="lg:col-span-4 bg-warm-ivory-light border border-soft-taupe p-6">
                <span className="text-xs font-semibold text-rich-charcoal block mb-3">
                  Operational Invariants
                </span>
                <ul className="space-y-2.5 text-xs text-warm-stone-dark">
                  {invariants.map((item, iIdx) => {
                    const isSelected = selectedInvariant === iIdx;
                    return (
                      <li
                        key={iIdx}
                        onClick={() => setSelectedInvariant(iIdx)}
                        className={`cursor-pointer p-2 border transition-all ${
                          isSelected
                            ? 'bg-warm-ivory border-editorial-burgundy shadow-xs'
                            : 'border-transparent hover:border-soft-taupe'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-none shrink-0 ${
                              isSelected ? 'bg-editorial-burgundy' : 'bg-warm-stone'
                            }`}
                          />
                          <span className="font-medium text-rich-charcoal">{item.label}</span>
                        </div>
                        {isSelected && (
                          <p className="text-[11px] text-warm-stone-dark leading-relaxed mt-1 pl-3.5 italic">
                            {item.context}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </EditorialReveal>
      </div>
    </section>
  );
}
