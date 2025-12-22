const IMAGES = [
  // First image encountered on Loper "Residential" page (Soulmates tile)
  // You can swap these later with better exterior hero shots.
  {
    src: "https://lirp.cdn-website.com/58ff7d5e/dms3rep/multi/opt/025-1920w.JPG",
    alt: "Light-filled coastal interior, Looper Construction",
    label: "Selected Work",
    title: "Soulmates",
    note: "Coastal residence · Gulf Coast",
  },
  // Optional: add more images as you find them
  // {
  //   src: "https://lirp.cdn-website.com/.../multi/opt/xxx-1920w.JPG",
  //   alt: "Project image",
  //   label: "Selected Work",
  //   title: "Coastal Calm",
  //   note: "Orange Beach · Alabama",
  // },
];

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-neutral-600 hover:text-neutral-900"
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
      {children}
    </div>
  );
}

function EditorialImage({ src, alt, label, title, note }) {
  return (
    <section className="py-10 md:py-14">
      <div className="overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="h-[58vh] w-full object-cover md:h-[70vh]"
            loading="lazy"
          />

          {/* Light editorial shading: subtle bottom lift for readability if you ever overlay text */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/80 to-transparent" />
        </div>
      </div>

      {/* Editorial caption block */}
      <div className="mt-6 md:mt-8 grid gap-3 md:grid-cols-12 md:items-end">
        <div className="md:col-span-3">
          <SectionLabel>{label}</SectionLabel>
        </div>

        <div className="md:col-span-9">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </div>
            <div className="text-sm text-neutral-600">{note}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header (quiet, editorial) */}
      <header className="sticky top-0 z-20 border-b border-neutral-100 bg-white/85 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="text-sm font-semibold tracking-tight">
              Looper Construction
            </div>
            <div className="hidden sm:block text-xs text-neutral-500">
              Orange Beach · Gulf Coast
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:border-neutral-300"
          >
            Inquire
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Intro (minimal copy, big breathing room) */}
        <section className="py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                Quiet luxury,
                <br />
                built to last.
              </h1>
            </div>

            <div className="md:col-span-5">
              <p className="text-lg leading-relaxed text-neutral-600">
                Custom homes along Alabama’s Gulf Coast and Pensacola—defined by
                restraint, craft, and a calm standard of excellence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  View work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-900 hover:border-neutral-300"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial image-led sequence */}
        <section id="work" className="border-t border-neutral-100">
          {IMAGES.map((img) => (
            <EditorialImage key={img.src} {...img} />
          ))}
        </section>

        {/* Minimal services cue (not dominant) */}
        <section id="services" className="py-16 md:py-20 border-t border-neutral-100">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <SectionLabel>Services</SectionLabel>
            </div>
            <div className="md:col-span-9">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="text-lg font-semibold">Custom Homes</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Bespoke residences designed around site, architecture, and
                    long-term livability.
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold">Renovations</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Thoughtful updates that elevate performance, finish, and flow.
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold">Pre-Construction</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Early alignment on scope, budget, and timeline—before the first day on site.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process (kept calm + short) */}
        <section id="process" className="py-16 md:py-20 border-t border-neutral-100">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <SectionLabel>Process</SectionLabel>
            </div>
            <div className="md:col-span-9">
              <div className="max-w-3xl">
                <div className="text-2xl font-semibold tracking-tight">
                  Disciplined planning. Precise execution.
                </div>
                <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                  We keep communication clear and decisions intentional—so the build
                  feels steady, not chaotic.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-4">
                  {[
                    "Discovery",
                    "Pre-Construction",
                    "Build",
                    "Completion",
                  ].map((t, i) => (
                    <div key={t} className="rounded-2xl border border-neutral-100 p-5">
                      <div className="text-xs text-neutral-500 mb-2">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="text-sm font-semibold">{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact (simple placeholder; Monday integration later) */}
        <section id="contact" className="py-20 border-t border-neutral-100">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <SectionLabel>Contact</SectionLabel>
            </div>
            <div className="md:col-span-9">
              <div className="max-w-2xl">
                <div className="text-3xl font-semibold tracking-tight">
                  Begin the conversation.
                </div>
                <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                  For custom homes and renovations on the Gulf Coast, we’d welcome
                  the opportunity to talk.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Next: connect a real contact flow (email / form / Monday intake).");
                    }}
                  >
                    Send an inquiry
                  </a>
                  <a
                    href="#services"
                    className="rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-900 hover:border-neutral-300"
                  >
                    What we do
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-neutral-100 text-xs text-neutral-500">
          © {new Date().getFullYear()} Looper Construction
        </footer>
      </main>
    </div>
  );
}
