export const waitlistConfig = {
  // GetWaitlist integration (optional)
  waitlistId: "28718", // Add your GetWaitlist ID here

  // Customization options
  title: "Join the Waitlist",
  description:
    "Be the first to know when we launch. Get exclusive early access and special offers.",

  // Success message customization
  successTitle: "You're on the list! 🎉",
  successMessage:
    "We'll notify you as soon as we launch. Thanks for your interest!",

  // Social proof settings
  showSubscriberCount: true,
  minSubscriberCount: 500, // Minimum count to display
  maxSubscriberCount: 2000, // Maximum count for random generation

  // UI customization
  showEarlyAccessBadge: true,
  showSocialProof: true,
  showPrivacyNote: true,

  // Animation settings
  enableAnimations: true,

  // Integration settings
  enableAnalytics: true, // Track signups
  enableEmailValidation: true,

  // Custom styling (optional)
  customStyles: {
    // You can add custom CSS classes here
    container: "",
    button: "",
    input: "",
  },
};

// Environment-specific configurations
export const getWaitlistConfig = () => {
  const isDevelopment = process.env.NODE_ENV === "development";

  return {
    ...waitlistConfig,
    // In development, you might want to use different settings
    enableAnalytics: !isDevelopment,
    minSubscriberCount: isDevelopment ? 10 : waitlistConfig.minSubscriberCount,
  };
};
