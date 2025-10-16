import Link from 'next/link';
import Image from 'next/image';
import { HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/famben_icon.png" 
                alt="Family Benefits Center Icon" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <h3 className="text-2xl font-bold">
                Family Benefits <span className="text-green">Center</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive health and life insurance solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-green transition-colors" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/health-insurance" className="text-gray-300 hover:text-green transition-colors">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/life-insurance" className="text-gray-300 hover:text-green transition-colors">
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link href="/group-health" className="text-gray-300 hover:text-green transition-colors">
                  Group Health Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-green transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-green transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-green transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-green transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <HiPhone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>(463) 263-3583</span>
              </li>
              <li className="flex items-start gap-2">
                <HiMail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>services@familybenefitscenter.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Family Benefits Center. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-green transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-green transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4 text-center md:text-left">
            Insurance products are offered through licensed agents. Not all products available in all states.
          </p>
        </div>
      </div>
    </footer>
  );
}
