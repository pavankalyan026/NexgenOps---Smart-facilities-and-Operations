import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  User, 
  MapPin, 
  ArrowRight, 
  Filter, 
  ShieldAlert,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { SAMPLE_COMPLAINTS } from '../data/mockData';

export const ComplaintSection: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedPriority, setSelectedPriority] = useState<string>('All');
  const [activeComplaint, setActiveComplaint] = useState(SAMPLE_COMPLAINTS[0]);

  const workflowSteps = [
    'Reported',
    'Categorized',
    'Assigned',
    'En Route',
    'In Progress',
    'Resolved',
    'Verified',
    'Closed',
  ];

  const statusTabs = ['All', 'New', 'Assigned', 'In Progress', 'Escalated', 'Closed'];
  const priorityTabs = ['All', 'Critical', 'High', 'Medium', 'Low'];

  const filteredComplaints = SAMPLE_COMPLAINTS.filter((c) => {
    const statusMatch = selectedStatus === 'All' || c.status === selectedStatus;
    const priorityMatch = selectedPriority === 'All' || c.priority === selectedPriority;
    return statusMatch && priorityMatch;
  });

  return (
    <section id="complaints" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Complaints Management
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Every complaint has a clear path to resolution.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            From tenant reporting through automated triage, technician dispatch, and verified sign-off, every ticket moves through a disciplined SLA lifecycle.
          </p>
        </div>

        {/* 8-Stage Visual Workflow Breadcrumb */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 overflow-x-auto">
          <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3 tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Standard 8-Stage Resolution Pipeline
          </div>
          <div className="flex items-center min-w-[760px] justify-between">
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    idx <= 4
                      ? 'bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 ring-2 ring-cyan-500/20'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700'
                  }`}>
                    {idx + 1}
                  </div>
                  <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 mt-2 max-w-[80px] leading-tight">
                    {step}
                  </span>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-800 mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Complaint Management Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Filter Controls & Tickets List (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Status:
                </span>
                {statusTabs.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`text-xs px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      selectedStatus === status
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-transparent'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Priority:</span>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs rounded-lg px-2.5 py-1 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-400 cursor-pointer"
                >
                  {priorityTabs.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Complaints List */}
            <div className="mt-4 space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {filteredComplaints.length === 0 ? (
                <div className="py-12 text-center text-slate-500 dark:text-slate-400 text-sm">
                  No complaints match selected filters.
                </div>
              ) : (
                filteredComplaints.map((item) => {
                  const isSelected = activeComplaint.id === item.id;
                  const isCritical = item.priority === 'Critical';
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveComplaint(item)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white dark:bg-slate-800/90 border-cyan-500 dark:border-cyan-500/60 ring-1 ring-cyan-500/40 shadow-sm'
                          : 'bg-white/80 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800/70 border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                            {item.id}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {item.category}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          isCritical
                            ? 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30'
                            : item.priority === 'High'
                            ? 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {item.priority}
                        </span>
                      </div>

                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">
                        {item.title}
                      </h4>

                      <div className="mt-2 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-cyan-700 dark:text-cyan-300/80">
                          <Clock className="w-3.5 h-3.5" />
                          {item.slaTarget}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Selected Complaint Detail Card (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-900/80 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 shadow-md dark:shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                INSPECTION DOSSIER
              </span>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                {activeComplaint.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4 leading-snug">
              {activeComplaint.title}
            </h3>

            <p className="mt-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              {activeComplaint.description}
            </p>

            <div className="mt-5 space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                <span className="text-slate-500 dark:text-slate-400">Location</span>
                <span className="font-semibold text-slate-900 dark:text-white">{activeComplaint.location}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                <span className="text-slate-500 dark:text-slate-400">Department</span>
                <span className="font-semibold text-slate-900 dark:text-white">{activeComplaint.department}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                <span className="text-slate-500 dark:text-slate-400">Assignee</span>
                <span className="font-semibold text-cyan-700 dark:text-cyan-300 flex items-center gap-1">
                  <User className="w-3.5 h-3.5" /> {activeComplaint.assignee}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                <span className="text-slate-500 dark:text-slate-400">SLA Window</span>
                <span className="font-semibold text-amber-700 dark:text-amber-300 font-mono">{activeComplaint.slaTarget}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Reported: {activeComplaint.reportedAt}</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Digital Trail Logged
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
