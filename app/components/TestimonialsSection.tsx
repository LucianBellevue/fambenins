import { HiStar } from 'react-icons/hi';
import Link from 'next/link';
import { getFeaturedTestimonials } from '../data/testimonials';

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  maxTestimonials?: number;
  backgroundColor?: 'white' | 'gray';
}

export default function TestimonialsSection({
  title = 'What Our Clients Say',
  subtitle = 'Don\'t just take our word for it—hear from the families we\'ve helped',
  showCTA = true,
  maxTestimonials = 3,
  backgroundColor = 'gray',
}: TestimonialsSectionProps) {
  const testimonials = getFeaturedTestimonials().slice(0, maxTestimonials);

  const getCoverageLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      health: 'Health Insurance',
      life: 'Life Insurance',
      group: 'Group Health',
      ichra: 'ICHRA',
      multiple: 'Multiple Coverage',
    };
    return labels[type] || type;
  };

  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-navy">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="mt-2">
                  <span className="inline-block bg-green text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {getCoverageLabel(testimonial.coverageType)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Read More Reviews
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
