# Migrating from Wix to Next.js - Deployment Guide

## Current Situation

- **Old Site:** Wix hosting with `familybenefitscenter.com` domain
- **New Site:** Next.js application (ready to deploy)
- **Goal:** Replace Wix site with new Next.js site using same domain

## Best Deployment Options (Ranked)

---

## Option 1: Vercel (Recommended - Easiest)

**Why Vercel:**
- ✅ **Built for Next.js** - Created by Next.js team
- ✅ **Free tier** - Perfect for your site
- ✅ **Automatic deployments** - Push to GitHub = auto deploy
- ✅ **Edge network** - Fast worldwide
- ✅ **Zero config** - Just works
- ✅ **Free SSL** - Automatic HTTPS
- ✅ **Easy domain setup** - Simple DNS configuration

### Setup Steps

#### 1. Push Code to GitHub

```bash
# Initialize git (if not already done)
cd c:/Users/romeo/OneDrive/Desktop/FamBen/fambenins
git init
git add .
git commit -m "Initial commit - Family Benefits Center"

# Create GitHub repo and push
# Go to github.com and create new repository
git remote add origin https://github.com/YOUR_USERNAME/family-benefits-center.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

1. **Go to:** https://vercel.com/signup
2. **Sign up** with GitHub
3. **Import project:**
   - Click "Add New Project"
   - Select your GitHub repo
   - Click "Import"

4. **Configure:**
   - Framework: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

5. **Add Environment Variable:**
   - Key: `RESEND_API_KEY`
   - Value: `re_EKM73Zak_Ltmg5Dry7mgvoabgGWg95v5k`

6. **Deploy** - Click "Deploy"

#### 3. Connect Your Domain

**In Vercel Dashboard:**

1. Go to your project
2. Click "Settings" → "Domains"
3. Add domain: `familybenefitscenter.com`
4. Vercel will show DNS records to add

**In Wix (or Domain Registrar):**

**Option A: Use Nameservers (Recommended)**
1. Go to Wix domain settings
2. Change nameservers to Vercel's:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Wait 24-48 hours for propagation

**Option B: Use DNS Records**
1. Keep Wix nameservers
2. Add Vercel's DNS records:
   - **A Record:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`
3. Wait 1-24 hours for propagation

#### 4. Test & Go Live

1. **Test staging URL:** `your-project.vercel.app`
2. **Verify domain:** `familybenefitscenter.com`
3. **Test contact form** - Submit and check email
4. **Check all pages** - Navigation, links, images
5. **Mobile test** - Responsive design

**Total Time:** 30-60 minutes

---

## Option 2: Netlify (Great Alternative)

**Why Netlify:**
- ✅ **Free tier** - Generous limits
- ✅ **Easy deployment** - Similar to Vercel
- ✅ **Form handling** - Built-in form support
- ✅ **Edge network** - Fast delivery
- ✅ **Free SSL** - Automatic HTTPS

### Setup Steps

#### 1. Push to GitHub (same as Vercel)

#### 2. Deploy to Netlify

