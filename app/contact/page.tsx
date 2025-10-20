'use client';

import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { HiPhone, HiMail } from 'react-icons/hi';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green bg-opacity-20 px-4 py-2 rounded-full mb-4">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Free Quote - No Obligation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get Your Free Insurance Quote
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Complete the form below and our licensed agents will contact you within 24 hours with personalized coverage options.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiPhone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-navy mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Mon-Fri: 8am-8pm</p>
              <a href="tel:4632633583" className="text-green font-semibold hover:text-green-light">
                (463) 263-3583
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiMail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-navy mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">24/7 Response</p>
              <a href="mailto:services@familybenefitscenter.com" className="text-green font-semibold hover:text-green-light break-all">
                services@familybenefitscenter.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
