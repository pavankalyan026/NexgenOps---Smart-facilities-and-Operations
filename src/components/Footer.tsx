import React from 'react';
import { Phone, MessageSquare, Linkedin, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { NexgenOpsLogo } from './NexgenOpsLogo';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenFounderModal: () => void;
  onOpenDemoForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFounderModal, onOpenDemoForm }) => {
  const { theme } = useTheme();
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <NexgenOpsLogo size="lg" variant={theme === 'dark' ? 'dark' : 'light'} showTagline={true} />
            
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mt-3">
              NexgenOps is an intelligent operations and facility management platform that brings complaints, snags, work orders, preventive maintenance, assets, stores, inspections, and AI assistance into one centralized system.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>SOC2 Type II &amp; ISO 27001 Security Standard Ready</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => scrollTo('#features')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Features Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#complaints')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Complaints Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#snags')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Snag Punch Lists
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#workorders')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Work Orders
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#maintenance')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Preventive Maintenance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#inventory')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Stores &amp; Inventory
                </button>
              </li>
            </ul>
          </div>

          {/* Stakeholder Solutions */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => scrollTo('#solutions')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Facility Managers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#solutions')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Operations Managers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#solutions')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Field Maintenance Teams
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#solutions')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Store &amp; Inventory Leads
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#vendors')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Contractors &amp; Vendors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#analytics')} 
                  className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Executive Dashboards
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Founder Contact (Strict Human Channel) */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Founder &amp; Inquiries
            </h4>
            
            <div className="space-y-3">
              <div>
                <span className="text-[11px] text-slate-500 uppercase font-semibold">Founder:</span>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Pavankalyan Koneti</p>
              </div>

              <div className="space-y-2">
                <a
                  href="tel:+918297439630"
                  className="flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>+91 8297439630</span>
                </a>

                <a
                  href="https://wa.me/918297439630?text=Hi%20Pavankalyan,%20I%20would%20like%20to%20know%20more%20about%20NexgenOps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Chat</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/pavankalyan-koneti-a20365408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="mailto:pavankalyankoneti026@gmail.com"
                  className="flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  <span className="truncate">pavankalyankoneti026@gmail.com</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenFounderModal}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-cyan-700 dark:text-cyan-300 text-[11px] font-semibold border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer shadow-xs"
                >
                  View Founder Profile Card
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 NexgenOps. All rights reserved. Smart Operations &amp; Facility Management Platform.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">Security Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
