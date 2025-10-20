'use client';

import Footer from '../components/Footer';
import Link from 'next/link';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy via-navy to-[#2a4d6f] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-xl text-gray-200">
            Our Commitment to Digital Accessibility
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
            
            {/* Commitment */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Family Benefits Center is committed to ensuring digital accessibility for people with 
                disabilities. We are continually improving the user experience for everyone and applying 
                the relevant accessibility standards to ensure we provide equal access to all of our users.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that everyone should have access to quality insurance information and services, 
                regardless of their abilities or the technologies they use.
              </p>
            </div>

            {/* Standards */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Accessibility Standards</h2>
              <p className="text-gray-700 mb-3">
                Our website strives to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                Level AA standards. These guidelines explain how to make web content more accessible for 
                people with disabilities and more user-friendly for everyone.
              </p>
              <p className="text-gray-700">
                We follow these standards to ensure our website is accessible to people who:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                <li>Use screen readers or other assistive technologies</li>
                <li>Navigate using keyboard only</li>
                <li>Have visual impairments or color blindness</li>
                <li>Have hearing impairments</li>
                <li>Have cognitive or learning disabilities</li>
                <li>Have motor impairments</li>
              </ul>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Accessibility Features</h2>
              <p className="text-gray-700 mb-3">
                Our website includes the following accessibility features:
              </p>
              
              <h3 className="text-lg font-semibold text-navy mb-2 mt-4">Visual Design</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>High contrast color schemes for better readability</li>
                <li>Clear and consistent navigation structure</li>
                <li>Readable font sizes and spacing</li>
                <li>Text that can be resized without loss of functionality</li>
                <li>Alternative text for images and graphics</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy mb-2 mt-4">Navigation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Keyboard navigation support throughout the site</li>
                <li>Skip navigation links to bypass repetitive content</li>
                <li>Logical heading structure for screen readers</li>
                <li>Descriptive link text that makes sense out of context</li>
                <li>Consistent page layouts and navigation patterns</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy mb-2 mt-4">Forms and Interactions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Clear form labels and instructions</li>
                <li>Error messages that are easy to understand</li>
                <li>Sufficient time to complete forms</li>
                <li>Focus indicators for interactive elements</li>
                <li>ARIA labels for enhanced screen reader support</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy mb-2 mt-4">Content</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Plain language and clear communication</li>
                <li>Proper document structure with headings and lists</li>
                <li>Captions and transcripts for multimedia content (when applicable)</li>
                <li>Content that is compatible with assistive technologies</li>
              </ul>
            </div>

            {/* Assistive Technologies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Compatible Assistive Technologies</h2>
              <p className="text-gray-700 mb-3">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Alternative input devices</li>
              </ul>
            </div>

            {/* Browser Compatibility */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Browser and Device Compatibility</h2>
              <p className="text-gray-700 mb-3">
                Our website is designed to work with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>Mobile devices (iOS and Android)</li>
                <li>Tablets and desktop computers</li>
                <li>Various screen sizes and resolutions</li>
              </ul>
            </div>

            {/* Limitations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Known Limitations</h2>
              <p className="text-gray-700 mb-3">
                Despite our best efforts, some limitations may exist:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Third-party content or widgets may not be fully accessible</li>
                <li>PDF documents may require additional accessibility features</li>
                <li>Some legacy content may not meet current standards</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We are actively working to address these limitations and improve accessibility across all 
                areas of our website.
              </p>
            </div>

            {/* Ongoing Efforts */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Ongoing Accessibility Efforts</h2>
              <p className="text-gray-700 mb-3">
                We are committed to continuous improvement and take the following steps:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Regular accessibility audits and testing</li>
                <li>User testing with people who use assistive technologies</li>
                <li>Training our team on accessibility best practices</li>
                <li>Incorporating accessibility into our design and development process</li>
                <li>Monitoring and addressing accessibility issues as they arise</li>
                <li>Staying current with evolving accessibility standards</li>
              </ul>
            </div>

            {/* Third-Party Content */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Third-Party Content</h2>
              <p className="text-gray-700">
                Some content on our website may be provided by third parties, such as insurance carriers 
                or service providers. While we strive to ensure all content is accessible, we may have 
                limited control over third-party content. We encourage our partners to maintain accessible 
                content and will work with them to address accessibility concerns.
              </p>
            </div>

            {/* Feedback */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Feedback and Contact Information</h2>
              <p className="text-gray-700 mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter any 
                accessibility barriers or have suggestions for improvement, please let us know:
              </p>
              
              <div className="bg-green bg-opacity-10 border-l-4 border-green p-6 rounded mb-4">
                <h3 className="text-lg font-semibold text-navy mb-3">Report an Accessibility Issue</h3>
                <p className="text-gray-700 mb-3">
                  We take accessibility concerns seriously and will respond to your feedback promptly.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:services@familybenefitscenter.com" className="text-white hover:underline">
                      services@familybenefitscenter.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong>{' '}
                    <a href="tel:4632633583" className="text-white hover:underline">
                      (463) 263-3583
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Hours:</strong> Monday - Friday, 8:00 AM - 8:00 PM EST
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm">
                When reporting an accessibility issue, please include:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4 mt-2">
                <li>The web page or feature where you encountered the issue</li>
                <li>A description of the problem</li>
                <li>The assistive technology you were using (if applicable)</li>
                <li>Your browser and operating system</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Response Time</h2>
              <p className="text-gray-700">
                We aim to respond to accessibility feedback within 2 business days and will work to resolve 
                reported issues as quickly as possible. Complex issues may require more time to address, 
                but we will keep you informed of our progress.
              </p>
            </div>

            {/* Alternative Formats */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Alternative Formats</h2>
              <p className="text-gray-700">
                If you need information from our website in an alternative format, such as large print, 
                audio, or another accessible format, please contact us. We will work with you to provide 
                the information in a format that meets your needs.
              </p>
            </div>

            {/* Formal Complaints */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Formal Complaints</h2>
              <p className="text-gray-700 mb-3">
                If you are not satisfied with our response to your accessibility concern, you may file a 
                formal complaint with:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 font-semibold mb-2">
                  U.S. Department of Health and Human Services
                </p>
                <p className="text-gray-700 mb-1">Office for Civil Rights</p>
                <p className="text-gray-700">
                  Website:{' '}
                  <a 
                    href="https://www.hhs.gov/ocr/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green hover:underline"
                  >
                    www.hhs.gov/ocr
                  </a>
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Updates to This Statement</h2>
              <p className="text-gray-700">
                We may update this Accessibility Statement from time to time to reflect changes in our 
                practices or accessibility standards. We encourage you to review this page periodically 
                for the latest information.
              </p>
              <p className="text-gray-700 mt-3">
                <strong>Last reviewed:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            {/* Additional Resources */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Additional Accessibility Resources</h2>
              <p className="text-gray-700 mb-3">
                For more information about web accessibility, visit:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <a 
                    href="https://www.w3.org/WAI/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green hover:underline"
                  >
                    Web Accessibility Initiative (WAI)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ada.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green hover:underline"
                  >
                    Americans with Disabilities Act (ADA)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.section508.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green hover:underline"
                  >
                    Section 508 (U.S. Federal Accessibility Standards)
                  </a>
                </li>
              </ul>
            </div>

            {/* Closing Statement */}
            <div className="bg-navy text-white rounded-lg p-6 mb-8">
              <p className="text-lg leading-relaxed">
                At Family Benefits Center, we believe that accessibility is not just about compliance—it&apos;s 
                about creating an inclusive experience for all users. We are dedicated to making our website 
                accessible to everyone and appreciate your patience as we continue to improve.
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
