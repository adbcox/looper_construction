export const siteContent = {
  brand: {
    name: "Loper Construction",
    location: "Orange Beach, AL",
  },

  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Awards", to: "/awards" },
    { label: "Contact", to: "/contact" },
  ],

  home: {
    badge: "Orange Beach • Gulf Coast • Custom Build",
    headline: "Building on the Gulf Coast—residential and commercial.",
    intro:
      "Second-generation craftsmanship with a calm, modern process. We build custom homes and commercial spaces with the same attention to detail: clear communication, precise execution, and a finish you can feel.",
    ctaPrimary: { label: "View Projects", to: "/projects" },
    ctaSecondary: { label: "Our Story", to: "/about" },

    // Hero media: swap to your real assets later.
    heroMedia: {
      type: "image", // "video" | "image"
      src: "/images/placeholder.svg",
      poster: "",
      alt: "Project hero image",
    },

    // Right-side “block nav” items (desktop): keep short and readable.
    rightNav: [
      { label: "Projects", to: "/projects", sub: "Residential + Commercial" },
      { label: "About", to: "/about", sub: "Second-generation legacy" },
      { label: "Awards", to: "/awards", sub: "Recognition + associations" },
      { label: "Contact", to: "/contact", sub: "Start a conversation" },
    ],
  },

  about: {
    title: "A local legacy, built with modern discipline.",
    p1:
      "Loper Construction serves Orange Beach, Gulf Shores, and the surrounding Gulf Coast with custom residential construction and select commercial work.",
    p2:
      "Our approach is intentionally calm: fewer words, more clarity. We focus on the details that matter—planning, coordination, and craftsmanship—so the experience feels predictable even when the work is complex.",
    p3:
      "We’re proud to be part of this community and to carry forward a second-generation building legacy.",
  },

  projects: {
    title: "Projects",
    intro:
      "A balanced portfolio: custom homes that feel timeless, and commercial spaces designed to perform.",
    collections: [
      {
        title: "Residential",
        to: "/projects/residential",
        blurb:
          "Custom homes and coastal builds—quiet luxury with practical durability.",
        featured: [
          { title: "Featured Home 01", slug: "featured-home-01", cover: "/images/placeholder.svg" },
          { title: "Featured Home 02", slug: "featured-home-02", cover: "/images/placeholder.svg" },
          { title: "Featured Home 03", slug: "featured-home-03", cover: "/images/placeholder.svg" },
        ],
      },
      {
        title: "Commercial",
        to: "/projects/commercial",
        blurb:
          "Restaurants, retail, and local destinations—built for traffic, weather, and longevity.",
        featured: [
          { title: "The Wharf Coffee", slug: "wharf-coffee", cover: "/images/placeholder.svg" },
          { title: "Kilwins", slug: "kilwins", cover: "/images/placeholder.svg" },
          { title: "The Wharf Outfitters", slug: "wharf-outfitters", cover: "/images/placeholder.svg" },
        ],
      },
    ],
  },

  awards: {
    title: "Awards & Recognition",
    intro:
      "A selection of awards, affiliations, and local recognition. (We’ll populate this from the current site content next.)",
  },

  contact: {
    title: "Contact",
    intro:
      "Tell us what you’re building. We’ll respond quickly with next steps.",
    phone: "(251) 980-1902",
    address: "24693 Canal Road, Suite B — Orange Beach, AL 36561",
  },

  footer: {
    tagline:
      "Committed to excellence in building. Licensed, bonded, and insured.",
    license: "HBLB #27286",
    address: "24693 Canal Road, Suite B — Orange Beach, AL 36561",
    phone: "(251) 980-1902",
  },
};
