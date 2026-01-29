import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { HiStar } from 'react-icons/hi';
import { testimonials, getFeaturedTestimonials } from '../data/testimonials';

export const metadata = {
  title: 'Client Testimonials & Reviews - 5-Star Insurance Service | Family Benefits Center',
  description: 'Read what our clients say about Family Benefits Center. 500+ happy clients with 5-star ratings. Discover how we\'ve helped families and businesses find the perfect insurance coverage.',
  keywords: [
    'insurance reviews',
    'insurance testimonials',
    'client reviews',
    'insurance agent reviews',
    'customer testimonials',
    '5-star insurance',
  ],
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials & Reviews - 5-Star Insurance Service',
    description: '500+ happy clients share their experiences with Family Benefits Center.',
    url: '/testimonials',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  const featuredTestimonials = getFeaturedTestimonials();
  const allTestimonials = testimonials;

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
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb path="/testimonials" variant="light" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <HiStar className="w-5 h-5" />
              <span className="text-sm font-semibold">Trusted by Hundreds of Families</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Don&apos;t just take our word for it—hear from the families and businesses we&apos;ve helped
              protect what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green mb-2">5.0</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green mb-2">2022</div>
              <div className="text-gray-600">Serving Since</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Featured Client Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real people who found the perfect coverage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-green"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
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
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              More Client Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what others are saying about their experience with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {allTestimonials
              .filter(t => !t.featured)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div>
                      <div className="font-bold text-navy text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">{testimonial.location}</div>
                    </div>
                    <div>
                      <span className="inline-block bg-green text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {getCoverageLabel(testimonial.coverageType)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let us help you find the perfect insurance coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:4632633583"
              className="bg-white text-navy px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Call (463) 263-3583
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
