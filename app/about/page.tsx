import Footer from '../components/Footer';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { HiShieldCheck, HiUsers, HiLightBulb, HiHeart, HiCheckCircle, HiTrendingUp } from 'react-icons/hi';

export const metadata = {
  title: 'About Us - Your Trusted Insurance Partner Since 2022 | Family Benefits Center',
  description: 'Learn about Family Benefits Center, your trusted insurance partner since 2022. We provide personalized health and life insurance solutions for individuals and businesses. Licensed agents committed to excellence.',
  keywords: [
    'about family benefits center',
    'insurance broker',
    'licensed insurance agents',
    'insurance company',
    'trusted insurance partner',
    'insurance agency',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us - Your Trusted Insurance Partner | Family Benefits Center',
    description: 'Learn about Family Benefits Center, your trusted insurance partner since 2022.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb path="/about" variant="light" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <HiShieldCheck className="w-5 h-5" />
              <span className="text-sm font-semibold">Trusted Insurance Partner Since 2022</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Family&apos;s Well-Being is Our Mission
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We&apos;re more than just an insurance agency—we&apos;re your dedicated partner in protecting
              what matters most to you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2022, Family Benefits Center was born from a simple yet powerful vision:
                  to make quality insurance accessible, understandable, and affordable for everyone.
                </p>
                <p>
                  We recognized that navigating the complex world of insurance can be overwhelming.
                  Families and businesses deserve a trusted partner who takes the time to understand
                  their unique needs and provides personalized solutions—not just policies.
                </p>
                <p>
                  Since our founding, we&apos;ve helped hundreds of individuals, families, and businesses
                  find the right coverage to protect their health, financial security, and peace of mind.
                  Our commitment to exceptional service and genuine care has made us a trusted name in
                  the insurance industry.
                </p>
                <p>
                  Today, we continue to grow and evolve, always keeping our clients&apos; best interests
                  at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green to-green-light rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green bg-opacity-10 rounded-full p-3">
                        <HiCheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy mb-1">Licensed & Certified</h3>
                        <p className="text-gray-600 text-sm">
                          Fully licensed insurance professionals committed to excellence
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-green bg-opacity-10 rounded-full p-3">
                        <HiUsers className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy mb-1">Client-Focused</h3>
                        <p className="text-gray-600 text-sm">
                          Your needs and satisfaction are our top priority
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-green bg-opacity-10 rounded-full p-3">
                        <HiTrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy mb-1">Proven Results</h3>
                        <p className="text-gray-600 text-sm">
                          Hundreds of satisfied clients and growing every day
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our mission, vision, and values guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <HiShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide personalized, affordable insurance solutions that protect families and
                businesses, while delivering exceptional service with integrity and care.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <HiLightBulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted insurance partner in our community, known for making insurance
                simple, accessible, and tailored to each client&apos;s unique needs.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <HiHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Integrity, transparency, compassion, and excellence. We treat every client like family
                and always put their best interests first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive insurance solutions for individuals and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health Insurance */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Health Insurance</h3>
              <p className="text-gray-700 mb-4">
                Individual and family health plans with comprehensive coverage options tailored to
                your healthcare needs and budget.
              </p>
              <Link href="/health-insurance" className="text-green font-semibold hover:text-green-light">
                Learn More →
              </Link>
            </div>

            {/* Life Insurance */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <HiShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Life Insurance</h3>
              <p className="text-gray-700 mb-4">
                Term and permanent life insurance policies to protect your family&apos;s financial
                future and provide peace of mind.
              </p>
              <Link href="/life-insurance" className="text-green font-semibold hover:text-green-light">
                Learn More →
              </Link>
            </div>

            {/* Group Health */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <HiUsers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Group Health Plans</h3>
              <p className="text-gray-700 mb-4">
                Affordable group health insurance solutions for small businesses, including innovative
                ICHRA options.
              </p>
              <Link href="/group-health" className="text-green font-semibold hover:text-green-light">
                Learn More →
              </Link>
            </div>

            {/* ICHRA Solutions */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">ICHRA Solutions</h3>
              <p className="text-gray-700 mb-4">
                Modern, flexible health reimbursement arrangements that give employees choice while
                controlling costs for employers.
              </p>
              <Link href="/group-health" className="text-green font-semibold hover:text-green-light">
                Learn More →
              </Link>
            </div>

            {/* Consultation */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Expert Consultation</h3>
              <p className="text-gray-700 mb-4">
                Personalized guidance to help you understand your options and make informed decisions
                about your insurance coverage.
              </p>
              <Link href="/contact" className="text-green font-semibold hover:text-green-light">
                Get Started →
              </Link>
            </div>

            {/* Ongoing Support */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Ongoing Support</h3>
              <p className="text-gray-700 mb-4">
                We&apos;re here for you beyond the sale—providing continuous support, policy reviews,
                and assistance whenever you need it.
              </p>
              <Link href="/contact" className="text-green font-semibold hover:text-green-light">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Family Benefits Center?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional service and value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HiCheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Independent Broker</h3>
              <p className="text-gray-300">
                We work with multiple carriers to find you the best coverage at the best price
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
              <p className="text-gray-300">
                Every client receives individual attention and customized solutions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-300">
                No hidden fees or surprises—just honest, straightforward pricing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HiHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local & Caring</h3>
              <p className="text-gray-300">
                We&apos;re part of your community and genuinely care about your well-being
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green to-green-light rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              Our Commitment to You
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                At Family Benefits Center, we understand that insurance is about more than just policies
                and premiums—it&apos;s about protecting the people and things you love most.
              </p>
              <p>
                We promise to always:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Listen carefully to understand your unique needs and concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Provide honest, unbiased advice in your best interest</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Explain your options clearly in plain language</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Work tirelessly to find you the best coverage at the best price</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Be there for you when you need us most</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s find the perfect insurance solution for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:4632633583"
              className="bg-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
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
