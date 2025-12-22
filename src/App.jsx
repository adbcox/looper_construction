import React from "react";
import GalleryReel from "./components/GalleryReel";
import { site } from "./content";

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-neutral-700 hover:text-neutral-900"
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-neutral-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl border border-neutral-200 bg-white shadow-sm" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                {site.brand.name}
              </div>
              <div className="text-xs text-neutral-500">{site.brand.tagline}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {site.nav.map((n) => (
              <NavLink key={n.href} href={n.href}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={site.hero.primaryCta.href}
            className="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            {site.hero.primaryCta.label}
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="text-xs tracking-[0.18em] text-neutral-500">
                {site.hero.eyebrow.toUpperCase()}
              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
                {site.hero.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                {site.hero.subhead}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={site.hero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  {site.hero.primaryCta.label}
                </a>
                <a
                  href={site.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  {site.hero.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="text-sm font-semibold">A measured approach</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Editorial, image‑led layout. Minimal UI. Timeless finishes.
                  Designed to feel quiet, coastal, and premium.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-neutral-600">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                    Service area
                    <div className="mt-1 font-medium text-neutral-900">
                      Gulf Coast + Pensacola
                    </div>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                    Build style
                    <div className="mt-1 font-medium text-neutral-900">
                      Classic luxury
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 h-px w-24 bg-neutral-200" />
        </section>
      </main>

      {/* Gallery reel */}
      <GalleryReel {...site.gallery} />

      {/* Placeholder sections for navigation (kept intentionally minimal for v1) */}
      <section id="services" className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Placeholder. We’ll replace with Looper’s real services once you confirm the structure.
          </p>
        </div>
      </section>

      <section id="process" className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Process</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Placeholder. This becomes the editorial “chapter” narrative (Discovery → Design → Build → Finish).
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Placeholder. Later we’ll wire a Monday intake form or a simple high‑end contact flow.
          </p>

          <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">Begin a conversation</div>
                <div className="mt-1 text-sm text-neutral-600">
                  For now, this is a placeholder CTA.
                </div>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Replace this with email / form / scheduling later.");
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-100 py-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {site.brand.name}. Built with Vite + React + Tailwind.
      </footer>
    </div>
  );
}
