'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check current active section
      const sectionIds = ['pipeline-engine', 'challenges', 'process', 'growth-services', 'client-fit', 'faq'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Pipeline Engine', href: '#pipeline-engine' },
    { label: 'Challenges', href: '#challenges' },
    { label: 'Process', href: '#process' },
    { label: 'Growth Services', href: '#growth-services' },
    { label: 'Client Fit', href: '#client-fit' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-ivory/95 backdrop-blur-md border-b border-soft-taupe py-4 shadow-[0_2px_12px_rgba(33,29,30,0.03)]'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Editorial reading progress line */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-editorial-burgundy transition-all duration-75 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link
          href="/"
          className="text-2xl font-serif tracking-tight text-rich-charcoal font-semibold hover:text-editorial-burgundy transition-colors whitespace-nowrap shrink-0"
        >
          Cynestia
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-warm-stone-dark">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                  isActive
                    ? 'text-rich-charcoal font-semibold after:w-full'
                    : 'hover:text-rich-charcoal after:w-0'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-editorial-burgundy hover:after:w-full after:transition-all after:duration-200`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover rounded-none transition-all duration-200 whitespace-nowrap shrink-0 shadow-sm hover:shadow"
          >
            Arrange Introduction
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-rich-charcoal hover:text-editorial-burgundy transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-warm-ivory border-b border-soft-taupe px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium text-rich-charcoal mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 border-b border-soft-taupe/40 hover:text-editorial-burgundy transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-warm-ivory bg-editorial-burgundy hover:bg-burgundy-hover transition-colors flex items-center justify-center gap-2"
          >
            <span>Arrange Introduction</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
