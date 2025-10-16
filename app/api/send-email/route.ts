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

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !coverageType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Build email content based on coverage type
    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a5f; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Coverage Type:</strong> <span style="background-color: #10b981; color: white; padding: 4px 8px; border-radius: 4px;">${coverageType}</span></p>
        </div>
    `;

    // Add business information for group health
    if (coverageType === 'group-health' && businessName) {
      emailContent += `
        <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">Business Information</h3>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Number of Employees:</strong> ${numberOfEmployees}</p>
          ${businessAddress ? `<p><strong>Business Address:</strong> ${businessAddress}</p>` : ''}
        </div>
      `;
    }

    // Add individual/family information
    if (coverageType === 'individual-health' && familySize) {
      emailContent += `
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">Individual/Family Information</h3>
          <p><strong>Family Size:</strong> ${familySize}</p>
          ${currentlyInsured ? `<p><strong>Currently Insured:</strong> ${currentlyInsured}</p>` : ''}
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        </div>
      `;
    }

    // Add message if provided
    if (message) {
      emailContent += `
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">Additional Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `;
    }

    emailContent += `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the Family Benefits Center contact form.</p>
          <p>Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
        </div>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Family Benefits Center <onboarding@resend.dev>',
      to: ['services@familybenefitscenter.com'],
      subject: `New ${coverageType.replace('-', ' ').toUpperCase()} Inquiry from ${firstName} ${lastName}`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
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
