import type { Metadata, Viewport } from 'next';
import { Newsreader, Inter } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#F7F3ED',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Cynestia | B2B Pipeline Generation for U.S. Managed Service Providers',
  description:
    'Cynestia builds and manages dedicated B2B outbound prospecting engines and sales workflows for established U.S. Managed Service Providers (MSPs).',
  metadataBase: new URL('https://cynestia.com'),
  keywords: [
    'MSP pipeline generation',
    'MSP sales development',
    'B2B prospecting for MSPs',
    'Managed Service Provider lead generation',
    'Managed IT services marketing',
    'Cybersecurity sales development',
    'Pipeline Engine',
  ],
  authors: [{ name: 'Cynestia' }],
  openGraph: {
    title: 'Cynestia | B2B Pipeline Generation for U.S. Managed Service Providers',
    description:
      'Targeted B2B prospecting and structured sales pipeline generation for established Managed Service Providers and MSSPs.',
    type: 'website',
    url: 'https://cynestia.com',
    siteName: 'Cynestia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cynestia | B2B Pipeline Generation for U.S. MSPs',
    description:
      'Targeted B2B prospecting and structured sales pipeline generation for established Managed Service Providers.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-warm-ivory text-rich-charcoal font-sans antialiased selection:bg-editorial-burgundy selection:text-warm-ivory">
        {children}
      </body>
    </html>
  );
}
