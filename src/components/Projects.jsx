import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Cpu, 
  Layers, 
  ArrowUpRight, 
  Activity, 
  CheckCircle2, 
  X, 
  Code, 
  Sliders, 
  Play 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
            <Cpu className="w-3.5 h-3.5" />
            <span>Practical Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Engineered AI systems and web applications demonstrating end-to-end algorithmic implementation, model training, and clean architectural design.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const isForgeMind = project.id === 'forgemind';
            const isFuture = project.id === 'future-aiml';

            return (
              <div
                key={project.id}
                style={{ transitionDelay: `${index * 120 + 100}ms` }}
                className={`glass-card rounded-2xl border flex flex-col justify-between overflow-hidden relative group interactive-hover-card scroll-reveal ${
                  isInView ? 'scroll-reveal-visible' : ''
                } ${
                  isForgeMind 
                    ? 'border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-lg shadow-cyan-950/30 hover:border-cyan-400/60' 
                    : isFuture
                    ? 'border-indigo-500/30 bg-gradient-to-b from-slate-900/70 to-slate-950/70 border-dashed hover:border-indigo-400/60'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                {/* Visual Top Banner / Graphic representation */}
                <div className={`p-6 border-b ${
                  isForgeMind 
                    ? 'border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-indigo-950/20 to-slate-900/60' 
                    : isFuture
                    ? 'border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 to-slate-900/60'
                    : 'border-slate-800 bg-slate-900/40'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 ${
                      isForgeMind
                        ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                        : isFuture
                        ? 'bg-purple-500/20 border border-purple-500/40 text-purple-300'
                        : 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                      {project.badge}
                    </span>

                    <span className="text-xs font-mono text-slate-500 font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Stats pills */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6 text-center">
                      {project.stats.map((st, i) => (
                        <div key={i}>
                          <div className="text-[10px] text-slate-400 uppercase font-semibold">{st.label}</div>
                          <div className="text-xs font-bold text-slate-200 mt-0.5">{st.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 group-hover:border-cyan-500/40"
                    >
                      <span>Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Source on GitHub"
                        className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 inline-block mb-3">
                {selectedProject.badge} &bull; {selectedProject.status}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-cyan-400 mt-1 font-medium">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Detailed Description */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2">
                System Overview
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3">
                Key Technical Highlights
              </h4>
              <div className="space-y-2">
                {selectedProject.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-950/30 text-cyan-300 border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
