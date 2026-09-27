import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  Cpu, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData, skillsData, projectsData, certificationsData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="p-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="text-xs text-slate-400 font-mono ml-2">D_Anushka_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all flex items-center gap-1.5 shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div id="resume-sheet" className="p-6 sm:p-10 overflow-y-auto bg-slate-900 text-slate-200 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 mb-6 print:border-gray-300">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 print:text-black">
              {personalData.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-cyan-400 mb-3 print:text-blue-700">
              {personalData.headline}
            </p>
            
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 print:text-gray-600 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personalData.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalData.email}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn: {personalData.linkedinHandle}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-2 print:text-blue-700">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {personalData.bio}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-2 print:text-blue-700">
              Education
            </h2>
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/80 print:bg-transparent print:border-gray-200">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-bold text-white print:text-black">
                  {educationData[0].degree}
                </h3>
                <span className="text-xs text-cyan-400 print:text-blue-700 font-semibold">
                  {educationData[0].status}
                </span>
              </div>
              <div className="text-xs text-slate-300 font-medium print:text-gray-700 mb-2">
                Specialization: {educationData[0].field} &bull; {educationData[0].location}
              </div>
              <ul className="list-disc list-inside text-xs text-slate-400 print:text-gray-600 space-y-1">
                <li>Core studies: Data Structures & Algorithms, Machine Learning, DBMS, Object-Oriented Programming</li>
                <li>Focus on predictive artificial intelligence and analytical software development</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-2 print:text-blue-700">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/80 print:border-gray-200">
                <strong className="text-white print:text-black block mb-1">Languages & Systems:</strong>
                <span className="text-slate-300 print:text-gray-700">Python, Java, C</span>
              </div>
              <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/80 print:border-gray-200">
                <strong className="text-white print:text-black block mb-1">CS Fundamentals:</strong>
                <span className="text-slate-300 print:text-gray-700">Data Structures, OOPs, DBMS</span>
              </div>
              <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/80 print:border-gray-200">
                <strong className="text-white print:text-black block mb-1">Analytical Skills:</strong>
                <span className="text-slate-300 print:text-gray-700">Analytical Thinking, Logical Reasoning, Problem Solving</span>
              </div>
              <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/80 print:border-gray-200">
                <strong className="text-white print:text-black block mb-1">Tools & Platforms:</strong>
                <span className="text-slate-300 print:text-gray-700">VS Code, Git, GitHub, MS Office</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-2 print:text-blue-700">
              Key Projects
            </h2>
            <div className="space-y-4">
              
              {/* ForgeMind */}
              <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800/80 print:border-gray-200">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    ForgeMind – AI Predictive Maintenance
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400 print:text-blue-700">
                    Python, ML, Isolation Forest
                  </span>
                </div>
                <p className="text-xs text-slate-300 print:text-gray-700 mb-2">
                  An AI-based predictive maintenance system that detects abnormal machine behavior and helps identify potential equipment failures early.
                </p>
                <ul className="list-disc list-inside text-[11px] text-slate-400 print:text-gray-600 space-y-0.5">
                  <li>Implemented Isolation Forest algorithm for unsupervised anomaly detection on industrial sensor telemetry</li>
                  <li>Enabled early fault detection to proactively mitigate unpredicted machine downtime</li>
                </ul>
              </div>

              {/* Portfolio */}
              <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800/80 print:border-gray-200">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    Personal Portfolio Website
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400 print:text-blue-700">
                    React.js, Tailwind CSS, Vite
                  </span>
                </div>
                <p className="text-xs text-slate-300 print:text-gray-700">
                  Responsive portfolio website showcasing skills, projects, certifications, and technical profile with interactive glassmorphism UI.
                </p>
              </div>

            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-2 print:text-blue-700">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificationsData.map((c) => (
                <div key={c.id} className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/80 print:border-gray-200">
                  <span className="font-bold text-white print:text-black">{c.title}</span> &bull; <span className="text-slate-400 print:text-gray-600">{c.issuer}</span>
                  <div className="text-[11px] text-slate-400 print:text-gray-600 mt-1">{c.description}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
