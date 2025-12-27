import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectsResidential from "./pages/ProjectsResidential";
import ProjectsCommercial from "./pages/ProjectsCommercial";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/residential" element={<ProjectsResidential />} />
          <Route path="/projects/commercial" element={<ProjectsCommercial />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
