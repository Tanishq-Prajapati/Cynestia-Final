'use client';

import { X, Shield } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rich-charcoal/70 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="bg-warm-ivory border border-soft-taupe max-w-2xl w-full p-8 sm:p-10 shadow-2xl relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close privacy notice"
          className="absolute top-6 right-6 p-2 text-warm-stone hover:text-rich-charcoal transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-editorial-burgundy font-semibold mb-2">
          <Shield className="w-4 h-4" />
          <span>Operational Governance</span>
        </div>

        <h3 id="privacy-title" className="text-2xl font-serif font-semibold text-rich-charcoal mb-4">
          Data Handling & Privacy Notice
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-warm-stone-dark leading-relaxed font-normal">
          <p>
            <strong>Effective Date:</strong> October 2026
          </p>

          <h4 className="text-sm font-serif font-semibold text-rich-charcoal pt-2">
            1. Scope of Operations
          </h4>
          <p>
            Cynestia operates as a specialized B2B pipeline-generation and sales-automation agency serving Managed Service Providers in the United States. We respect the privacy of our prospective clients and the commercial businesses we contact on behalf of our partners.
          </p>

          <h4 className="text-sm font-serif font-semibold text-rich-charcoal pt-2">
            2. Website Inquiries
          </h4>
          <p>
            Information submitted through our website forms (such as your name, corporate email address, MSP company name, and team size) is collected solely to evaluate commercial fit and coordinate introductory discussions. We do not sell, rent, or trade your contact information with external marketing brokers.
          </p>

          <h4 className="text-sm font-serif font-semibold text-rich-charcoal pt-2">
            3. B2B Prospecting Standards
          </h4>
          <p>
            In conducting outbound B2B research for our clients, Cynestia utilizes publicly available corporate registries, professional directories, and verified business coordinates. We conduct outreach strictly to corporate email addresses concerning commercial IT infrastructure and security. All outbound communications include clear opt-out mechanisms.
          </p>

          <h4 className="text-sm font-serif font-semibold text-rich-charcoal pt-2">
            4. Client Data Confidentiality
          </h4>
          <p>
            Any internal client materials shared with Cynestia—such as current customer lists, territory exclusions, pricing matrices, and sales call recordings—are held in strict professional confidence under reciprocal non-disclosure terms.
          </p>

          <h4 className="text-sm font-serif font-semibold text-rich-charcoal pt-2">
            5. Inquiries & Removal Requests
          </h4>
          <p>
            If you wish to update, review, or request the deletion of your business contact information from our active records, please direct your request to{' '}
            <strong className="text-rich-charcoal font-mono">privacy@cynestia.com</strong>.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-soft-taupe flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
