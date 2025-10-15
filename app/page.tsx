import Hero from './components/Hero';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import { HiHeart, HiShieldCheck, HiBriefcase, HiChevronRight, HiUserGroup, HiCurrencyDollar, HiLightningBolt, HiSupport } from 'react-icons/hi';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re protecting your family or your business, we have the right coverage for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <HiHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Health Insurance</h3>
              <p className="text-gray-600 mb-6">
                Individual and family health plans tailored to your needs and budget. ACA marketplace plans, short-term coverage, and more.
              </p>
              <a href="/health-insurance" className="text-green font-semibold hover:text-green-light transition-colors inline-flex items-center gap-2">
                Learn More
                <HiChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-navy hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-navy bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <HiShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Life Insurance</h3>
              <p className="text-gray-600 mb-6">
                Protect your loved ones with comprehensive life insurance coverage. Term life, whole life, and universal life options available.
              </p>
              <a href="/life-insurance" className="text-navy font-semibold hover:text-opacity-70 transition-colors inline-flex items-center gap-2">
                Learn More
                <HiChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <HiBriefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Group Health Solutions</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive group health insurance options for businesses including traditional plans, ICHRA, level-funded, and association plans.
              </p>
              <a href="/ichra" className="text-green font-semibold hover:text-green-light transition-colors inline-flex items-center gap-2">
                Learn More
                <HiChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Why Choose Family Benefits Center?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional service and finding the perfect coverage for your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiUserGroup className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Licensed agents with years of experience</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiCurrencyDollar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Compare plans to find the best value</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiLightningBolt className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Fast Processing</h3>
              <p className="text-gray-600">Get covered quickly and efficiently</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiSupport className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Ongoing Support</h3>
              <p className="text-gray-600">We&apos;re here whenever you need us</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
