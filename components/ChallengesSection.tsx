'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users2, Repeat, Target, Clock, ArrowDownRight, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EditorialReveal, StaggerContainer, StaggerItem } from './EditorialReveal';

export function ChallengesSection() {
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null);

  const challenges = [
    {
      num: '01',
      title: 'Referral Plateaus & Unpredictable Lead Timing',
      icon: Users2,
      summary:
        'Most established MSPs built their initial $1M–$5M in revenue on outstanding technical delivery and word-of-mouth. But referrals arrive unpredictably and cannot be dialled up when hiring new service desk technicians or expanding engineering teams.',
      reality:
        'When client acquisition depends entirely on goodwill, quarter-to-quarter revenue forecasting becomes an exercise in hope rather than an engineered process.',
      diagnosticPhase: 'Referral Reliance Gap',
    },
    {
      num: '02',
      title: 'The Outbound "Rollercoaster" Cycle',
      icon: Repeat,
      summary:
        'When client onboarding slows, leadership launches an outbound effort. But as soon as new client projects start, prospecting halts to focus on engineering delivery. Weeks later, the pipeline sits empty again.',
      reality:
        'Consistent B2B pipeline requires an uninterrupted, daily cadence of prospect identification and outreach that never gets paused by delivery fires.',
      diagnosticPhase: 'Operational Cadence Disruption',
    },
    {
      num: '03',
      title: 'Gatekeeper Traps & Misdirected Messaging',
      icon: Target,
      summary:
        'Generic marketing campaigns pitch technical features—backup protocols, patch cycles, NOC tools—to internal IT managers who view MSPs as threats to their job security.',
      reality:
        'Effective MSP pipeline generation bypasses gatekeepers to address C-level executives (Owners, CEOs, CFOs) on commercial risk, ransomware liability, and business continuity.',
      diagnosticPhase: 'Audience & Message Misalignment',
    },
    {
      num: '04',
      title: 'Fragmented Follow-up & Premature Abandonment',
      icon: Clock,
      summary:
        'Most B2B managed service contracts renew once every 12 to 36 months. A prospective client rarely needs an MSP on day one. When outreach stops after one or two touches, warm opportunities slip away.',
      reality:
        'Without systematic lead tracking and continuous nurturing, your prospective clients sign with whichever provider happens to be top-of-mind when their contract expires.',
      diagnosticPhase: 'Lead Nurture Abandonment',
    },
  ];

  return (
    <section id="challenges" className="py-24 md:py-32 bg-warm-ivory border-b border-soft-taupe relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <EditorialReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-soft-taupe">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-editorial-burgundy font-semibold block mb-3">
                Commercial Diagnosis
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-medium text-rich-charcoal leading-[1.2] tracking-tight">
                Why traditional MSP customer acquisition remains frustratingly erratic.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-warm-stone-dark leading-relaxed">
                Established MSPs do exceptional technical work, but their growth is frequently constrained by episodic, un-systematized business development. Recognizing these patterns is the first step toward operational consistency.
              </p>
            </div>
          </div>
        </EditorialReveal>

        {/* Interactive Pipeline Breakdown Vector Strip */}
        <div className="mb-12 p-4 sm:p-6 bg-warm-ivory-light border border-soft-taupe">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-soft-taupe/70">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rich-charcoal">
              <AlertTriangle className="w-3.5 h-3.5 text-editorial-burgundy" />
              <span>MSP Pipeline Friction Points in Episodic Outreach</span>
            </div>
            <span className="text-[11px] text-warm-stone">
              Select any bottleneck card below to inspect its operational remedy
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {challenges.map((item, idx) => {
              const isSelected = activeChallenge === idx;
              return (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => setActiveChallenge(isSelected ? null : idx)}
                  className={`text-left p-3.5 border transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-warm-ivory border-editorial-burgundy shadow-xs'
                      : 'bg-warm-ivory/60 border-soft-taupe hover:border-editorial-burgundy/40 hover:bg-warm-ivory'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-editorial-burgundy font-semibold">
                      Gap {item.num}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 bg-soft-taupe/40 text-warm-stone-dark">
                      Friction
                    </span>
                  </div>
                  <span className="text-xs font-serif font-semibold text-rich-charcoal line-clamp-1 block">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-warm-stone mt-1 block">
                    {item.diagnosticPhase}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric 2x2 Editorial Layout with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            const isHighlighted = activeChallenge === idx;
            return (
              <StaggerItem key={item.num}>
                <div
                  onClick={() => setActiveChallenge(isHighlighted ? null : idx)}
                  className={`cursor-pointer bg-warm-ivory-light border p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_12px_rgba(33,29,30,0.02)] h-full ${
                    isHighlighted
                      ? 'border-editorial-burgundy ring-1 ring-editorial-burgundy/20 bg-warm-ivory'
                      : 'border-soft-taupe hover:border-rich-charcoal/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-soft-taupe/70">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 border flex items-center justify-center transition-colors ${
                            isHighlighted
                              ? 'bg-editorial-burgundy text-warm-ivory border-editorial-burgundy'
                              : 'bg-warm-ivory border-soft-taupe text-editorial-burgundy'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-warm-stone font-medium">
                          Bottleneck
                        </span>
                      </div>
                      <span className="text-sm font-mono text-warm-stone tabular-nums">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-rich-charcoal mb-4 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-warm-stone-dark leading-relaxed mb-6 font-normal">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-soft-taupe/80 bg-warm-ivory/80 -mx-8 -mb-8 lg:-mx-10 lg:-mb-10 p-6 lg:p-8 mt-4">
                    <div className="flex items-start gap-2.5">
                      <ArrowDownRight className="w-4 h-4 text-editorial-burgundy shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-editorial-burgundy font-semibold block mb-1">
                          Operational Implication
                        </span>
                        <p className="text-xs text-warm-stone-dark leading-relaxed font-normal">
                          {item.reality}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
