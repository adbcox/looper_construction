import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { ImageReel } from "../components/ImageReel";
import { siteContent } from "../content/siteContent";

export default function ProjectDetail() {
  const { type, slug } = useParams();

  const section =
    type === "commercial" ? siteContent.projects.commercial : siteContent.projects.residential;

  const project = useMemo(
    () => section.items.find((i) => i.slug === slug),
    [section.items, slug]
  );

  const images = useMemo(() => {
    // Later: load from content file or a folder convention.
    // For now: placeholders only.
    return new Array(10).fill(0).map((_, i) => ({
      src: "/images/placeholder.svg",
      alt: `${project?.title || "Project"} image ${i + 1}`,
    }));
  }, [project]);

  if (!project) {
    return (
      <Layout>
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-semibold tracking-tight">Project not found</h1>
          <p className="mt-3 text-sm text-neutral-600">
            This is a placeholder structure. Add the project slug to `src/content/siteContent.js`.
          </p>
          <Link to={`/projects/${type}`} className="mt-6 inline-flex rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white">
            Back
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wide text-neutral-500">
              {type === "commercial" ? "COMMERCIAL PROJECT" : "RESIDENTIAL PROJECT"}
            </div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Placeholder detail view. Keep the structure; swap in real photography + short descriptions later.
            </p>
          </div>

          <Link
            to={`/projects/${type}`}
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50 hover:-translate-y-0.5"
          >
            Back to {section.title}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img src={project.cover} alt={project.title} className="h-[440px] w-full object-cover" />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold tracking-tight">At a glance</div>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                  <span>Quiet, editorial presentation (readable for 50+ audience).</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                  <span>Subtle hover cues (soft lift; no obnoxious highlights).</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                  <span>Gallery reel is mouse/trackpad-friendly (no scroll-jack).</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-sm font-semibold tracking-tight">Future enhancement (optional)</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Add a “download full album” link, or a deeper story section with 2–3 sentences and a few key specs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <ImageReel images={images} />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Design", "Build", "Finish"].map((t) => (
            <div key={t} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold tracking-tight">{t}</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Short placeholder copy. Keep it to one sentence for readability.
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
