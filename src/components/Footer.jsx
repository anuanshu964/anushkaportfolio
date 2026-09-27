import React from 'react';
import { 
  ArrowUp, 
  Terminal, 
  Mail, 
  Heart,
  Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Monogram & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-xs tracking-wider">
                    DA
                  </span>
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.35)]">
                {personalData.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              B.Tech student specializing in Artificial Intelligence & Machine Learning. Dedicated to building impactful intelligent systems and advancing practical software technologies.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1 font-mono">
              <span className="flex items-center gap-1 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" /> AI/ML Portfolio
              </span>
              <span>&bull;</span>
              <span>{personalData.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#certifications" className="text-slate-400 hover:text-cyan-400 transition-colors">Certifications</a></li>
              <li><a href="#education" className="text-slate-400 hover:text-cyan-400 transition-colors">Education</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn ({personalData.linkedinHandle})</span>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub ({personalData.githubHandle})</span>
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{personalData.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved. Designed for internships & placements.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
