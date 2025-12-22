import React from "react";
import { site } from "./content";

function LogoMark() {
  return (
    <div className="h-9 w-9 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur shadow-sm" />
  );
}

function Btn({ variant = "primary", children, href }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 shadow-sm";
  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}

function Img({ src, alt, className }) {
  const [ok, setOk] = React.useState(true);
  if (!src) return null;
  return (
    <div className={`relative ${className}`}>
      {ok ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setOk(false)}
        />
      ) : (
        <div className="h-full w-full bg-neutral-100" />
      )}
    </div>
  );
}

export default function App() {
  const { brand, nav, hero, taglineTop, work } = site;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{brand}</div>
              <div className="text-xs text-neutral-500">Custom homes · Gulf Coast</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            {nav.map((n) => (
              <a key={n.href} className="hover:text-neutral-900" href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="relative">
        <div
          className="relative h-[78vh] min-h-[520px] w-full bg-neutral-100"
          style={{
            backgroundImage: hero.heroImage ? `url(${hero.heroImage})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/20 to-white/80" />

          <div className="relative mx-auto flex h-full max-w-6xl items-end px-5 pb-14 md:pb-20">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.22em] text-neutral-700">
                {taglineTop}
              </div>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
                {hero.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
                {hero.subhead}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Btn href="#contact" variant="primary">
                  {hero.primaryCta}
                </Btn>
                <Btn href="#work" variant="secondary">
                  {hero.secondaryCta}
                </Btn>
              </div>

              <div className="mt-10 h-px w-24 bg-neutral-300/70" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          A measured approach to building.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-700">
          We build refined coastal homes across Alabama’s Gulf Coast and Pensacola. Our work is guided by clarity,
          craftsmanship, and a quiet standard of excellence — without noise, without rush.
        </p>
      </section>

      <section id="work" className="border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Selected work</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
                A simple, image-led presentation. Next we’ll add the horizontal “reel” / carousel behavior.
              </p>
            </div>
            <a className="hidden text-sm text-neutral-700 hover:text-neutral-900 md:inline" href="#contact">
              Start a project →
            </a>
          </div>

          <div className="mt-10 space-y-14 md:space-y-20">
            {work.map((item, idx) => {
              const flip = idx % 2 === 1;
              return (
                <article
                  key={item.title}
                  className={`grid gap-6 md:gap-10 ${flip ? "md:grid-cols-[1fr_0.9fr]" : "md:grid-cols-[0.9fr_1fr]"}`}
                >
                  <div className={`${flip ? "md:order-2" : ""}`}>
                    <Img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[16/10] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm"
                    />
                  </div>

                  <div className={`${flip ? "md:order-1" : ""} flex items-center`}>
                    <div className="max-w-md">
                      <div className="text-xs tracking-[0.18em] text-neutral-500">
                        {item.location}
                      </div>
                      <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                        {item.note}
                      </p>

                      <div className="mt-6 flex items-center gap-3 text-sm text-neutral-700">
                        <a className="hover:text-neutral-900" href="#contact">
                          Request an intro call
                        </a>
                        <span className="text-neutral-300">•</span>
                        <a className="hover:text-neutral-900" href="#services">
                          Services
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Custom homes", "A to Z delivery — planning, budgeting, scheduling, execution."],
              ["Renovations & additions", "Sensitive upgrades that protect architecture and improve livability."],
              ["Coastal durability", "Materials and detailing selected for heat, humidity, and salt air."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">{t}</div>
                <div className="mt-2 text-sm leading-relaxed text-neutral-600">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Process</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["Align", "Scope, budget range, and intent."],
              ["Design", "Plans, selections, schedule."],
              ["Build", "Disciplined execution."],
              ["Deliver", "Punch list, handover, support."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">{t}</div>
                <div className="mt-2 text-sm leading-relaxed text-neutral-600">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Placeholder for now. Next we’ll wire this to your intake flow (Monday.com or a simple form).
          </p>

          <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">Start a conversation</div>
                <div className="mt-1 text-sm text-neutral-600">
                  Tell us what you’re building, where, and your ideal timeline.
                </div>
              </div>
              <Btn href="#" variant="primary">
                Email / Form placeholder
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-100 py-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {brand}. All rights reserved.
      </footer>
    </div>
  );
}
