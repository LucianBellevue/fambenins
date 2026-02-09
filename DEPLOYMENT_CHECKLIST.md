# Vercel Deployment Checklist

## Security Update - CVE-2025-66478 FIXED ✅
- **Updated Next.js from 15.5.5 → 16.0.8** to fix critical security vulnerability
- All npm vulnerabilities resolved (0 vulnerabilities)
- Build tested and passing ✅

## Changes Made to Fix Deployment Issues

### 1. **API Route Configuration** (`app/api/send-email/route.ts`)
- Added `export const runtime = 'nodejs'` to explicitly use Node.js runtime
- Added `export const dynamic = 'force-dynamic'` to prevent static optimization
- Added `export const maxDuration = 60` for longer execution time (file uploads + email sending)

### 2. **Next.js Configuration** (`next.config.ts`)
- Added `bodySizeLimit: '10mb'` for handling file uploads
- Disabled `poweredByHeader` for security

### 3. **Vercel Configuration** (`vercel.json`)
- Added explicit `buildCommand`
- Configured function `maxDuration: 60` for API routes

## Pre-Deployment Checklist

### ✅ Required Environment Variables
Make sure these are set in your Vercel project settings:

1. **RESEND_API_KEY** - Your Resend API key from https://resend.com/api-keys
2. **LEAD_EMAIL_TO** (optional) - Where lead form emails are sent. Defaults to `advisor@familybenefitscenter.com` if not set.
3. **RESEND_FROM_EMAIL** (optional) - Sender for lead emails. With domain verified, use e.g. `Family Benefits Center <noreply@familybenefitscenter.com>`. If unset, app uses `noreply@familybenefitscenter.com` (ensure this address is verified in Resend).

To add environment variables in Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add `RESEND_API_KEY` with your actual API key
4. Select all environments (Production, Preview, Development)
5. Click "Save"

### ✅ Vercel Project Settings

1. **Framework Preset**: Should auto-detect as "Next.js"
2. **Build Command**: `npm run build` (now explicit in vercel.json)
3. **Install Command**: `npm install`
4. **Output Directory**: Leave as default (`.next`)
5. **Node.js Version**: Should auto-detect from Next.js (20.x)

### ✅ Resend: Sending to advisor@familybenefitscenter.com (familybenefitscenter.com domain)

The site uses **advisor@familybenefitscenter.com** as the primary contact and lead-form recipient. Lead form submissions are sent to this address via Resend.

**With your domain verified in Resend** (familybenefitscenter.com):

1. The app sends **from** `Family Benefits Center <noreply@familybenefitscenter.com>` by default (override with **`RESEND_FROM_EMAIL`** in Vercel if needed).
2. Lead emails are sent **to** `advisor@familybenefitscenter.com` (override with **`LEAD_EMAIL_TO`** in Vercel if needed).
3. Ensure **RESEND_API_KEY** is set in Vercel. No need to “add” the recipient in Resend; once the domain is verified, you can send to any address at your domain.

**If you have not yet verified the domain:** Add and verify `familybenefitscenter.com` in [Resend → Domains](https://resend.com/domains) (SPF + DKIM), then send from an address on that domain. Until then, Resend may restrict who can receive test emails.

## Common Deployment Issues & Solutions

### Issue 1: "Module not found" errors
**Solution**: Ensure all dependencies are in `package.json` and not in `devDependencies`
- `resend` ✅ (already in dependencies)
- `@react-email/render` ✅ (already in dependencies)

### Issue 2: Function timeout errors
**Solution**: Already fixed with `maxDuration: 60` in both route.ts and vercel.json

### Issue 3: Environment variables not working
**Solution**:
- Double-check variable names match exactly (case-sensitive)
- Redeploy after adding/changing environment variables
- Check the deployment logs for missing variables

### Issue 4: API route returning 404
**Solution**:
- Verify the route is at `app/api/send-email/route.ts`
- Check that the file exports `POST` function
- Clear Vercel build cache and redeploy

### Issue 5: Build fails with TypeScript errors
**Solution**: Already tested - build passes locally ✅

## Deployment Steps

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Fix Vercel deployment configuration"
   git push origin main
   ```

2. **In Vercel Dashboard**:
   - If first deployment: Import your repository
   - If redeployment: It should auto-deploy on push
   - Or manually trigger: Go to Deployments → click "..." → "Redeploy"

3. **Check Deployment Logs**:
   - Click on the deployment in progress
   - Review build logs for any errors
   - Check function logs for runtime errors

4. **Test the Deployment**:
   - Visit your deployed site
   - Go to the contact form
   - Submit a test form
   - Check if email is sent successfully

## Debugging Failed Deployments

If deployment still fails, check these logs:

1. **Build Logs**: Shows compilation and build-time errors
2. **Function Logs**: Shows runtime errors in API routes
3. **Runtime Logs**: Real-time logs when API is called

Look for specific error messages related to:
- Missing dependencies
- TypeScript compilation errors
- Environment variable issues
- API route timeout issues
- File size limits exceeded

## Need More Help?

Share the specific error message from Vercel deployment logs for targeted assistance.
