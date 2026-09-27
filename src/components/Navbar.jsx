import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-xl shadow-cyan-950/20' 
        : 'bg-slate-950/50 backdrop-blur-md border-b border-white/[0.05] py-3.5'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left spacer matching right actions width to ensure nav is centered */}
          <div className="hidden lg:block w-[240px] shrink-0 pointer-events-none" aria-hidden="true" />

          {/* Desktop Navigation Links (Centered) */}
          <div className="flex-1 flex justify-center">
            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-slate-900/70 px-2.5 py-1 rounded-full border border-cyan-500/20 backdrop-blur-md shrink-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Large Screen / Laptop Nav (1024px - 1280px compact layout) */}
            <nav className="hidden lg:flex xl:hidden items-center gap-0.5 bg-slate-900/70 px-2 py-1 rounded-full border border-cyan-500/20 backdrop-blur-md shrink-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-2 py-1 rounded-full text-[11px] font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right Action Buttons (Always fully visible on desktop) */}
          <div className="hidden lg:flex items-center justify-end w-[240px] gap-2 shrink-0">
            {/* View Resume */}
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-cyan-300 bg-slate-900/80 hover:bg-slate-850 border border-cyan-500/30 hover:border-cyan-400/60 rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Resume</span>
            </button>

            {/* Contact Me */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all duration-200 shadow-md shadow-cyan-500/25 flex items-center gap-1.5 hover:shadow-cyan-400/40 whitespace-nowrap hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Medium Screen (Tablet & Mobile) Action + Hamburger */}
          <div className="flex lg:hidden items-center justify-end w-full gap-2">
            <button
              onClick={onOpenResume}
              className="hidden sm:flex px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-cyan-300 bg-slate-900/80 border border-cyan-500/30 rounded-xl items-center gap-1.5 whitespace-nowrap"
            >
              <FileText className="w-3 h-3 text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:flex px-3 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl items-center gap-1 whitespace-nowrap"
            >
              <Send className="w-3 h-3" />
              <span>Contact</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl bg-slate-900/90 border border-cyan-500/25 text-slate-300 hover:text-cyan-300 focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 pt-3 pb-6 animate-fadeIn transition-all">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 mt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="text-center py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-cyan-500/30 rounded-xl flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-center py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-md shadow-cyan-500/25 flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
