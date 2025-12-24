import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

export default function Projects() {
  return (
    <Layout>
      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Choose Residential or Commercial. Next, we’ll map the full project lists and image sets.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Link
                to="/projects/residential"
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
              >
                <div className="text-sm font-semibold tracking-tight">Residential</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Custom homes, architect collaboration, timeless finishes.
                </p>
                <div className="mt-4 text-xs font-medium text-neutral-900">View →</div>
              </Link>

              <Link
                to="/projects/commercial"
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
              >
                <div className="text-sm font-semibold tracking-tight">Commercial</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Retail + public spaces, thoughtful scheduling, strong execution.
                </p>
                <div className="mt-4 text-xs font-medium text-neutral-900">View →</div>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
