import React from 'react';
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Star, 
  CheckCircle2, 
  FileCheck,
  Building
} from 'lucide-react';
import { VENDORS } from '../data/mockData';

export const VendorSection: React.FC = () => {
  const workflow = [
    'Vendor Onboarding',
    'Assigned Work',
    'Field Execution',
    'Evidence Upload',
    'Verification',
    'Closure & Sign-off',
  ];

  return (
    <section id="vendors" className="py-20 md:py-28 bg-slate-100/70 dark:bg-[#070e1b] relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Vendor &amp; Contractor Management
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bring vendors into the operational workflow.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Extend your operations to third-party AMCs and specialty contractors. Issue work orders, require photo evidence, and measure SLA compliance transparently.
          </p>
        </div>

        {/* Vendor Workflow Sequence */}
        <div className="mb-12 flex items-center justify-between overflow-x-auto p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center min-w-[720px] justify-between w-full">
            {workflow.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <span className="w-6 h-6 rounded-full bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 flex items-center justify-center font-bold text-[11px]">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
                {idx < workflow.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Vendor Performance Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {VENDORS.map((vendor) => (
            <div
              key={vendor.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-xs hover:shadow-md dark:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                      {vendor.id}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                      {vendor.companyName}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Scope: {vendor.category} · Contact: {vendor.contactPerson}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-300">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {vendor.rating}/5.0
                    </div>
                    <span className="text-[10px] text-slate-500 uppercase">Vendor Rating</span>
                  </div>
                </div>

                {/* KPI Metrics */}
                <div className="grid grid-cols-4 gap-2 my-4 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Active</div>
                    <div className="text-base font-bold text-cyan-700 dark:text-cyan-400 mt-0.5">{vendor.activeJobs}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Pending</div>
                    <div className="text-base font-bold text-slate-700 dark:text-slate-300 mt-0.5">{vendor.pendingJobs}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Done</div>
                    <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{vendor.completedJobs}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Overdue</div>
                    <div className="text-base font-bold text-rose-600 dark:text-rose-400 mt-0.5">{vendor.overdueJobs}</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">SLA Adherence</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {vendor.slaCompliance}% Target
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
