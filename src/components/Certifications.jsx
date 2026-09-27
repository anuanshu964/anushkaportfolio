import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Code2 
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Certifications() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal industry-recognized credentials certifying programming proficiency, algorithms, and object-oriented software engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              style={{ transitionDelay: `${index * 140 + 100}ms` }}
              className={`glass-card p-8 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between group relative overflow-hidden interactive-hover-card scroll-reveal ${
                isInView ? 'scroll-reveal-visible' : ''
              }`}
            >
              {/* Top Row: Issuer & Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${cert.iconBg}`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Certified by
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        {cert.issuer}
                      </h4>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Covered */}
                <div className="mb-6">
                  <h5 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2.5">
                    Competencies Validated
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {cert.skillsAcquired.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 px-3 py-2 rounded-lg border border-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Credential Verification footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-mono text-cyan-400">
                  <Terminal className="w-3 h-3" /> Credential Verified
                </span>
                <span className="text-slate-500 font-medium">Standard of Excellence</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
