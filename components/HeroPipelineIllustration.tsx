'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Database, 
  ShieldCheck, 
  Users, 
  Send, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

export interface StageInfo {
  id: string;
  step: string;
  title: string;
  shortLabel: string;
  category: string;
  icon: typeof Database;
  summary: string;
  deliverable: string;
  technicalSignal: string;
  firmographicRules: string[];
}

const STAGES: StageInfo[] = [
  {
    id: 'targeting',
    step: '01',
    title: 'Target Market Refinement',
    shortLabel: 'ICP Architecture',
    category: 'Universe Filtration',
    icon: Database,
    summary: 'Filtering out non-viable accounts before outreach begins. Calibrated strictly around U.S. commercial businesses with 15–150 seats.',
    deliverable: 'Pristine, de-duplicated account database filtered by active IT dependency and compliance burdens.',
    technicalSignal: 'Firmographic & Risk Screen',
    firmographicRules: ['15–150 PC/Mac Workstations', 'Regulated Sectors (Legal, Healthcare, Finance, Defense)', 'Active Commercial Headquarters (U.S.)'],
  },
  {
    id: 'research',
    step: '02',
    title: 'Account Research & Dossiers',
    shortLabel: 'Account Dossiers',
    category: 'Deep Intelligence',
    icon: ShieldCheck,
    summary: 'Evaluating firmographic risk profile, regulatory compliance standards, and existing IT infrastructure context.',
    deliverable: 'Full intelligence dossier on commercial liability, cyber insurance needs, and technological pain points.',
    technicalSignal: 'Compliance & Cyber Risk Audit',
    firmographicRules: ['Cyber Insurance Mandate Active', 'Pending Regulatory Audit / HIPAA / CMMC', 'Multi-Office Branch Infrastructure'],
  },
  {
    id: 'stakeholders',
    step: '03',
    title: 'Decision-Maker Intelligence',
    shortLabel: 'Executive Mapping',
    category: 'C-Suite Access',
    icon: Users,
    summary: 'Bypassing technical gatekeepers to engage executives who bear ultimate legal, financial, and operational risk.',
    deliverable: 'Direct, verified mobile and email coordinates for Owners, Managing Partners, CEOs, and CFOs.',
    technicalSignal: 'Verified Executive Coordinates',
    firmographicRules: ['Owners / Managing Partners', 'Chief Executive Officers', 'Chief Financial Officers / COOs'],
  },
  {
    id: 'outreach',
    step: '04',
    title: 'Disciplined Outreach Cadence',
    shortLabel: 'Multi-Touch Outreach',
    category: 'Restrained Execution',
    icon: Send,
    summary: 'Executing restrained, multi-touch communications centered on business continuity and ransomware liability.',
    deliverable: 'Professional multi-touch sequences orchestrating email, phone, and executive briefings with zero spam.',
    technicalSignal: 'Dedicated Secondary Domains & Warm Inboxes',
    firmographicRules: ['Custom Commercial Messaging', 'Isolated Sending Infrastructure (SPF/DKIM)', 'Strict Follow-Up Spacing'],
  },
  {
    id: 'qualification',
    step: '05',
    title: 'Response Qualification',
    shortLabel: 'Pre-Qualification',
    category: 'Integrity Verification',
    icon: CheckCircle2,
    summary: 'Vetting genuine intent, contract expiration windows, seat scale, and service expectations prior to meeting booking.',
    deliverable: 'Pre-meeting qualification checklist confirming decision authority and commercial budget reality.',
    technicalSignal: 'Direct Verification Protocol',
    firmographicRules: ['Confirmed 15+ Workstation Threshold', 'Commercial Contract Window Verified', 'Executive Attendance Committed'],
  },
  {
    id: 'conversation',
    step: '06',
    title: 'Qualified Sales Opportunities',
    shortLabel: 'Discovery Sessions',
    category: 'Commercial Handover',
    icon: Calendar,
    summary: 'Coordinating introductory commercial discovery sessions directly onto your leadership team’s calendar.',
    deliverable: 'Confirmed calendar event with comprehensive pre-meeting briefing dossier delivered 24 hours prior.',
    technicalSignal: 'Calendar Handover & Briefing Dossier',
    firmographicRules: ['Calendar Invite Accepted by C-Level', 'Pre-Meeting Dossier Delivered to MSP', 'Attendance Confirmation Protocol'],
  },
];

