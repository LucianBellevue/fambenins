# Contact Form Email Setup Guide

## Overview

There are several ways to send emails from your Next.js contact form. Here are the best options ranked by ease of implementation:

## Option 1: Resend (Recommended - Easiest)

**Pros:**
- ✅ Free tier: 3,000 emails/month
- ✅ Easy setup (5 minutes)
- ✅ Official Next.js partner
- ✅ Great deliverability
- ✅ Simple API

**Cons:**
- ❌ Requires API key

### Setup Steps

#### 1. Install Resend

```bash
npm install resend
```

#### 2. Get API Key

1. Go to https://resend.com/signup
2. Sign up (free)
3. Verify your email
4. Get your API key from dashboard

#### 3. Add to Environment Variables

Create `.env.local`:

```env
RESEND_API_KEY=re_your_api_key_here
```

#### 4. Create API Route

Create `app/api/send-email/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      firstName,
      lastName,
      email,
      phone,
      coverageType,
      businessName,
      businessAddress,
      numberOfEmployees,
      familySize,
      currentlyInsured,
      budget,
      message,
    } = body;

    // Build email content based on coverage type
    let emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Coverage Type:</strong> ${coverageType}</p>
    `;

    if (coverageType === 'group-health' && businessName) {
      emailContent += `
        <h3>Business Information</h3>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Number of Employees:</strong> ${numberOfEmployees}</p>
        <p><strong>Business Address:</strong> ${businessAddress}</p>
      `;
    }

    if (coverageType === 'individual-health' && familySize) {
      emailContent += `
        <h3>Individual/Family Information</h3>
        <p><strong>Family Size:</strong> ${familySize}</p>
        <p><strong>Currently Insured:</strong> ${currentlyInsured || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      `;
    }

    if (message) {
      emailContent += `
        <h3>Additional Message</h3>
        <p>${message}</p>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: 'Family Benefits Center <onboarding@resend.dev>', // Change after domain verification
      to: ['services@familybenefitscenter.com'],
      subject: `New ${coverageType} Inquiry from ${firstName} ${lastName}`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

#### 5. Update Contact Form

Update `app/contact/page.tsx` handleSubmit:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
        message: '',
      });
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
```

#### 6. Domain Verification (Optional but Recommended)

To use your own domain in "from" address:
1. Add your domain in Resend dashboard
2. Add DNS records they provide
3. Change from address to: `noreply@familybenefitscenter.com`

---

## Option 2: EmailJS (No Backend Required)

**Pros:**
- ✅ Free tier: 200 emails/month
- ✅ No backend code needed
- ✅ Works client-side
- ✅ Very easy setup

**Cons:**
- ❌ API key exposed in frontend (less secure)
- ❌ Lower free tier limit

### Setup Steps

#### 1. Install EmailJS

```bash
npm install @emailjs/browser
```

#### 2. Setup EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up (free)
3. Create email service (Gmail, Outlook, etc.)
4. Create email template
5. Get your Public Key, Service ID, and Template ID

#### 3. Update Contact Form

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        coverage_type: formData.coverageType,
        business_name: formData.businessName,
        employees: formData.numberOfEmployees,
        message: formData.message,
        // Add other fields as needed
      },
      'YOUR_PUBLIC_KEY'
    );

    setSubmitStatus('success');
    // Reset form
  } catch (error) {
    setSubmitStatus('error');
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Option 3: Nodemailer (Full Control)

**Pros:**
- ✅ Free (use your own SMTP)
- ✅ Full control
- ✅ No third-party service

**Cons:**
- ❌ More complex setup
- ❌ Need SMTP credentials
- ❌ Deliverability can be tricky

### Setup Steps

#### 1. Install Nodemailer

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

#### 2. Create API Route

Create `app/api/send-email/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Coverage Type:</strong> ${body.coverageType}</p>
      ${body.message ? `<p><strong>Message:</strong> ${body.message}</p>` : ''}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'services@familybenefitscenter.com',
      subject: `New ${body.coverageType} Inquiry`,
      html: emailContent,
      replyTo: body.email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

#### 3. Environment Variables

`.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@familybenefitscenter.com
```

**For Gmail:**
- Enable 2-factor authentication
- Create App Password: https://myaccount.google.com/apppasswords
- Use App Password in SMTP_PASS

---

## Option 4: SendGrid

**Pros:**
- ✅ Free tier: 100 emails/day
- ✅ Excellent deliverability
- ✅ Professional service

**Cons:**
- ❌ Requires API key
- ❌ More setup than Resend

### Setup Steps

#### 1. Install SendGrid

```bash
npm install @sendgrid/mail
```

#### 2. Create API Route

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const msg = {
      to: 'services@familybenefitscenter.com',
      from: 'noreply@familybenefitscenter.com', // Must be verified
      subject: `New ${body.coverageType} Inquiry`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
      `,
      replyTo: body.email,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

---

## Recommendation

**For your use case, I recommend Option 1 (Resend):**

1. **Easy setup** - 5 minutes
2. **Generous free tier** - 3,000 emails/month
3. **Great deliverability** - Emails won't go to spam
4. **Professional** - Official Next.js partner
5. **Secure** - API key stays on server

## Security Best Practices

### Environment Variables
- ✅ Never commit `.env.local` to git
- ✅ Add to `.gitignore`
- ✅ Use different keys for dev/production

### Rate Limiting
Add rate limiting to prevent abuse:

```typescript
// Simple rate limiting example
const rateLimit = new Map();

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 3;

  const requests = rateLimit.get(ip) || [];
  const recentRequests = requests.filter((time: number) => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);

  // Continue with email sending...
}
```

### Input Validation
Validate all inputs before sending:

```typescript
if (!body.email || !body.firstName || !body.lastName) {
  return NextResponse.json(
    { error: 'Missing required fields' },
    { status: 400 }
  );
}

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(body.email)) {
  return NextResponse.json(
    { error: 'Invalid email address' },
    { status: 400 }
  );
}
```

## Testing

### Local Testing
1. Set up environment variables
2. Run dev server: `npm run dev`
3. Submit test form
4. Check email inbox

### Production Testing
1. Deploy to Vercel/Netlify
2. Add environment variables in dashboard
3. Submit test form
4. Verify email delivery

## Troubleshooting

### Emails Not Sending
- ✅ Check API key is correct
- ✅ Check environment variables are set
- ✅ Check console for errors
- ✅ Verify email service is active

### Emails Going to Spam
- ✅ Verify domain (Resend/SendGrid)
- ✅ Add SPF/DKIM records
- ✅ Use professional "from" address
- ✅ Avoid spam trigger words

### API Route Not Found
- ✅ Check file is in `app/api/send-email/route.ts`
- ✅ Restart dev server
- ✅ Check fetch URL matches route

## Next Steps

1. Choose email service (Resend recommended)
2. Sign up and get API key
3. Install package
4. Create API route
5. Update contact form
6. Test thoroughly
7. Deploy

Would you like me to implement the Resend solution for you?
