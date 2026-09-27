import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import ParticleText from './ParticleText';

export default function Hero({ onOpenResume }) {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen h-screen overflow-hidden flex flex-col justify-between pt-24 pb-8 bg-[#030712]"
    >
      {/* Ambient center radial cyan glow behind text and subject */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 1. LAYER BEHIND: Previous Solid Metallic "DEVELOPER" Text + Interactive ParticleText */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Previous solid metallic DEVELOPER typography with slide animation */}
        <span 
          className="hero-developer-text absolute text-[15vw] md:text-[17vw] leading-none tracking-widest whitespace-nowrap animate-developer-slide uppercase font-black select-none pointer-events-none"
        >
          DEVELOPER
        </span>

        {/* React Bits ParticleText interactive particle canvas */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto">
          <ParticleText
            text="DEVELOPER"
            particleSize={2}
            density={3.5}
            color="#ffffff"
            highlightColor="#00f0ff"
            scatter={180}
            gatherDuration={1600}
            stagger={420}
            pointerRepel={55}
            repelRadius={150}
            idleDrift={0.7}
            trigger="hover"
            fontSize="clamp(4.5rem, 16vw, 15rem)"
            fontWeight={950}
            fontFamily="'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
            glow={true}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* 2. LAYER IN FRONT: Full-quality original portrait standing in front of DEVELOPER text */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10 flex items-end justify-center">
        <img
          src="/profile-transparent.png"
          alt={personalData.name}
          className="h-[75vh] sm:h-[82vh] md:h-[88vh] max-h-[850px] w-auto object-contain object-bottom select-none filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          style={{
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform'
          }}
        />
      </div>

      {/* Spacer for top navbar */}
      <div className="w-full h-4"></div>

      {/* 4. BOTTOM BAR: Exact structure matching reference image */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-2">
        
        {/* Bottom Left: Title & Subtitle */}
        <div className="flex flex-col text-left">
          {/* Prominently Highlighted Name Badge */}
          <div className="mb-2.5">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.3)] backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-pulse"></span>
              <span className="text-sm sm:text-base font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                {personalData.name}
              </span>
              <span className="text-cyan-500/60 font-mono text-xs">&bull;</span>
              <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                AI / ML Engineer
              </span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Software <span className="font-light italic text-slate-300">Developer</span>
          </h1>
        </div>

        {/* Bottom Right: Contact Button & Scroll Down */}
        <div className="flex items-center gap-4 self-end sm:self-auto">
          {/* Scroll down indicator */}
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 shadow-lg"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 rounded-full bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400/80 text-white text-sm sm:text-base font-bold flex items-center gap-2.5 hover:bg-slate-800/90 transition-all shadow-xl shadow-cyan-950/30 hover:-translate-y-0.5 group"
          >
            <ArrowUpRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span>Contact</span>
          </a>
        </div>

      </div>

    </section>
  );
}
