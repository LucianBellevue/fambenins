import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/** All sitemap URLs are canonical https (no www). Every public app route is listed. */
const IMAGES = {
  banner: `${SITE_URL}/famben_banner.png`,
  icon: `${SITE_URL}/famben_icon.png`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1,
      images: [IMAGES.banner, IMAGES.icon],
    },
    {
      url: `${SITE_URL}/health-insurance`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [IMAGES.banner],
    },
    {
      url: `${SITE_URL}/life-insurance`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [IMAGES.banner],
    },
    {
      url: `${SITE_URL}/group-health`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [IMAGES.banner],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [IMAGES.banner],
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [IMAGES.banner],
    },
    {
      url: `${SITE_URL}/testimonials`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.7,
      images: [IMAGES.banner],
    },
    {
      url: `${SITE_URL}/careers`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
      images: [IMAGES.banner],
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/accessibility`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
