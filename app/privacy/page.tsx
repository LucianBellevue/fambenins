import Footer from '../components/Footer';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy - Data Protection & Security | Family Benefits Center',
  description: 'Privacy Policy for Family Benefits Center. Learn how we collect, use, and protect your personal information. HIPAA compliant insurance broker.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Data Protection & Security',
    description: 'Learn how we protect your personal and health information.',
    url: '/privacy',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb path="/privacy" variant="light" />
      {/* Header */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
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
                Family Benefits Center (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-700 mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Request a quote or contact us through our website</li>
                <li>Apply for insurance coverage</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This information may include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Date of birth and Social Security number (for insurance applications)</li>
                <li>Health information (as required for insurance underwriting)</li>
                <li>Financial information (for payment processing)</li>
                <li>Employment and business information (for group health plans)</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-3">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide insurance quotes and process applications</li>
                <li>Communicate with you about our services</li>
                <li>Process transactions and manage your account</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations and industry regulations</li>
                <li>Prevent fraud and enhance security</li>
                <li>Respond to customer service requests</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-3">
                We may share your information with:
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2 mt-4">Insurance Carriers</h3>
              <p className="text-gray-700 mb-4">
                We share your information with insurance companies to obtain quotes and process applications.
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2">Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We work with third-party service providers who assist us with business operations, such as
                payment processing, email delivery, and website hosting.
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2">Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information when required by law, court order, or government regulation,
                or to protect our rights and safety.
              </p>

              <h3 className="text-lg font-semibold text-navy mb-2">Business Transfers</h3>
              <p className="text-gray-700 mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred
                to the acquiring entity.
              </p>

              <p className="text-gray-700 font-semibold mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Data Security</h2>
              <p className="text-gray-700 mb-3">
                We implement appropriate technical and organizational security measures to protect your
                personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure servers and databases</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure.
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-3">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Restriction:</strong> Request limitation on how we use your information</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-green hover:underline">
                  {CONTACT_EMAIL}
                </a>
                {' '}or call us at{' '}
                <a href="tel:4632633583" className="text-green hover:underline">
                  (463) 263-3583
                </a>.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-3">
                We use cookies and similar tracking technologies to enhance your experience on our website.
                Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website performance and functionality</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit
                your ability to use certain features of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Third-Party Websites</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy
                practices or content of these external sites. We encourage you to review the privacy policies
                of any third-party websites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect
                personal information from children. If you believe we have collected information from a child,
                please contact us immediately.
              </p>
            </div>

            {/* HIPAA Compliance */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">HIPAA Compliance</h2>
              <p className="text-gray-700">
                As an insurance broker, we handle protected health information (PHI) in accordance with the
                Health Insurance Portability and Accountability Act (HIPAA). We maintain appropriate safeguards
                to protect the privacy and security of your health information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or
                legal requirements. We will notify you of any material changes by posting the updated policy
                on our website with a new &quot;Last Updated&quot; date. Your continued use of our services after
                such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
