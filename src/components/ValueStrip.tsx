import React from 'react';
import { Layers, Eye, Sparkles, GitBranch, ArrowUpRight } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/mockData';

export const ValueStrip: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Layers,
    Eye,
    Sparkles,
    GitBranch,
  };

  return (
    <section id="value-strip" className="relative py-12 md:py-16 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const Icon = iconMap[prop.icon] || Layers;
            return (
              <div
                key={prop.id}
                id={`value-prop-${prop.id}`}
                className="group relative p-6 rounded-2xl bg-slate-50 hover:bg-slate-100/90 dark:bg-slate-900/50 dark:hover:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-xs hover:shadow-md dark:shadow-sm dark:hover:shadow-lg dark:hover:shadow-cyan-950/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors border border-cyan-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-100 group-hover:text-slate-950 dark:group-hover:text-white uppercase">
                    {prop.title}
                  </h3>
                  
                  <p className="mt-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    {prop.tagline}
                  </p>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  <span>Enterprise Module</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
