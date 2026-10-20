import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, Shield, Building, Mail, User, Sparkles } from 'lucide-react';

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestAccessModal: React.FC<RequestAccessModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    teamSize: '500–2,500 employees',
    primaryTool: 'Jira + SAP',
    useCase: 'Eliminating cross-team handoff friction & predicting sprint delivery slippage',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    // Focus the close button when modal opens
    setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.workEmail.includes('@')) {
      setError('Please provide a valid enterprise work email address.');
      return;
    }
    if (!formData.fullName.trim() || !formData.company.trim()) {
      setError('Please fill in your name and company name.');
      return;
    }

    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      workEmail: '',
      company: '',
      teamSize: '500–2,500 employees',
      primaryTool: 'Jira + SAP',
      useCase: 'Eliminating cross-team handoff friction & predicting sprint delivery slippage',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="access-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-xl bg-zinc-950 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00]/10 blur-3xl pointer-events-none rounded-full" aria-hidden="true" />

        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900 border border-white/10 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#CCFF00]/20 border border-[#CCFF00] flex items-center justify-center mx-auto mb-5 text-[#CCFF00]">
              <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#CCFF00]">
              Access Request Confirmed
            </span>
            <h3 id="access-modal-title" className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">
              Welcome, {formData.fullName.split(' ')[0]}
            </h3>
            <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Our enterprise solutions engineering team has received your priority request for{' '}
              <strong className="text-white">{formData.company}</strong>. We have allocated a dedicated single-tenant sandbox instance.
            </p>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 text-xs text-left font-mono mb-6 space-y-2">
              <div className="text-zinc-400">
                Contact: <span className="text-white">{formData.workEmail}</span>
              </div>
              <div className="text-zinc-400">
                Environment: <span className="text-[#CCFF00]">Dedicated Enterprise POV Sandbox</span>
              </div>
              <div className="text-zinc-400">
                Next Step: <span className="text-white">Architecture walkthrough invite dispatched</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-full text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] transition-colors"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#CCFF00]/30 bg-zinc-900 text-[#CCFF00] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Enterprise Proof-of-Value</span>
            </div>
            <h3 id="access-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Request Enterprise Access
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Explore how Avenora AI unifies data, predicts slippage, and automates closed-loop execution across your enterprise stack.
            </p>

            {error && (
              <div role="alert" className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="access-full-name" className="block text-zinc-300 font-medium mb-1.5">
                    Full Name <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" aria-hidden="true" />
                    <input
                      id="access-full-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl py-2.5 pl-9 pr-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="access-email" className="block text-zinc-300 font-medium mb-1.5">
                    Work Email <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" aria-hidden="true" />
                    <input
                      id="access-email"
                      type="email"
                      required
                      placeholder="jane@enterprise.com"
                      autoComplete="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl py-2.5 pl-9 pr-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="access-company" className="block text-zinc-300 font-medium mb-1.5">
                    Company Name <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-zinc-500 absolute left-3 top-3" aria-hidden="true" />
                    <input
                      id="access-company"
                      type="text"
                      required
                      placeholder="Acme Global Corp"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl py-2.5 pl-9 pr-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="access-team-size" className="block text-zinc-300 font-medium mb-1.5">
                    Organization Scale
                  </label>
                  <select
                    id="access-team-size"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl py-2.5 px-3 text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                  >
                    <option>100–500 employees</option>
                    <option>500–2,500 employees</option>
                    <option>2,500–10,000 employees</option>
                    <option>10,000+ enterprise employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="access-primary-tool" className="block text-zinc-300 font-medium mb-1.5">
                  Primary Core Stack
                </label>
                <input
                  id="access-primary-tool"
                  type="text"
                  placeholder="e.g. Jira, SAP S/4HANA, Salesforce, Slack, GitHub"
                  value={formData.primaryTool}
                  onChange={(e) => setFormData({ ...formData, primaryTool: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl py-2.5 px-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="access-use-case" className="block text-zinc-300 font-medium mb-1.5">
                  Primary Execution Challenge
                </label>
                <textarea
                  id="access-use-case"
                  rows={2}
                  placeholder="e.g. Broken handoffs between engineering and business leads, lack of real-time visibility..."
                  value={formData.useCase}
                  onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl py-2 px-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#CCFF00] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#CCFF00] text-black hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                  aria-busy={loading}
                >
                  <span>{loading ? 'Validating Enterprise Profile…' : 'Submit Enterprise Request'}</span>
                  {!loading && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-zinc-500 pt-1">
                <Shield className="w-3.5 h-3.5 text-[#CCFF00]" aria-hidden="true" />
                <span>NDA Protected · Dedicated Single-Tenant Architecture · SOC 2 Compliant</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
