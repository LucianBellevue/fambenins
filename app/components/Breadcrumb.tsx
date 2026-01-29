import Link from 'next/link';
import { getBreadcrumbs, getBreadcrumbListSchema } from '@/lib/breadcrumbs';
import { HiChevronRight } from 'react-icons/hi';

type BreadcrumbProps = {
  /** Current page path (e.g. '/about' or '/'). */
  path: string;
  /** Optional: use light text for dark hero backgrounds. */
  variant?: 'default' | 'light';
};

/**
 * Accessible breadcrumb nav + BreadcrumbList JSON-LD for Google rich results.
 * Best practices: semantic nav/ol/li, aria-label, canonical URLs in schema.
 */
export default function Breadcrumb({ path, variant = 'default' }: BreadcrumbProps) {
  const items = getBreadcrumbs(path);
  const schema = getBreadcrumbListSchema(path);

  const isLight = variant === 'light';
  const linkClass = isLight
    ? 'text-gray-300 hover:text-white transition-colors'
    : 'text-gray-600 hover:text-navy transition-colors';
  const currentClass = isLight ? 'text-white font-medium' : 'text-navy font-medium';
  const separatorClass = isLight ? 'text-gray-400' : 'text-gray-400';
  const navClass = isLight
    ? 'bg-gradient-to-br from-navy via-navy to-[#2a4d6f] py-3'
    : 'border-b border-gray-200 bg-gray-50/80 py-3';

  return (
    <>
      <nav aria-label="Breadcrumb" className={navClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.href} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <HiChevronRight
                      className={`w-4 h-4 flex-shrink-0 ${separatorClass}`}
                      aria-hidden
                    />
                  )}
                  {isLast ? (
                    <span className={currentClass} aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
