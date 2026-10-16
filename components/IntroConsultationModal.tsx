'use client';

import { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { validateInquiryForm, InquiryFormData } from '@/lib/qualification';

interface IntroConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IntroConsultationModal({ isOpen, onClose }: IntroConsultationModalProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    website: '',
    teamSize: '11-30',
    primaryService: 'Managed IT & Cybersecurity',
    primaryChallenge: 'Referral plateau & inconsistent pipeline',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setErrors({});
    }, 350);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rich-charcoal/70 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="bg-warm-ivory border border-soft-taupe max-w-xl w-full p-7 sm:p-9 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 text-warm-stone hover:text-rich-charcoal transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 bg-editorial-burgundy/10 text-editorial-burgundy mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-rich-charcoal mb-2">
              Consultation Requested
            </h3>
            <p className="text-xs sm:text-sm text-warm-stone-dark max-w-sm mx-auto leading-relaxed mb-6">
              Thank you, <strong className="text-rich-charcoal">{formData.fullName}</strong>. We will review <strong className="text-rich-charcoal">{formData.companyName}</strong>’s profile and respond via email within one U.S. business day to arrange your 30-minute introductory call.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-soft-taupe">
              <span className="text-xs uppercase tracking-widest text-editorial-burgundy font-semibold block mb-1">
                Direct Inquiry
              </span>
              <h3 id="modal-title" className="text-2xl font-serif font-semibold text-rich-charcoal">
                Arrange an Introductory Consultation
              </h3>
              <p className="text-xs text-warm-stone-dark mt-1">
                Share a few details so we can evaluate your market and ensure a mutually productive discussion.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="David Vance"
                    className={`w-full bg-warm-ivory-light border px-3 py-2 text-xs text-rich-charcoal focus:outline-none ${
                      errors.fullName ? 'border-red-500' : 'border-soft-taupe focus:border-editorial-burgundy'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal block mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="david@apextechmsp.com"
                    className={`w-full bg-warm-ivory-light border px-3 py-2 text-xs text-rich-charcoal focus:outline-none ${
                      errors.workEmail ? 'border-red-500' : 'border-soft-taupe focus:border-editorial-burgundy'
                    }`}
                  />
                  {errors.workEmail && <p className="text-[11px] text-red-600 mt-1">{errors.workEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal block mb-1">
                    MSP Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Apex Technology Solutions"
                    className={`w-full bg-warm-ivory-light border px-3 py-2 text-xs text-rich-charcoal focus:outline-none ${
                      errors.companyName ? 'border-red-500' : 'border-soft-taupe focus:border-editorial-burgundy'
                    }`}
                  />
                  {errors.companyName && <p className="text-[11px] text-red-600 mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal block mb-1">
                    Team Size *
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full bg-warm-ivory-light border border-soft-taupe px-3 py-2 text-xs text-rich-charcoal focus:border-editorial-burgundy focus:outline-none"
                  >
                    <option value="1-10">1–10 employees</option>
                    <option value="11-30">11–30 employees</option>
                    <option value="31-50">31–50 employees</option>
                    <option value="51-100">51–100 employees</option>
                    <option value="100+">100+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal block mb-1">
                  Primary Customer Acquisition Challenge *
                </label>
                <select
                  value={formData.primaryChallenge}
                  onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                  className="w-full bg-warm-ivory-light border border-soft-taupe px-3 py-2 text-xs text-rich-charcoal focus:border-editorial-burgundy focus:outline-none"
                >
                  <option value="Referral plateau & inconsistent pipeline">
                    Referral plateau & inconsistent pipeline
                  </option>
                  <option value="Lack of time / internal prospecting bandwidth">
                    Lack of time / internal prospecting bandwidth
                  </option>
                  <option value="Difficulty reaching Owners and C-level decision-makers">
                    Difficulty reaching Owners and C-level decision-makers
                  </option>
                  <option value="Expanding into a new geographic territory or vertical">
                    Expanding into a new geographic territory or vertical
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover transition-colors flex items-center justify-center gap-2"
                >
                  <span>{submitting ? 'Submitting...' : 'Confirm Consultation Request'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-warm-stone text-center">
                All communications strictly confidential. No marketing spam.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
