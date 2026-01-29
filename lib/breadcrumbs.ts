import { SITE_URL } from './site';

/**
 * Breadcrumb item for visible trail and BreadcrumbList JSON-LD.
 * href is the path (e.g. '/' or '/about'); use SITE_URL + href for absolute URLs in schema.
 */
export type BreadcrumbItem = {
  label: string;
  href: string;
};

/**
 * Path -> breadcrumb trail. Used for nav and Google BreadcrumbList.
 * Home is first; last item is current page (canonical URL in schema).
 */
const BREADCRUMB_TRAILS: Record<string, BreadcrumbItem[]> = {
  '/': [{ label: 'Home', href: '/' }],
  '/about': [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
  ],
  '/accessibility': [
    { label: 'Home', href: '/' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
  '/careers': [
    { label: 'Home', href: '/' },
    { label: 'Careers', href: '/careers' },
  ],
  '/contact': [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ],
  '/group-health': [
    { label: 'Home', href: '/' },
    { label: 'Group Health Insurance', href: '/group-health' },
  ],
  '/health-insurance': [
    { label: 'Home', href: '/' },
    { label: 'Health Insurance', href: '/health-insurance' },
  ],
  '/life-insurance': [
    { label: 'Home', href: '/' },
    { label: 'Life Insurance', href: '/life-insurance' },
  ],
  '/privacy': [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  '/terms': [
    { label: 'Home', href: '/' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  '/testimonials': [
    { label: 'Home', href: '/' },
    { label: 'Testimonials', href: '/testimonials' },
  ],
};

/**
 * Returns breadcrumb items for a path. Normalizes path (no trailing slash).
 * Falls back to home if path not in config.
 */
export function getBreadcrumbs(path: string): BreadcrumbItem[] {
  const normalized = path === '' || path === '/' ? '/' : path.replace(/\/$/, '');
  return BREADCRUMB_TRAILS[normalized] ?? BREADCRUMB_TRAILS['/'];
}

/**
 * Builds BreadcrumbList JSON-LD for Google (canonical https URLs, no www).
 */
export function getBreadcrumbListSchema(path: string): object {
  const items = getBreadcrumbs(path);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href === '/' ? '' : item.href}`,
    })),
  };
}
