import Footer from '../components/Footer';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata = {
  title: 'Terms of Service - Website Terms & Conditions | Family Benefits Center',
  description: 'Terms of Service for Family Benefits Center. Read our terms and conditions for using our website and insurance services. Learn about our policies and procedures.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service - Website Terms & Conditions',
    description: 'Terms and conditions for using Family Benefits Center services.',
    url: '/terms',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb path="/terms" variant="light" />
      {/* Header */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-200">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                Welcome to Family Benefits Center. These Terms of Service (&quot;Terms&quot;) govern your use of our
                website and services. By accessing or using our website, you agree to be bound by these Terms.
                If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By using our website or services, you acknowledge that you have read, understood, and agree to
                be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and
                others who access or use our services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-3">
                Family Benefits Center is an insurance brokerage that provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Health insurance quotes and enrollment assistance</li>
                <li>Life insurance quotes and policy placement</li>
                <li>Group health insurance solutions for businesses</li>
                <li>ICHRA (Individual Coverage Health Reimbursement Arrangement) consulting</li>
                <li>Insurance education and guidance</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We act as an independent broker and work with multiple insurance carriers to help you find
                appropriate coverage. We do not underwrite insurance policies or make coverage decisions.
              </p>
            </div>

            {/* Eligibility */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">3. Eligibility</h2>
              <p className="text-gray-700">
                You must be at least 18 years old to use our services. By using our website, you represent
                and warrant that you meet this age requirement and have the legal capacity to enter into
                these Terms.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">4. User Responsibilities</h2>
              <p className="text-gray-700 mb-3">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our website or services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not use our services to transmit harmful code or malware</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            {/* Quotes and Applications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">5. Insurance Quotes and Applications</h2>

              <h3 className="text-lg font-semibold text-navy mb-2 mt-4">Quotes</h3>
              <p className="text-gray-700 mb-4">
                Insurance quotes provided through our services are estimates based on the information you
                provide. Actual premiums and coverage may differ based on underwriting, medical history,
                and other factors determined by the insurance carrier.
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2">Applications</h3>
              <p className="text-gray-700 mb-4">
                Submitting an application through our services does not guarantee coverage. All applications
                are subject to review and approval by the insurance carrier. The carrier may request additional
                information, medical examinations, or documentation.
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2">No Guarantee of Coverage</h3>
              <p className="text-gray-700 mb-4">
                We cannot guarantee that you will be approved for coverage or that any specific policy will
                be available to you. Insurance carriers make final decisions on coverage and pricing.
              </p>
            </div>

            {/* Fees and Compensation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">6. Fees and Compensation</h2>
              <p className="text-gray-700 mb-3">
                Our services are typically provided at no direct cost to you. We receive compensation from
                insurance carriers in the form of commissions when you purchase a policy through us. This
                compensation does not increase the cost of your insurance.
              </p>
              <p className="text-gray-700">
                In some cases, we may charge fees for specialized consulting services. Any such fees will be
                clearly disclosed and agreed upon before services are rendered.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 mb-3">
                All content on our website, including text, graphics, logos, images, and software, is the
                property of Family Benefits Center or our licensors and is protected by copyright, trademark,
                and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, or create derivative works from our content without
                our express written permission.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">8. Disclaimers</h2>

              <h3 className="text-lg font-semibold text-navy mb-2 mt-4">No Warranty</h3>
              <p className="text-gray-700 mb-4">
                Our website and services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any
                kind, either express or implied. We do not warrant that our services will be uninterrupted,
                error-free, or secure.
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2">Not Legal or Financial Advice</h3>
              <p className="text-gray-700 mb-4">
                Information provided on our website is for general informational purposes only and does not
                constitute legal, financial, or professional advice. You should consult with appropriate
                professionals regarding your specific situation.
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2">Third-Party Information</h3>
              <p className="text-gray-700 mb-4">
                We strive to provide accurate information, but we cannot guarantee the accuracy, completeness,
                or timeliness of information from third-party sources, including insurance carriers.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-3">
                To the fullest extent permitted by law, Family Benefits Center and its officers, directors,
                employees, and agents shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages arising out of or related to your use of our services, including but not
                limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Denial of insurance coverage</li>
                <li>Errors or omissions in information provided</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Our total liability to you for any claims arising from your use of our services shall not
                exceed the amount of commissions we received from policies you purchased through us in the
                12 months preceding the claim.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">10. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless Family Benefits Center and its affiliates
                from any claims, damages, losses, liabilities, and expenses (including attorney fees) arising
                from your use of our services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </div>

            {/* Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">11. Privacy</h2>
              <p className="text-gray-700">
                Your use of our services is also governed by our{' '}
                <Link href="/privacy" className="text-green hover:underline">
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your personal information.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">12. Third-Party Links and Services</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites or services. We are not responsible for
                the content, privacy practices, or terms of service of these external sites. Your use of
                third-party websites is at your own risk.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">13. Termination</h2>
              <p className="text-gray-700">
                We reserve the right to terminate or suspend your access to our services at any time, without
                notice, for any reason, including violation of these Terms. Upon termination, your right to
                use our services will immediately cease.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">14. Modifications to Terms</h2>
              <p className="text-gray-700">
                We may modify these Terms at any time by posting updated Terms on our website. Your continued
                use of our services after such changes constitutes acceptance of the modified Terms. We
                encourage you to review these Terms periodically.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">15. Governing Law and Dispute Resolution</h2>

              <h3 className="text-lg font-semibold text-navy mb-2 mt-4">Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of
                Indiana, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2">Dispute Resolution</h3>
              <p className="text-gray-700 mb-4">
                Any disputes arising from these Terms or your use of our services shall be resolved through
                binding arbitration in accordance with the rules of the American Arbitration Association,
                except that either party may seek injunctive relief in court to protect intellectual property rights.
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2">Class Action Waiver</h3>
              <p className="text-gray-700 mb-4">
                You agree that any dispute resolution proceedings will be conducted only on an individual basis
                and not in a class, consolidated, or representative action.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">16. Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining
                provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">17. Entire Agreement</h2>
              <p className="text-gray-700">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you
                and Family Benefits Center regarding your use of our services and supersede all prior agreements.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">18. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 font-semibold mb-2">Family Benefits Center</p>
                <p className="text-gray-700">
                  Email:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-green hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="text-gray-700">
                  Phone:{' '}
                  <a href="tel:4632633583" className="text-green hover:underline">
                    (463) 263-3583
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  Hours: Monday - Friday, 8:00 AM - 8:00 PM EST
                </p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mb-8 bg-green bg-opacity-10 border-l-4 border-green p-6 rounded">
              <p className="text-gray-700 font-semibold mb-2">
                By using our services, you acknowledge that you have read and understood these Terms of Service
                and agree to be bound by them.
              </p>
            </div>

            {/* Back to Home */}
            <div className="pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center text-green hover:text-green-light font-semibold transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
