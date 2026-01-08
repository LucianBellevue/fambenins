import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Health Insurance Plans - ACA Marketplace & Individual Coverage | Family Benefits Center',
  description: 'Comprehensive health insurance plans for individuals and families. ACA marketplace plans, short-term coverage, family plans, and subsidized options. Get free quotes from licensed agents.',
  keywords: [
    'health insurance',
    'ACA marketplace',
    'individual health insurance',
    'family health insurance',
    'short-term health insurance',
    'affordable care act',
    'health insurance quotes',
    'medical insurance',
  ],
  alternates: {
    canonical: '/health-insurance',
  },
  openGraph: {
    title: 'Health Insurance Plans - ACA Marketplace & Individual Coverage',
    description: 'Comprehensive health insurance plans for individuals and families with free quotes from licensed agents.',
    url: '/health-insurance',
    type: 'website',
  },
};

export default function HealthInsurancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Comprehensive Health Coverage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Health Insurance That Protects Your Family
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Find affordable health insurance plans tailored to your needs. From ACA marketplace plans to short-term coverage, we help you navigate your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all duration-200 shadow-lg text-center"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:4632633583"
                className="bg-white bg-opacity-10 backdrop-blur-sm text-green border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-20 transition-all duration-200 text-center"
              >
                Call (463) 263-3583
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Health Insurance Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a variety of health insurance plans to meet your unique needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ACA Marketplace Plans */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">ACA Marketplace Plans</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive coverage with essential health benefits. May qualify for subsidies to lower your monthly premium.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Bronze, Silver, Gold, Platinum tiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Preventive care covered 100%</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No pre-existing condition exclusions</span>
                </li>
              </ul>
            </div>

            {/* Short-Term Health Insurance */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Short-Term Coverage</h3>
              <p className="text-gray-600 mb-6">
                Temporary coverage for gaps in insurance. Quick approval and flexible terms from 1-12 months.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Lower monthly premiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fast approval process</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ideal for job transitions</span>
                </li>
              </ul>
            </div>

            {/* Family Plans */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Family Plans</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive coverage for your entire family under one plan. Cost-effective solution for families.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Cover spouse and children</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Shared deductibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Pediatric dental and vision</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              What Health Insurance Covers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential health benefits included in all ACA-compliant plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏥', title: 'Doctor Visits', desc: 'Primary care and specialist visits' },
              { icon: '💊', title: 'Prescriptions', desc: 'Prescription drug coverage' },
              { icon: '🚑', title: 'Emergency Care', desc: 'Emergency room services' },
              { icon: '🏨', title: 'Hospitalization', desc: 'Inpatient and outpatient care' },
              { icon: '🤰', title: 'Maternity Care', desc: 'Prenatal and newborn care' },
              { icon: '🧠', title: 'Mental Health', desc: 'Counseling and therapy services' },
              { icon: '🦷', title: 'Pediatric Care', desc: 'Dental and vision for children' },
              { icon: '🔬', title: 'Lab Services', desc: 'Diagnostic tests and imaging' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting health insurance is easy with our simple 4-step process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Get a Quote', desc: 'Fill out our simple form or call us directly' },
              { step: '2', title: 'Compare Plans', desc: 'Review personalized options from top insurers' },
              { step: '3', title: 'Choose Coverage', desc: 'Select the plan that fits your needs and budget' },
              { step: '4', title: 'Get Covered', desc: 'Complete enrollment and receive your insurance card' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'When can I enroll in health insurance?',
                a: 'Open Enrollment typically runs from November 1 to January 15. You can also enroll during a Special Enrollment Period if you experience a qualifying life event like marriage, birth, or loss of coverage.',
              },
              {
                q: 'Do I qualify for subsidies?',
                a: 'You may qualify for premium tax credits if your household income is between 100% and 400% of the federal poverty level. We can help you determine your eligibility.',
              },
              {
                q: 'What is a deductible?',
                a: 'A deductible is the amount you pay for covered health services before your insurance plan starts to pay. Plans with lower monthly premiums typically have higher deductibles.',
              },
              {
                q: 'Can I keep my current doctor?',
                a: 'It depends on the plan you choose. We will help you find plans that include your preferred doctors and hospitals in their network.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-navy mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
