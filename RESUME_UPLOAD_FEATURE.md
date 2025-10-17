# Resume Upload & Career Application Feature - Complete ✅

## Overview

Added comprehensive career application functionality to the contact form, including resume upload capability and integration with Resend email API.

---

## Features Added

### 1. **Career Application Option**

Added "Career Application" to the coverage type dropdown in the contact form.

**Location:** Contact form coverage type selector

**Options Now Include:**
- Group Health Plan
- Individual Health Plan
- Life Insurance
- Multiple Types
- **Career Application** ← NEW

---

### 2. **Position Selection Dropdown**

When "Career Application" is selected, a new dropdown appears for position selection.

**Available Positions:**
- Licensed Insurance Agent
- Customer Service Representative
- Marketing Coordinator
- Other Position

**Features:**
- ✅ Required field when career application selected
- ✅ Matches positions listed on careers page
- ✅ Clean, professional styling
- ✅ Integrated with form validation

---

### 3. **Resume Upload Field**

PDF file upload functionality for submitting resumes.

**Features:**
- ✅ **File Type:** PDF only (`.pdf`)
- ✅ **File Size:** Maximum 5MB
- ✅ **Validation:** Client-side validation before upload
- ✅ **Styling:** Custom file input with green button
- ✅ **User Feedback:** Shows file size limit below input
- ✅ **Error Handling:** Alert if wrong file type or too large

**Validation Rules:**
```typescript
- File type must be: application/pdf
- File size must be: ≤ 5MB (5,242,880 bytes)
- Shows alert if validation fails
- Clears input if invalid file selected
```

---

## Technical Implementation

### Frontend Changes (`app/contact/page.tsx`)

#### **State Management:**

```typescript
// Added to form state
const [formData, setFormData] = useState({
  // ... existing fields
  careerPosition: '',  // NEW
  message: '',
});

const [resumeFile, setResumeFile] = useState<File | null>(null);  // NEW
```

#### **File Upload Handler:**

```typescript
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
```

#### **Form Submission:**

Changed from JSON to FormData to support file uploads:

```typescript
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
  body: formDataToSend,  // No Content-Type header needed
});
```

#### **UI Components:**

**Position Dropdown:**
```tsx
<select
  id="careerPosition"
  name="careerPosition"
  value={formData.careerPosition}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 border border-gray-300 rounded-lg..."
>
  <option value="">Select position</option>
  <option value="licensed-insurance-agent">Licensed Insurance Agent</option>
  <option value="customer-service-representative">Customer Service Representative</option>
  <option value="marketing-coordinator">Marketing Coordinator</option>
  <option value="other">Other Position</option>
</select>
```

**File Upload Input:**
```tsx
<input
  type="file"
  id="resume"
  name="resume"
  accept=".pdf"
  onChange={handleFileChange}
  required
  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
             file:mr-4 file:py-2 file:px-4 file:rounded-lg 
             file:border-0 file:text-sm file:font-semibold 
             file:bg-green file:text-navy hover:file:bg-green-light"
/>
<p className="text-xs text-gray-500 mt-1">PDF only, max 5MB</p>
```

---

### Backend Changes (`app/api/send-email/route.ts`)

#### **FormData Parsing:**

Changed from JSON parsing to FormData parsing:

```typescript
// OLD: const body = await request.json();
// NEW:
const formData = await request.formData();

const firstName = formData.get('firstName') as string;
const lastName = formData.get('lastName') as string;
// ... all other fields
const careerPosition = formData.get('careerPosition') as string;
const resumeFile = formData.get('resume') as File | null;
```

#### **Career Application Email Content:**

```typescript
if (coverageType === 'career' && careerPosition) {
  emailContent += `
    <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #1e3a5f; margin-top: 0;">Career Application</h3>
      <p><strong>Position:</strong> ${careerPosition}</p>
      ${resumeFile ? `<p><strong>Resume:</strong> ${resumeFile.name} (${(resumeFile.size / 1024).toFixed(2)} KB)</p>` : ''}
    </div>
  `;
}
```

