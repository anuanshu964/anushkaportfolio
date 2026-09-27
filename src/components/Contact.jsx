import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real send latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isInView ? 'scroll-reveal-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Interested in collaborating, discussing AI/ML internship opportunities, or learning more about my projects? Send me a message!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact & Socials */}
          <div className={`lg:col-span-5 space-y-6 scroll-reveal delay-150 ${isInView ? 'scroll-reveal-visible' : ''}`}>
            
            {/* Quick Contact Card */}
            <div className="glass-card-static p-8 rounded-2xl border border-slate-800 bg-slate-900/60">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Feel free to reach out directly via email or connect with me through my social profiles.
              </p>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/90 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] uppercase font-semibold text-slate-400">Email</div>
                      <a 
                        href={`mailto:${personalData.email}`} 
                        className="text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all shrink-0 ml-2"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/90 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase font-semibold text-slate-400">Location</div>
                    <div className="text-sm font-medium text-slate-200">{personalData.location}</div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3">
                  Professional Networks
                </h4>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />
                      <span className="text-sm font-medium">LinkedIn &bull; {personalData.linkedinHandle}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-cyan-400" />
                  </a>

                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-5 h-5 text-white" />
                      <span className="text-sm font-medium">GitHub &bull; {personalData.githubHandle}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-cyan-400" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className={`lg:col-span-7 scroll-reveal delay-300 ${isInView ? 'scroll-reveal-visible' : ''}`}>
            <div className="glass-card-static p-8 rounded-2xl border border-slate-800 bg-slate-900/60 relative interactive-hover-card">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Have an inquiry or project opportunity? Fill out the form below.
              </p>

              {/* Submission Notification Toast */}
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <h5 className="text-sm font-bold text-emerald-200">Message Dispatched Successfully!</h5>
                    <p className="text-xs text-emerald-300/90 mt-0.5">
                      Thank you for reaching out, {formData.name || 'there'}. I have received your message and will respond shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all ${
                        errors.name ? 'border-rose-500/60 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/60'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all ${
                        errors.email ? 'border-rose-500/60 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/60'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI/ML Internship Opportunity / Project Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all ${
                      errors.subject ? 'border-rose-500/60 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/60'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Anushka, I came across your portfolio and would like to connect regarding..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all resize-none ${
                      errors.message ? 'border-rose-500/60 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/60'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/35 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
