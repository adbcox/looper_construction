import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { siteContent } from "../content/siteContent";

export default function ProjectDetail() {
  const { type, slug } = useParams();
  const project = (siteContent.projects?.[type] || []).find((p) => p.slug === slug);

  const images = useMemo(() => {
    // Convention:
    //   public/projects/<type>/<slug>/01.jpg ... 12.jpg
    // If none exist, we fall back to placeholders so the page never goes “blank white”.
    const base = `/projects/${type}/${slug}`;
    return new Array(12).fill(0).map((_, i) => ({
      src: `${base}/${String(i + 1).padStart(2, "0")}.jpg`,
      alt: `${project?.title || "Project"} image ${i + 1}`,
    }));
  }, [type, slug, project]);

  if (!project) {
    return (
      <Layout>
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-semibold tracking-tight">Project not found</h1>
          <p className="mt-3 text-sm text-neutral-600">
            Add this project to <code className="rounded bg-neutral-100 px-2 py-1">src/content/siteContent.js</code>{" "}
            under <code className="rounded bg-neutral-100 px-2 py-1">projects.{type}</code>.
          </p>
          <div className="mt-6">
            <Link
              to={`/projects/${type}`}
              className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
            >
              Back to {type}
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-medium tracking-widest text-neutral-500">
              {project.location || (type === "commercial" ? "Commercial" : "Residential")}
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{project.title}</h1>
            {project.summary ? (
              <p className="mt-5 text-base leading-relaxed text-neutral-600">{project.summary}</p>
            ) : null}
          </div>
          <Link
            to={`/projects/${type}`}
            className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          >
            Back to {type}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Left: main image */}
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
            <img
              src={project.cover}
              alt={project.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: details */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">Project notes</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
              {project.details?.length
                ? project.details.map((d, i) => <p key={i}>{d}</p>)
                : [
                    <p key="placeholder">
                      This page is wired for real project media. Drop images into{" "}
                      <code className="rounded bg-neutral-100 px-2 py-1">public/projects/{type}/{slug}/</code>{" "}
                      and they will load automatically.
                    </p>,
                  ]}
            </div>
          </div>
        </div>

        {/* Image strip */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight">Gallery</h2>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-3">
            {images.map((img) => (
              <div
                key={img.src}
                className="relative h-40 w-64 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
              >
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            Tip: keep images roughly consistent (e.g., 2560×1920). We can add thumbnails later if needed.
          </p>
        </div>
      </section>
    </Layout>
  );
}
