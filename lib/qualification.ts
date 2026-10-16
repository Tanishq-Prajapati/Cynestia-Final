export interface InquiryFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  website?: string;
  teamSize: string;
  primaryService: string;
  primaryChallenge: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface MspProfile {
  teamSize: '1-10' | '11-30' | '31-50' | '51-100' | '100+';
  recurringServices: string[];
  onboardingCapacity: 'none' | '1-2' | '3-5' | '6+';
  targetDealSize: '<$1k' | '$1k-$3k' | '$3k-$7k' | '$7k+';
  dedicatedSalesLead: boolean;
}

export interface FitAssessmentResult {
  fitTier: 'Optimal Fit' | 'Selective Fit' | 'Not Recommended Currently';
  score: number; // 0 to 100
  headline: string;
  reasons: string[];
  recommendation: string;
}

/**
 * Validates the introductory consultation / pipeline inquiry form.
 */
export function validateInquiryForm(data: Partial<InquiryFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please provide your full name.';
  }

  if (!data.workEmail || data.workEmail.trim().length === 0) {
    errors.workEmail = 'Please provide your business email.';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.workEmail.trim())) {
      errors.workEmail = 'Please enter a valid email address.';
    } else {
      const domain = data.workEmail.trim().split('@')[1]?.toLowerCase() || '';
      const commonConsumer = ['gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com', 'icloud.com'];
      if (commonConsumer.includes(domain)) {
        errors.workEmail = 'Please provide your commercial business email rather than personal webmail.';
      }
    }
  }

  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = 'Please provide your MSP company name.';
  }

  if (!data.teamSize || data.teamSize === '') {
    errors.teamSize = 'Please select your current team size.';
  }

  if (!data.primaryChallenge || data.primaryChallenge === '') {
    errors.primaryChallenge = 'Please select your primary customer acquisition challenge.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Assesses client fit objectively based on established ICP criteria.
 */
export function assessMspFit(profile: MspProfile): FitAssessmentResult {
  let score = 0;
  const reasons: string[] = [];

  // 1. Team Size (Primary ICP is 11-50, secondary 51-100)
  if (profile.teamSize === '11-30' || profile.teamSize === '31-50') {
    score += 35;
    reasons.push('Company size matches Cynestia’s primary ICP (11–50 employees) with established operational foundation.');
  } else if (profile.teamSize === '51-100') {
    score += 30;
    reasons.push('Established mid-sized MSP with dedicated delivery teams and expansion bandwidth.');
  } else if (profile.teamSize === '100+') {
    score += 25;
    reasons.push('Large organization; engagements typically focus on regional accounts or specific service lines.');
  } else {
    // 1-10
    score += 15;
    reasons.push('Early-stage team size; requires founder-led sales bandwidth to convert pipeline opportunities.');
  }

  // 2. High-value Recurring Offerings (Cybersecurity & Managed Services)
  const highValueServices = ['Managed Cybersecurity / MDR', 'Managed IT Services', 'M365 Security & Compliance', 'Cloud Infrastructure'];
  const matchingServices = profile.recurringServices.filter((s) => highValueServices.includes(s));
  
  if (matchingServices.length >= 2) {
    score += 30;
    reasons.push('Strong portfolio of high-retention managed IT and cybersecurity recurring services.');
  } else if (matchingServices.length === 1) {
    score += 20;
    reasons.push('Includes core managed services offering with potential for recurring contract expansion.');
  } else {
    score += 5;
    reasons.push('Limited recurring services portfolio; outbound prospecting yields best ROI on recurring MRR.');
  }

  // 3. Onboarding Capacity
  if (profile.onboardingCapacity === '1-2' || profile.onboardingCapacity === '3-5') {
    score += 20;
    reasons.push('Healthy onboarding bandwidth to absorb 1 to 5 new commercial clients per quarter.');
  } else if (profile.onboardingCapacity === '6+') {
    score += 20;
    reasons.push('Substantial onboarding capacity ready for aggressive growth.');
  } else {
    score += 0;
    reasons.push('Current delivery capacity constrained; pipeline generation requires ability to onboard new accounts.');
  }

  // 4. Target Deal Size
  if (profile.targetDealSize === '$3k-$7k' || profile.targetDealSize === '$7k+') {
    score += 15;
    reasons.push('Healthy contract values ($3,000+ MRR) allow for strong return on structured outbound investment.');
  } else if (profile.targetDealSize === '$1k-$3k') {
    score += 10;
    reasons.push('Typical small-business managed services contract size ($1,000–$3,000 MRR).');
  } else {
    score += 5;
    reasons.push('Low contract value may make dedicated outbound prospecting cost-intensive relative to margin.');
  }

  let fitTier: FitAssessmentResult['fitTier'];
  let headline: string;
  let recommendation: string;

  if (score >= 70) {
    fitTier = 'Optimal Fit';
    headline = 'Strong Strategic Alignment for Pipeline Engine';
    recommendation =
      'Your business possesses the service depth, operational bandwidth, and commercial structure that benefits most directly from Cynestia’s targeted outbound methodology.';
  } else if (score >= 45) {
    fitTier = 'Selective Fit';
    headline = 'Viable Candidate with Specific Considerations';
    recommendation =
      'There is clear potential for collaboration, but we would first review onboarding bandwidth, commercial pricing, or target market boundaries to ensure positive economics.';
  } else {
    fitTier = 'Not Recommended Currently';
    headline = 'Early Stage or Constrained Delivery Fit';
    recommendation =
      'Because dedicated pipeline generation requires active onboarding bandwidth and strong contract economics, it may be more prudent to consolidate your recurring service packaging before initiating outbound outreach.';
  }

  return {
    fitTier,
    score,
    headline,
    reasons,
    recommendation,
  };
}

export interface PipelineStageInfo {
  number: string;
  title: string;
  timeline: string;
  objective: string;
  deliverables: string[];
  transparencyNote: string;
}

export function getPipelineStages(): PipelineStageInfo[] {
  return [
    {
      number: '01',
      title: 'Target Market Refinement',
      timeline: 'Days 1–10',
      objective: 'Define the narrow universe of commercial accounts that value managed IT & cybersecurity.',
      deliverables: [
        'Ideal Customer Profile definition (employee range, revenue, industry verticals)',
        'Technological disqualifiers (in-house IT departments, unsupported legacy environments)',
        'Commercial exclusion lists (existing clients, active competitors, recent touches)',
      ],
      transparencyNote: 'Precision targeting eliminates wasted outreach to businesses unable to afford recurring services.',
    },
    {
      number: '02',
      title: 'Decision-Maker Intelligence',
      timeline: 'Days 8–18',
      objective: 'Identify verified business executives who hold ultimate budget authority for risk and technology.',
      deliverables: [
        'Direct identification of Owners, CEOs, Presidents, Managing Partners, and CFOs',
        'Verification of contact coordinates via multi-source validation',
        'Account intelligence dossiers noting business size, industry compliance mandates, and public changes',
      ],
      transparencyNote: 'We bypass internal IT gatekeepers to speak with the commercial leaders bearing business risk.',
    },
    {
      number: '03',
      title: 'Disciplined Outbound Outreach',
      timeline: 'Ongoing from Day 20',
      objective: 'Initiate relevant, respectful, and value-grounded multi-channel commercial conversations.',
      deliverables: [
        'Bespoke messaging tailored to executive business risks (cyber liability, compliance, downtime)',
        'Multi-touch sequence cadence designed for executive schedules',
        'Technical domain and inbox health management to ensure authentic inbox placement',
      ],
      transparencyNote: 'Every message is calibrated to represent your MSP with enterprise-level professionalism.',
    },
    {
      number: '04',
      title: 'Response Qualification & Handover',
      timeline: 'Ongoing',
      objective: 'Filter out tire-kickers and coordinate qualified discovery conversations for your team.',
      deliverables: [
        'Rigorous pre-qualification checking seat count, contract status, and interest',
        'Briefing documents prepared for every scheduled conversation',
        'Seamless calendar coordination directly into your leadership team’s availability',
      ],
      transparencyNote: 'You only attend conversations where genuine commercial interest and criteria alignment have been verified.',
    },
  ];
}
