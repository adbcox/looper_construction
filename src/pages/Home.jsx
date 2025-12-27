import React from "react";
import { Link } from "react-router-dom";
import { siteContent } from "../content/siteContent";

function RightNavBlocks() {
  return (
    <div className="hidden w-full max-w-sm md:block">
      <div className="space-y-3">
        {siteContent.home.rightNav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group block rounded-3xl border border-white/30 bg-white/12 p-5 shadow-sm backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-white/18 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold tracking-tight text-white transition-transform duration-200 group-hover:scale-[1.03]">
                  {item.label}
                </div>
                <div className="mt-1 text-sm text-white/80 transition-transform duration-200 group-hover:scale-[1.02]">
                  {item.sub}
                </div>
              </div>
              <div className="mt-0.5 h-8 w-8 rounded-2xl border border-white/25 bg-white/10 transition group-hover:bg-white/15" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 rounded-3xl border border-white/25 bg-white/10 p-5 text-xs text-white/75 backdrop-blur">
        Hover a section to preview where you’re headed. This is subtle on purpose—technology that helps without
        calling attention to itself.
      </div>
    </div>
  );
}

export default function Home() {
  const hero = siteContent.home.heroMedia;

  return (
    <section className="relative">
      {/* Full-bleed hero media */}
      <div className="absolute inset-0 -z-10">
        {hero.type === "video" ? (
          <video
            className="h-full w-full object-cover"
            src={hero.src}
            poster={hero.poster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img className="h-full w-full object-cover" src={hero.src} alt={hero.alt} />
        )}

        {/* Light, coastal wash (no “dark mode”) */}
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-white/55" />
      </div>

      <div className="mx-auto grid min-h-[78vh] max-w-6xl items-end gap-10 px-4 pb-14 pt-16 md:grid-cols-12 md:items-center md:pt-20">
        {/* Left: editorial hero copy */}
        <div className="md:col-span-7">
          <div className="inline-flex items-center rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-medium tracking-tight text-white shadow-sm backdrop-blur">
            {siteContent.home.badge}
          </div>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {siteContent.home.headline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {siteContent.home.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to={siteContent.home.ctaPrimary.to}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-white/90"
            >
              {siteContent.home.ctaPrimary.label}
            </Link>

            <Link
              to={siteContent.home.ctaSecondary.to}
              className="inline-flex items-center justify-center rounded-2xl border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/15"
            >
              {siteContent.home.ctaSecondary.label}
            </Link>
          </div>
        </div>

        {/* Right: block-nav with hover “raise + text grow” */}
        <div className="md:col-span-5 md:justify-self-end">
          <RightNavBlocks />
        </div>
      </div>

      {/* Below-hero anchor to reduce “dead-end” feel */}
      <div className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Residential", d: "Custom coastal homes with timeless materials and a calm build process." },
              { t: "Commercial", d: "Local destinations and spaces built for performance and longevity." },
              { t: "Communication", d: "A modern workflow that feels simple: clear steps, fewer surprises." },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold tracking-tight">{c.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-neutral-600">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
