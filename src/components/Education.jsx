import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Binary 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Academics</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal engineering education centered on computational theory, modern machine learning algorithms, and real-world system architecture.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Timeline / Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`glass-card p-8 sm:p-10 rounded-2xl border border-slate-800 bg-slate-900/60 relative overflow-hidden interactive-hover-card scroll-reveal delay-150 ${
                isInView ? 'scroll-reveal-visible' : ''
              }`}
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                  {edu.status}
                </span>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Degree & Field */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {edu.degree}
                </h3>
                <div className="text-lg font-semibold text-gradient-cyan">
                  Specialization: {edu.field}
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {edu.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Academic Focus & Milestones</span>
                </h4>
                {edu.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
