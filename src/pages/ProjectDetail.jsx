import React from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

export default function ProjectDetail() {
  const { type, slug } = useParams();
  const label = type === "commercial" ? "Commercial" : "Residential";

  return (
    <Layout>
      <section className="py-14">
        <Container>
          <div className="max-w-4xl">
            <div className="flex items-center justify-between gap-6">
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                  {label} Project
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight">
                  {slug.replaceAll("-", " ")}
                </h1>
              </div>

              <Link
                to={`/projects/${type}`}
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
              >
                Back
              </Link>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <div
                className="aspect-[16/9] w-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.08), rgba(0,0,0,0.02)), url('/images/project-placeholder.jpg') center/cover no-repeat",
                }}
              />
            </div>

            <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold tracking-tight">Project photos</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Placeholder detail page. Next step: wire the real photo set + captions for this project.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
