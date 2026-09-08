import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_STAGES } from '../data/mockData';

export const OperationsWorkflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            End-to-End Orchestration
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How NexgenOps powers daily operations.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            A standardized, auditable 7-step progression that takes requests from inception to verified sign-off and continuous optimization.
          </p>
        </div>

        {/* 7-Stage Progression Flow */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-4">
            {WORKFLOW_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                      STAGE {stage.step}
                    </span>
                    {idx < WORKFLOW_STAGES.length - 1 ? (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 hidden lg:block group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  SLA Active
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
