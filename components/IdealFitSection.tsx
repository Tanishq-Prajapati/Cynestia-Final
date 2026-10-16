'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, HelpCircle, ArrowRight, Sparkles, Activity } from 'lucide-react';
import { assessMspFit, MspProfile, FitAssessmentResult } from '@/lib/qualification';
import { EditorialReveal, StaggerContainer, StaggerItem } from './EditorialReveal';

interface IdealFitSectionProps {
  onOpenConsultation: () => void;
}

export function IdealFitSection({ onOpenConsultation }: IdealFitSectionProps) {
  // Interactive Fit Evaluator State
  const [profile, setProfile] = useState<MspProfile>({
    teamSize: '11-30',
    recurringServices: ['Managed IT Services', 'Managed Cybersecurity / MDR'],
    onboardingCapacity: '1-2',
    targetDealSize: '$3k-$7k',
    dedicatedSalesLead: true,
  });

  const [assessment, setAssessment] = useState<FitAssessmentResult | null>(() => assessMspFit(profile));

  const handleUpdate = (updated: Partial<MspProfile>) => {
    const next = { ...profile, ...updated };
    setProfile(next);
    setAssessment(assessMspFit(next));
  };

  const toggleService = (service: string) => {
    const exists = profile.recurringServices.includes(service);
    const updated = exists
      ? profile.recurringServices.filter((s) => s !== service)
      : [...profile.recurringServices, service];
    handleUpdate({ recurringServices: updated });
  };

  // Calculate dynamic alignment score percentage based on fit tier
  const alignmentScore = assessment?.fitTier === 'Optimal Fit' ? 95 : assessment?.fitTier === 'Selective Fit' ? 70 : 40;

  return (
    <section id="client-fit" className="py-24 md:py-32 bg-warm-ivory border-b border-soft-taupe">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <EditorialReveal>
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-editorial-burgundy font-semibold block mb-3">
              Mutual Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-rich-charcoal leading-[1.16] tracking-tight mb-6">
              Is Cynestia the right partner for your MSP?
            </h2>
            <p className="text-base sm:text-lg text-warm-stone-dark leading-relaxed font-normal">
              We operate as an extension of your business development team. That model functions best when there is strong operational alignment and realistic commercial capacity.
            </p>
          </div>
        </EditorialReveal>

        {/* Side-by-Side Profile Alignment */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Well-Suited Profiles */}
          <StaggerItem>
            <div className="p-8 lg:p-10 bg-warm-ivory-light border border-soft-taupe shadow-[0_2px_12px_rgba(33,29,30,0.02)] h-full hover:border-editorial-burgundy/40 transition-colors">
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-soft-taupe/70">
                <div className="w-8 h-8 bg-editorial-burgundy/10 flex items-center justify-center text-editorial-burgundy font-bold">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-rich-charcoal">
                    Well-Suited for Pipeline Engine
                  </h3>
                  <span className="text-xs text-warm-stone">High commercial alignment</span>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-warm-stone-dark leading-relaxed">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-editorial-burgundy shrink-0 mt-0.5" />
                  <span>
                    <strong>Established U.S. MSP (11–50+ employees):</strong> You have established technical teams, stable operations, and the infrastructure to deliver consistent service.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-editorial-burgundy shrink-0 mt-0.5" />
                  <span>
                    <strong>Focus on Recurring MRR & Cybersecurity:</strong> You sell managed IT agreements, MDR, compliance governance, or cloud security, typically starting at $1,500+ MRR.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-editorial-burgundy shrink-0 mt-0.5" />
                  <span>
                    <strong>Delivery & Onboarding Bandwidth:</strong> You can smoothly onboard 1 to 3 new commercial clients per month without degrading service to existing accounts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-editorial-burgundy shrink-0 mt-0.5" />
                  <span>
                    <strong>Committed Sales Leadership:</strong> The owner, founder, or sales director is prepared to promptly attend discovery meetings and lead proposal presentations.
                  </span>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* When Another Approach Is Better */}
          <StaggerItem>
            <div className="p-8 lg:p-10 bg-warm-ivory border border-soft-taupe shadow-[0_2px_12px_rgba(33,29,30,0.02)] h-full hover:border-rich-charcoal/30 transition-colors">
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-soft-taupe/70">
                <div className="w-8 h-8 bg-warm-stone/10 flex items-center justify-center text-warm-stone font-bold">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-rich-charcoal">
                    When Another Path Is Prudent
                  </h3>
                  <span className="text-xs text-warm-stone">Circumstances where we advise caution</span>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-warm-stone-dark leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-warm-stone font-bold text-sm shrink-0">—</span>
                  <span>
                    <strong>Early-Stage / Solo Operators:</strong> If your team is under 5 technicians and you are fully absorbed in day-to-day firefighting, you may lack bandwidth to service incoming pipeline.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warm-stone font-bold text-sm shrink-0">—</span>
                  <span>
                    <strong>Break-Fix or Project-Only Models:</strong> Outbound prospecting requires predictable recurring margins to deliver compelling commercial return on investment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warm-stone font-bold text-sm shrink-0">—</span>
                  <span>
                    <strong>Unprepared for Discovery Conversations:</strong> If your team expects closed contracts handed over without leading the technical assessment, an outbound agency is not the right fit.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warm-stone font-bold text-sm shrink-0">—</span>
                  <span>
                    <strong>Low Contract Values (&lt; $500/mo):</strong> Outreach to mid-market decision-makers yields the best ROI on agreements exceeding $1,500/month.
                  </span>
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Interactive Self-Assessment Tool */}
        <EditorialReveal>
          <div className="bg-warm-ivory-light border border-soft-taupe p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-soft-taupe gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-editorial-burgundy font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Self-Assessment</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-rich-charcoal">
                  Check Your Alignment in Real Time
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-warm-ivory border border-soft-taupe text-xs text-warm-stone font-mono">
                <Activity className="w-3.5 h-3.5 text-editorial-burgundy" />
                <span>Instant Evaluation Engine</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Input Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Team Size */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal block mb-2">
                    Current Full-Time Team Size
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {(['1-10', '11-30', '31-50', '51-100', '100+'] as const).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleUpdate({ teamSize: size })}
                        className={`py-2 px-1 text-xs font-medium text-center border transition-all duration-200 ${
                          profile.teamSize === size
                            ? 'bg-editorial-burgundy text-warm-ivory border-editorial-burgundy shadow-xs'
                            : 'bg-warm-ivory border-soft-taupe text-rich-charcoal hover:border-rich-charcoal/40'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recurring Services Selection */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal block mb-2">
                    Core Recurring Services Offered (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Managed IT Services',
                      'Managed Cybersecurity / MDR',
                      'M365 Security & Compliance',
                      'Cloud Infrastructure',
                    ].map((service) => {
                      const isSelected = profile.recurringServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`p-2.5 text-xs text-left border flex items-center justify-between transition-all duration-200 ${
                            isSelected
                              ? 'bg-warm-ivory border-editorial-burgundy text-rich-charcoal font-medium shadow-xs'
                              : 'bg-warm-ivory/60 border-soft-taupe text-warm-stone-dark hover:border-soft-taupe/90'
                          }`}
                        >
                          <span>{service}</span>
                          {isSelected ? (
                            <Check className="w-3.5 h-3.5 text-editorial-burgundy shrink-0" />
                          ) : (
                            <span className="w-3.5 h-3.5 border border-soft-taupe shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Onboarding Capacity & Target Contract MRR */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal block mb-2">
                      Monthly Onboarding Capacity
                    </label>
                    <select
                      value={profile.onboardingCapacity}
                      onChange={(e) =>
                        handleUpdate({
                          onboardingCapacity: e.target.value as MspProfile['onboardingCapacity'],
                        })
                      }
                      className="w-full bg-warm-ivory border border-soft-taupe px-3 py-2 text-xs text-rich-charcoal focus:border-editorial-burgundy outline-none transition-colors"
                    >
                      <option value="none">0 accounts (Currently capped)</option>
                      <option value="1-2">1–2 accounts / month</option>
                      <option value="3-5">3–5 accounts / month</option>
                      <option value="6+">6+ accounts / month</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal block mb-2">
                      Target Agreement MRR
                    </label>
                    <select
                      value={profile.targetDealSize}
                      onChange={(e) =>
                        handleUpdate({
                          targetDealSize: e.target.value as MspProfile['targetDealSize'],
                        })
                      }
                      className="w-full bg-warm-ivory border border-soft-taupe px-3 py-2 text-xs text-rich-charcoal focus:border-editorial-burgundy outline-none transition-colors"
                    >
                      <option value="<$1k">Under $1,000 / mo</option>
                      <option value="$1k-$3k">$1,000 – $3,000 / mo</option>
                      <option value="$3k-$7k">$3,000 – $7,000 / mo</option>
                      <option value="$7k+">$7,000+ / mo</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Assessment Result Card (5 cols) */}
              <div className="lg:col-span-5 bg-warm-ivory border border-soft-taupe p-7 flex flex-col justify-between">
                {assessment && (
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-soft-taupe">
                      <span className="text-xs uppercase tracking-wider text-warm-stone font-mono">
                        Alignment Tier
                      </span>
                      <span
                        className={`text-xs px-2.5 py-1 font-semibold uppercase tracking-wider transition-colors ${
                          assessment.fitTier === 'Optimal Fit'
                            ? 'bg-editorial-burgundy text-warm-ivory'
                            : assessment.fitTier === 'Selective Fit'
                            ? 'bg-warm-stone/20 text-rich-charcoal'
                            : 'bg-soft-taupe text-warm-stone-dark'
                        }`}
                      >
                        {assessment.fitTier}
                      </span>
                    </div>

                    {/* Visual Alignment Meter */}
                    <div className="mb-5 pb-4 border-b border-soft-taupe/60">
                      <div className="flex items-center justify-between text-[11px] font-mono text-warm-stone mb-1.5">
                        <span>Alignment Index</span>
                        <span className="font-semibold text-rich-charcoal">{alignmentScore}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-soft-taupe overflow-hidden">
                        <motion.div
                          initial={false}
                          animate={{ width: `${alignmentScore}%` }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          className={`h-full ${
                            assessment.fitTier === 'Optimal Fit'
                              ? 'bg-editorial-burgundy'
                              : assessment.fitTier === 'Selective Fit'
                              ? 'bg-warm-stone'
                              : 'bg-soft-taupe-border'
                          }`}
                        />
                      </div>
                    </div>

                    <h4 className="text-lg font-serif font-semibold text-rich-charcoal mb-3">
                      {assessment.headline}
                    </h4>

                    <p className="text-xs text-warm-stone-dark leading-relaxed mb-6">
                      {assessment.recommendation}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] uppercase tracking-wider text-editorial-burgundy font-semibold block">
                        Criteria Audit
                      </span>
                      {assessment.reasons.map((reason, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-warm-stone-dark">
                          <span className="text-editorial-burgundy font-bold">·</span>
                          <span className="leading-snug">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  <span>Discuss Your Exact Goals</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </EditorialReveal>
      </div>
    </section>
  );
}
