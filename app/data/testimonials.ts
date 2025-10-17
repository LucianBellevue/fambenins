// Testimonials Data
// Add, edit, or remove testimonials here

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number; // 1-5
  text: string;
  coverageType: 'health' | 'life' | 'group' | 'ichra' | 'multiple';
  date: string; // Format: "Month Year" e.g., "January 2024"
  featured?: boolean; // Show on homepage or featured sections
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Indianapolis, IN',
    rating: 5,
    text: 'Family Benefits Center made finding health insurance so easy! They took the time to understand my family\'s needs and found us a plan that fits our budget perfectly. The team is knowledgeable, responsive, and genuinely cares about their clients.',
    coverageType: 'health',
    date: 'September 2024',
    featured: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Carmel, IN',
    rating: 5,
    text: 'I was overwhelmed trying to navigate life insurance options on my own. The agents at Family Benefits Center explained everything clearly and helped me choose a policy that gives me peace of mind knowing my family is protected.',
    coverageType: 'life',
    date: 'August 2024',
    featured: true,
  },
  {
    id: 3,
    name: 'Jennifer Martinez',
    location: 'Fishers, IN',
    rating: 5,
    text: 'As a small business owner, offering health benefits to my employees seemed impossible until I found Family Benefits Center. Their ICHRA solution was perfect for us—affordable and flexible. My team loves having the freedom to choose their own plans!',
    coverageType: 'ichra',
    date: 'October 2024',
    featured: true,
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Noblesville, IN',
    rating: 5,
    text: 'Exceptional service from start to finish. They answered all my questions, compared multiple options, and never pressured me. I felt like I was working with a trusted advisor, not just an insurance salesperson.',
    coverageType: 'health',
    date: 'July 2024',
    featured: false,
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    location: 'Westfield, IN',
    rating: 5,
    text: 'The team at Family Benefits Center went above and beyond to help me during open enrollment. They made the process stress-free and found me better coverage at a lower price than I was paying before. Highly recommend!',
    coverageType: 'health',
    date: 'June 2024',
    featured: false,
  },
  {
    id: 6,
    name: 'Robert Williams',
    location: 'Zionsville, IN',
    rating: 5,
    text: 'I needed group health insurance for my growing company, and Family Benefits Center delivered. They handled all the details, negotiated great rates, and made enrollment seamless for my employees. Couldn\'t be happier!',
    coverageType: 'group',
    date: 'September 2024',
    featured: true,
  },
  {
    id: 7,
    name: 'Amanda Foster',
    location: 'Greenwood, IN',
    rating: 5,
    text: 'After losing my job, I was terrified about losing health coverage. Family Benefits Center helped me find an affordable individual plan quickly. They were compassionate, patient, and incredibly helpful during a stressful time.',
    coverageType: 'health',
    date: 'May 2024',
    featured: false,
  },
  {
    id: 8,
    name: 'James Patterson',
    location: 'Avon, IN',
    rating: 5,
    text: 'I\'ve worked with several insurance brokers over the years, and Family Benefits Center is by far the best. They\'re honest, transparent, and always available when I have questions. They truly put their clients first.',
    coverageType: 'multiple',
    date: 'August 2024',
    featured: false,
  },
  {
    id: 9,
    name: 'Lisa Anderson',
    location: 'Plainfield, IN',
    rating: 5,
    text: 'The life insurance policy they helped me set up gives me such peace of mind. The agent explained everything in terms I could understand and made sure I got the right coverage for my family\'s future.',
    coverageType: 'life',
    date: 'July 2024',
    featured: false,
  },
  {
    id: 10,
    name: 'Kevin Brown',
    location: 'Brownsburg, IN',
    rating: 5,
    text: 'Family Benefits Center saved our small business thousands on health insurance. Their ICHRA solution was innovative and perfect for our needs. The implementation was smooth, and they provided excellent ongoing support.',
    coverageType: 'ichra',
    date: 'October 2024',
    featured: false,
  },
];

// Helper functions to filter testimonials

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(t => t.featured);
};

export const getTestimonialsByCoverage = (coverageType: Testimonial['coverageType']): Testimonial[] => {
  return testimonials.filter(t => t.coverageType === coverageType);
};

export const getRecentTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials.slice(0, count);
};

export const getAllTestimonials = (): Testimonial[] => {
  return testimonials;
};
