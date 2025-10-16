'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I know which insurance plan is right for me?',
      answer: 'Our licensed agents will assess your needs, budget, and health situation to recommend the best options. We compare plans from multiple carriers to find the perfect fit.',
    },
    {
      question: 'When can I enroll in health insurance?',
      answer: 'Open Enrollment runs from November 1 to January 15 each year. You can also enroll during a Special Enrollment Period if you have a qualifying life event like marriage, birth, or loss of coverage.',
    },
    {
      question: 'Do you charge fees for your services?',
      answer: 'No! Our services are completely free to you. We are compensated by insurance carriers, so there is no cost for our expert guidance and support.',
    },
    {
      question: 'How long does it take to get approved?',
      answer: 'Health insurance can be approved within 24-48 hours. Life insurance typically takes 2-4 weeks depending on medical underwriting requirements.',
    },
    {
      question: 'What is an ICHRA and is it right for my business?',
      answer: 'An ICHRA allows you to reimburse employees for individual health insurance tax-free. It is ideal for small businesses wanting to offer benefits without the complexity of group plans. We can help determine if it fits your needs.',
    },
    {
      question: 'Can I change my plan if my needs change?',
      answer: 'Health insurance can typically only be changed during Open Enrollment or with a qualifying event. Life insurance is a long-term commitment, but some policies offer flexibility to adjust coverage.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common insurance questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-navy pr-8">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-green flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-navy mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our team is here to help you find the right coverage.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4632633583"
              className="bg-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-light transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (463) 263-3583
            </a>
            <a
              href="/contact"
              className="bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
