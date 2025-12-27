import React from "react";
import { NavLink } from "react-router-dom";
import { siteContent } from "../content/siteContent";

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-sm tracking-tight transition-colors",
          isActive ? "text-neutral-900" : "text-neutral-700 hover:text-neutral-900",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-30 border-b border-neutral-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl border border-neutral-200 bg-white shadow-sm" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{siteContent.brand.name}</div>
              <div className="text-xs text-neutral-500">{siteContent.brand.location}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {siteContent.nav.map((n) => (
              <NavItem key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>

          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
          >
            Contact
          </NavLink>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-neutral-100 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold tracking-tight">{siteContent.brand.name}</div>
              <div className="mt-2 text-sm text-neutral-600">{siteContent.footer.tagline}</div>
            </div>
            <div className="text-sm text-neutral-600">
              <div>{siteContent.footer.address}</div>
              <div className="mt-1">{siteContent.footer.phone}</div>
            </div>
            <div className="text-sm text-neutral-600 md:text-right">
              <div>{siteContent.footer.license}</div>
              <div className="mt-1 text-xs text-neutral-500">
                © {new Date().getFullYear()} {siteContent.brand.name}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