export function HeroPipelineIllustration({ onSelectStage }: { onSelectStage?: (stageIndex: number) => void }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Auto-cycle through stages if not paused by user
  useEffect(() => {
    if (!isAutoPlaying || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, shouldReduceMotion]);

  const currentStage = STAGES[activeStage];
  const CurrentIcon = currentStage.icon;

  const handleStageClick = (idx: number) => {
    setActiveStage(idx);
    setIsAutoPlaying(false);
    if (onSelectStage) {
      onSelectStage(idx);
    }
  };

  return (
    <div className="relative w-full bg-warm-ivory-light border border-soft-taupe shadow-[0_4px_28px_rgba(33,29,30,0.03)] overflow-hidden">
      {/* Precision architectural header strip */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-soft-taupe bg-warm-ivory/60">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-editorial-burgundy animate-pulse" />
          <span className="text-[11px] uppercase tracking-wider text-rich-charcoal font-semibold">
            Pipeline Engine Architecture
          </span>
          <span className="text-soft-taupe hidden sm:inline">|</span>
          <span className="text-[11px] text-warm-stone hidden sm:inline">
            Interactive Operational Flow
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Play/Pause controls */}
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-warm-stone-dark hover:text-rich-charcoal bg-warm-ivory border border-soft-taupe hover:border-rich-charcoal/40 transition-colors"
            title={isAutoPlaying ? 'Pause automated sequence' : 'Resume automated sequence'}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3 h-3 text-editorial-burgundy" />
                <span className="hidden xs:inline">Auto</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-warm-stone" />
                <span className="hidden xs:inline">Paused</span>
              </>
            )}
          </button>

          <span className="text-[11px] font-mono text-warm-stone tabular-nums px-2 py-0.5 bg-warm-ivory border border-soft-taupe">
            {currentStage.step} / 06
          </span>
        </div>
      </div>

      {/* Main Diagram Area with SVG Interconnections */}
      <div className="p-5 sm:p-7 relative">
        {/* Subtle background schematic grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-soft-taupe/80" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
          </svg>
        </div>

        {/* Top Interactive Stage Track / Progress Conduit */}
        <div className="relative z-10 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-warm-stone">
              Operational Sequence
            </span>
            <span className="text-[10px] uppercase tracking-wider text-editorial-burgundy font-semibold">
              {currentStage.category}
            </span>
          </div>

          {/* Interactive Stage Step Indicators */}
          <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
            {STAGES.map((stage, idx) => {
              const isSelected = activeStage === idx;
              const isPast = activeStage > idx;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleStageClick(idx)}
                  onMouseEnter={() => setHoveredNode(idx)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`group relative py-2 px-1 text-center border transition-all duration-200 ${
                    isSelected
                      ? 'bg-editorial-burgundy text-warm-ivory border-editorial-burgundy shadow-sm'
                      : isPast
                      ? 'bg-warm-ivory text-rich-charcoal border-soft-taupe hover:border-editorial-burgundy/50'
                      : 'bg-warm-ivory/50 text-warm-stone border-soft-taupe/60 hover:border-soft-taupe hover:bg-warm-ivory'
                  }`}
                  aria-label={`View stage ${stage.step}: ${stage.title}`}
                >
                  <span className="text-[11px] font-mono block font-semibold leading-tight">
                    {stage.step}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider truncate block font-medium opacity-80 mt-0.5">
                    {stage.shortLabel.split(' ')[0]}
                  </span>

                  {/* Active bottom accent indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="active-stage-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-editorial-burgundy"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Architectural Schematic Visualization */}
        <div className="relative z-10 bg-warm-ivory border border-soft-taupe p-5 sm:p-6 mb-5">
          <div className="flex items-start justify-between gap-4 pb-4 mb-4 border-b border-soft-taupe/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-editorial-burgundy text-warm-ivory flex items-center justify-center shrink-0 shadow-sm">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-warm-stone">
                    Phase {currentStage.step}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-editorial-burgundy" />
                  <span className="text-[10px] uppercase tracking-wider text-editorial-burgundy font-semibold">
                    {currentStage.technicalSignal}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-serif font-semibold text-rich-charcoal leading-snug">
                  {currentStage.title}
                </h3>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-warm-stone-dark leading-relaxed mb-4 font-normal">
            {currentStage.summary}
          </p>

          {/* Firmographic Qualification Rules List */}
          <div className="bg-warm-ivory-light border border-soft-taupe p-3.5 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-editorial-burgundy" />
              <span className="text-[10px] uppercase tracking-widest text-rich-charcoal font-semibold">
                Operational Criteria & Standards
              </span>
            </div>
            <div className="space-y-1.5">
              {currentStage.firmographicRules.map((rule, rIdx) => (
                <div key={rIdx} className="flex items-center gap-2 text-xs text-warm-stone-dark">
                  <div className="w-1.5 h-1.5 bg-editorial-burgundy/80 shrink-0" />
                  <span className="font-mono text-[11px] leading-snug">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Output Tag */}
          <div className="pt-3 border-t border-soft-taupe/70 flex items-start gap-2 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-editorial-burgundy font-semibold shrink-0 pt-0.5">
              Verified Output:
            </span>
            <span className="text-warm-stone-dark text-[11px] leading-relaxed">
              {currentStage.deliverable}
            </span>
          </div>
        </div>

        {/* Bottom Interactive Schematic Signals Flow */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-warm-ivory border border-soft-taupe/80">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-warm-stone">Protocol</span>
              <span className="text-[10px] font-mono text-editorial-burgundy font-semibold">100% Verified</span>
            </div>
            <span className="text-xs font-serif font-medium text-rich-charcoal block">
              Direct C-Level Reach
            </span>
            <span className="text-[10px] text-warm-stone leading-tight block mt-0.5">
              Zero purchased generic lists
            </span>
          </div>

          <div className="p-3 bg-warm-ivory border border-soft-taupe/80">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-warm-stone">Cadence</span>
              <span className="text-[10px] font-mono text-editorial-burgundy font-semibold">Multi-Touch</span>
            </div>
            <span className="text-xs font-serif font-medium text-rich-charcoal block">
              Commercial Framing
            </span>
            <span className="text-[10px] text-warm-stone leading-tight block mt-0.5">
              Ransomware & insurance focus
            </span>
          </div>

          <div className="p-3 bg-warm-ivory border border-soft-taupe/80">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-warm-stone">Outcome</span>
              <span className="text-[10px] font-mono text-editorial-burgundy font-semibold">Calendar Ready</span>
            </div>
            <span className="text-xs font-serif font-medium text-rich-charcoal block">
              Qualified Meetings
            </span>
            <span className="text-[10px] text-warm-stone leading-tight block mt-0.5">
              Attended discovery sessions
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar with interaction hint */}
      <div className="px-5 sm:px-6 py-2.5 bg-warm-ivory border-t border-soft-taupe flex items-center justify-between text-[11px] text-warm-stone">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-editorial-burgundy shrink-0" />
          <span>Click any stage (01–06) above to inspect its operational standards.</span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider hidden sm:inline text-warm-stone-dark">
          Cynestia Pipeline Engine
        </span>
      </div>
    </div>
  );
}
