import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/site';

/**
 * Image sitemap for SEO — lists key images with canonical https URLs (no www).
 * Serves at /sitemap-images. Referenced in robots.txt.
 */
const IMAGES = [
  { url: `${SITE_URL}/famben_banner.png`, title: 'Family Benefits Center - Your Trusted Insurance Partner', caption: 'Family Benefits Center banner' },
  { url: `${SITE_URL}/famben_icon.png`, title: 'Family Benefits Center logo', caption: 'Family Benefits Center icon' },
  { url: `${SITE_URL}/apple-touch-icon.png`, title: 'Family Benefits Center', caption: 'Apple touch icon' },
  { url: `${SITE_URL}/android-chrome-192x192.png`, title: 'Family Benefits Center', caption: 'Android chrome icon 192' },
  { url: `${SITE_URL}/android-chrome-512x512.png`, title: 'Family Benefits Center', caption: 'Android chrome icon 512' },
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const imageTags = IMAGES.map(
    (img) =>
      `    <image:image>
      <image:loc>${escapeXml(img.url)}</image:loc>
      ${img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : ''}
      ${img.caption ? `<image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
    </image:image>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL}/</loc>
${imageTags}
  </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
