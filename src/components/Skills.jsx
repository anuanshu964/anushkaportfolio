import React, { useState } from 'react';
import { 
  Code2, 
  Coffee, 
  Cpu, 
  Binary, 
  Boxes, 
  Database, 
  LineChart, 
  BrainCircuit, 
  Lightbulb, 
  Terminal, 
  GitBranch, 
  FileSpreadsheet,
  CheckCircle,
  Layers,
  Wrench
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  // Map icon strings to Lucide / custom components
  const iconMap = {
    Code2,
    Coffee,
    Cpu,
    Binary,
    Boxes,
    Database,
    LineChart,
    BrainCircuit,
    Lightbulb,
    Terminal,
    GitBranch,
    Github: GithubIcon,
    FileSpreadsheet
  };

  const categories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'languages', label: 'Languages' },
    { id: 'cs', label: 'Core CS & OOPs' },
    { id: 'analytical', label: 'Analytical & Problem Solving' },
    { id: 'tools', label: 'Tools & Platforms' },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Comprehensive foundation spanning modern programming languages, computer science fundamentals, analytical problem solving, and industry developer tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter Pills */}
        <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 scroll-reveal delay-150 ${isInView ? 'scroll-reveal-visible' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Sections */}
        <div className="space-y-12">
          
          {/* Programming Languages */}
          {(activeCategory === 'all' || activeCategory === 'languages') && (
            <div>
              <div className={`flex items-center gap-3 mb-6 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Programming Languages
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {skillsData.programmingLanguages.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  const targetWidth = skill.name === 'Python' ? '92%' : skill.name === 'Java' ? '85%' : '82%';
                  return (
                    <div
                      key={index}
                      style={{ transitionDelay: `${index * 90 + 100}ms` }}
                      className={`glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 relative group interactive-hover-card scroll-reveal ${
                        isInView ? 'scroll-reveal-visible' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-mono text-cyan-400/80 font-bold">{targetWidth}</span>
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {skill.desc}
                      </p>

                      <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out animate-bar-shimmer"
                          style={{ width: isInView ? targetWidth : '0%' }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Core CS & OOPs */}
          {(activeCategory === 'all' || activeCategory === 'cs') && (
            <div>
              <div className={`flex items-center gap-3 mb-6 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Binary className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Computer Science Fundamentals
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {skillsData.coreCS.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Boxes;
                  const targetWidth = skill.name === 'Data Structures' ? '90%' : skill.name === 'OOPs' ? '88%' : '85%';
                  return (
                    <div
                      key={index}
                      style={{ transitionDelay: `${index * 90 + 100}ms` }}
                      className={`glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 relative group interactive-hover-card scroll-reveal ${
                        isInView ? 'scroll-reveal-visible' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-mono text-indigo-400/80 font-bold">{targetWidth}</span>
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {skill.desc}
                      </p>

                      <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-indigo-400 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out animate-bar-shimmer"
                          style={{ width: isInView ? targetWidth : '0%' }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Analytical & Problem Solving */}
          {(activeCategory === 'all' || activeCategory === 'analytical') && (
            <div>
              <div className={`flex items-center gap-3 mb-6 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Analytical & Problem Solving
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {skillsData.problemSolving.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Lightbulb;
                  const targetWidth = skill.name === 'Analytical Thinking' ? '92%' : skill.name === 'Logical Reasoning' ? '88%' : '90%';
                  return (
                    <div
                      key={index}
                      style={{ transitionDelay: `${index * 90 + 100}ms` }}
                      className={`glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 relative group interactive-hover-card scroll-reveal ${
                        isInView ? 'scroll-reveal-visible' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-mono text-emerald-400/80 font-bold">{targetWidth}</span>
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {skill.desc}
                      </p>

                      <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full transition-all duration-1000 ease-out animate-bar-shimmer"
                          style={{ width: isInView ? targetWidth : '0%' }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tools & Platforms */}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <div>
              <div className={`flex items-center gap-3 mb-6 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Tools & Platforms
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillsData.toolsAndPlatforms.map((tool, index) => {
                  const Icon = iconMap[tool.icon] || Terminal;
                  return (
                    <div
                      key={index}
                      style={{ transitionDelay: `${index * 80 + 100}ms` }}
                      className={`glass-card p-5 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col items-start group interactive-hover-card scroll-reveal ${
                        isInView ? 'scroll-reveal-visible' : ''
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 mb-3 group-hover:border-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white mb-0.5 group-hover:text-cyan-300 transition-colors">
                        {tool.name}
                      </h4>
                      <span className="text-[11px] text-cyan-400/80 font-medium mb-2">
                        {tool.category}
                      </span>
                      <p className="text-xs text-slate-400">
                        {tool.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
