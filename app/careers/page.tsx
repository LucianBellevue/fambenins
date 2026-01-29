import Footer from '../components/Footer';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { HiUsers, HiTrendingUp, HiHeart, HiLightBulb, HiCheckCircle, HiBriefcase } from 'react-icons/hi';

export const metadata = {
  title: 'Careers - Join Our Insurance Team | Family Benefits Center',
  description: 'Join the Family Benefits Center team. Explore career opportunities in insurance including licensed agent positions, customer service roles, and more. Help families protect what matters most.',
  keywords: [
    'insurance careers',
    'insurance agent jobs',
    'insurance broker jobs',
    'licensed insurance agent',
    'insurance sales jobs',
    'work in insurance',
    'insurance employment',
  ],
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers - Join Our Insurance Team | Family Benefits Center',
    description: 'Explore career opportunities in insurance and help families protect what matters most.',
    url: '/careers',
    type: 'website',
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb path="/careers" variant="light" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <HiBriefcase className="w-5 h-5" />
              <span className="text-sm font-semibold">Join Our Growing Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Build Your Career with Purpose
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Join a team that&apos;s making a real difference in people&apos;s lives while building a
              rewarding career in the insurance industry.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Why Work at Family Benefits Center?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re building something special, and we want you to be part of it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Meaningful Work */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <HiHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Meaningful Work</h3>
              <p className="text-gray-700">
                Help families and businesses protect what matters most. Every day, you&apos;ll make a
                real difference in people&apos;s lives.
              </p>
            </div>

            {/* Growth Opportunities */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <HiTrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Growth Opportunities</h3>
              <p className="text-gray-700">
                We&apos;re a growing company with unlimited potential. Grow your skills, advance your
                career, and reach your full potential.
              </p>
            </div>

            {/* Great Culture */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <HiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Great Culture</h3>
              <p className="text-gray-700">
                Join a supportive, collaborative team that values integrity, excellence, and treating
                each other like family.
              </p>
            </div>

            {/* Training & Development */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <HiLightBulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Training & Development</h3>
              <p className="text-gray-700">
                Comprehensive training programs, mentorship, and ongoing professional development to
                help you succeed.
              </p>
            </div>

            {/* Competitive Compensation */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Competitive Compensation</h3>
              <p className="text-gray-700">
                Attractive salary packages, commission structures, and performance bonuses that reward
                your hard work.
              </p>
            </div>

            {/* Work-Life Balance */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Work-Life Balance</h3>
              <p className="text-gray-700">
                Flexible schedules, remote work options, and a culture that values your personal time
                and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <HiCheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Integrity First</h3>
                  <p className="text-gray-700">
                    We do what&apos;s right, even when no one is watching. Honesty and transparency
                    are non-negotiable.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <HiCheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Client-Centered</h3>
                  <p className="text-gray-700">
                    Our clients&apos; needs always come first. We&apos;re here to serve, not to sell.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <HiCheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in everything we do, from client service to professional
                    development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <HiCheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Collaboration</h3>
                  <p className="text-gray-700">
                    We work together as a team, supporting and lifting each other up to achieve
                    shared goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <HiCheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Continuous Growth</h3>
                  <p className="text-gray-700">
                    We&apos;re always learning, improving, and pushing ourselves to be better than
                    we were yesterday.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <HiCheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Compassion</h3>
                  <p className="text-gray-700">
                    We treat everyone—clients and colleagues—with kindness, empathy, and respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Licensed Insurance Agent */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Licensed Insurance Agent</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="bg-green bg-opacity-10 text-white px-3 py-1 rounded-full font-semibold">
                      Full-Time
                    </span>
                    <span className="bg-navy bg-opacity-10 text-white px-3 py-1 rounded-full font-semibold">
                      Remote/Hybrid
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                We&apos;re seeking experienced, licensed insurance agents who are passionate about helping
                clients find the right coverage. You&apos;ll work with individuals and businesses to provide
                health and life insurance solutions.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-navy mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Active insurance license (Health & Life preferred)</li>
                  <li>2+ years of insurance sales experience</li>
                  <li>Strong communication and relationship-building skills</li>
                  <li>Self-motivated with a client-first mindset</li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-green text-navy px-6 py-3 rounded-lg font-bold hover:bg-green-light transition-colors"
              >
                Apply Now
              </Link>
            </div>

            {/* Customer Service Representative */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Customer Service Representative</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="bg-green bg-opacity-10 text-white px-3 py-1 rounded-full font-semibold">
                      Full-Time
                    </span>
                    <span className="bg-navy bg-opacity-10 text-white px-3 py-1 rounded-full font-semibold">
                      Remote
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Join our team as a Customer Service Representative and be the friendly voice that helps
                clients navigate their insurance needs. You&apos;ll provide exceptional support and ensure
                every client feels valued.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-navy mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Excellent communication and problem-solving skills</li>
                  <li>Customer service experience (insurance industry a plus)</li>
                  <li>Detail-oriented with strong organizational skills</li>
                  <li>Comfortable with technology and CRM systems</li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-green text-navy px-6 py-3 rounded-lg font-bold hover:bg-green-light transition-colors"
              >
                Apply Now
              </Link>
            </div>

            {/* Marketing Coordinator */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Marketing Coordinator</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="bg-green bg-opacity-10 text-white px-3 py-1 rounded-full font-semibold">
                      Part-Time/Full-Time
                    </span>
                    <span className="bg-navy bg-opacity-10 text-white px-3 py-1 rounded-full font-semibold">
                      Remote
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Help us grow our brand and reach more families who need quality insurance. You&apos;ll manage
                social media, create content, and execute marketing campaigns.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-navy mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Experience in digital marketing and social media</li>
                  <li>Strong writing and content creation skills</li>
                  <li>Familiarity with marketing tools and analytics</li>
                  <li>Creative mindset with attention to detail</li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-green text-navy px-6 py-3 rounded-lg font-bold hover:bg-green-light transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Don't see a fit? */}
          <div className="mt-12 text-center bg-navy text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don&apos;t See the Right Fit?</h3>
            <p className="text-gray-200 mb-6">
              We&apos;re always looking for talented, passionate people to join our team. Send us your
              resume and tell us how you can contribute to our mission.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-colors"
            >
              Submit Your Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and designed to find the right fit
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Apply</h3>
              <p className="text-gray-700 text-sm">
                Submit your application and resume through our contact form
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Phone Screen</h3>
              <p className="text-gray-700 text-sm">
                Brief phone conversation to discuss your background and the role
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Interview</h3>
              <p className="text-gray-700 text-sm">
                In-depth interview to explore your skills and cultural fit
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Offer</h3>
              <p className="text-gray-700 text-sm">
                If it&apos;s a match, we&apos;ll extend an offer and welcome you to the team!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our team and help families protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Apply Now
            </Link>
            <a
              href="mailto:services@familybenefitscenter.com"
              className="bg-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Email Your Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
