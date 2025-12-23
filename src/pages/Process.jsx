import React from "react";
import { Layout } from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Our Process</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600">
          This page will map to the current site’s process content verbatim. For now, it is a placeholder structure so routing + layout are locked.
        </p>
        <div className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-700">
          Placeholder page — keep structure, replace copy later using the exported HTML text.
        </div>
      </section>
    </Layout>
  );
}
