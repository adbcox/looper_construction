import React from "react";
import heroImg from "./assets/hero.jpg";

/**
 * CENTRALIZED COPY (replace these with your locked narrative when you paste it)
 * — no more random placeholder text in the component itself.
 */
const COPY = {
  brand: "VIA AUSTER",
  heroLines: [
    "EXECUTIVE",
    "INDUSTRIAL",
    "CONFIDENCE, NOT HYPE",
  ],
  subhead:
    "Trust and competence first. Build systems that hold under pressure.",
  ctas: [
    { label: "CONTACT", href: "#contact", variant: "outline" },
    { label: "ABOUT", href: "#about", variant: "solid" },
  ],
};

const socials = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Instagram", href: "#", icon: "ig" },
  { label: "X", href: "#", icon: "x" },
  { label: "GitHub", href: "#", icon: "gh" },
];

const rightNav = [
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
  { label: "TBD", href: "#tbd" },
];

function RightRailArrow() {
  // Simple, clean arrow mark to match the “rail artifact” idea
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-neutral-500"
      aria-hidden="true"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* TOP FRAME / DEPTH (restored) */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-0">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="h-px bg-neutral-200" />
        </div>
      </div>

      {/* Global page frame */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="relative min-h-screen py-10">
          {/* LEFT RAIL */}
          <aside className="absolute left-0 top-0 h-full w-[72px]">
            <div className="flex h-full flex-col items-center justify-between py-10">
              {/* top mark + line */}
              <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-[2px] bg-neutral-200" />
                <div className="h-8 w-8 rounded-full border border-neutral-200" />
                <div className="h-10 w-[2px] bg-neutral-200" />
              </div>

              {/* social stack */}
              <div className="flex flex-col items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-[11px] uppercase tracking-wider text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
                    aria-label={s.label}
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* bottom line */}
              <div className="h-16 w-[2px] bg-neutral-200" />
            </div>
          </aside>

          {/* RIGHT RAIL (Abbey style, corrected spacing/alignment) */}
          <aside className="absolute right-0 top-0 h-full w-[120px]">
            <div className="relative flex h-full flex-col items-center justify-between py-10">
              {/* triple vertical lines, aligned to the page frame */}
              <div className="absolute right-[26px] top-[70px] h-[calc(100%-140px)] w-[48px]">
                <span className="absolute right-0 top-0 h-full w-[2px] bg-neutral-200" />
                <span className="absolute right-[16px] top-0 h-full w-[2px] bg-neutral-200" />
                <span className="absolute right-[32px] top-0 h-full w-[2px] bg-neutral-200" />

                {/* arrow mark positioned on the rail (not random) */}
                <div className="absolute right-[32px] top-[18%]">
                  <RightRailArrow />
                </div>
              </div>

              <div />

              {/* rotated nav at bottom (reads up), Abbey-like placement */}
              <nav className="relative z-10 flex flex-col items-center gap-10 pb-2">
                {rightNav.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    className="text-[11px] tracking-[0.26em] text-neutral-600 hover:text-neutral-900"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* TOP NAV (centered, subdued) */}
          <header className="mx-auto flex max-w-[980px] items-center justify-center pt-6">
            <nav className="flex items-center gap-10 text-[12px] tracking-[0.22em] text-neutral-600">
              <a className="hover:text-neutral-900" href="#platform">
                PLATFORM
              </a>
              <a className="hover:text-neutral-900" href="#solutions">
                SOLUTIONS
              </a>
              <a className="hover:text-neutral-900" href="#resources">
                RESOURCES
              </a>
            </nav>
          </header>

          {/* HERO */}
          <main className="mx-auto flex max-w-[980px] flex-col items-center justify-center pt-16">
            {/* Brand mark */}
            <div className="text-center">
              <div className="text-[12px] tracking-[0.22em] text-neutral-500">
                {COPY.brand}
              </div>

              {/* ONE PER LINE + divider (your requirement) */}
              <div className="mt-6 inline-flex flex-col items-center">
                {COPY.heroLines.map((line) => (
                  <div
                    key={line}
                    className="text-[22px] font-medium tracking-tight"
                  >
                    {line}
                  </div>
                ))}
                <div className="mt-5 h-px w-[140px] bg-neutral-200" />
              </div>

              <p className="mx-auto mt-5 max-w-[640px] text-[14px] leading-7 text-neutral-600">
                {COPY.subhead}
              </p>
            </div>

            {/* HERO MEDIA — smaller + feathered (no “code block” look) */}
            <div className="mt-10 w-full">
              <div className="mx-auto w-full max-w-[740px]">
                <div className="relative overflow-hidden rounded-2xl">
                  {/* image */}
                  <img
                    src={heroImg}
                    alt="Via Auster hero"
                    className="block h-auto w-full"
                  />

                  {/* feather overlays (makes it feel embedded) */}
                  <div className="pointer-events-none absolute inset-0">
                    {/* soft edge vignette */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/35" />
                    <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0)_55%,rgba(255,255,255,0.55)_100%)]" />
                    {/* subtle border, not “boxy” */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-neutral-200/70" />
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs (subdued) */}
            <div className="mt-10 flex items-center gap-3">
              {COPY.ctas.map((c) =>
                c.variant === "solid" ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="rounded-full bg-neutral-900 px-5 py-2 text-[12px] tracking-[0.18em] text-white hover:bg-neutral-800"
                  >
                    {c.label}
                  </a>
                ) : (
                  <a
                    key={c.label}
                    href={c.href}
                    className="rounded-full border border-neutral-300 px-5 py-2 text-[12px] tracking-[0.18em] text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
                  >
                    {c.label}
                  </a>
                )
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
