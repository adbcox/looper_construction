import React from "react";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { siteContent } from "../content/siteContent";

export default function Awards() {
  const c = siteContent.awards;
  return (
    <Layout>
      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight">{c.title}</h1>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{c.body}</p>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
