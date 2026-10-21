/**
 * Centralized configuration for Kubri Media.
 * All external URLs and business constants live here.
 * Components import from this file - never hardcode URLs.
 */
export const config = {
  // Brand
  brand: {
    name: "Kubri",
    fullName: "Kubri Media",
    tagline: "Your bridge to technical audiences.",
  },

  // Contact
  contact: {
    email: "salah@kubrimedia.com",
  },

  // Site
  site: {
    // Production domain. Confirmed purchased, not yet connected.
    // Used for canonical URLs, sitemap, robots, and Open Graph.
    url: "https://kubrimedia.com",
  },

  // Booking - replace with the real URL when ready.
  booking: {
    url: "https://calendly.com/kubri/strategy-call",
    label: "Book a Strategy Call",
  },

  // Social - null means "not yet created, don't render".
  // Set to the real URL when the profile goes live.
  social: {
    linkedin: null as string | null,
  },
} as const;