import React, { useState } from 'react';
import { 
  CalendarClock, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Wrench, 
  Repeat, 
  CheckSquare, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { SAMPLE_MAINTENANCE_TASKS } from '../data/mockData';

export const MaintenanceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'today' | 'upcoming'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Scheduled (42)' },
    { id: 'today', label: 'Due Today (01)' },
    { id: 'upcoming', label: 'Upcoming (11)' },
  ];

  const displayedTasks = SAMPLE_MAINTENANCE_TASKS.filter((task) => {
    if (filter === 'today') return task.relativeTime === 'Today';
    if (filter === 'upcoming') return task.relativeTime !== 'Today';
    return true;
  });

  return (
    <section id="maintenance" className="py-20 md:py-28 bg-slate-100/70 dark:bg-[#070e1b] relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Preventive Maintenance
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Prevent problems before they become disruptions.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Automate recurring maintenance cycles, protect expensive equipment life-cycles, and ensure total statutory audit compliance.
          </p>
        </div>

        {/* Status Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Planned</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">42</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">Due Today</div>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-300 mt-1">01</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">Upcoming (7d)</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-300 mt-1">11</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <div className="text-xs font-semibold text-rose-600 dark:text-rose-400">Overdue</div>
            <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mt-1">00</div>
          </div>
          <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">PM Compliance</div>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">98.5%</div>
          </div>
        </div>

        {/* Timeline Visualization Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md dark:shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CalendarClock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                Preventive Maintenance Schedule &amp; Execution Queue
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Automated recurring digital job cards mapped to manufacturer specifications
              </p>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    filter === tab.id
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule List */}
          <div className="mt-6 space-y-3.5">
            {displayedTasks.map((task) => {
              const isToday = task.relativeTime === 'Today';
              return (
                <div
                  key={task.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    isToday
                      ? 'bg-cyan-50/70 dark:bg-slate-800/80 border-cyan-400/80 dark:border-cyan-500/50 shadow-xs dark:shadow-md dark:shadow-cyan-950/20'
                      : 'bg-slate-50 dark:bg-slate-850/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-xl shrink-0 ${
                        isToday ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        <Wrench className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                            {task.id}
                          </span>
                          <span className="text-xs font-semibold text-slate-900 dark:text-white">
                            {task.assetName}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 flex items-center gap-1">
                            <Repeat className="w-2.5 h-2.5 text-cyan-600 dark:text-cyan-400" />
                            {task.frequency}
                          </span>
                        </div>

                        <div className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                          Task: {task.taskType}
                        </div>

                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                          Location: {task.location} · Tech: {task.assignedTech}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:self-center shrink-0">
                      <div className="text-right">
                        <div className={`text-xs font-bold ${isToday ? 'text-amber-700 dark:text-amber-300' : 'text-slate-700 dark:text-slate-300'}`}>
                          Due: {task.dueDate}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
                          Status: {task.status}
                        </div>
                      </div>

                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                        isToday 
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30' 
                          : 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-500/30'
                      }`}>
                        {task.relativeTime}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Synchronized with asset service passbooks and material reservations.</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-semibold cursor-pointer hover:underline">
              Download PM Compliance Audit Log →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
