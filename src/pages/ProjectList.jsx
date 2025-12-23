import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { siteContent } from "../content/siteContent";

function ProjectCard({ item, type }) {
  return (
    <Link
      to={`/projects/${type}/${item.slug}`}
      className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] bg-neutral-100">
        <img
          src={item.cover}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
      </div>

      <div className="p-5">
        <div className="text-xs font-medium tracking-widest text-neutral-500">
          {item.location || (type === "commercial" ? "Commercial" : "Residential")}
        </div>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">{item.title}</h3>
        {item.summary ? (
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.summary}</p>
        ) : null}
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
          View
          <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectList() {
  const { type } = useParams();
  const projects = siteContent.projects?.[type] || [];
  const meta = siteContent.projects?.listMeta?.[type] || {};

  // For residential: show “featured” top 3 to keep balance, then the full list.
  const featured = useMemo(() => {
    if (type !== "residential") return [];
    const fromContent = (siteContent.projects?.featuredResidential || []).filter(Boolean);
    if (fromContent.length) return fromContent;
    return projects.slice(0, 3);
  }, [type, projects]);

  const remaining = useMemo(() => {
    if (type !== "residential") return projects;
    const featSlugs = new Set(featured.map((p) => p.slug));
    return projects.filter((p) => !featSlugs.has(p.slug));
  }, [type, projects, featured]);

  const title =
    type === "commercial"
      ? meta.title || "Commercial projects"
      : meta.title || "Residential projects";

  const subtitle =
    type === "commercial"
      ? meta.subtitle ||
        "A more public-facing portfolio — show the experience, the tenant, and the context."
      : meta.subtitle ||
        "A quieter portfolio — fewer words, bigger type, and a calm presentation that lets the work speak.";

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-medium tracking-widest text-neutral-500">
              {type?.toUpperCase() || "PROJECTS"}
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">{subtitle}</p>
          </div>
          <Link
            to="/projects"
            className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          >
            All projects
          </Link>
        </div>

        {type === "residential" && featured.length ? (
          <div className="mt-10">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-lg font-semibold tracking-tight">Featured homes</h2>
              <div className="text-sm text-neutral-500">Curated selection (3)</div>
            </div>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {featured.map((p) => (
                <ProjectCard key={p.slug} item={p} type={type} />
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight">
            {type === "residential" ? "More residential work" : "Selected work"}
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remaining.map((p) => (
              <ProjectCard key={p.slug} item={p} type={type} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
