import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
