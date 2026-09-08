import React, { useState } from 'react';
import { 
  MessageSquareWarning, 
  AlertTriangle, 
  Briefcase, 
  CalendarClock, 
  Building2, 
  Boxes, 
  ClipboardCheck, 
  Users, 
  CheckCircle2, 
  BellRing, 
  BarChart3, 
  FileText,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { PLATFORM_FEATURES } from '../data/mockData';

export const FeatureGrid: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    MessageSquareWarning,
    AlertTriangle,
    Briefcase,
    CalendarClock,
    Building2,
    Boxes,
    ClipboardCheck,
    Users,
    CheckCircle2,
    BellRing,
    BarChart3,
    FileText,
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-100/70 dark:bg-[#070e1b] relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Platform Capabilities
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything your operation needs. Connected.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Twelve integrated enterprise modules that replace fragmented tools with structured, accountable operational workflows.
          </p>
        </div>

        {/* 12 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PLATFORM_FEATURES.map((feat) => {
            const Icon = iconMap[feat.icon] || Building2;
            const isSpecial = feat.title.includes('Inventory') || feat.title.includes('Complaints');
            return (
              <div
                key={feat.number}
                id={`feature-${feat.number}`}
                className={`group p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                  isSpecial
                    ? 'bg-white dark:bg-slate-900/90 border-cyan-400/80 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400/60 shadow-md dark:shadow-lg dark:shadow-cyan-950/20'
                    : 'bg-white hover:bg-slate-50/80 dark:bg-slate-900/40 dark:hover:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400">
                      FEATURE {feat.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-[11px] text-cyan-700 dark:text-cyan-400/90 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <span className="truncate">{feat.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
