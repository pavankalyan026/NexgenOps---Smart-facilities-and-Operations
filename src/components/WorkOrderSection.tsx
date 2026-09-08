import React from 'react';
import { 
  Wrench, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Users
} from 'lucide-react';
import { SAMPLE_WORK_ORDERS } from '../data/mockData';

export const WorkOrderSection: React.FC = () => {
  const lifecycleSteps = [
    { name: 'Creation', desc: 'Triggered by snag, complaint or PPM' },
    { name: 'Assignment', desc: 'Auto-routed by trade and availability' },
    { name: 'Material Requisition', desc: 'Parts reserved from central store' },
    { name: 'Supervisor Sign-off', desc: 'Photo verification of completed job' },
    { name: 'Closure', desc: 'SLA sealed, costs logged to asset book' },
  ];

  return (
    <section id="workorders" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Work Order Management
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            From request to completed work.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Orchestrate complex facility tasks, vendor dispatch, material requisitions, and supervisor quality checks through a unified digital job card.
          </p>
        </div>

        {/* 5-Step Lifecycle Pipeline */}
        <div className="mb-14 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {lifecycleSteps.map((step, idx) => (
            <div 
              key={step.name} 
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 font-bold">
                    STAGE 0{idx + 1}
                  </span>
                  {idx < lifecycleSteps.length - 1 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 hidden lg:block" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  )}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{step.name}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Work Order Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SAMPLE_WORK_ORDERS.map((wo) => {
            const isCritical = wo.priority === 'Critical';
            return (
              <div
                key={wo.id}
                className="p-6 rounded-2xl bg-slate-50/80 hover:bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-xs hover:shadow-md dark:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                        {wo.id}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {wo.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        isCritical
                          ? 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30'
                          : 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30'
                      }`}>
                        {wo.priority}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30">
                        {wo.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                    {wo.title}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> Location:
                      </span>
                      <span className="font-medium text-slate-900 dark:text-slate-200">{wo.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> Assigned Team:
                      </span>
                      <span className="font-medium text-cyan-700 dark:text-cyan-300">{wo.assignedTeam}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> Due Timeline:
                      </span>
                      <span className="font-medium text-amber-700 dark:text-amber-300">{wo.dueDate}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Est. Duration: {wo.estimatedHours}</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-medium hover:underline cursor-pointer">
                    View Digital Job Card →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
