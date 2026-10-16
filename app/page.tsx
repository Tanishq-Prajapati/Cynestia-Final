'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ChallengesSection } from '@/components/ChallengesSection';
import { FlagshipSection } from '@/components/FlagshipSection';
import { ProcessSection } from '@/components/ProcessSection';
import { GrowthServicesSection } from '@/components/GrowthServicesSection';
import { WhyCynestiaSection } from '@/components/WhyCynestiaSection';
import { IdealFitSection } from '@/components/IdealFitSection';
import { FaqSection } from '@/components/FaqSection';
import { ConversionSection } from '@/components/ConversionSection';
import { Footer } from '@/components/Footer';
import { IntroConsultationModal } from '@/components/IntroConsultationModal';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';

export default function Home() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-warm-ivory text-rich-charcoal flex flex-col selection:bg-editorial-burgundy selection:text-warm-ivory">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* Main Single-Page Narrative */}
      <main className="flex-grow">
        <Hero onOpenConsultation={() => setConsultationModalOpen(true)} />
        <ChallengesSection />
        <FlagshipSection onOpenConsultation={() => setConsultationModalOpen(true)} />
        <ProcessSection />
        <GrowthServicesSection />
        <WhyCynestiaSection />
        <IdealFitSection onOpenConsultation={() => setConsultationModalOpen(true)} />
        <FaqSection />
        <ConversionSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => setConsultationModalOpen(true)}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <IntroConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
