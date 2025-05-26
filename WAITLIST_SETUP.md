# Waitlist Widget Setup Guide

This guide will help you set up and customize the waitlist widget that has been added to your website.

## 🚀 Quick Start

The waitlist widget is already integrated and positioned at the top of your homepage. It's fully responsive and matches your existing design system.

## 🔧 Configuration

### Basic Configuration

Edit `src/data/waitlistConfig.ts` to customize the widget:

```typescript
export const waitlistConfig = {
  title: "Join the Waitlist",
  description: "Be the first to know when we launch...",
  showSubscriberCount: true,
  showEarlyAccessBadge: true,
  // ... more options
};
```

### Environment Variables

Create a `.env.local` file in your project root:

```env
# GetWaitlist Integration (optional)
NEXT_PUBLIC_WAITLIST_ID=your_waitlist_id_here
GETWAITLIST_API_KEY=your_api_key_here
```

## 📧 GetWaitlist Integration

### Step 1: Create a GetWaitlist Account

1. Go to [GetWaitlist.com](https://getwaitlist.com)
2. Create an account and set up your waitlist
3. Get your Waitlist ID from the dashboard

### Step 2: Get Your Embed Code (Alternative Method)

If you prefer to use GetWaitlist's embed code instead of the API:

1. Go to your GetWaitlist dashboard
2. Navigate to "Settings" tab
3. Ensure the "Waitlist URL" matches your website URL
4. Go to "Widget Builder" and click "Get Embed Code"
5. Copy the embed code

### Step 3: Configure the Widget

Add your Waitlist ID to the environment variables:

```env
NEXT_PUBLIC_WAITLIST_ID=your_waitlist_id_from_getwaitlist
```

## 🎨 Customization Options

### Visual Customization

The widget automatically uses your existing design system:

- Colors: Uses your CSS variables (`--primary`, `--secondary`, etc.)
- Typography: Matches your Manrope and Source Sans 3 fonts
- Spacing: Follows your Tailwind spacing scale

### Content Customization

In `src/data/waitlistConfig.ts`:

```typescript
{
  title: "Your Custom Title",
  description: "Your custom description...",
  successTitle: "Custom success message!",
  successMessage: "Custom success description...",
}
```

### Feature Toggles

```typescript
{
  showSubscriberCount: true,     // Show "X+ people joined"
  showEarlyAccessBadge: true,    // Show "Early Access" badge
  showSocialProof: true,         // Show GDPR/Security badges
  showPrivacyNote: true,         // Show privacy notice
  enableAnimations: true,        // Enable hover/loading animations
}
```

## 🔌 Alternative Integrations

### Mailchimp Integration

Replace the API call in `src/app/api/waitlist/route.ts`:

```typescript
// Add Mailchimp integration
const mailchimpResponse = await fetch(
  `https://us1.api.mailchimp.com/3.0/lists/${listId}/members`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  }
);
```

### ConvertKit Integration

```typescript
const convertKitResponse = await fetch(
  `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: process.env.CONVERTKIT_API_KEY,
      email: email,
    }),
  }
);
```

### Airtable Integration

```typescript
const airtableResponse = await fetch(
  `https://api.airtable.com/v0/${baseId}/${tableId}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Email: email,
            "Signup Date": new Date().toISOString(),
          },
        },
      ],
    }),
  }
);
```

## 📊 Analytics & Tracking

### Google Analytics

Add to your `src/components/WaitlistWidget.tsx`:

```typescript
// Track successful signups
if (typeof gtag !== "undefined") {
  gtag("event", "waitlist_signup", {
    event_category: "engagement",
    event_label: "email_signup",
  });
}
```

### Custom Analytics

```typescript
// Track to your analytics service
analytics.track("Waitlist Signup", {
  email: email,
  timestamp: new Date().toISOString(),
  source: "homepage_widget",
});
```

## 🎯 Positioning & Layout

### Current Position

The widget is positioned:

- After the Hero section
- With negative margin to overlap slightly
- Centered with max-width container
- Proper spacing from other sections

### Alternative Positions

#### In Hero Section

Move the widget inside the Hero component:

```tsx
// In src/components/Hero.tsx
<div className="mt-8">
  <WaitlistWidget className="max-w-md mx-auto" />
</div>
```

#### As a Sticky Header

```tsx
// In src/app/layout.tsx
<div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
  <div className="container mx-auto px-4 py-2">
    <WaitlistWidget className="max-w-sm" />
  </div>
</div>
```

#### As a Modal/Popup

Create a modal version for exit-intent or timed popups.

## 🔒 Privacy & Compliance

### GDPR Compliance

The widget includes:

- Clear privacy notice
- Unsubscribe mention
- GDPR compliance badge

### Data Handling

- Email validation on frontend and backend
- Secure API endpoints
- Error handling for failed submissions

## 🧪 Testing

### Test the Widget

1. Enter a test email
2. Check browser console for API calls
3. Verify success/error states
4. Test responsive design on mobile

### Environment Testing

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## 🚨 Troubleshooting

### Common Issues

1. **Widget not showing**: Check import paths and component placement
2. **API errors**: Verify environment variables and API keys
3. **Styling issues**: Check Tailwind classes and CSS variables
4. **Mobile layout**: Test responsive breakpoints

### Debug Mode

Add to `waitlistConfig.ts`:

```typescript
debug: process.env.NODE_ENV === 'development',
```

## 📱 Mobile Optimization

The widget is fully responsive:

- Stacked layout on mobile
- Touch-friendly button sizes
- Proper spacing and typography
- Optimized for thumb navigation

## 🎨 Design System Integration

The widget uses your existing:

- Color palette (primary, secondary, foreground)
- Typography (Manrope for headings, Source Sans 3 for body)
- Border radius and spacing
- Shadow and backdrop blur effects

## 📈 Performance

- Lazy loading of subscriber count
- Optimized animations
- Minimal bundle impact
- Fast API responses

## 🔄 Updates & Maintenance

To update the widget:

1. Modify `src/components/WaitlistWidget.tsx`
2. Update configuration in `src/data/waitlistConfig.ts`
3. Test changes in development
4. Deploy to production

---

Need help? The widget is designed to be plug-and-play with your existing design system while providing maximum customization flexibility.
