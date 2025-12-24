export const siteContent = {
  brand: {
    name: "Looper Construction",
    tagline: "Residential + commercial construction across the Gulf Coast",
    locationLine: "Orange Beach, Alabama • Gulf Shores • Pensacola",
  },
  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Awards", to: "/awards" },
    { label: "Contact", to: "/contact" },
  ],
  home: {
    eyebrow: "Second-generation builder • Local legacy",
    headline: "Quiet craftsmanship. Gulf Coast confidence.",
    subhead:
      "A calm, modern home for a builder known locally for quality — from custom residences to commercial work — delivered with the kind of service that feels effortless.",
    primaryCta: { label: "View projects", to: "/projects" },
    secondaryCta: { label: "Learn the story", to: "/about" },
    featureBlocks: [
      {
        title: "Residential",
        desc: "Custom homes built to last — clean execution, timeless detail, thoughtful collaboration with architects.",
        to: "/projects/residential",
      },
      {
        title: "Commercial",
        desc: "High-traffic spaces and complex scopes — built responsibly, scheduled carefully, finished with pride.",
        to: "/projects/commercial",
      },
      {
        title: "Process",
        desc: "A straightforward build experience: clear communication, organized decisions, and steady progress.",
        to: "/process",
      },
    ],
    featuredResidential: [
      { title: "Featured Residence One", note: "Placeholder — will map to real project name", to: "/projects/residential" },
      { title: "Featured Residence Two", note: "Placeholder — will map to real project name", to: "/projects/residential" },
      { title: "Featured Residence Three", note: "Placeholder — will map to real project name", to: "/projects/residential" },
    ],
    featuredCommercial: [
      { title: "Wharf Marina Store", note: "Orange Beach / The Wharf", to: "/projects/commercial" },
      { title: "Kilwins", note: "Orange Beach / The Wharf", to: "/projects/commercial" },
      { title: "Our Coffee", note: "Orange Beach / The Wharf", to: "/projects/commercial" },
    ],
  },
  about: {
    title: "About",
    body:
      "This page will be filled verbatim from the current site content. For now, it’s a placeholder page so navigation and structure are stable.",
  },
  process: {
    title: "Process",
    body:
      "Placeholder. We’ll map the current site’s process / services copy verbatim once the homepage structure is approved.",
  },
  awards: {
    title: "Awards",
    body:
      "Placeholder. We’ll bring awards forward visually after content mapping is complete.",
  },
  contact: {
    title: "Contact",
    body:
      "Placeholder. Later we can integrate a simple, calm form flow (and optionally a Monday workflow) without cluttering the homepage.",
  },
};
