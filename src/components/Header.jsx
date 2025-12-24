import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./Container";
import { LogoMark } from "./LogoMark";
import { siteContent } from "../content/siteContent";

export function Header() {
  const nav = siteContent.nav;

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-100 bg-white/80 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-neutral-900">
                {siteContent.brand.name}
              </div>
              <div className="text-xs text-neutral-500">{siteContent.brand.locationLine}</div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  "transition hover:text-neutral-900 " + (isActive ? "text-neutral-900" : "text-neutral-700")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className="rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
          >
            Get in touch
          </NavLink>
        </div>
      </Container>
    </header>
  );
}
