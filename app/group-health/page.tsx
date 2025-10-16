import Link from 'next/link';
import Footer from '../components/Footer';
import { HiShieldCheck, HiUserGroup, HiCurrencyDollar, HiTrendingUp, HiBriefcase, HiCheckCircle, HiChevronRight } from 'react-icons/hi';

export const metadata = {
  title: 'Group Health Solutions for Business | Family Benefits Center',
  description: 'Comprehensive group health insurance solutions including traditional plans, ICHRA, level-funded options, and more for businesses of all sizes.',
};

export default function GroupHealthPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <HiBriefcase className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold">Comprehensive Business Health Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Group Health Insurance Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From traditional group plans to innovative ICHRA solutions, we help businesses of all sizes provide quality health benefits while managing costs effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all shadow-lg inline-block text-center">
                Get a Free Quote
              </Link>
              <a href="#solutions" className="bg-white bg-opacity-10 backdrop-blur-sm text-green border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-20 transition-all inline-block text-center">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Group Health */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Why Offer Group Health Benefits?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Providing health insurance isn&apos;t just good for employees—it&apos;s good for business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiUserGroup className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Attract Talent</h3>
              <p className="text-gray-600">Competitive benefits help recruit top employees</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Retain Staff</h3>
              <p className="text-gray-600">Reduce turnover with valuable benefits</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiCurrencyDollar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Tax Advantages</h3>
              <p className="text-gray-600">Premiums are tax-deductible for businesses</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiTrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Boost Productivity</h3>
              <p className="text-gray-600">Healthy employees are more productive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Health Solutions */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Group Health Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of options to fit your business size, budget, and employee needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Traditional Group Health Insurance */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-green hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Traditional Group Health Insurance</h3>
                  <p className="text-green font-semibold">Best for: 50+ employees</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Classic employer-sponsored health insurance with comprehensive coverage options. The employer selects the plan(s) and typically shares premium costs with employees.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Predictable monthly premiums</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive coverage options</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Group rates typically lower than individual</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Employer controls plan selection</span>
                </div>
              </div>

              <Link href="/contact" className="text-green font-semibold hover:text-green-light transition-colors inline-flex items-center gap-2">
                Learn More About Traditional Plans
                <HiChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* ICHRA */}
            <div className="bg-gradient-to-br from-green to-[#7cb342] text-white rounded-xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white text-green px-4 py-1 text-sm font-bold rounded-bl-lg">
                POPULAR
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiBriefcase className="w-8 h-8 text-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">ICHRA (Individual Coverage HRA)</h3>
                  <p className="text-white font-semibold opacity-90">Best for: Any size business</p>
                </div>
              </div>
              
              <p className="text-white opacity-90 mb-6">
                Give employees a fixed allowance to purchase their own individual health insurance. You control costs, they control choice.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Fixed, predictable costs for employers</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Employees choose their own plans</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Tax-free reimbursements</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">No minimum employee requirements</span>
                </div>
              </div>

              <Link href="/contact" className="bg-white text-green px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
                Get ICHRA Quote
                <HiChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Level-Funded Plans */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-green hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiCurrencyDollar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Level-Funded Plans</h3>
                  <p className="text-green font-semibold">Best for: 25-100 employees</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Hybrid between fully-insured and self-funded. Pay a fixed monthly amount with potential for refunds if claims are lower than expected.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Predictable monthly payments</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Potential for year-end refunds</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Stop-loss protection included</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">More control over plan design</span>
                </div>
              </div>

              <Link href="/contact" className="text-green font-semibold hover:text-green-light transition-colors inline-flex items-center gap-2">
                Explore Level-Funded Options
                <HiChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Association Health Plans */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-green hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-green bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiUserGroup className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Association Health Plans (AHP)</h3>
                  <p className="text-green font-semibold">Best for: Small businesses, 2-50 employees</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Small businesses band together to get better rates and more plan options typically available only to larger companies.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Better rates through group purchasing</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">More plan options for small businesses</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Shared administrative costs</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Industry-specific associations available</span>
                </div>
              </div>

              <Link href="/contact" className="text-green font-semibold hover:text-green-light transition-colors inline-flex items-center gap-2">
                Find Association Plans
                <HiChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Compare Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Find the right fit for your business
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">Traditional Group</th>
                  <th className="p-4 text-center font-semibold bg-green">ICHRA</th>
                  <th className="p-4 text-center font-semibold">Level-Funded</th>
                  <th className="p-4 text-center font-semibold">AHP</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4 text-center">50+ employees</td>
                  <td className="p-4 text-center bg-green bg-opacity-5">Any size</td>
                  <td className="p-4 text-center">25-100 employees</td>
                  <td className="p-4 text-center">2-50 employees</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Cost Predictability</td>
                  <td className="p-4 text-center">High</td>
                  <td className="p-4 text-center bg-green bg-opacity-5">Very High</td>
                  <td className="p-4 text-center">High</td>
                  <td className="p-4 text-center">Medium</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Employee Choice</td>
                  <td className="p-4 text-center">Limited</td>
                  <td className="p-4 text-center bg-green bg-opacity-5">Full</td>
                  <td className="p-4 text-center">Limited</td>
                  <td className="p-4 text-center">Limited</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Setup Complexity</td>
                  <td className="p-4 text-center">Medium</td>
                  <td className="p-4 text-center bg-green bg-opacity-5">Low</td>
                  <td className="p-4 text-center">Medium</td>
                  <td className="p-4 text-center">Low</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Tax Benefits</td>
                  <td className="p-4 text-center">Yes</td>
                  <td className="p-4 text-center bg-green bg-opacity-5">Yes</td>
                  <td className="p-4 text-center">Yes</td>
                  <td className="p-4 text-center">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              How We Help Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We make group health insurance simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green mb-4">1</div>
              <h3 className="text-xl font-bold text-navy mb-3">Consultation & Analysis</h3>
              <p className="text-gray-600">
                We learn about your business, budget, and employee needs to recommend the best solution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green mb-4">2</div>
              <h3 className="text-xl font-bold text-navy mb-3">Custom Quotes & Comparison</h3>
              <p className="text-gray-600">
                We shop multiple carriers and present you with clear, side-by-side comparisons.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green mb-4">3</div>
              <h3 className="text-xl font-bold text-navy mb-3">Enrollment & Ongoing Support</h3>
              <p className="text-gray-600">
                We handle enrollment, answer employee questions, and provide year-round support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-[#2a4d6f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Provide Better Benefits?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let&apos;s find the perfect group health solution for your business. Get a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all shadow-lg inline-block">
              Get Free Quote
            </Link>
            <a href="tel:5551234567" className="bg-white bg-opacity-10 backdrop-blur-sm text-green border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-20 transition-all inline-block">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
