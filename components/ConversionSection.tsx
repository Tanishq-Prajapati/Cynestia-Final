'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Clock, ShieldCheck } from 'lucide-react';
import { validateInquiryForm, InquiryFormData } from '@/lib/qualification';
import { EditorialReveal } from './EditorialReveal';

export function ConversionSection() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setSubmitting(true);
    // Simulate swift local processing without broken network endpoints
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setErrors({});
    }, 400);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-rich-charcoal text-warm-ivory relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full px-6 grid grid-cols-12 gap-6">
          <div className="border-l border-warm-ivory h-full col-span-3" />
          <div className="border-l border-warm-ivory h-full col-span-3" />
          <div className="border-l border-warm-ivory h-full col-span-3" />
          <div className="border-l border-r border-warm-ivory h-full col-span-3" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Contact (5 cols) */}
          <div className="lg:col-span-5">
            <EditorialReveal>
              <span className="text-xs uppercase tracking-widest text-burgundy-light font-semibold block mb-4">
                Next Steps
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-warm-ivory leading-[1.16] tracking-tight mb-6">
                Arrange an introductory pipeline consultation.
              </h2>
              <p className="text-sm sm:text-base text-warm-stone-light leading-relaxed mb-8">
                We begin every relationship with an exploratory 30-minute conversation. We examine your current target market, seat-size preferences, service margins, and whether Pipeline Engine can sustainably support your growth goals.
              </p>

              <div className="space-y-4 pt-6 border-t border-rich-charcoal-muted">
                <div className="flex items-start gap-3 text-xs text-warm-stone-light">
                  <Clock className="w-4 h-4 text-editorial-burgundy shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-warm-ivory block font-medium">U.S. Time Zone Coverage</strong>
                    <span>Aligned to Eastern, Central, Mountain, and Pacific business hours.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-warm-stone-light">
                  <ShieldCheck className="w-4 h-4 text-editorial-burgundy shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-warm-ivory block font-medium">Strict Confidentiality</strong>
                    <span>Your existing client lists, service pricing, and commercial territory remain private.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-warm-stone-light">
                  <Mail className="w-4 h-4 text-editorial-burgundy shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-warm-ivory block font-medium">Direct Correspondence</strong>
                    <span className="font-mono text-warm-ivory">inquiries@cynestia.com</span>
                  </div>
                </div>
              </div>
            </EditorialReveal>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EditorialReveal delay={0.15}>
              <div className="bg-dark-surface border border-rich-charcoal-muted p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-12 h-12 bg-editorial-burgundy/20 border border-editorial-burgundy text-editorial-burgundy mx-auto flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-warm-ivory mb-3">
                  Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-warm-stone-light max-w-md mx-auto leading-relaxed mb-8">
                  Thank you, <strong className="text-warm-ivory">{formData.fullName}</strong>. We will review <strong className="text-warm-ivory">{formData.companyName}</strong>’s profile and respond within one U.S. business day to coordinate your introductory consultation.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      workEmail: '',
                      companyName: '',
                      website: '',
                      teamSize: '11-30',
                      primaryService: 'Managed IT & Cybersecurity',
                      primaryChallenge: 'Referral plateau & inconsistent pipeline',
                      notes: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-warm-ivory border border-rich-charcoal-muted hover:border-warm-ivory transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-warm-stone-light font-medium block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Vance"
                      className={`w-full bg-rich-charcoal border px-3.5 py-2.5 text-xs text-warm-ivory placeholder-warm-stone focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-400' : 'border-rich-charcoal-muted focus:border-editorial-burgundy'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-warm-stone-light font-medium block mb-1.5">
                      Commercial Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="david@apextechmsp.com"
                      className={`w-full bg-rich-charcoal border px-3.5 py-2.5 text-xs text-warm-ivory placeholder-warm-stone focus:outline-none transition-colors ${
                        errors.workEmail ? 'border-red-400' : 'border-rich-charcoal-muted focus:border-editorial-burgundy'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.workEmail}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-warm-stone-light font-medium block mb-1.5">
                      MSP / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Apex Technology Solutions"
                      className={`w-full bg-rich-charcoal border px-3.5 py-2.5 text-xs text-warm-ivory placeholder-warm-stone focus:outline-none transition-colors ${
                        errors.companyName ? 'border-red-400' : 'border-rich-charcoal-muted focus:border-editorial-burgundy'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-warm-stone-light font-medium block mb-1.5">
                      Website URL
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://apextechmsp.com"
                      className="w-full bg-rich-charcoal border border-rich-charcoal-muted px-3.5 py-2.5 text-xs text-warm-ivory placeholder-warm-stone focus:border-editorial-burgundy focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-warm-stone-light font-medium block mb-1.5">
                      Current Team Size *
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full bg-rich-charcoal border border-rich-charcoal-muted px-3.5 py-2.5 text-xs text-warm-ivory focus:border-editorial-burgundy focus:outline-none"
                    >
                      <option value="1-10">1–10 employees</option>
                      <option value="11-30">11–30 employees (Core ICP)</option>
                      <option value="31-50">31–50 employees (Core ICP)</option>
                      <option value="51-100">51–100 employees</option>
                      <option value="100+">100+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-warm-stone-light font-medium block mb-1.5">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.primaryService}
                      onChange={(e) => setFormData({ ...formData, primaryService: e.target.value })}
                      className="w-full bg-rich-charcoal border border-rich-charcoal-muted px-3.5 py-2.5 text-xs text-warm-ivory focus:border-editorial-burgundy focus:outline-none"
                    >
                      <option value="Managed IT & Cybersecurity">Managed IT & Cybersecurity</option>
                      <option value="Pure Managed Cybersecurity / MSSP">Pure Managed Cybersecurity / MSSP</option>
                      <option value="M365 & Cloud Infrastructure">M365 & Cloud Infrastructure</option>
                      <option value="Co-Managed IT Support">Co-Managed IT Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-warm-stone-light font-medium block mb-1.5">
                    Primary Customer Acquisition Bottleneck *
                  </label>
                  <select
                    value={formData.primaryChallenge}
                    onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                    className="w-full bg-rich-charcoal border border-rich-charcoal-muted px-3.5 py-2.5 text-xs text-warm-ivory focus:border-editorial-burgundy focus:outline-none"
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

                <div>
                  <label className="text-xs uppercase tracking-wider text-warm-stone-light font-medium block mb-1.5">
                    Optional Context or Specific Questions
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us briefly about your current MRR target or territory focus..."
                    className="w-full bg-rich-charcoal border border-rich-charcoal-muted px-3.5 py-2.5 text-xs text-warm-ivory placeholder-warm-stone focus:border-editorial-burgundy focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{submitting ? 'Processing...' : 'Request Introductory Consultation'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-warm-stone text-center leading-normal">
                  No automated spam. Your details are reviewed personally by our team to confirm ICP fit before we schedule a call.
                </p>
              </form>
            )}
              </div>
            </EditorialReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
