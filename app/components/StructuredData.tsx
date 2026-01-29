'use client';

import { SITE_URL } from '@/lib/site';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'Family Benefits Center',
    description: 'Professional health and life insurance services including ICHRA solutions for small businesses. Trusted insurance partner protecting families and businesses.',
    url: SITE_URL,
    logo: `${SITE_URL}/famben_icon.png`,
    image: `${SITE_URL}/famben_banner.png`,
    telephone: '+14632633583',
    email: 'services@familybenefitscenter.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'IN',
    },
    areaServed: 'US',
    sameAs: [
      'https://www.linkedin.com/company/family-benefits-center',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Insurance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Health Insurance',
            description: 'Individual and family health insurance plans including ACA marketplace coverage',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Life Insurance',
            description: 'Term life, whole life, and universal life insurance policies',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Group Health Insurance',
            description: 'Comprehensive group health insurance solutions for businesses including ICHRA',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
