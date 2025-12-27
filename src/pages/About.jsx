import React from "react";
import { Layout } from "../components/Layout";
import { siteContent } from "../content/siteContent";

export default function About() {
  const a = siteContent.about;

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{a.title}</h1>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{a.p1}</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{a.p2}</p>

            <div className="mt-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-xs font-semibold tracking-wide text-neutral-900">FOUNDATION</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{a.mission}</p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img
                src="/images/placeholder.svg"
                alt="About hero"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold tracking-tight">{a.fromDeskTitle}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a.p3}</p>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold tracking-tight">Relationships</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a.p4}</p>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:col-span-2">
                <div className="text-sm font-semibold tracking-tight">Next step</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a.p5}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
