import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import AiBackground from './components/AiBackground';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic AI Neural Nodes Canvas Background */}
      <AiBackground />

      {/* Sticky Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={handleOpenResume} />
        <About onOpenResume={handleOpenResume} />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}

export default App;