1. **Go to:** https://netlify.com/signup
2. **Sign up** with GitHub
3. **New site from Git:**
   - Connect to GitHub
   - Select your repo
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`
     - Framework: Next.js

4. **Add Environment Variable:**
   - `RESEND_API_KEY` = `re_EKM73Zak_Ltmg5Dry7mgvoabgGWg95v5k`

5. **Deploy**

#### 3. Connect Domain

1. Go to "Domain settings"
2. Add custom domain: `familybenefitscenter.com`
3. Follow DNS instructions (similar to Vercel)

**Total Time:** 30-60 minutes

---

## Option 3: Cloudflare Pages (Free & Fast)

**Why Cloudflare:**
- ✅ **Completely free** - No paid tiers
- ✅ **Fastest CDN** - Cloudflare network
- ✅ **Unlimited bandwidth** - No limits
- ✅ **Free SSL** - Automatic HTTPS

### Setup Steps

1. Push to GitHub
2. Go to https://pages.cloudflare.com
3. Connect GitHub repo
4. Configure build:
   - Build command: `npm run build`
   - Output: `.next`
5. Add environment variable
6. Deploy
7. Connect domain (easiest if domain already on Cloudflare)

**Total Time:** 30-60 minutes

---

## Domain Migration Strategy

### Before Migration

**1. Backup Wix Site**
- Export content (if needed)
- Save any important data
- Screenshot pages for reference

**2. Prepare New Site**
- Test thoroughly on staging URL
- Verify all functionality
- Check contact form works
- Test on mobile devices

**3. Plan Downtime**
- DNS changes take 1-48 hours
- Plan for low-traffic time
- Inform team/stakeholders

### During Migration

**1. Lower TTL (Time To Live)**
- In Wix DNS settings
- Set TTL to 300 seconds (5 minutes)
- Wait 24 hours before changing DNS
- This speeds up propagation

**2. Change DNS**
- Add new DNS records
- Keep old site running during propagation
- Monitor both sites

**3. Monitor**
- Check new site is accessible
- Test all functionality
- Monitor email delivery
- Check analytics

### After Migration

**1. Verify Everything**
- All pages load correctly
- Contact form works
- Emails sending
- SSL certificate active
- Mobile responsive

**2. Update External Links**
- Social media profiles
- Google My Business
- Email signatures
- Marketing materials

**3. Cancel Wix**
- Wait 1-2 weeks to ensure stability
- Export any remaining data
- Cancel Wix subscription
- Keep domain registration (if with Wix)

---

## Cost Comparison

### Current (Wix)
- **Hosting:** ~$16-$35/month
- **Domain:** ~$15/year (if with Wix)
- **Total:** ~$192-$420/year

### New (Vercel/Netlify)
- **Hosting:** $0/month (free tier)
- **Domain:** ~$15/year (transfer or keep)
- **Resend:** $0/month (3,000 emails free)
- **Total:** ~$15/year

**Savings:** ~$177-$405/year

---

## Detailed Migration Timeline

### Week 1: Preparation
- ✅ Test new site thoroughly
- ✅ Create GitHub repository
- ✅ Choose hosting platform
- ✅ Sign up for Vercel/Netlify
- ✅ Deploy to staging

### Week 2: Testing
- ✅ Test staging URL
- ✅ Verify all features
- ✅ Test contact form
- ✅ Check mobile responsiveness
- ✅ Get team approval

### Week 3: Migration
- ✅ Lower DNS TTL (Monday)
- ✅ Wait 24 hours
- ✅ Change DNS (Tuesday evening)
- ✅ Monitor propagation
- ✅ Verify new site live

### Week 4: Cleanup
- ✅ Monitor for issues
- ✅ Update external links
- ✅ Verify analytics
- ✅ Cancel Wix (if ready)

---

## DNS Configuration Details

### If Domain Registered with Wix

**Option 1: Transfer Domain Away from Wix**
1. Unlock domain in Wix
2. Get transfer code
3. Transfer to:
   - **Cloudflare** (recommended, $10/year)
   - **Namecheap** ($13/year)
   - **Google Domains** ($12/year)
4. Point to Vercel/Netlify

**Option 2: Keep Domain with Wix**
1. Keep domain registration with Wix
2. Change DNS records to point to Vercel/Netlify
3. Cancel Wix hosting (keep domain)

### If Domain Registered Elsewhere

**Easy!**
1. Log into domain registrar
2. Update DNS records
3. Point to Vercel/Netlify
4. Cancel Wix hosting

---

## Step-by-Step: Vercel Deployment (Recommended)

### Part 1: GitHub Setup (5 minutes)

```bash
# Navigate to project
cd c:/Users/romeo/OneDrive/Desktop/FamBen/fambenins

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Family Benefits Center website"

