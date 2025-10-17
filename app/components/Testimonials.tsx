import { getFeaturedTestimonials } from '../data/testimonials';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = getFeaturedTestimonials().slice(0, 3);

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from families and businesses we have helped
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>
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

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
