import { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Family Benefits Center',
  description: 'Family Benefits Center is committed to digital accessibility for all users. Learn about our accessibility features, WCAG compliance, and how we ensure equal access to insurance information.',
  keywords: [
    'accessibility statement',
    'WCAG compliance',
    'digital accessibility',
    'web accessibility',
    'accessible insurance website',
  ],
  alternates: {
    canonical: '/accessibility',
  },
  openGraph: {
    title: 'Accessibility Statement | Family Benefits Center',
    description: 'Our commitment to digital accessibility and ensuring equal access for all users.',
    url: `${SITE_URL}/accessibility`,
    type: 'website',
  },
};
