import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { siteContent } from "../content/siteContent";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="text-xs font-medium uppercase tracking-widest text-neutral-500">
      {children}
    </div>
  );
}

export default function Home() {
  const c = siteContent.home;

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-neutral-100">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(1200px 600px at 20% 10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(900px 500px at 80% 40%, rgba(0,0,0,0.04), transparent 55%), linear-gradient(180deg, rgba(250,250,250,1), rgba(255,255,255,1))",
          }}
        />
        <Container className="relative py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Pill>{c.eyebrow}</Pill>
                <Pill>Quiet luxury</Pill>
                <Pill>Clear delivery</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                {c.headline}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                {c.subhead}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to={c.primaryCta.to}
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  {c.primaryCta.label}
                </Link>
                <Link
                  to={c.secondaryCta.to}
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
                >
                  {c.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-neutral-200 bg-white/70 p-3 shadow-sm backdrop-blur">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-100">
                  <div
                    className="aspect-[4/3] w-full"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.08), rgba(0,0,0,0.02)), url('/images/hero-placeholder.jpg') center/cover no-repeat",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-white/75 px-4 py-3 backdrop-blur">
                    <div className="text-xs font-medium text-neutral-700">
                      Placeholder hero photography
                    </div>
                    <div className="mt-0.5 text-xs text-neutral-500">
                      Swap to an aerial / coastal image later (no decisions today).
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid gap-3">
                  <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-xs text-neutral-700 shadow-sm">
                    Subtle hover + elevation cues (older-audience friendly).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {c.featureBlocks.map((b) => (
              <Link
                key={b.to}
                to={b.to}
                className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
              >
                <div className="text-sm font-semibold tracking-tight">{b.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{b.desc}</p>
                <div className="mt-4 text-xs font-medium text-neutral-900">Explore →</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-100 py-14 md:py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Projects</SectionLabel>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                A balanced view of the work.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Residential and commercial are presented with equal clarity. This is a structured
                preview — we’ll map the real names + images next.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/projects/residential"
                  className="rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
                >
                  Residential
                </Link>
                <Link
                  to="/projects/commercial"
                  className="rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
                >
                  Commercial
                </Link>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold tracking-tight">Featured Residential</div>
                  <div className="mt-4 space-y-3">
                    {c.featuredResidential.map((p) => (
                      <Link
                        key={p.title}
                        to={p.to}
                        className="block rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
                      >
                        <div className="font-medium">{p.title}</div>
                        <div className="mt-0.5 text-xs text-neutral-500">{p.note}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold tracking-tight">Featured Commercial</div>
                  <div className="mt-4 space-y-3">
                    {c.featuredCommercial.map((p) => (
                      <Link
                        key={p.title}
                        to={p.to}
                        className="block rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
                      >
                        <div className="font-medium">{p.title}</div>
                        <div className="mt-0.5 text-xs text-neutral-500">{p.note}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="text-sm font-semibold tracking-tight">Next mapping step</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Once you approve this homepage structure, we’ll map the live site text verbatim
                  into About / Process, and then build the project index + project detail pages with the real
                  image sets you’ve already pulled.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-100 py-14 md:py-16">
        <Container>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h3 className="text-xl font-semibold tracking-tight">
                  Ready to talk through a project?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Simple next step: contact. Later we can add a calm intake flow — without cluttering the experience.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
