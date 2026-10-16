'use client';

import Link from 'next/link';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenConsultation: () => void;
}

export function Footer({ onOpenPrivacy, onOpenConsultation }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-ivory border-t border-soft-taupe py-16 text-xs text-warm-stone-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-soft-taupe">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-2xl font-serif font-semibold text-rich-charcoal tracking-tight block mb-4 hover:text-editorial-burgundy transition-colors"
            >
              Cynestia
            </Link>
            <p className="text-xs text-warm-stone-dark max-w-sm leading-relaxed mb-6">
              Specialized B2B pipeline-generation and sales-automation agency dedicated to established Managed Service Providers in the United States.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-warm-stone">
              <span>Domain:</span>
              <span className="text-rich-charcoal font-medium">cynestia.com</span>
              <span aria-hidden="true">·</span>
              <span className="text-rich-charcoal font-medium">inquiries@cynestia.com</span>
            </div>
          </div>

          {/* Navigation Mirror (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-wider text-rich-charcoal font-semibold block mb-4">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="#pipeline-engine"
                onClick={(e) => handleNavClick(e, '#pipeline-engine')}
                className="hover:text-editorial-burgundy transition-colors py-1"
              >
                Pipeline Engine
              </a>
              <a
                href="#challenges"
                onClick={(e) => handleNavClick(e, '#challenges')}
                className="hover:text-editorial-burgundy transition-colors py-1"
              >
                MSP Challenges
              </a>
              <a
                href="#process"
                onClick={(e) => handleNavClick(e, '#process')}
                className="hover:text-editorial-burgundy transition-colors py-1"
              >
                Methodology
              </a>
              <a
                href="#growth-services"
                onClick={(e) => handleNavClick(e, '#growth-services')}
                className="hover:text-editorial-burgundy transition-colors py-1"
              >
                Growth Services
              </a>
              <a
                href="#client-fit"
                onClick={(e) => handleNavClick(e, '#client-fit')}
                className="hover:text-editorial-burgundy transition-colors py-1"
              >
                Client Fit
              </a>
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, '#faq')}
                className="hover:text-editorial-burgundy transition-colors py-1"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Service Delivery & Inquiry (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-wider text-rich-charcoal font-semibold block mb-4">
              Engagement
            </span>
            <p className="text-xs text-warm-stone-dark leading-relaxed mb-4">
              U.S. client delivery supported across Eastern, Central, Mountain, and Pacific business hours.
            </p>
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover transition-colors"
            >
              Discuss Pipeline
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-stone">
          <p>© {new Date().getFullYear()} Cynestia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-rich-charcoal transition-colors underline-offset-4 hover:underline"
            >
              Privacy & Data Governance
            </button>
            <span aria-hidden="true">·</span>
            <span>U.S. Managed Service Providers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
