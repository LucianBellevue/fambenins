# Conditional Form Fields - Contact Page

## Overview

The contact form now dynamically shows different fields based on the type of coverage selected, providing a tailored experience for Group Health Plans vs Individual Health Plans.

## How It Works

### Coverage Type Selection

When a user selects their coverage type, the form adapts:

1. **Group Health Plan** - Shows business-related fields
2. **Individual Health Plan** - Shows individual/family-related fields
3. **Other Coverage Types** - Shows standard form (no additional fields)

## Field Configuration

### Group Health Plan Fields

When user selects **"Group Health Plan"**, the form displays:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **Business Name** | Text Input | Yes | Name of the business |
| **Number of Employees** | Select Dropdown | Yes | Company size (1-10, 11-25, 26-50, 51-100, 100+) |
| **Business Address** | Text Input | Yes | Full business address |

**Example:**
```
Business Name: ABC Company Inc.
Number of Employees: 11-25 employees
Business Address: 123 Business St, City, State, ZIP
```

### Individual Health Plan Fields

When user selects **"Individual Health Plan"**, the form displays:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **Family Size** | Select Dropdown | Yes | Individual, Couple, Family of 3/4/5+ |
| **Currently Insured?** | Select Dropdown | No | Yes, No, Coverage Expired |
| **Monthly Budget** | Select Dropdown | No | Budget range ($200-$800+) |

**Example:**
```
Family Size: Family of 4
Currently Insured?: No
Monthly Budget: $400 - $600
```

## Coverage Type Options

The form supports the following coverage types:

1. **Group Health Plan** ⭐ (Shows business fields)
2. **Individual Health Plan** ⭐ (Shows individual fields)
3. Life Insurance
4. ICHRA for Business
5. Medicare
6. Dental & Vision
7. Multiple Types

## Form State Management

### State Structure

```typescript
const [formData, setFormData] = useState({
  // Contact Information (Always shown)
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  coverageType: '',
  
  // Group Health Plan fields (Conditional)
  businessName: '',
  businessAddress: '',
  numberOfEmployees: '',
  
  // Individual Health Plan fields (Conditional)
  familySize: '',
  currentlyInsured: '',
  budget: '',
  
  // Additional Information (Always shown)
  message: '',
});
```

### Conditional Rendering Logic

```tsx
{/* Group Health Plan Fields */}
{formData.coverageType === 'group-health' && (
  <>
    {/* Business Name, Number of Employees, Business Address */}
  </>
)}

{/* Individual Health Plan Fields */}
{formData.coverageType === 'individual-health' && (
  <>
    {/* Family Size, Currently Insured, Monthly Budget */}
  </>
)}
```

## User Experience Flow

### Step 1: Contact Information
User fills in basic contact details (always required):
- First Name
- Last Name
- Email
- Phone

### Step 2: Coverage Type Selection
User selects coverage type from dropdown

### Step 3: Dynamic Fields Appear
Based on selection:
- **Group Health** → Business fields appear
- **Individual Health** → Family/budget fields appear
- **Other** → No additional fields

### Step 4: Additional Information
User can add optional message (always shown)

### Step 5: Submit
Form validates and submits all relevant data

## Validation Rules

### Group Health Plan
- Business Name: Required, text input
- Number of Employees: Required, must select from dropdown
- Business Address: Required, text input

### Individual Health Plan
- Family Size: Required, must select from dropdown
- Currently Insured: Optional
- Monthly Budget: Optional

## Form Improvements

### Visual Enhancements
- ✅ **Darker text color** (`text-gray-900`) for typed input
- ✅ **Visible placeholders** (`placeholder:text-gray-500`)
- ✅ **Clear differentiation** between empty and filled fields
- ✅ **Smooth transitions** when fields appear/disappear

### Accessibility
- ✅ Proper labels for all fields
- ✅ Required fields marked with asterisk (*)
- ✅ Clear placeholder text
- ✅ Focus states with green ring

## Technical Implementation

### React State Management
```typescript
// State updates on coverage type change
const handleChange = (e: React.ChangeEvent<...>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
```

### Form Reset
When form is successfully submitted, all fields reset:
```typescript
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
```

## Benefits

### For Users
1. **Relevant Questions Only** - Only see fields that apply to their situation
2. **Faster Form Completion** - Less clutter, clearer path
3. **Better Experience** - Tailored to their specific needs
4. **Clear Guidance** - Knows exactly what information is needed

### For Business
1. **Better Data Collection** - Get the right information for each case
2. **Higher Conversion** - Simpler, more focused forms
3. **Qualified Leads** - Collect business vs individual details appropriately
4. **Efficient Processing** - Agents have the right info from the start

## Future Enhancements

### Potential Additions
- **ICHRA-specific fields** when selected
- **Medicare fields** (age, current coverage)
- **Life Insurance fields** (coverage amount, beneficiaries)
- **Address autocomplete** for business address
- **Employee count validation** for certain plan types

### Advanced Features
- **Multi-step form** for complex applications
- **Save progress** functionality
- **Real-time quote estimation** based on inputs
- **Document upload** for group plans

## Testing Checklist

- [x] Group Health Plan fields appear when selected
- [x] Individual Health Plan fields appear when selected
- [x] Fields hide when switching coverage types
- [x] Required validation works for conditional fields
- [x] Form resets properly after submission
- [x] All fields have proper styling (text color, placeholders)
- [x] Responsive on mobile devices
- [x] Smooth transitions when fields appear/disappear

## Summary

The conditional form fields provide a **smart, adaptive experience** that:
- ✅ Shows only relevant fields based on coverage type
- ✅ Reduces form complexity and cognitive load
- ✅ Improves data quality and lead qualification
- ✅ Enhances user experience with clear, focused questions
- ✅ Maintains clean, maintainable code structure

This feature makes the contact form more professional, user-friendly, and effective at collecting the right information for each type of insurance inquiry.
