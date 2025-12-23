import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Projects from "./pages/Projects";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail";
import Awards from "./pages/Awards";
import Gold from "./pages/Gold";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:type" element={<ProjectList />} />
        <Route path="/projects/:type/:slug" element={<ProjectDetail />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/gold-fortification" element={<Gold />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
