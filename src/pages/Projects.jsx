import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { siteContent } from "../content/siteContent";

function SplitCard({ title, subtitle, blurb, image, href, tone = "light" }) {
  const toneClass =
    tone === "dark"
      ? "bg-neutral-950 text-white border-neutral-800"
      : "bg-white text-neutral-900 border-neutral-200";

  return (
    <Link
      to={href}
      className={`group grid gap-6 overflow-hidden rounded-3xl border ${toneClass} p-6 transition hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-2 md:items-center`}
    >
      <div>
        <div className="text-xs font-medium tracking-widest text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
          {subtitle}
        </div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-700 dark:text-neutral-300 dark:group-hover:text-neutral-200">
          {blurb}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
          Explore
          <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full" />
        )}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
      </div>
    </Link>
  );
}

export default function Projects() {
  const meta = siteContent.projects?.meta || {};
  const p = siteContent.projects || {};
  const hero = p.hero || {};
  const highlights = p.highlights || {};

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-widest text-neutral-500">
            {hero.eyebrow || "PROJECTS"}
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {hero.title || "Work across residential and commercial."}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            {hero.subtitle ||
              "A balanced portfolio, a steady process, and a quiet standard of execution — tailored to the project and the people who use it."}
          </p>
        </div>

        {/* Two-lane entry: Residential + Commercial */}
        <div className="mt-10 grid gap-6">
          <SplitCard
            title={highlights.residentialTitle || "Residential"}
            subtitle={highlights.residentialSubtitle || "Custom homes"}
            blurb={
              highlights.residentialBlurb ||
              "Three representative homes (for now) — curated to show range without overwhelming. Designed for clarity, built for longevity."
            }
            image={highlights.residentialImage || "/gallery/01.jpg"}
            href="/projects/residential"
            tone="light"
          />

          <SplitCard
            title={highlights.commercialTitle || "Commercial"}
            subtitle={highlights.commercialSubtitle || "Shops, restaurants, and more"}
            blurb={
              highlights.commercialBlurb ||
              "A more public-facing voice and a slightly cooler presentation — emphasizing locations, tenants, and finished experience."
            }
            image={highlights.commercialImage || "/gallery/02.jpg"}
            href="/projects/commercial"
            tone="light"
          />
        </div>

        {/* Quiet “proof” row */}
        <div className="mt-10 grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 md:grid-cols-3">
          <div>
            <div className="text-xs font-medium tracking-widest text-neutral-500">LEGACY</div>
            <div className="mt-2 text-sm text-neutral-700">
              {meta.legacy || "Established locally. Built to last."}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium tracking-widest text-neutral-500">DISCIPLINE</div>
            <div className="mt-2 text-sm text-neutral-700">
              {meta.discipline || "Process-led delivery, low-drama execution."}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium tracking-widest text-neutral-500">RANGE</div>
            <div className="mt-2 text-sm text-neutral-700">
              {meta.range || "Residential and commercial under one roof."}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
          >
            Start a conversation
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          >
            About the company
          </Link>
        </div>
      </section>
    </Layout>
  );
}
