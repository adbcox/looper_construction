import React from "react";

const IMAGES = [
  {
    src: "https://lirp.cdn-website.com/58ff7d5e/dms3rep/multi/opt/DSC02869-1920w.jpg",
    alt: "White coastal home exterior",
    tag: "Coastal",
  },
  {
    src: "https://lirp.cdn-website.com/58ff7d5e/dms3rep/multi/opt/Loper%2BStritzinger-3970-1920w.jpg",
    alt: "Classic coastal residence",
    tag: "Classic",
  },
  {
    src: "https://lirp.cdn-website.com/58ff7d5e/dms3rep/multi/opt/Loper%2BHolmes-4386-1920w.jpg",
    alt: "Refined white coastal elevation",
    tag: "Refined",
  },
  {
    src: "https://lirp.cdn-website.com/58ff7d5e/dms3rep/multi/opt/Peed%2BHome%2B10.10.24-27-1920w.jpg",
    alt: "Coastal home and pool",
    tag: "Resort",
  },
  {
    src: "https://lirp.cdn-website.com/58ff7d5e/dms3rep/multi/opt/Loper%2BBoring-4266-1920w.jpg",
    alt: "Modern coastal residence",
    tag: "Modern",
  },
  {
    src: "https://lirp.cdn-website.com/58ff7d5e/dms3rep/multi/opt/Coastal-Dreams-7-1920w.jpg",
    alt: "Coastal home façade",
    tag: "Gulf",
  },
  {
    src: "https://lirp.cdn-website.com/58ff7d5e/dms3rep/multi/opt/025-1920w.JPG",
    alt: "Bright coastal interior living space",
    tag: "Interior",
  },
  {
    src: "https://lirp.cdn-website.com/58ff7d5e/dms3rep/multi/opt/Loper%2BPenkava-5573-1920w.jpg",
    alt: "Estate exterior courtyard",
    tag: "Estate",
  },
];

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors"
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, body }) {
  return (
    <div className="mx-auto max-w-3xl px-6">
      {eyebrow ? (
        <div className="text-xs tracking-[0.25em] uppercase text-neutral-500">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-relaxed text-neutral-700">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function FullBleedImagePanel({ src, alt, kicker, headline, sub }) {
  return (
    <section className="relative isolate">
      <div className="h-[72vh] min-h-[520px] w-full overflow-hidden bg-neutral-100">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Soft coastal gradient overlay (light, not “dark”) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto max-w-6xl px-6 pb-10 md:pb-14">
          <div className="max-w-3xl">
            {kicker ? (
              <div className="text-xs tracking-[0.25em] uppercase text-neutral-600">
                {kicker}
              </div>
            ) : null}
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
              {headline}
            </h1>
            {sub ? (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
                {sub}
              </p>
            ) : null}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
              >
                Begin a conversation
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-50 transition-colors"
              >
                View selected work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatementBand({ eyebrow, title, body }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <SectionTitle eyebrow={eyebrow} title={title} body={body} />
      </div>
    </section>
  );
}

function FeatureSplit({ src, alt, title, body, bullets, flip = false }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className={classNames("grid gap-10 items-center md:grid-cols-12", flip && "md:[&>*:first-child]:col-start-7")}>
          <div className={classNames("md:col-span-6", flip && "md:col-start-7")}>
            <div className="overflow-hidden rounded-3xl bg-neutral-100 ring-1 ring-neutral-200">
              <img
                src={src}
                alt={alt}
                className="h-[420px] w-full object-cover md:h-[520px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className={classNames("md:col-span-6", flip ? "md:col-start-1" : "")}>
            <div className="max-w-xl">
              <div className="text-xs tracking-[0.25em] uppercase text-neutral-500">
                The Work
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                {title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                {body}
              </p>

              {bullets?.length ? (
                <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-7">
                <a
                  href="#process"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-50 transition-colors"
                >
                  See the process
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reel() {
  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-6 md:pt-10">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.25em] uppercase text-neutral-500">
              Selected work
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
              A quick reel to set the tone.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              This is just to visualize scale, spacing, and emotion. We’ll refine
              the final selections and captions once you pick which homes you want featured.
            </p>
          </div>
          <div className="hidden md:block text-sm text-neutral-600">
            Scroll →
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-14 md:pb-18">
        <div className="mt-8 flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className="min-w-[300px] max-w-[300px] md:min-w-[420px] md:max-w-[420px]"
            >
              <div className="overflow-hidden rounded-3xl bg-neutral-100 ring-1 ring-neutral-200">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-[220px] w-full object-cover md:h-[280px]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm font-medium text-neutral-900">
                  {img.tag}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-neutral-500">
                  Gulf Coast
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCards() {
  const items = [
    {
      title: "Disciplined planning",
      body:
        "We align early on scope, budget, selections, and schedule—so decisions feel calm, not rushed.",
    },
    {
      title: "Craftsmanship, quietly done",
      body:
        "Clean lines, consistent detailing, and high standards across every trade—built to endure.",
    },
    {
      title: "Hands-on communication",
      body:
        "The experience should feel guided and personal. Clients always know what’s happening and what’s next.",
    },
  ];

  return (
    <section id="process" className="bg-[#fbfbfa]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <SectionTitle
          eyebrow="Our process"
          title="A measured approach to building."
          body="Luxury isn’t loud. It’s a sequence of decisions made well, executed precisely, and supported with real communication."
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 px-6 md:grid-cols-3 md:px-0">
          {items.map((x) => (
            <div
              key={x.title}
              className="rounded-3xl bg-white p-6 ring-1 ring-neutral-200"
            >
              <div className="text-sm font-semibold text-neutral-950">
                {x.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {x.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <div className="rounded-3xl bg-[#fbfbfa] p-8 ring-1 ring-neutral-200 md:p-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <div className="text-xs tracking-[0.25em] uppercase text-neutral-500">
                Contact
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                Let’s talk about your home.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                For now this is a placeholder CTA. Next step is swapping this to
                your real flow (form, email, or a Monday intake).
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors md:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Replace with real contact flow (form/email/Monday).");
                }}
              >
                Begin
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-10 border-t border-neutral-200 pt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Looper Construction · Orange Beach, Alabama
        </footer>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      {/* Minimal header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white ring-1 ring-neutral-200" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                Looper Construction
              </div>
              <div className="text-xs text-neutral-500">
                Orange Beach · Gulf Coast
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-neutral-50 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Feature-story rhythm */}
      <FullBleedImagePanel
        src={IMAGES[0].src}
        alt={IMAGES[0].alt}
        kicker="Orange Beach · Gulf Coast"
        headline="Custom homes, thoughtfully built."
        sub="A quiet, coastal approach to construction—disciplined planning, precise execution, and finishes that endure."
      />

      <StatementBand
        eyebrow="Editorial"
        title="Homes that feel timeless—never trendy."
        body="The goal is classic coastal luxury: bright, calm, architectural. Not flashy. Not busy. Just quietly excellent."
      />

      <FeatureSplit
        src={IMAGES[3].src}
        alt={IMAGES[3].alt}
        title="Built for coastal living—without compromise."
        body="From exterior performance to interior livability, every decision is made with long-term ownership in mind."
        bullets={[
          "Material choices that hold up to the coast",
          "Layouts designed around real life (and real hosting)",
          "Details that read as custom the moment you walk in",
        ]}
      />

      <FullBleedImagePanel
        src={IMAGES[6].src}
        alt={IMAGES[6].alt}
        kicker="Interior light"
        headline="Natural light, clean lines, calm rooms."
        sub="This is the feeling we’re building the site around—bright, refined, and composed."
      />

      <Reel />

      <FullBleedImagePanel
        src={IMAGES[7].src}
        alt={IMAGES[7].alt}
        kicker="Estate scale"
        headline="Quiet luxury at every scale."
        sub="Whether it’s a refined coastal retreat or a full estate build, the standards stay the same."
      />

      <ProcessCards />
      <ContactBand />
    </div>
  );
}
