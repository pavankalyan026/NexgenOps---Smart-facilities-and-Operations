import React from 'react';
import { 
  AlertTriangle, 
  MapPin, 
  Clock, 
  UserCheck, 
  Camera, 
  CheckCircle2, 
  MessageSquare, 
  FileText,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { PRIMARY_SNAG } from '../data/mockData';

export const SnagSection: React.FC = () => {
  return (
    <section id="snags" className="py-20 md:py-28 bg-slate-100/70 dark:bg-[#070d18] relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Defect Tracking
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Turn every snag into an accountable action.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Eliminate forgotten punch-lists. Log site defects with exact floor coordinates, photographic evidence, trade assignments, and supervisor sign-offs.
          </p>
        </div>

        {/* Featured Snag Dossier Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 p-6 sm:p-8 lg:p-10 shadow-lg dark:shadow-2xl dark:shadow-cyan-950/40 relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-400" />

          {/* Dossier Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-extrabold text-cyan-700 dark:text-cyan-400 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                  {PRIMARY_SNAG.id}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-rose-500/10 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  {PRIMARY_SNAG.priority} Priority
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2">
                {PRIMARY_SNAG.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                {PRIMARY_SNAG.status}
              </span>
            </div>
          </div>

          {/* Core Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* Left: Location & Assignment Specs */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {PRIMARY_SNAG.location}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Service corridor junction adjacent to electrical riser shaft
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Assigned Responsibility
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {PRIMARY_SNAG.assignedTo}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Trade: {PRIMARY_SNAG.trade}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Target Due Date
                  </div>
                  <div className="text-sm font-bold text-amber-700 dark:text-amber-300 mt-0.5">
                    {PRIMARY_SNAG.dueDate} (EOD Target)
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Automatic escalation trigger set for 6:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Photographic Evidence & Verification Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    Digital Proof of Defect
                  </span>
                  <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold">
                    3 Photos Logged
                  </span>
                </div>

                {/* Evidence Visual Wireframe */}
                <div className="grid grid-cols-3 gap-2 my-3">
                  <div className="h-24 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center p-2 text-center text-[10px] text-slate-500 dark:text-slate-400">
                    <Camera className="w-4 h-4 text-slate-400 mb-1" />
                    Initial Leak
                  </div>
                  <div className="h-24 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center p-2 text-center text-[10px] text-slate-500 dark:text-slate-400">
                    <Camera className="w-4 h-4 text-slate-400 mb-1" />
                    Conduit Wall
                  </div>
                  <div className="h-24 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex flex-col items-center justify-center p-2 text-center text-[10px] text-slate-500 dark:text-slate-400">
                    <Camera className="w-4 h-4 text-slate-400 mb-1" />
                    Pipe Joint
                  </div>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 mt-3 leading-relaxed">
                  Issue Statement: &ldquo;{PRIMARY_SNAG.issue}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400" /> 5 Field Notes
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> GPS Coordinates Sealed
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Audit Strip */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>Snags automatically synchronize with Work Orders and Contractor AMC SLA logs.</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-semibold">1-Click PDF Punch List Export</span>
          </div>
        </div>
      </div>
    </section>
  );
};
