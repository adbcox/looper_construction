import React from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { siteContent } from "../content/siteContent";

function ProjectCard({ item, type }) {
  return (
    <Link
      to={`/projects/${type}/${item.slug}`}
      className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5"
    >
      <div className="relative">
        <img
          src={item.cover}
          alt={item.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-neutral-900/0 to-neutral-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <div className="text-sm font-semibold tracking-tight">{item.title}</div>
        <div className="mt-1 text-xs text-neutral-500">View project</div>
      </div>
    </Link>
  );
}

export default function ProjectList() {
  const { type } = useParams();

  const section =
    type === "commercial" ? siteContent.projects.commercial : siteContent.projects.residential;

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wide text-neutral-500">PROJECTS</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">{section.title}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Curated overview. Click into a project to see the reel + full set layout.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50 hover:-translate-y-0.5"
          >
            Back to Projects
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <ProjectCard key={item.slug} item={item} type={type} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
