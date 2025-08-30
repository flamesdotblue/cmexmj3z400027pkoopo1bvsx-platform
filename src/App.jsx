import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-orange-500/70 selection:text-white">
      <Hero />
      <Skills />
      <ProjectsGrid />
      <Footer />
    </div>
  );
}
