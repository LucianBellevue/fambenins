'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import { HiPhone, HiMail } from 'react-icons/hi';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverageType: '',
    // Group Health Plan fields
    businessName: '',
    businessAddress: '',
    numberOfEmployees: '',
    // Individual Health Plan fields
    familySize: '',
    currentlyInsured: '',
    budget: '',
    // Career Application fields
    careerPosition: '',
    message: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Validate file type and size
      if (file.type === 'application/pdf' && file.size <= 5 * 1024 * 1024) {
        setResumeFile(file);
      } else {
        alert('Please upload a PDF file under 5MB');
        e.target.value = '';
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      // Append resume file if exists
      if (resumeFile) {
        formDataToSend.append('resume', resumeFile);
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          coverageType: '',
          businessName: '',
          businessAddress: '',
          numberOfEmployees: '',
          familySize: '',
          currentlyInsured: '',
          budget: '',
          careerPosition: '',
          message: '',
        });
        setResumeFile(null);
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your quote request has been received. One of our licensed agents will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-light transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-2">Contact Information</h2>
                  <p className="text-gray-600">Let us know how to reach you</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder="(463) 263-3583"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-2">Coverage Details</h2>
                  <p className="text-gray-600">Help us understand your insurance needs</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="coverageType" className="block text-sm font-semibold text-navy mb-2">
                      Type of Coverage *
                    </label>
                    <select
                      id="coverageType"
                      name="coverageType"
                      value={formData.coverageType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900"
                    >
                      <option value="">Select coverage type</option>
                      <option value="group-health">Group Health Plan</option>
                      <option value="individual-health">Individual Health Plan</option>
                      <option value="life">Life Insurance</option>
                      <option value="multiple">Multiple Types</option>
                      <option value="career">Career Application</option>
                    </select>
                  </div>
                </div>

                {/* Conditional Fields for Career Application */}
                {formData.coverageType === 'career' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="careerPosition" className="block text-sm font-semibold text-navy mb-2">
                          Position Applying For *
                        </label>
                        <select
                          id="careerPosition"
                          name="careerPosition"
                          value={formData.careerPosition}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900"
                        >
                          <option value="">Select position</option>
                          <option value="licensed-insurance-agent">Licensed Insurance Agent</option>
                          <option value="customer-service-representative">Customer Service Representative</option>
                          <option value="marketing-coordinator">Marketing Coordinator</option>
                          <option value="other">Other Position</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="resume" className="block text-sm font-semibold text-navy mb-2">
                          Upload Resume (PDF) *
                        </label>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf"
                          onChange={handleFileChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green file:text-navy hover:file:bg-green-light"
                        />
                        <p className="text-xs text-gray-500 mt-1">PDF only, max 5MB</p>
                      </div>
                    </div>
                  </>
                )}

                {/* Conditional Fields for Group Health Plan */}
                {formData.coverageType === 'group-health' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-semibold text-navy mb-2">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
                          placeholder="ABC Company Inc."
                        />
                      </div>
                      <div>
                        <label htmlFor="numberOfEmployees" className="block text-sm font-semibold text-navy mb-2">
                          Number of Employees *
                        </label>
                        <select
                          id="numberOfEmployees"
                          name="numberOfEmployees"
                          value={formData.numberOfEmployees}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900"
                        >
                          <option value="">Select number of employees</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-25">11-25 employees</option>
                          <option value="26-50">26-50 employees</option>
                          <option value="51-100">51-100 employees</option>
                          <option value="100+">100+ employees</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="businessAddress" className="block text-sm font-semibold text-navy mb-2">
                        Business Address *
                      </label>
                      <input
                        type="text"
                        id="businessAddress"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
                        placeholder="123 Business St, City, State, ZIP"
                      />
                    </div>
                  </>
                )}

                {/* Conditional Fields for Individual Health Plan */}
                {formData.coverageType === 'individual-health' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="familySize" className="block text-sm font-semibold text-navy mb-2">
                          Family Size *
                        </label>
                        <select
                          id="familySize"
                          name="familySize"
                          value={formData.familySize}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900"
                        >
                          <option value="">Select family size</option>
                          <option value="individual">Individual</option>
                          <option value="couple">Couple</option>
                          <option value="family-3">Family of 3</option>
                          <option value="family-4">Family of 4</option>
                          <option value="family-5plus">Family of 5+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="currentlyInsured" className="block text-sm font-semibold text-navy mb-2">
                          Currently Insured?
                        </label>
                        <select
                          id="currentlyInsured"
                          name="currentlyInsured"
                          value={formData.currentlyInsured}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900"
                        >
                          <option value="">Select option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="expired">Coverage Expired</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-navy mb-2">
                          Monthly Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-200">Under $200</option>
                          <option value="200-400">$200 - $400</option>
                          <option value="400-600">$400 - $600</option>
                          <option value="600-800">$600 - $800</option>
                          <option value="800-plus">$800+</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
                    placeholder="Tell us more about your insurance needs, any specific concerns, or questions you have..."
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div className="text-sm text-gray-600">
                      <p className="font-semibold text-navy mb-1">Your Privacy Matters</p>
                      <p>
                        We respect your privacy and will never sell your information. By submitting this form, you agree to be contacted by our licensed agents regarding insurance options.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-light transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Get My Free Quote'
                  )}
                </button>
              </form>
            )}
          </div>

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
