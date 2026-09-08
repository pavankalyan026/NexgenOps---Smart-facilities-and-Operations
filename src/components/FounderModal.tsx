import React, { useEffect } from 'react';
import { X, Phone, MessageSquare, Linkedin, Mail, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FounderPhoto } from './FounderPhoto';

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FounderModal: React.FC<FounderModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const founderData = {
    name: 'Pavankalyan Koneti',
    position: 'Founder & Executive Lead, NexgenOps',
    description: 'Connect directly for an executive platform walkthrough, custom facility architecture, or strategic pilot deployment.',
    phoneDisplay: '+91 8297439630',
    callHref: 'tel:+918297439630',
    whatsappHref: 'https://wa.me/918297439630?text=Hi%20Pavankalyan,%20I%20would%20like%20to%20know%20more%20about%20NexgenOps.',
    linkedinHref: 'https://www.linkedin.com/in/pavankalyan-koneti-a20365408',
    emailHref: 'mailto:pavankalyankoneti026@gmail.com',
  };

  return (
    <div 
      id="founder-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 dark:bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="founder-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl dark:shadow-cyan-950/50 text-slate-900 dark:text-slate-100 overflow-hidden"
      >
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          id="close-founder-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
          aria-label="Close founder profile"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            Direct Founder Access
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Available for Consult
          </span>
        </div>

        {/* Founder Bio Block */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <FounderPhoto size="lg" shape="rounded" ring={true} showUploadTrigger={true} />
          
          <div className="flex-1">
            <h3 id="founder-modal-title" className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {founderData.name}
            </h3>
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
              {founderData.position}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
              {founderData.description}
            </p>

            <div className="mt-3.5 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-700 dark:text-slate-300">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" /> Facility Architecture
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" /> Custom Pilot Setup
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons Grid: Call, WhatsApp, LinkedIn, Email */}
        <div className="space-y-3">
          <div className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
            Direct Communication Channels
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Direct Call */}
            <a
              id="founder-call-btn"
              href={founderData.callHref}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700/90 hover:border-cyan-500/50 text-slate-900 dark:text-slate-100 transition-all group focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Call Founder</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">{founderData.phoneDisplay}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Direct WhatsApp (Strict Human Direct Channel) */}
            <a
              id="founder-whatsapp-btn"
              href={founderData.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-700/40 hover:border-emerald-500/60 text-emerald-900 dark:text-emerald-100 transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/30">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-emerald-800 dark:text-emerald-200">WhatsApp Direct</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400/80">Human WhatsApp Chat</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors" />
            </a>

            {/* LinkedIn Profile */}
            <a
              id="founder-linkedin-btn"
              href={founderData.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700/90 hover:border-blue-500/50 text-slate-900 dark:text-slate-100 transition-all group focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500/20">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">LinkedIn Profile</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">Pavankalyan Koneti</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
            </a>

            {/* Direct Email */}
            <a
              id="founder-email-btn"
              href={founderData.emailHref}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700/90 hover:border-cyan-500/50 text-slate-900 dark:text-slate-100 transition-all group focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Direct Email</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 truncate max-w-[130px]">Send email note</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Explicit Notice of Channel Separation */}
        <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Founder lines connect you directly with Pavankalyan Koneti. Looking for the automated assistant? Use the 
            <span className="text-cyan-600 dark:text-cyan-300 font-medium"> NexgenOps AI ✦ </span> button at the bottom-right.
          </p>
        </div>
      </div>
    </div>
  );
};
