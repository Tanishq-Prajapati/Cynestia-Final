'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPipelineStages } from '@/lib/qualification';
import { EditorialReveal, StaggerContainer, StaggerItem } from './EditorialReveal';
import { ArrowRight, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

export function ProcessSection() {
  const stages = getPipelineStages();
  const [activeStageIndex, setActiveStageIndex] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 md:py-32 bg-warm-ivory border-b border-soft-taupe relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <EditorialReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-soft-taupe">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-editorial-burgundy font-semibold block mb-3">
                Delivery Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-medium text-rich-charcoal leading-[1.2] tracking-tight">
                A structured four-stage architecture from calibration to scheduled discovery.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm text-warm-stone-dark leading-relaxed">
                Every phase is transparently defined. We maintain rigorous standards for prospect suitability before any meeting reaches your calendar.
              </p>
            </div>
          </div>
        </EditorialReveal>

        {/* Interactive Milestone Progression Ribbon */}
        <div className="mb-12 hidden lg:block bg-warm-ivory-light border border-soft-taupe p-5">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-mono uppercase tracking-wider text-warm-stone">
              Phase Flow Architecture
            </span>
            <span className="text-[11px] text-editorial-burgundy font-semibold">
              Select any phase to highlight its operational deliverables
            </span>
          </div>

          <div className="relative">
            {/* Connecting baseline */}
            <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-soft-taupe -translate-y-1/2 z-0" />

            <div className="grid grid-cols-4 gap-4 relative z-10">
              {stages.map((stage, idx) => {
                const isSelected = activeStageIndex === idx;
                return (
                  <button
                    key={stage.number}
                    type="button"
                    onClick={() => setActiveStageIndex(isSelected ? null : idx)}
                    className={`text-left p-3 border transition-all duration-200 ${
                      isSelected
                        ? 'bg-warm-ivory border-editorial-burgundy shadow-xs'
                        : 'bg-warm-ivory/80 border-soft-taupe hover:border-editorial-burgundy/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-bold text-editorial-burgundy">
                        {stage.number}
                      </span>
                      <span className="font-mono text-[10px] text-warm-stone px-1.5 py-0.5 bg-soft-taupe/40">
                        {stage.timeline}
                      </span>
                    </div>
                    <span className="font-serif font-semibold text-xs text-rich-charcoal truncate block">
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4-Stage Connected Editorial Sequence */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => {
            const isSelected = activeStageIndex === idx;
            return (
              <StaggerItem key={stage.number}>
                <div
                  onClick={() => setActiveStageIndex(isSelected ? null : idx)}
                  className={`cursor-pointer bg-warm-ivory-light border p-7 flex flex-col justify-between transition-all duration-300 h-full ${
                    isSelected
                      ? 'border-editorial-burgundy ring-1 ring-editorial-burgundy/20 bg-warm-ivory shadow-sm'
                      : 'border-soft-taupe hover:border-editorial-burgundy/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-soft-taupe/60">
                      <span className="text-2xl font-serif font-semibold text-editorial-burgundy">
                        {stage.number}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-warm-stone px-2 py-0.5 bg-warm-ivory border border-soft-taupe/60">
                        {stage.timeline}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-semibold text-rich-charcoal mb-3">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-warm-stone-dark leading-relaxed mb-6 font-normal">
                      {stage.objective}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] uppercase tracking-wider text-editorial-burgundy font-semibold block">
                        Core Outputs
                      </span>
                      {stage.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-warm-stone-dark">
                          <span className="text-editorial-burgundy font-bold text-xs">·</span>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-soft-taupe/50 text-[11px] text-warm-stone italic leading-relaxed">
                    {stage.transparencyNote}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Pipeline Progression Governance Note */}
        <div className="mt-12 p-6 bg-warm-ivory border border-soft-taupe flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-editorial-burgundy font-semibold block mb-1">
              Conversion Integrity & Definitions
            </span>
            <p className="text-xs text-warm-stone-dark max-w-3xl">
              We maintain clear separation between <strong>Outreach Touchpoints</strong>, <strong>Positive Responses</strong>, <strong>Attended Discovery Meetings</strong>, and <strong>Sales Proposals</strong>. You will always know precisely where prospective clients sit in the pipeline journey.
            </p>
          </div>
          <span className="text-xs text-warm-stone font-mono shrink-0">
            Bi-Weekly Reporting Included
          </span>
        </div>
      </div>
    </section>
  );
}
