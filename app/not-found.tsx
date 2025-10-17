import Link from 'next/link';
import { HiHome, HiArrowLeft, HiPhone } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy to-[#2a4d6f] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-green opacity-20">404</h1>
          <div className="-mt-16">
            <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-8 mb-6">
              <svg 
                className="w-24 h-24 text-green" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-green text-navy px-8 py-4 rounded-lg font-bold hover:bg-green-light transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <HiHome className="w-5 h-5" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-20 transition-all duration-200"
          >
            <HiArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Help Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
          <h3 className="text-white font-semibold mb-3 flex items-center justify-center gap-2">
            <HiPhone className="w-5 h-5 text-green" />
            Need Help?
          </h3>
          <p className="text-gray-300 mb-4">
            If you&apos;re looking for something specific, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link 
              href="/contact" 
              className="text-green hover:text-green-light font-semibold transition-colors"
            >
              Contact Us →
            </Link>
            <Link 
              href="/health-insurance" 
              className="text-green hover:text-green-light font-semibold transition-colors"
            >
              Health Insurance →
            </Link>
            <Link 
              href="/life-insurance" 
              className="text-green hover:text-green-light font-semibold transition-colors"
            >
              Life Insurance →
            </Link>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mt-8 text-gray-400 text-sm">
          <p className="mb-2">Popular pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/about" className="hover:text-green transition-colors">
              About Us
            </Link>
            <span>•</span>
            <Link href="/group-health" className="hover:text-green transition-colors">
              Group Health
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-green transition-colors">
              FAQ
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-green transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