# Create repo on GitHub (github.com/new)
# Then connect:
git remote add origin https://github.com/YOUR_USERNAME/family-benefits-center.git
git branch -M main
git push -u origin main
```

### Part 2: Vercel Deployment (10 minutes)

1. **Sign up:** https://vercel.com/signup
2. **Import project:** Click "Add New" → "Project"
3. **Connect GitHub:** Authorize Vercel
4. **Select repo:** Choose your repository
5. **Configure:**
   - Framework Preset: Next.js ✅ (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. **Environment Variables:**
   - Click "Add Environment Variable"
   - Key: `RESEND_API_KEY`
   - Value: `re_EKM73Zak_Ltmg5Dry7mgvoabgGWg95v5k`
7. **Deploy:** Click "Deploy"

### Part 3: Domain Connection (15-30 minutes)

**In Vercel:**
1. Go to project dashboard
2. Click "Settings" → "Domains"
3. Enter: `familybenefitscenter.com`
4. Click "Add"
5. Note the DNS records shown

**In Wix:**
1. Go to Wix dashboard
2. Navigate to domain settings
3. Choose one:

**Option A: Change Nameservers (Recommended)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: Add DNS Records**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Save changes
5. Wait for propagation (1-48 hours)

### Part 4: Verification (5 minutes)

1. **Check staging:** `your-project.vercel.app`
2. **Check domain:** `familybenefitscenter.com`
3. **Test features:**
   - Navigation
   - Contact form
   - Email delivery
   - Mobile view
4. **Verify SSL:** Look for 🔒 in browser

---

## Troubleshooting

### Domain Not Connecting

**Issue:** Domain shows Wix site or error
**Solution:**
- Wait longer (DNS can take 48 hours)
- Clear browser cache
- Try incognito mode
- Check DNS propagation: https://dnschecker.org

### Contact Form Not Working

**Issue:** Form submits but no email
**Solution:**
- Check environment variable in Vercel
- Verify Resend API key is correct
- Check Vercel function logs
- Test with staging URL first

### Build Failing

**Issue:** Deployment fails
**Solution:**
- Check build logs in Vercel
- Verify all dependencies in package.json
- Test build locally: `npm run build`
- Check for TypeScript errors

### SSL Certificate Issues

**Issue:** "Not Secure" warning
**Solution:**
- Wait for SSL provisioning (can take 24 hours)
- Verify domain is properly connected
- Check Vercel domain settings
- Try removing and re-adding domain

---

## Recommended Approach

### My Recommendation: Vercel

**Timeline:**
1. **Today:** Push to GitHub, deploy to Vercel (30 min)
2. **Test:** Verify staging URL works (1 hour)
3. **Tomorrow:** Lower DNS TTL in Wix (5 min)
4. **Day After:** Change DNS to Vercel (15 min)
5. **Wait:** Monitor propagation (1-48 hours)
6. **Week Later:** Cancel Wix hosting

**Why This Order:**
- ✅ Test thoroughly before switching DNS
- ✅ Minimize downtime
- ✅ Easy rollback if issues
- ✅ Keep Wix running during transition

---

## Post-Migration Checklist

### Immediate (Day 1)
- [ ] Verify site loads at domain
- [ ] Test all navigation links
- [ ] Submit contact form test
- [ ] Check email delivery
- [ ] Test on mobile devices
- [ ] Verify SSL certificate

### Week 1
- [ ] Monitor analytics
- [ ] Check for broken links
- [ ] Verify SEO (Google Search Console)
- [ ] Update social media links
- [ ] Update Google My Business
- [ ] Test all browsers

### Week 2-4
- [ ] Monitor email deliverability
- [ ] Check form submissions
- [ ] Verify no 404 errors
- [ ] Update email signatures
- [ ] Cancel Wix subscription
- [ ] Celebrate! 🎉

---

## Support Resources

### Vercel
- **Docs:** https://vercel.com/docs
- **Support:** https://vercel.com/support
- **Community:** https://github.com/vercel/next.js/discussions

### Domain Migration
- **DNS Checker:** https://dnschecker.org
- **SSL Checker:** https://www.sslshopper.com/ssl-checker.html
- **Wix Help:** https://support.wix.com

### Next.js
- **Docs:** https://nextjs.org/docs
- **Deployment:** https://nextjs.org/docs/deployment

---

## Summary

**Best Option: Vercel**
- ✅ Free hosting
- ✅ Easy setup (30 minutes)
- ✅ Automatic deployments
- ✅ Built for Next.js
- ✅ Simple domain connection

**Steps:**
1. Push to GitHub
2. Deploy to Vercel
3. Add environment variable
4. Connect domain
5. Wait for DNS propagation
6. Cancel Wix

**Cost Savings:** ~$180-$400/year

**Ready to start? Let me know if you want me to walk you through any specific step!**
