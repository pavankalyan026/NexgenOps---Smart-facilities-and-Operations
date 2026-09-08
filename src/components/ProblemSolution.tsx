import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { PROBLEM_COMPARISON } from '../data/mockData';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem-solution" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            The Operational Shift
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Operations shouldn&apos;t live across disconnected tools.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Fragmented communication leads to lost work orders, unverified snags, and delayed maintenance. NexgenOps unites your entire facility workflow into an accountable system.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-stretch">
          {/* Left Side: Traditional Operations */}
          <div 
            id="traditional-operations-card"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/90 relative overflow-hidden flex flex-col justify-between shadow-xs"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500/60 to-slate-400/50 dark:to-slate-700/50" />
            
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-rose-600 dark:text-rose-400 tracking-wider">
                    Fragmented Past
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    Traditional Operations
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {PROBLEM_COMPARISON.traditional.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="p-0.5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-xs text-rose-600 dark:text-rose-300/80 font-medium">
              Result: Constant firefighting, untracked costs, and frustrated facility tenants.
            </div>
          </div>

          {/* Right Side: NexgenOps Connected System */}
          <div 
            id="nexgenops-solution-card"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-900/70 border border-cyan-400/80 dark:border-cyan-500/40 relative overflow-hidden shadow-xl shadow-cyan-950/10 dark:shadow-2xl dark:shadow-cyan-950/40 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />
            
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase font-bold text-cyan-600 dark:text-cyan-400 tracking-wider">
                      Connected Future
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300">
                      Standard
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                    NexgenOps Platform
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {PROBLEM_COMPARISON.nexgenOps.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-100 font-medium">
                    <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-cyan-700 dark:text-cyan-300 font-semibold">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Single source of truth with 100% digital auditability.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
