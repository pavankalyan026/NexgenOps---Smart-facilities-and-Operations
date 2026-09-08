import React from 'react';
import { ArrowRight, Calendar, UserCheck, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { DashboardPreview } from './DashboardPreview';

interface HeroProps {
  onOpenDemoForm: () => void;
  onOpenFounderModal: () => void;
  onExplorePlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDemoForm,
  onOpenFounderModal,
  onExplorePlatform,
}) => {
  return (
    <section 
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 dark:from-slate-950 dark:via-[#071322] dark:to-slate-950 transition-colors duration-200"
    >
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 dark:bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b818_1px,transparent_1px),linear-gradient(to_bottom,#94a3b818_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badges & Eyebrow */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900/90 text-cyan-700 dark:text-cyan-300 border border-slate-300/80 dark:border-slate-700/80 shadow-sm dark:shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
            <span>Smart Operations &amp; Facility Management Platform</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Enterprise Grade Architecture</span>
          </div>
        </div>

        {/* Primary Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
            Run every operation. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-400 bg-clip-text text-transparent">
              From one intelligent command center.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Connect every operational signal, workflow and facility process in one intelligent platform.
          </p>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            NexgenOps brings complaints, snags, work orders, maintenance, assets, stores, inspections, vendors and operational analytics together so teams can work from one connected system.
          </p>
        </div>

        {/* CTAs: Book a Demo, Explore Platform, Talk to Founder */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-14">
          {/* Primary CTA */}
          <button
            id="hero-book-demo-btn"
            onClick={onOpenDemoForm}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-xl shadow-cyan-950/20 dark:shadow-cyan-950/60 hover:shadow-cyan-400/40 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-300 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          {/* Secondary CTA */}
          <button
            id="hero-explore-platform-btn"
            onClick={onExplorePlatform}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
          >
            <span>Explore Platform</span>
            <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </button>

          {/* Additional CTA */}
          <button
            id="hero-talk-to-founder-btn"
            onClick={onOpenFounderModal}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-200 bg-cyan-50/80 dark:bg-cyan-950/30 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 border border-cyan-300 dark:border-cyan-800/50 hover:border-cyan-500/60 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Talk to Founder</span>
          </button>
        </div>

        {/* Dashboard Visualization Mockup */}
        <div className="relative mx-auto max-w-5xl">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};
