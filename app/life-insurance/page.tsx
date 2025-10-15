import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Life Insurance Plans | Family Benefits Center',
  description: 'Protect your loved ones with comprehensive life insurance. Term life, whole life, and universal life options available.',
};

export default function LifeInsurancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Financial Protection for Your Family</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Life Insurance That Secures Your Family&apos;s Future
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Ensure your loved ones are financially protected. Compare term life, whole life, and universal life insurance options to find the right coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all duration-200 shadow-lg text-center"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:5551234567"
                className="bg-white bg-opacity-10 backdrop-blur-sm text-green border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-20 transition-all duration-200 text-center"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Life Insurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Types of Life Insurance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the life insurance policy that best fits your needs and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Term Life Insurance */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200 hover:border-green hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Term Life Insurance</h3>
              <p className="text-gray-600 mb-6">
                Affordable coverage for a specific period (10, 20, or 30 years). Ideal for temporary needs like mortgage protection or income replacement.
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-green mb-2">Most Popular</div>
                <p className="text-sm text-gray-600">90% of our clients choose term life</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Lowest premiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fixed premiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Convertible options</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Simple and straightforward</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-green text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-light transition-colors"
              >
                Get Term Life Quote
              </Link>
            </div>

            {/* Whole Life Insurance */}
            <div className="bg-gradient-to-br from-navy to-[#2a4d6f] text-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green text-navy px-4 py-1 text-sm font-bold rounded-bl-lg">
                RECOMMENDED
              </div>
              <div className="w-16 h-16 bg-green bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Whole Life Insurance</h3>
              <p className="text-gray-200 mb-6">
                Permanent coverage that lasts your entire life with a cash value component that grows over time. Combines protection with savings.
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-green mb-2">Lifetime Coverage</div>
                <p className="text-sm text-gray-300">Protection plus cash value growth</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-200">Lifetime protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-200">Builds cash value</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-200">Borrow against policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-200">Tax-deferred growth</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-green text-navy text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-light transition-colors"
              >
                Get Whole Life Quote
              </Link>
            </div>

            {/* Universal Life Insurance */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200 hover:border-green hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Universal Life Insurance</h3>
              <p className="text-gray-600 mb-6">
                Flexible permanent coverage with adjustable premiums and death benefits. Offers investment options and cash value accumulation.
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-green mb-2">Most Flexible</div>
                <p className="text-sm text-gray-600">Adjust coverage as needs change</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Flexible premiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Adjustable death benefit</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Cash value growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Investment options</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-green text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-light transition-colors"
              >
                Get Universal Life Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Calculator */}
      <section className="py-20 bg-gradient-to-br from-green to-green-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            How Much Life Insurance Do You Need?
          </h2>
          <p className="text-xl mb-8 text-navy">
            A general rule: 10-12 times your annual income
          </p>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-navy mb-2">$50K</div>
                <div className="text-sm text-navy">Annual Income</div>
                <div className="text-2xl text-navy font-bold mt-2">= $500K-$600K</div>
                <div className="text-sm text-navy">Recommended Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">$75K</div>
                <div className="text-sm text-navy">Annual Income</div>
                <div className="text-2xl text-navy font-bold mt-2">= $750K-$900K</div>
                <div className="text-sm text-navy">Recommended Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">$100K</div>
                <div className="text-sm text-navy">Annual Income</div>
                <div className="text-2xl text-navy font-bold mt-2">= $1M-$1.2M</div>
                <div className="text-sm text-navy">Recommended Coverage</div>
              </div>
            </div>
          </div>
          <p className="text-navy mb-6">
            Consider additional factors: mortgage, debts, college funds, final expenses
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-200 shadow-lg text-lg"
          >
            Get Personalized Calculation
          </Link>
        </div>
      </section>

      {/* Why Life Insurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Why Life Insurance Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Protect your family from financial hardship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏠', title: 'Mortgage Protection', desc: 'Keep your family in their home' },
              { icon: '💰', title: 'Income Replacement', desc: 'Replace lost income for years' },
              { icon: '🎓', title: 'Education Funding', desc: 'Secure college tuition costs' },
              { icon: '⚰️', title: 'Final Expenses', desc: 'Cover funeral and burial costs' },
              { icon: '💳', title: 'Debt Coverage', desc: 'Pay off outstanding debts' },
              { icon: '👨‍👩‍👧‍👦', title: 'Family Security', desc: 'Maintain quality of life' },
              { icon: '🏥', title: 'Medical Bills', desc: 'Cover healthcare expenses' },
              { icon: '💼', title: 'Business Protection', desc: 'Protect business interests' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Simple Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get approved in as little as 24 hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Get a Quote', desc: 'Answer a few questions about your health and lifestyle', time: '5 minutes' },
              { step: '2', title: 'Medical Review', desc: 'Quick medical questionnaire or exam (if required)', time: '1-3 days' },
              { step: '3', title: 'Get Approved', desc: 'Receive your policy and start coverage immediately', time: '24-48 hours' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="inline-block bg-green text-white bg-opacity-10 px-3 py-1 rounded-full text-sm font-semibold">
                  {item.time}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-green text-white px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all duration-200 shadow-lg text-lg"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
