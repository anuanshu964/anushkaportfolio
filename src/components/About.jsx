import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Cpu, 
  Code, 
  Target, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Layers, 
  CheckCircle2,
  Award,
  Brain,
  Download,
  Mail,
  ExternalLink,
  Check,
  Copy,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function About({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const featureCards = [
    {
      num: "01",
      label: "SPECIALIZATION",
      value: "Artificial Intelligence & Machine Learning",
      icon: Brain
    },
    {
      num: "02",
      label: "CORE FOCUS",
      value: "Intelligent Systems",
      icon: Cpu
    },
    {
      num: "03",
      label: "KEY STRENGTHS",
      value: "Analytical & Problem Solving",
      icon: Layers
    },
    {
      num: "04",
      label: "STATUS",
      value: "Available for Internships",
      icon: Award
    }
  ];

  const highlights = [
    {
      icon: BrainCircuit,
      title: "AI & Machine Learning Focus",
      desc: "Specialized in machine learning paradigms, predictive models, and pattern extraction to build intelligent, autonomous tools."
    },
    {
      icon: Target,
      title: "Analytical & Logical Reasoning",
      desc: "Methodical approach to problem-solving, breaking down complex data challenges into robust, mathematically sound algorithmic steps."
    },
    {
      icon: Code,
      title: "Practical Software Engineering",
      desc: "Bridging the gap between AI theory and real-world software by creating production-ready, performant applications."
    },
    {
      icon: Sparkles,
      title: "Emerging Technologies",
      desc: "Continuously exploring next-generation AI architectures, deep learning advancements, and modern software development toolchains."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Ambient background aura */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-cyan-950/20">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Passionate about building intelligent machine learning systems, solving complex algorithmic challenges, and engineering real-world software solutions with clean code.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Feature Cards Grid (Moved from Home Page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 80 + 100}ms` }}
                className={`glass-card p-5 rounded-2xl border border-cyan-500/15 bg-slate-900/70 text-left flex flex-col justify-between h-full group hover:border-cyan-400/50 hover:shadow-[0_8px_25px_-4px_rgba(0,240,255,0.18)] interactive-hover-card scroll-reveal ${
                  isInView ? 'scroll-reveal-visible' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400/90 px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/25">
                    {card.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {card.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                    {card.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-column layout: Bio on Left, Core Pillars on Right */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-reveal delay-225 ${isInView ? 'scroll-reveal-visible' : ''}`}>
          
          {/* Left Column: Full Biography & Contact Pills */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Detailed Bio Card */}
            <div className="glass-card-static p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Aspiring AI/ML Engineer</span>
              </div>

              <div className="flex items-center gap-3 text-cyan-400 text-xs sm:text-sm font-medium mb-4">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Based in {personalData.location}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-300">B.Tech AI &amp; ML</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                Hi, I am{' '}
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent font-black drop-shadow-[0_0_15px_rgba(0,240,255,0.45)]">
                  {personalData.name}
                </span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                {personalData.bio}
              </p>

              <div className="border-t border-slate-800/80 pt-6 mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    Strong foundational expertise in <strong className="text-white">Python, Java, and C</strong> with object-oriented software patterns.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    Proven track record building end-to-end intelligent systems like <strong className="text-cyan-300">ForgeMind</strong> (predictive maintenance with Isolation Forest).
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    Passionate about collaborative development, version control with Git &amp; GitHub, and continuous learning.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-3.5">
                <button
                  onClick={onOpenResume}
                  className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-cyan-400/60 hover:text-white transition-all flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Social & Contact Pills */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2.5">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-all flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-all flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-white" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono">{personalData.email}</span>
                  {copiedEmail ? (
                    <span className="text-emerald-400 text-[11px] font-bold ml-1 flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3 h-3 opacity-60 ml-0.5" />
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Professional Portrait Photo & Key Focus Highlights */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Portrait Card */}
            <div className="relative group w-full">
              {/* Glowing ambient neon backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/25 via-sky-500/20 to-blue-600/25 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Glass Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-900/80 shadow-2xl backdrop-blur-xl group-hover:border-cyan-400/60 transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row items-center">
                  
                  {/* Photo with subtle gradient lighting */}
                  <div className="relative w-full sm:w-1/2 aspect-[3/4] overflow-hidden bg-slate-950 shrink-0">
                    <img
                      src="/profile.jpg"
                      alt={personalData.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark gradient fade into card on small screens */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent sm:hidden pointer-events-none"></div>
                  </div>

                  {/* Quick Profile Info Alongside Portrait */}
                  <div className="p-6 sm:p-7 w-full sm:w-1/2 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse"></span>
                        <span>AI / ML Engineer</span>
                      </div>
                      
                      <h4 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] leading-snug">
                        {personalData.name}
                      </h4>
                      
                      <p className="text-xs font-medium text-slate-300 mt-1">
                        {personalData.headline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Focused on modern machine learning architectures, predictive analysis, and scalable software solutions.
                    </p>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Education</span>
                      <span className="text-cyan-300 font-semibold font-mono">B.Tech 2026</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Key Focus Area Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-2xl border border-slate-800/90 bg-slate-900/60 flex items-start gap-3.5 group hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
