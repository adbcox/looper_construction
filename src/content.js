export const site = {
  brand: {
    name: "Looper Construction",
    tagline: "Orange Beach • Gulf Coast",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Orange Beach • Gulf Coast",
    headline: "Custom homes, thoughtfully built.",
    subhead:
      "We build refined coastal homes across Alabama’s Gulf Coast and Pensacola — guided by clarity, craftsmanship, and a quiet standard of excellence. No noise. No rush.",
    primaryCta: { label: "Begin a conversation", href: "#contact" },
    secondaryCta: { label: "View selected work", href: "#work" },
  },
  gallery: {
    title: "Selected Work",
    subtitle:
      "A horizontal reel—quiet, minimal, and image‑led. Replace these placeholders with real project photography.",
    items: Array.from({ length: 10 }).map((_, i) => ({
      src: `/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
      label: [
        "Coastal Modern",
        "Timeless Gulf Cottage",
        "Courtyard Retreat",
        "White Oak Residence",
        "Harbor View",
        "Dune House",
        "Seaside Classic",
        "Island Pavilion",
        "Pensacola Revival",
        "Orange Beach Estate",
      ][i],
      meta: "Orange Beach / Gulf Coast",
    })),
  },
};
