# Family Benefits Center - Setup Guide

## Environment Variables

This application requires environment variables to function properly.

### Required Environment Variables

#### 1. RESEND_API_KEY

The application uses [Resend](https://resend.com) to send emails from the contact form.

**Setup Steps:**

1. Go to [https://resend.com](https://resend.com) and create an account
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key

**Local Development:**
- Create a `.env.local` file in the root directory
- Add: `RESEND_API_KEY=your_api_key_here`

**Vercel Deployment:**
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key
   - **Environment:** Production, Preview, Development (select all)
4. Redeploy your application

### Verifying Email Setup

After setting up the environment variable:

1. **Test locally:**
   ```bash
   npm run dev
   ```
   Navigate to `/contact` and submit a test form

2. **Check Vercel logs:**
   - Go to your Vercel deployment
   - Click on "Functions" tab
   - Check the logs for `/api/send-email` route

### Troubleshooting

**Error: "There was an error submitting your request"**

Possible causes:
1. Missing `RESEND_API_KEY` environment variable
2. Invalid Resend API key
3. Resend account not verified
4. Email domain not verified in Resend (for production use)

**Solution:**
- Check browser console for detailed error message
- Verify environment variable is set in Vercel
- Check Resend dashboard for API key status
- For production, verify your sending domain in Resend

### Email Configuration

The contact form sends emails to: `services@familybenefitscenter.com`

To change the recipient email:
- Edit `app/api/send-email/route.ts`
- Update line 126: `to: ['your-email@example.com']`

### Development vs Production

**Development (localhost):**
- Uses `.env.local` file
- Sends from `onboarding@resend.dev` (Resend's test domain)

**Production (Vercel):**
- Uses Vercel environment variables
- Should use a verified domain for better deliverability
- Configure in Resend dashboard: Domains → Add Domain

## Additional Notes

- The `.env.local` file is gitignored for security
- Never commit API keys to version control
- Use `.env.example` as a template for required variables