#### **Email Subject Line:**

Dynamic subject based on type:

```typescript
subject: coverageType === 'career' 
  ? `Career Application: ${careerPosition} - ${firstName} ${lastName}`
  : `New ${coverageType.replace('-', ' ').toUpperCase()} Inquiry from ${firstName} ${lastName}`
```

#### **File Attachment Handling:**

```typescript
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
```

#### **TypeScript Interface:**

```typescript
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
```

---

## Email Output

### Career Application Email

**Subject:**
```
Career Application: Licensed Insurance Agent - John Doe
```

**Body Includes:**
- Contact Information section (name, email, phone)
- Career Application section:
  - Position applied for
  - Resume filename and size
- Additional message (if provided)
- Timestamp

**Attachment:**
- Original PDF resume file
- Preserves filename
- Attached to email

---

## User Flow

### Career Application Submission

1. **User visits contact page** (`/contact`)
2. **Fills out contact information:**
   - First Name
   - Last Name
   - Email
   - Phone
3. **Selects "Career Application"** from coverage type dropdown
4. **New fields appear:**
   - Position dropdown (required)
   - Resume upload (required)
5. **Selects position** from dropdown
6. **Uploads PDF resume:**
   - Click "Choose File"
   - Select PDF (max 5MB)
   - Validation occurs automatically
7. **Adds optional message**
8. **Clicks "Get My Free Quote"** (button text could be updated)
9. **Form submits:**
   - Loading state shows
   - File uploads with form data
   - Email sent with attachment
10. **Success message displays**
11. **Form resets** (including file input)

---

## Validation

### Client-Side Validation

**File Type:**
```typescript
if (file.type === 'application/pdf') {
  // Valid
} else {
  alert('Please upload a PDF file under 5MB');
}
```

**File Size:**
```typescript
if (file.size <= 5 * 1024 * 1024) {  // 5MB
  // Valid
} else {
  alert('Please upload a PDF file under 5MB');
}
```

**Required Fields:**
- All fields marked with `required` attribute
- Browser validates before submission
- Position and resume required when career selected

### Server-Side Validation

**Existing Validations:**
- Required fields check (firstName, lastName, email, phone, coverageType)
- Email format validation (regex)

**Could Add:**
- File size validation on server
- File type validation on server
- Career-specific field validation

---

## Resend API Integration

### Attachment Support

Resend supports file attachments via the `attachments` array:

```typescript
await resend.emails.send({
  from: 'Family Benefits Center <onboarding@resend.dev>',
  to: ['services@familybenefitscenter.com'],
  subject: 'Career Application...',
  html: emailContent,
  replyTo: email,
  attachments: [
    {
      filename: 'resume.pdf',
      content: Buffer.from(arrayBuffer),
    },
  ],
});
```

**Features:**
- ✅ Multiple attachments supported (array)
- ✅ Binary content via Buffer
- ✅ Preserves original filename
- ✅ No size limit on Resend side (but email providers typically limit to 10-25MB)

---

## File Size Considerations

### Why 5MB Limit?

1. **Email Provider Limits:**
   - Gmail: 25MB
   - Outlook: 20MB
   - Yahoo: 25MB
   - Most corporate: 10-25MB

2. **Best Practices:**
   - Resumes typically 100KB - 2MB
   - 5MB provides comfortable buffer
   - Prevents abuse/spam
   - Faster upload times

3. **User Experience:**
   - Quick uploads
   - Less likely to fail
   - Mobile-friendly

### Adjusting Limit

To change the limit, update in two places:

**Frontend validation:**
```typescript
if (file.size <= 10 * 1024 * 1024) {  // Change to 10MB
```

**UI text:**
```tsx
<p className="text-xs text-gray-500 mt-1">PDF only, max 10MB</p>
```

---

## Security Considerations

### Current Security Measures

