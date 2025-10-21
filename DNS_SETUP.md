# DNS Setup Guide - Resend Email Configuration

## Overview
This guide helps you configure DNS records in GoDaddy to verify your domain with Resend for sending emails.

## Quick Steps

### 1. Get DNS Records from Resend
1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter: `familybenefitscenter.com`
4. Copy all the DNS records shown

### 2. Add Records in GoDaddy

**Login:** [GoDaddy DNS Management](https://dcc.godaddy.com/)

#### Record Types You'll Need to Add:

| Type | Name | Value | Priority | TTL |
|------|------|-------|----------|-----|
| TXT | @ | `resend-verification=xxxxx` | - | 600 |
| TXT | @ | `v=spf1 include:amazonses.com ~all` | - | 600 |
| TXT | _dmarc | `v=DMARC1; p=none` | - | 600 |
| MX | @ | `feedback-smtp.us-east-1.amazonses.com` | 10 | 600 |
| CNAME | resend._domainkey | `resend._domainkey.resend.com` | - | 600 |

**Note:** The exact values will be provided by Resend. Use the values from your Resend dashboard.

### 3. GoDaddy Instructions

#### Adding TXT Records:
1. Click **"Add"** button
2. Select **"TXT"** from dropdown
3. **Name:** Enter the name from Resend (usually `@` or `_dmarc`)
4. **Value:** Paste the entire value from Resend
5. **TTL:** 600 seconds
6. Click **"Save"**

#### Adding MX Record:
1. Click **"Add"** button
2. Select **"MX"** from dropdown
3. **Name:** `@`
4. **Priority:** `10`
5. **Value:** `feedback-smtp.us-east-1.amazonses.com`
6. **TTL:** 600 seconds
7. Click **"Save"**

#### Adding CNAME Record:
1. Click **"Add"** button
2. Select **"CNAME"** from dropdown
3. **Name:** `resend._domainkey`
4. **Value:** `resend._domainkey.resend.com`
5. **TTL:** 600 seconds
6. Click **"Save"**

### 4. Verify Domain

1. **Wait 5-15 minutes** for DNS propagation
2. Go back to [Resend Domains](https://resend.com/domains)
3. Click **"Verify"** button next to your domain
4. Status should change to **"Verified"** ✅

### 5. Test Email Sending

After verification:
1. Deploy your updated code to Vercel
2. Test the contact form at `/contact`
3. Check that emails are sent from `noreply@familybenefitscenter.com`

## Troubleshooting

### DNS Not Propagating
- Wait longer (can take up to 24-48 hours in rare cases)
- Use [DNS Checker](https://dnschecker.org/) to verify propagation
- Check for typos in DNS records

### Verification Failing
- Double-check all values match exactly
- Ensure no extra spaces in values
- Make sure TTL is not too high (use 600)

### Emails Not Sending
- Verify domain status is "Verified" in Resend
- Check Resend API key is set in Vercel environment variables
- Check Vercel function logs for errors

## Important Notes

⚠️ **Do NOT delete existing DNS records** unless you're sure they're not needed
⚠️ **MX records affect email delivery** - be careful if you use email with this domain
⚠️ **Keep SPF record** - it prevents email spoofing

## Email Addresses

After setup, you can send from any address at your domain:
- `noreply@familybenefitscenter.com` (current)
- `contact@familybenefitscenter.com`
- `info@familybenefitscenter.com`

Just update the `from` field in `app/api/send-email/route.ts`

## Support

- **Resend Docs:** https://resend.com/docs/dashboard/domains/introduction
- **GoDaddy Support:** https://www.godaddy.com/help/manage-dns-records-680
