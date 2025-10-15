'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-navy shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <HiShieldCheck className="w-10 h-10 text-green" />
              <span className="text-2xl font-bold text-white">
                Family Benefits <span className="text-green">Center</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/health-insurance" 
              className="text-white hover:text-green transition-colors duration-200 font-medium"
            >
              Health Insurance
            </Link>
            <Link 
              href="/life-insurance" 
              className="text-white hover:text-green transition-colors duration-200 font-medium"
            >
              Life Insurance
            </Link>
            <Link 
              href="/ichra" 
              className="text-white hover:text-green transition-colors duration-200 font-medium"
            >
              Group Health
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-green transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="bg-green text-navy px-6 py-2.5 rounded-lg font-semibold hover:bg-green-light transition-colors duration-200 shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-green focus:outline-none focus:ring-2 focus:ring-green rounded-md p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/health-insurance" 
                className="text-white hover:text-green transition-colors duration-200 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Health Insurance
              </Link>
              <Link 
                href="/life-insurance" 
                className="text-white hover:text-green transition-colors duration-200 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Life Insurance
              </Link>
              <Link 
                href="/ichra" 
                className="text-white hover:text-green transition-colors duration-200 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Group Health
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-green transition-colors duration-200 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="bg-green text-navy px-6 py-2.5 rounded-lg font-semibold hover:bg-green-light transition-colors duration-200 shadow-md text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
