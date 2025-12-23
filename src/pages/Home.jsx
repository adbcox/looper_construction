import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { siteContent } from "../content/siteContent";
import { ImageReel } from "../components/ImageReel";

export default function Home() {
  const hero = siteContent.home;

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
              Orange Beach • Gulf Coast • Custom Build
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {hero.headline}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              {hero.intro}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50 hover:-translate-y-0.5"
              >
                About the Company
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[hero.support1, hero.support2].map((t, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
                >
                  <div className="text-sm font-semibold tracking-tight">
                    {i === 0 ? "Timeless Design" : "True Custom"}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img
                src="/images/placeholder.svg"
                alt="Featured build"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
              <span>Featured image (replace)</span>
              <span>Subtle hover + soft borders</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <ImageReel />
      </section>

      <section className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Residential", desc: "Custom homes designed with architects and built for the coast.", to: "/projects/residential" },
              { title: "Commercial", desc: "Selective commercial work — delivered with the same standards.", to: "/projects/commercial" },
              { title: "Process", desc: "A clear, service-forward build experience.", to: "/process" },
            ].map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
              >
                <div className="text-sm font-semibold tracking-tight">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.desc}</p>
                <div className="mt-4 text-xs font-medium text-neutral-900">Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
