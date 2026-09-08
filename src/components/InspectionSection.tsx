import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldAlert, 
  Camera, 
  Wrench, 
  Check
} from 'lucide-react';
import { DAILY_INSPECTION_CHECKLIST } from '../data/mockData';

export const InspectionSection: React.FC = () => {
  const [checklist, setChecklist] = useState(DAILY_INSPECTION_CHECKLIST);

  const workflowSteps = [
    'Inspection',
    'Checklist',
    'Findings',
    'Corrective Action',
    'Verification',
    'Closure',
  ];

  return (
    <section id="inspections" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Digital Audits &amp; Checklists
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Replace paper inspections with connected workflows.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Field supervisors conduct mobile inspections with geo-stamped checklist verification. Non-compliance immediately generates an auto-assigned corrective work order.
          </p>
        </div>

        {/* 6-Step Workflow Progression */}
        <div className="mb-12 flex items-center justify-between overflow-x-auto p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center min-w-[700px] justify-between w-full">
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <span className="w-6 h-6 rounded-full bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 flex items-center justify-center font-bold text-[11px]">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Live Daily Facility Inspection Dossier */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-md dark:shadow-2xl dark:shadow-cyan-950/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                AUDIT ROUTE #CHK-DAILY-09
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Daily Facility &amp; Safety Compliance Inspection
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Auditor: Ramesh V. (Facility Operations Lead) · Building A &amp; Common Areas
              </p>
            </div>

            <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              1 Corrective Action Pending
            </span>
          </div>

          {/* Checklist Items */}
          <div className="my-6 space-y-3">
            {checklist.map((item) => {
              const isAction = item.status === 'Action Needed';
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isAction
                      ? 'bg-amber-50/80 dark:bg-amber-950/20 border-amber-300 dark:border-amber-500/40'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center ${
                        item.checked
                          ? 'bg-emerald-500 text-white dark:text-slate-950'
                          : 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40'
                      }`}>
                        {item.checked ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <AlertCircle className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-sm font-semibold ${isAction ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                        {item.area}
                      </span>
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                      isAction
                        ? 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40'
                        : 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Non-compliance Finding Detail */}
                  {isAction && (
                    <div className="mt-3.5 pt-3 border-t border-amber-200 dark:border-amber-500/20 bg-amber-100/50 dark:bg-amber-950/30 p-3 rounded-lg text-xs space-y-2">
                      <div className="text-amber-900 dark:text-amber-200">
                        <strong>Non-compliance Finding:</strong> {item.finding}
                      </div>
                      <div className="text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5 font-medium">
                        <Wrench className="w-3.5 h-3.5" />
                        <strong>Automated Action:</strong> {item.actionRequired}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>Eliminates clipboard logs with tamper-proof digital audit trails.</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-semibold cursor-pointer hover:underline">
              Generate Statutory Inspection Report →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
