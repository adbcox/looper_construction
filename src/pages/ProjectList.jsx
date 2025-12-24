import React from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

function Card({ title, subtitle, to }) {
  return (
    <Link
      to={to}
      className="group rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
    >
      <div className="text-sm font-semibold tracking-tight">{title}</div>
      {subtitle ? <div className="mt-1 text-xs text-neutral-500">{subtitle}</div> : null}
      <div className="mt-4 text-xs font-medium text-neutral-900">Open →</div>
    </Link>
  );
}

export default function ProjectList() {
  const { type } = useParams();
  const label = type === "commercial" ? "Commercial" : "Residential";

  const items =
    type === "commercial"
      ? [
          { title: "Wharf Marina Store", slug: "wharf-marina-store" },
          { title: "Kilwins", slug: "kilwins" },
          { title: "Our Coffee", slug: "our-coffee" },
        ]
      : [
          { title: "Residence One", slug: "residence-one" },
          { title: "Residence Two", slug: "residence-two" },
          { title: "Residence Three", slug: "residence-three" },
        ];

  return (
    <Layout>
      <section className="py-14">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">{label} Projects</h1>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Placeholder index. Next step: map real project titles + photo sets from the downloaded site assets.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50 md:inline-flex"
            >
              Back to Projects
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {items.map((p) => (
              <Card key={p.slug} title={p.title} subtitle={label} to={`/projects/${type}/${p.slug}`} />
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
