'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Compass, FileSearch, SendHorizontal, Filter, MessageSquareQuote, BarChart3, ChevronRight, Sparkles } from 'lucide-react';
import { EditorialReveal, StaggerContainer, StaggerItem } from './EditorialReveal';

interface FlagshipSectionProps {
  onOpenConsultation: () => void;
}

export function FlagshipSection({ onOpenConsultation }: FlagshipSectionProps) {
  const [activeTab, setActiveTab] = useState<'workflow' | 'scope' | 'transparency'>('workflow');
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const components = [
    {
      step: '01',
      title: 'Target Market Architecture',
      icon: Compass,
      description:
        'We refine your ICP parameters based on local/regional geography, seat size (15–150 employees), vertical regulatory burdens (healthcare, legal, defense, finance), and technology infrastructure.',
      outputs: ['Exclusion list integration', 'Disqualification criteria', 'Account sizing validation'],
      phaseCode: 'STAGE.01 // ICP DEFINITION',
    },
    {
      step: '02',
      title: 'Account Research & Executive Dossiers',
      icon: FileSearch,
      description:
        'Deep verification of commercial accounts. We map leadership rosters to identify key decision-makers (Owners, Managing Partners, CEOs, CFOs) and confirm contact coordinates across multiple verified databases.',
      outputs: ['Direct mobile & verified email coordinates', 'Technographic posture signals', 'Executive leadership roster'],
      phaseCode: 'STAGE.02 // INTEL MAPPING',
    },
    {
      step: '03',
      title: 'Multi-Touch Outbound Cadence',
      icon: SendHorizontal,
      description:
        'Thoughtfully written, non-salesy messaging focused on business continuity, compliance risk, and cyber insurance prerequisites. We handle technical domain setup, deliverability monitoring, and multi-channel touchpoints.',
      outputs: ['Custom email and phone touchpoints', 'Domain reputation management', 'Message testing & iteration'],
      phaseCode: 'STAGE.03 // OUTBOUND CADENCE',
    },
    {
      step: '04',
      title: 'Rigorous Response Qualification',
      icon: Filter,
      description:
        'When prospects respond, our team qualifies their current IT arrangement, contract renewal timelines, and specific pain points before scheduling them with your leadership.',
      outputs: ['Pre-conversation qualification checklist', 'Pain & infrastructure summary', 'Verification of decision authority'],
      phaseCode: 'STAGE.04 // PRE-QUALIFICATION',
    },
    {
      step: '05',
      title: 'Meeting Coordination & Discovery Handover',
      icon: MessageSquareQuote,
      description:
        'Qualified prospects are scheduled directly onto your sales calendar with comprehensive briefing notes, ensuring your team steps into discovery calls fully prepared to lead the conversation.',
      outputs: ['Calendar booking alignment', 'Pre-meeting prospect briefing dossier', 'Attendance confirmation protocol'],
      phaseCode: 'STAGE.05 // DISCOVERY HANDOVER',
    },
    {
      step: '06',
      title: 'Pipeline Reporting & Continuous Calibration',
      icon: BarChart3,
      description:
        'Full operational visibility. We provide transparent reports on accounts prospected, response sentiment, objection categories, and qualified meetings completed—regularly refining targeting based on call outcomes.',
      outputs: ['Bi-weekly pipeline review meetings', 'Sentiment & objection analysis', 'Continuous targeting calibration'],
      phaseCode: 'STAGE.06 // PIPELINE REVIEW',
    },
  ];

  const whatWeDeliver = [
    {
      category: 'Dedicated Prospecting Infrastructure',
      points: [
        'Isolated secondary domains and warmed inboxes to protect your primary domain reputation',
        'Direct multi-source email and phone validation pipelines to prevent bounce degradation',
        'Continuous deliverability monitoring and DNS authentication (SPF, DKIM, DMARC)',
      ],
    },
    {
      category: 'Targeted Outreach Execution',
      points: [
        'Commercial copy drafted around MSP business risk, ransomware liability, and IT operational debt',
        'Multi-touch sequence orchestration balancing persistence with professional restraint',
        'Systematic follow-up cadence structured across executive decision cycles',
      ],
    },
    {
      category: 'Qualification & Opportunity Handover',
      points: [
        'Strict filtering against minimum seat thresholds and commercial budget reality',
        'Comprehensive pre-call dossiers delivered prior to every scheduled conversation',
        'Post-meeting feedback loops to continuously sharpen prospect targeting',
      ],
    },
  ];

  return (
    <section id="pipeline-engine" className="py-24 md:py-32 bg-warm-ivory-light border-b border-soft-taupe">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <EditorialReveal>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-editorial-burgundy font-semibold mb-4">
              <span>Flagship Service</span>
              <span aria-hidden="true" className="text-soft-taupe">/</span>
              <span className="text-warm-stone">Core Offering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-rich-charcoal leading-[1.16] tracking-tight mb-6">
              Pipeline Engine: The dedicated B2B prospecting partner for U.S. MSPs.
            </h2>
            <p className="text-base sm:text-lg text-warm-stone-dark leading-relaxed font-normal">
              A comprehensive, professionally managed outbound program that transforms customer acquisition from an erratic chore into a disciplined, ongoing business process.
            </p>
          </div>
        </EditorialReveal>

        {/* Interactive Service View Selector (Segmented control) */}
        <div className="flex items-center gap-2 p-1 bg-warm-ivory border border-soft-taupe max-w-md mb-12">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`flex-1 py-2 px-3 text-xs uppercase tracking-wider font-semibold transition-colors ${
              activeTab === 'workflow'
                ? 'bg-editorial-burgundy text-warm-ivory shadow-xs'
                : 'text-warm-stone-dark hover:text-rich-charcoal'
            }`}
          >
            Operating Workflow
          </button>
          <button
            onClick={() => setActiveTab('scope')}
            className={`flex-1 py-2 px-3 text-xs uppercase tracking-wider font-semibold transition-colors ${
              activeTab === 'scope'
                ? 'bg-editorial-burgundy text-warm-ivory shadow-xs'
                : 'text-warm-stone-dark hover:text-rich-charcoal'
            }`}
          >
            Scope & Infrastructure
          </button>
          <button
            onClick={() => setActiveTab('transparency')}
            className={`flex-1 py-2 px-3 text-xs uppercase tracking-wider font-semibold transition-colors ${
              activeTab === 'transparency'
                ? 'bg-editorial-burgundy text-warm-ivory shadow-xs'
                : 'text-warm-stone-dark hover:text-rich-charcoal'
            }`}
          >
            Commercial Honesty
          </button>
        </div>

        {/* Tab 1: Operating Workflow */}
        {activeTab === 'workflow' && (
          <div className="space-y-8">
            {/* Interactive Stage Sequence Progression Strip */}
            <div className="p-4 sm:p-5 bg-warm-ivory border border-soft-taupe hidden md:block">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-soft-taupe/60 text-xs">
                <span className="font-mono uppercase tracking-wider text-warm-stone">
                  Sequential Progression Architecture
                </span>
                <span className="text-[11px] text-editorial-burgundy font-semibold">
                  Click any stage to highlight its deliverables
                </span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {components.map((item, idx) => {
                  const isFocused = activeStepIndex === idx;
                  return (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => setActiveStepIndex(isFocused ? null : idx)}
                      className={`text-left p-2.5 border transition-all text-xs ${
                        isFocused
                          ? 'bg-warm-ivory-light border-editorial-burgundy shadow-xs'
                          : 'bg-warm-ivory border-soft-taupe/80 hover:border-editorial-burgundy/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] text-editorial-burgundy font-bold">
                          {item.step}
                        </span>
                        {isFocused && <div className="w-1.5 h-1.5 rounded-full bg-editorial-burgundy" />}
                      </div>
                      <span className="font-serif font-semibold text-rich-charcoal text-[11px] truncate block">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeStepIndex === idx;
                return (
                  <StaggerItem key={item.step}>
                    <div
                      onClick={() => setActiveStepIndex(isSelected ? null : idx)}
                      className={`cursor-pointer p-7 bg-warm-ivory border flex flex-col justify-between transition-all duration-300 h-full ${
                        isSelected
                          ? 'border-editorial-burgundy ring-1 ring-editorial-burgundy/20 bg-warm-ivory-light shadow-sm'
                          : 'border-soft-taupe hover:border-editorial-burgundy/40 hover:bg-warm-ivory-light'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-soft-taupe/60">
                          <div
                            className={`w-8 h-8 border flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-editorial-burgundy text-warm-ivory border-editorial-burgundy'
                                : 'bg-warm-ivory-light border-soft-taupe text-editorial-burgundy'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-mono text-warm-stone tabular-nums">
                            Step {item.step}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono text-warm-stone uppercase tracking-wider block mb-1">
                          {item.phaseCode}
                        </span>

                        <h3 className="text-lg font-serif font-semibold text-rich-charcoal mb-3">
                          {item.title}
                        </h3>

                        <p className="text-xs text-warm-stone-dark leading-relaxed mb-6 font-normal">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-soft-taupe/50">
                        <span className="text-[10px] uppercase tracking-wider text-editorial-burgundy font-semibold block mb-2">
                          Key Deliverables
                        </span>
                        <ul className="space-y-1.5">
                          {item.outputs.map((out, oIdx) => (
                            <li key={oIdx} className="flex items-center gap-2 text-xs text-warm-stone-dark">
                              <span className="w-1 h-1 bg-editorial-burgundy rounded-full shrink-0" />
                              <span>{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        )}

        {/* Tab 2: Scope & Infrastructure */}
        {activeTab === 'scope' && (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeDeliver.map((group, idx) => (
              <StaggerItem key={idx}>
                <div className="p-8 bg-warm-ivory border border-soft-taupe flex flex-col justify-between h-full hover:border-rich-charcoal/30 transition-colors">
                  <div>
                    <span className="text-xs font-mono text-editorial-burgundy block mb-2">
                      Package Component 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-serif font-semibold text-rich-charcoal mb-6">
                      {group.category}
                    </h3>
                    <ul className="space-y-4">
                      {group.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs text-warm-stone-dark leading-relaxed">
                          <Check className="w-4 h-4 text-editorial-burgundy shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* Tab 3: Commercial Honesty & Expectations */}
        {activeTab === 'transparency' && (
          <div className="bg-warm-ivory border border-soft-taupe p-8 md:p-12">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-wider text-editorial-burgundy font-semibold block mb-3">
                Uncompromising Transparency
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-rich-charcoal mb-6">
                What Cynestia is—and what we deliberately choose not to promise.
              </h3>
              <p className="text-sm text-warm-stone-dark leading-relaxed mb-8">
                In B2B sales development, many agencies make reckless promises about closed revenue or guaranteed client counts. We believe established MSP owners appreciate grounded commercial integrity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-soft-taupe">
                <div>
                  <h4 className="text-sm font-semibold text-rich-charcoal uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-editorial-burgundy" />
                    What We Take Responsibility For
                  </h4>
                  <ul className="space-y-2.5 text-xs text-warm-stone-dark">
                    <li className="flex items-start gap-2">
                      <span className="text-editorial-burgundy font-bold">✓</span>
                      <span>Precision account selection matching your exact firmographic criteria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-editorial-burgundy font-bold">✓</span>
                      <span>Verified decision-maker intelligence (Owners, CEOs, Managing Directors)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-editorial-burgundy font-bold">✓</span>
                      <span>Restrained, enterprise-grade multi-touch messaging and inbox deliverability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-editorial-burgundy font-bold">✓</span>
                      <span>Pre-qualification of commercial pain, seat count, and contract timelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-editorial-burgundy font-bold">✓</span>
                      <span>Transparent weekly activity metrics, response sentiment, and pipeline reports</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-rich-charcoal uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-warm-stone" />
                    What Depends on Collaborative Execution
                  </h4>
                  <ul className="space-y-2.5 text-xs text-warm-stone-dark">
                    <li className="flex items-start gap-2">
                      <span className="text-warm-stone font-bold">—</span>
                      <span>Closing the sale: Your team leads the discovery call, technical audit, and final proposal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warm-stone font-bold">—</span>
                      <span>Commercial terms: Your pricing, SLA scope, and competitive positioning determine close rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warm-stone font-bold">—</span>
                      <span>Sales responsiveness: Swift follow-up by your leadership after introductory meetings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warm-stone font-bold">—</span>
                      <span>We track qualified commercial opportunities—not fabricated vanity revenue projections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Flagship Section Bottom CTA Strip */}
        <div className="mt-12 pt-8 border-t border-soft-taupe flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-warm-stone">
            <span className="font-semibold text-rich-charcoal">Engagements:</span>
            <span>Dedicated monthly operating retainer</span>
            <span aria-hidden="true">·</span>
            <span>No long-term lock-in traps</span>
          </div>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover transition-colors flex items-center justify-center gap-2"
          >
            <span>Review Pipeline Scope for Your MSP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
