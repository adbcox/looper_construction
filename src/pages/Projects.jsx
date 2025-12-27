import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { siteContent } from "../content/siteContent";

function Card({ title, desc, to }) {
  return (
    <Link
      to={to}
      className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
    >
      <div className="text-sm font-semibold tracking-tight">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
      <div className="mt-4 text-xs font-medium text-neutral-900">View →</div>
    </Link>
  );
}

export default function Projects() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Projects</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600">
          Residential and Commercial live under one top-level. Each section has its own project index page.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card
            title={siteContent.projects.residential.title}
            desc="Luxury coastal homes and custom builds."
            to="/projects/residential"
          />
          <Card
            title={siteContent.projects.commercial.title}
            desc="Selective commercial work — refined, detail-forward, reliable."
            to="/projects/commercial"
          />
        </div>
      </section>
    </Layout>
  );
}
