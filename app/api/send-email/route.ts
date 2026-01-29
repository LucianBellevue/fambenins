import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Configure route for Node.js runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60; // Maximum execution time in seconds

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === '') {
    console.error('[send-email] RESEND_API_KEY is missing or empty');
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact support.' },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const formData = await request.formData();

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const coverageType = formData.get('coverageType') as string;
    const businessName = formData.get('businessName') as string;
    const businessAddress = formData.get('businessAddress') as string;
    const numberOfEmployees = formData.get('numberOfEmployees') as string;
    const familySize = formData.get('familySize') as string;
    const currentlyInsured = formData.get('currentlyInsured') as string;
    const budget = formData.get('budget') as string;
    const careerPosition = formData.get('careerPosition') as string;
    const message = formData.get('message') as string;
    const resumeFile = formData.get('resume') as File | null;

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

    // Add career application information
    if (coverageType === 'career' && careerPosition) {
      emailContent += `
        <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">Career Application</h3>
          <p><strong>Position:</strong> ${careerPosition}</p>
          ${resumeFile ? `<p><strong>Resume:</strong> ${resumeFile.name} (${(resumeFile.size / 1024).toFixed(2)} KB)</p>` : ''}
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

    // Prepare email options
    interface EmailOptions {
      from: string;
      to: string[];
      subject: string;
      html: string;
      replyTo: string;
      attachments?: Array<{
        filename: string;
        content: Buffer;
      }>;
    }

    const emailOptions: EmailOptions = {
      from: 'Family Benefits Center <onboarding@resend.dev>',
      to: ['services@familybenefitscenter.com'],
      subject: coverageType === 'career'
        ? `Career Application: ${careerPosition} - ${firstName} ${lastName}`
        : `New ${coverageType.replace('-', ' ').toUpperCase()} Inquiry from ${firstName} ${lastName}`,
      html: emailContent,
      replyTo: email,
    };

    // Add attachment if resume file exists
    if (resumeFile) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      emailOptions.attachments = [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ];
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error('[send-email] Resend error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email' },
        { status: 502 }
      );
    }

    console.log('[send-email] Resend success:', { id: data?.id, to: emailOptions.to, subject: emailOptions.subject });

    // Generate unique transaction ID for postback
    const transactionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Build vendor postback URL with lead data so vendor can verify submitted data
    const postbackParams = new URLSearchParams({
      nid: '2291',
      transaction_id: transactionId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      coverage_type: coverageType,
    });
    // Add optional fields if present (URL-safe)
    if (businessName) postbackParams.set('business_name', businessName);
    if (numberOfEmployees) postbackParams.set('number_of_employees', numberOfEmployees);
    if (familySize) postbackParams.set('family_size', familySize);
    if (careerPosition) postbackParams.set('career_position', careerPosition);

    const postbackUrl = `https://www.fnuyz5etrk.com/?${postbackParams.toString()}`;

    // Fire postback asynchronously without waiting for response
    fetch(postbackUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'FamilyBenefitsCenter/1.0',
      },
    })
      .then((response) => {
        console.log(`[send-email] Postback fired: ${response.status} - transaction_id=${transactionId}`);
      })
      .catch((err) => {
        console.error('[send-email] Postback error:', err);
        // Don't fail the main request if postback fails
      });

    return NextResponse.json({
      success: true,
      data,
      transactionId,
    });
  } catch (error) {
    console.error('[send-email] Unexpected error:', error);
    const message = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

/** GET: Check if email service (Resend) is configured. Use before vendor test. */
export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  const configured = Boolean(apiKey && apiKey.trim() !== '');
  if (!configured) {
    return NextResponse.json({ configured: false, error: 'RESEND_API_KEY not set' }, { status: 503 });
  }
  return NextResponse.json({ configured: true });
}
