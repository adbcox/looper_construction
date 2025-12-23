import React from "react";
import { NavLink, Link } from "react-router-dom";
import { siteContent } from "../content/siteContent";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-30 border-b border-neutral-100 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link to="/" className="group flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-neutral-200 bg-white shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                {siteContent.brand.name}
              </div>
              <div className="text-xs text-neutral-500">{siteContent.brand.location}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-neutral-700 lg:flex">
            {siteContent.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "transition-colors hover:text-neutral-900",
                    isActive ? "text-neutral-900" : "text-neutral-700"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${siteContent.footer.phone.replace(/[^\d]/g, "")}`}
              className="hidden rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50 hover:-translate-y-0.5 sm:inline-flex"
            >
              {siteContent.footer.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-100 lg:hidden">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 text-sm">
            {siteContent.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "whitespace-nowrap rounded-full border px-3 py-1.5 transition",
                    isActive
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-neutral-100 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold tracking-tight">{siteContent.brand.name}</div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {siteContent.footer.tagline}
            </p>
            <p className="mt-3 text-xs text-neutral-500">{siteContent.footer.license}</p>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-wide text-neutral-900">VISIT</div>
            <p className="mt-2 text-sm text-neutral-600">{siteContent.footer.address}</p>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-wide text-neutral-900">CONTACT</div>
            <p className="mt-2 text-sm text-neutral-600">{siteContent.footer.phone}</p>
            <p className="mt-3 text-xs text-neutral-500">
              Tip: replace the contact flow later (Monday form, email, or scheduling).
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-100 py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {siteContent.brand.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
