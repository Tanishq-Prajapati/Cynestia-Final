'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeroPipelineIllustration } from './HeroPipelineIllustration';

interface HeroProps {
  onOpenConsultation: () => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProcess = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#pipeline-engine');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-soft-taupe">
      {/* Subtle editorial architectural gridlines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 grid grid-cols-12 gap-6">
          <div className="border-l border-soft-taupe/60 h-full col-span-3 hidden md:block" />
          <div className="border-l border-soft-taupe/60 h-full col-span-3 hidden md:block" />
          <div className="border-l border-soft-taupe/60 h-full col-span-3 hidden md:block" />
          <div className="border-l border-r border-soft-taupe/60 h-full col-span-3 hidden md:block" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top editorial kicker */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-warm-stone font-medium mb-6">
          <span>Specialized B2B Pipeline Agency</span>
          <span aria-hidden="true" className="text-soft-taupe">/</span>
          <span className="text-editorial-burgundy font-semibold">Exclusively Serving U.S. MSPs</span>
        </div>

        {/* Hero Narrative Split: Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          {/* Main Headline & Commercial Proposition (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-medium text-rich-charcoal leading-[1.12] tracking-tight mb-8 balance">
              Structured outbound prospecting for established Managed Service Providers.
            </h1>

            <p className="text-lg sm:text-xl text-warm-stone-dark leading-relaxed font-normal mb-10 max-w-2xl">
              Cynestia builds and manages dedicated B2B pipeline-generation systems for U.S. MSPs. We identify high-fit commercial decision-makers, execute disciplined multi-touch outreach, and coordinate qualified sales conversations—so your team can grow recurring revenue beyond word-of-mouth referrals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover transition-colors flex items-center justify-center gap-3 shadow-sm hover:shadow"
              >
                <span>Arrange an Introductory Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#pipeline-engine"
                onClick={handleScrollToProcess}
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-rich-charcoal border border-soft-taupe hover:border-rich-charcoal bg-warm-ivory transition-colors text-center"
              >
                Explore the Methodology
              </a>
            </div>

            {/* Credibility statement without false claims */}
            <div className="mt-8 pt-8 border-t border-soft-taupe/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-warm-stone">
              <span>Primary Focus: 11–50 Employee U.S. MSPs</span>
              <span aria-hidden="true">·</span>
              <span>Managed IT, Cybersecurity & M365 Services</span>
              <span aria-hidden="true">·</span>
              <span>Outcome-Oriented Engagement</span>
            </div>
          </motion.div>

          {/* Hero Custom Process Visualization (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5"
          >
            <HeroPipelineIllustration />
          </motion.div>
        </div>

        {/* Structural Anchors Strip (No fake metrics, grounded factual focus) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-soft-taupe"
        >
          <div className="p-6 bg-warm-ivory-light border border-soft-taupe">
            <span className="text-xs uppercase tracking-wider text-warm-stone block mb-2 font-medium">
              Target Geography
            </span>
            <h3 className="text-lg font-serif font-semibold text-rich-charcoal mb-2">
              United States MSP Markets
            </h3>
            <p className="text-xs text-warm-stone-dark leading-relaxed">
              Targeting regional and metropolitan territories where small-to-midsized businesses depend on outsourced IT and cybersecurity governance.
            </p>
          </div>

          <div className="p-6 bg-warm-ivory-light border border-soft-taupe">
            <span className="text-xs uppercase tracking-wider text-warm-stone block mb-2 font-medium">
              Commercial Delivery
            </span>
            <h3 className="text-lg font-serif font-semibold text-rich-charcoal mb-2">
              Engineered Outbound Operations
            </h3>
            <p className="text-xs text-warm-stone-dark leading-relaxed">
              Combining technical data pipelines, domain research, and disciplined follow-up to initiate genuine commercial discovery conversations.
            </p>
          </div>

          <div className="p-6 bg-warm-ivory-light border border-soft-taupe">
            <span className="text-xs uppercase tracking-wider text-warm-stone block mb-2 font-medium">
              Specialized Service
            </span>
            <h3 className="text-lg font-serif font-semibold text-rich-charcoal mb-2">
              Pipeline Engine Flagship
            </h3>
            <p className="text-xs text-warm-stone-dark leading-relaxed">
              An end-to-end customer acquisition workflow covering market definition, research, multi-touch outreach, and conversation qualification.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
