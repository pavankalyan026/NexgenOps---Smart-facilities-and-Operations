import React from 'react';
import { Layers, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import { WHY_NEXGENOPS } from '../data/mockData';

export const WhyNexgenOps: React.FC = () => {
  const iconMap = [Layers, CheckCircle2, Eye, Sparkles];

  return (
    <section id="why-nexgenops" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            The Competitive Advantage
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why enterprise teams choose NexgenOps.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Built from the ground up for commercial towers, tech parks, hospitals, data centers, and multi-location facility networks.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_NEXGENOPS.map((pillar, idx) => {
            const Icon = iconMap[idx] || Layers;
            return (
              <div
                key={pillar.number}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-wider uppercase">
                    {pillar.title}
                  </h3>

                  <p className="mt-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                    {pillar.description}
                  </p>

                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-cyan-700 dark:text-cyan-300/80 font-medium">
                  Enterprise Proven
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