1. **File Type Restriction:**
   - Only PDF files accepted
   - Prevents executable files
   - Reduces attack surface

2. **File Size Limit:**
   - Prevents large file attacks
   - Protects server resources
   - Limits email size

3. **Client-Side Validation:**
   - Immediate feedback
   - Reduces server load
   - Better UX

### Recommended Enhancements

1. **Server-Side Validation:**
   ```typescript
   // Add to API route
   if (resumeFile) {
     if (resumeFile.type !== 'application/pdf') {
       return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
     }
     if (resumeFile.size > 5 * 1024 * 1024) {
       return NextResponse.json({ error: 'File too large' }, { status: 400 });
     }
   }
   ```

2. **Virus Scanning:**
   - Integrate with ClamAV or similar
   - Scan files before sending
   - Reject infected files

3. **File Content Validation:**
   - Verify PDF structure
   - Check for embedded scripts
   - Use PDF parsing library

4. **Rate Limiting:**
   - Limit submissions per IP
   - Prevent spam/abuse
   - Track file uploads

---

## Testing Checklist

### Functionality Tests

- [ ] Select "Career Application" from dropdown
- [ ] Verify position dropdown appears
- [ ] Verify resume upload field appears
- [ ] Select each position option
- [ ] Upload valid PDF file
- [ ] Try to upload non-PDF file (should fail)
- [ ] Try to upload file > 5MB (should fail)
- [ ] Submit form with all fields
- [ ] Verify email received
- [ ] Verify resume attached to email
- [ ] Verify email subject line correct
- [ ] Verify email body shows position
- [ ] Verify email body shows resume info
- [ ] Verify form resets after submission
- [ ] Verify file input clears after submission

### Edge Cases

- [ ] Submit without selecting position
- [ ] Submit without uploading resume
- [ ] Upload 4.9MB file (should work)
- [ ] Upload 5.1MB file (should fail)
- [ ] Upload .doc file (should fail)
- [ ] Upload .docx file (should fail)
- [ ] Upload .txt file (should fail)
- [ ] Special characters in filename
- [ ] Very long filename
- [ ] Resume with spaces in name

### Browser Compatibility

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Future Enhancements

### Potential Improvements

1. **Multiple File Types:**
   - Accept .doc, .docx
   - Convert to PDF server-side
   - Support cover letters

2. **Drag & Drop:**
   - Drag file to upload area
   - Visual feedback
   - Better UX

3. **File Preview:**
   - Show PDF preview
   - Verify before submit
   - Edit/replace option

4. **Progress Indicator:**
   - Upload progress bar
   - Percentage complete
   - Time remaining

5. **Cloud Storage:**
   - Upload to S3/Cloudinary
   - Send link instead of attachment
   - Better for large files

6. **Application Tracking:**
   - Save to database
   - Track application status
   - Applicant portal

7. **Auto-Response:**
   - Send confirmation email to applicant
   - Include next steps
   - Set expectations

8. **LinkedIn Integration:**
   - Import from LinkedIn
   - Auto-fill fields
   - Attach LinkedIn profile

---

## Files Modified

```
app/
├── contact/
│   └── page.tsx                    ← Updated (form fields, file upload, FormData)
└── api/
    └── send-email/
        └── route.ts                ← Updated (FormData parsing, attachments)
```

---

## Summary

✅ **Career Application Option** - Added to coverage type dropdown  
✅ **Position Dropdown** - 4 positions + Other option  
✅ **Resume Upload** - PDF only, 5MB max, validated  
✅ **File Validation** - Client-side type and size checks  
✅ **FormData Submission** - Changed from JSON to support files  
✅ **Resend Integration** - Attachments sent with email  
✅ **Email Formatting** - Career-specific email template  
✅ **Subject Line** - Dynamic based on application type  
✅ **TypeScript** - Proper typing for email options  
✅ **Form Reset** - Clears file input after submission  

**The contact form now supports full career applications with resume uploads! 🎉**
