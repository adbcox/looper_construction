export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-tight">
            Looper Construction
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-neutral-600">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#process" className="hover:text-neutral-900">Process</a>
            <a href="#work" className="hover:text-neutral-900">Work</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="py-28">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm uppercase tracking-widest text-neutral-500">
              Orange Beach · Gulf Coast
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Custom homes,
              <br />
              thoughtfully built.
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              We build refined coastal homes across Alabama’s Gulf Coast and
              Pensacola — guided by clarity, craftsmanship, and a quiet
              standard of excellence. No noise. No rush.
            </p>

            <div className="mt-12 flex gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Begin a conversation
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-8 py-4 text-sm font-medium text-neutral-900 hover:border-neutral-300"
              >
                View selected work
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 border-t border-neutral-100">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              A measured approach to building.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Every project begins with listening — to the site, the architecture,
              and the people who will live there. Our process is disciplined and
              collaborative, balancing precision with flexibility to deliver homes
              that endure.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 border-t border-neutral-100">
          <h2 className="text-3xl font-semibold tracking-tight">Services</h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Custom Homes</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Bespoke residences designed around site, architecture, and
                long-term livability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Renovations & Additions</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Thoughtful transformations that respect the original structure
                while elevating performance and finish.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Pre-Construction Planning</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Early collaboration, budgeting, and constructability guidance to
                ensure clarity before work begins.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 border-t border-neutral-100">
          <h2 className="text-3xl font-semibold tracking-tight">Process</h2>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              "Discovery & Alignment",
              "Pre-Construction",
              "Build",
              "Completion & Care",
            ].map((step, i) => (
              <div key={step}>
                <div className="text-sm text-neutral-500 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-lg font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-28 border-t border-neutral-100"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Let’s build something lasting.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              If you’re planning a custom home or renovation on the Gulf Coast,
              we’d welcome the opportunity to talk.
            </p>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white hover:bg-neutral-800"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Contact flow to be connected next (form, email, or Monday integration).");
                }}
              >
                Start the conversation
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-neutral-100 text-sm text-neutral-500">
          © {new Date().getFullYear()} Looper Construction
        </footer>
      </main>
    </div>
  );
}
