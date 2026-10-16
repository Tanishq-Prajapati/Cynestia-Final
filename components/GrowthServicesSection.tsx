'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Workflow, Layers, Network, LineChart, AlertCircle, ArrowRight } from 'lucide-react';
import { EditorialReveal, StaggerContainer, StaggerItem } from './EditorialReveal';

export function GrowthServicesSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const services = [
    {
      id: 'sales-ops',
      title: 'Sales Operations & CRM Automation',
      category: 'Infrastructure',
      icon: Workflow,
      summary:
        'Eliminating lead leakage and manual administrative burdens across your commercial pipeline.',
      capabilities: [
        'CRM configuration & stage standardization (HubSpot, ConnectWise, HaloPSA, custom)',
        'Automated lead routing and notification alerts for executive discovery meetings',
        'Systematized task sequencing ensuring zero post-meeting follow-up drops',
        'Sales collateral organization and standardized proposal template hygiene',
      ],
      scopeNote: 'Implementation scope tailored to your existing CRM environment and API permissions.',
    },
    {
      id: 'expansion',
      title: 'Existing-Customer Account Expansion',
      category: 'Account Growth',
      icon: Layers,
      summary:
        'Systematic identification of cross-sell opportunities within your existing managed accounts.',
      capabilities: [
        'Gap audits for recurring cybersecurity add-ons (MDR, SOC, Security Awareness Training)',
        'M365 security posture reviews to justify upgraded tier licenses (Business Premium / E5)',
        'Systematized Quarterly Business Review (QBR) agenda prep and asset discovery',
        'Contract renewal and expansion workflow automation',
      ],
      scopeNote: 'PSA & RMM data analysis subject to client platform access, data hygiene, and compliance review.',
    },
    {
      id: 'referrals',
      title: 'Referral & Partner Development Workflows',
      category: 'Relationship Networks',
      icon: Network,
      summary:
        'Transforming word-of-mouth from a passive hope into an organized referral ecosystem.',
      capabilities: [
        'Strategic outreach to complementary B2B advisors (Commercial Insurance Brokers, CPAs, Legal)',
        'Structured co-marketing touchpoints around cyber insurance compliance prerequisites',
        'Systematized client referral request cadences timed to successful project milestones',
        'Partner relationship tracking and attribution reporting',
      ],
      scopeNote: 'Focused on high-trust professional services that advise business executives on risk.',
    },
    {
      id: 'intelligence',
      title: 'Pipeline Intelligence & Dormant Lead Reactivation',
      category: 'Optimization',
      icon: LineChart,
      summary:
        'Extracting value from historical quotes, past discovery calls, and aged commercial contacts.',
      capabilities: [
        'Dormant proposal audit to identify past prospects approaching contract renewal windows',
        'Re-engagement sequences calibrated to new security mandates and industry changes',
        'Win/loss categorization to identify recurring commercial objections and pricing friction',
        'Consolidated executive pipeline reporting covering conversion velocity',
      ],
      scopeNote: 'Reactivation requires verified past contact lists and CRM export accessibility.',
    },
  ];

  const categories = ['All', 'Infrastructure', 'Account Growth', 'Relationship Networks', 'Optimization'];

  const filteredServices = activeFilter === 'All'
    ? services
    : services.filter((s) => s.category === activeFilter);

  return (
    <section id="growth-services" className="py-24 md:py-32 bg-warm-ivory border-b border-soft-taupe">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <EditorialReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 pb-8 border-b border-soft-taupe">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-editorial-burgundy font-semibold block mb-3">
                Supporting Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-medium text-rich-charcoal leading-[1.2] tracking-tight">
                Complementary growth systems to scale sales operations.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm text-warm-stone-dark leading-relaxed">
                While <strong>Pipeline Engine</strong> remains the primary entry engagement, Cynestia also provides operational systems to capture expansion, systematize referrals, and streamline internal sales workflows.
              </p>
            </div>
          </div>
        </EditorialReveal>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs uppercase tracking-wider text-warm-stone font-mono mr-2 hidden sm:inline">
            Focus:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-editorial-burgundy text-warm-ivory border-editorial-burgundy shadow-xs'
                  : 'bg-warm-ivory-light border-soft-taupe text-warm-stone-dark hover:border-rich-charcoal/40 hover:text-rich-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2x2 Distinctive Editorial Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((item) => {
            const Icon = item.icon;
            const isSelected = activeServiceId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveServiceId(isSelected ? null : item.id)}
                className={`cursor-pointer bg-warm-ivory-light border p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_12px_rgba(33,29,30,0.02)] h-full ${
                  isSelected
                    ? 'border-editorial-burgundy ring-1 ring-editorial-burgundy/20 bg-warm-ivory'
                    : 'border-soft-taupe hover:border-rich-charcoal/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-soft-taupe/60">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-editorial-burgundy text-warm-ivory border-editorial-burgundy'
                            : 'bg-warm-ivory border-soft-taupe text-editorial-burgundy'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-editorial-burgundy font-semibold">
                        {item.category}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-editorial-burgundy px-2 py-0.5 bg-editorial-burgundy/10">
                        Inspected
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-rich-charcoal mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-warm-stone-dark leading-relaxed mb-6 font-normal">
                    {item.summary}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] uppercase tracking-wider text-warm-stone font-semibold block">
                      Scope of Capabilities
                    </span>
                    {item.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-warm-stone-dark">
                        <span className="w-1.5 h-1.5 bg-editorial-burgundy/80 rounded-none shrink-0 mt-1" />
                        <span className="leading-relaxed">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-soft-taupe/60 flex items-start gap-2 text-[11px] text-warm-stone italic">
                  <AlertCircle className="w-3.5 h-3.5 text-warm-stone shrink-0 mt-0.5" />
                  <span>{item.scopeNote}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
