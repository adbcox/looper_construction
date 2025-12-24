import React from "react";
import { Container } from "./Container";
import { siteContent } from "../content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-10">
      <Container className="text-center">
        <div className="text-xs text-neutral-500">
          © {new Date().getFullYear()} {siteContent.brand.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
