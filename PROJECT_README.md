# FamBenIns - Insurance Agency Website

A modern, professional insurance agency website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Design System

### Color Palette
- **Navy Blue**: `#1e3a5f` - Primary brand color
- **Green**: `#10b981` - Accent and CTA color
- **Green Light**: `#34d399` - Hover states

### Typography
- **Headings**: Geist Sans (bold)
- **Body**: Geist Sans (regular)
- **Code**: Geist Mono

## 📁 Project Structure

```
fambenins/
├── app/
│   ├── components/
│   │   ├── Header.tsx      # Main navigation header
│   │   ├── Hero.tsx        # Homepage hero section
│   │   ├── CTA.tsx         # Call-to-action section
│   │   └── Footer.tsx      # Site footer
│   ├── globals.css         # Global styles & theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🧩 Components

### Header
- Responsive navigation with mobile menu
- Sticky positioning
- Links to all main service pages
- Prominent "Get a Quote" CTA button

### Hero
- Gradient background with pattern overlay
- Trust indicators (Licensed, No Fees, Fast Approval)
- Statistics cards (Families Protected, Business Clients, etc.)
- Dual CTA buttons
- Wave divider for smooth transition

### Services Section
- Three main service cards (Health, Life, ICHRA)
- Icon-based visual hierarchy
- Hover effects for interactivity
- Direct links to service pages

### Why Choose Us
- Four key value propositions
- Icon-based design
- Grid layout for easy scanning

### CTA (Call-to-Action)
- Split layout with content and testimonial
- Benefit checklist with checkmarks
- Multiple conversion paths (form, phone)
- Social proof with star rating

### Footer
- Four-column layout
- Service links
- Company information
- Contact details with icons
- Social media links
- Legal links (Privacy, Terms, etc.)

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Accessible navigation
- ✅ SEO-optimized structure
- ✅ Fast page loads with Next.js
- ✅ Type-safe with TypeScript
- ✅ Modern UI with Tailwind CSS

## 📄 Pages to Build

### Priority 1 (Essential)
- [ ] Contact/Quote Form (`/contact`)
- [ ] Health Insurance (`/health-insurance`)
- [ ] Life Insurance (`/life-insurance`)
- [ ] ICHRA Solutions (`/ichra`)
- [ ] About Us (`/about`)

### Priority 2 (Important)
- [ ] Testimonials (`/testimonials`)
- [ ] FAQ (`/faq`)
- [ ] Blog/Resources (`/blog`)
- [ ] Privacy Policy (`/privacy`)
- [ ] Terms of Service (`/terms`)

### Priority 3 (Nice to Have)
- [ ] Medicare Plans (`/medicare`)
- [ ] Dental & Vision (`/dental-vision`)
- [ ] Team Page (`/team`)
- [ ] Careers (`/careers`)
- [ ] Client Portal (`/portal`)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for sensitive data:

```env
# Email Service
SENDGRID_API_KEY=your_key_here
CONTACT_EMAIL=info@fambenins.com

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# CRM Integration
HUBSPOT_API_KEY=your_key_here
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Update Colors
Edit `app/globals.css`:

```css
:root {
  --navy: #1e3a5f;      /* Change primary color */
  --green: #10b981;      /* Change accent color */
  --green-light: #34d399; /* Change hover color */
}
```

### Update Company Info
Edit `app/components/Footer.tsx`:
- Company name and tagline
- Contact information
- Social media links
- Service area

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Use AWS console
- **Digital Ocean**: Use App Platform

## 📊 Performance

- Lighthouse Score Target: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🔒 Security

- HTTPS required (SSL certificate)
- CAPTCHA on forms (prevent spam)
- Input validation and sanitization
- HIPAA-compliant form handling
- Secure environment variables

## 📈 SEO Checklist

- [x] Semantic HTML structure
- [x] Meta descriptions
- [x] Title tags
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Structured data (Schema.org)

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📞 Support

For questions or issues:
- Email: dev@fambenins.com
- Phone: (555) 123-4567

## 📝 License

Copyright © 2024 FamBenIns. All rights reserved.

---

**Built with ❤️ using Next.js 15**
