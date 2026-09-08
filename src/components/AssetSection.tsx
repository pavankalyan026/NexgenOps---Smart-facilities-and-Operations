import React, { useState } from 'react';
import { 
  Cpu, 
  CheckCircle2, 
  MapPin, 
  QrCode, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  ShieldCheck,
  Activity
} from 'lucide-react';
import { PRIMARY_ASSET } from '../data/mockData';

export const AssetSection: React.FC = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <section id="assets" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Asset Lifecycle Intelligence
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Know your assets. Know your facility.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Maintain complete digital equipment passbooks, QR-coded field inspections, live health indices, and full maintenance history in one central registry.
          </p>
        </div>

        {/* Featured Asset Digital Passbook */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg dark:shadow-2xl dark:shadow-cyan-950/40">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                    {PRIMARY_ASSET.code}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Category: {PRIMARY_ASSET.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {PRIMARY_ASSET.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  {PRIMARY_ASSET.location}
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {PRIMARY_ASSET.status}
              </span>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Health Score</span>
                <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">{PRIMARY_ASSET.healthScore}/100</div>
              </div>
            </div>
          </div>

          {/* Quick Specs & Service Schedule */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Manufacturer</span>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-1 truncate">{PRIMARY_ASSET.specs.manufacturer}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Capacity</span>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">{PRIMARY_ASSET.specs.capacity}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Service</span>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">{PRIMARY_ASSET.lastService}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">Next Service</span>
              <div className="text-xs font-bold text-cyan-700 dark:text-cyan-300 mt-1">{PRIMARY_ASSET.nextService}</div>
            </div>
          </div>

          {/* Interactive Service History Toggle */}
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Verified Service History ({PRIMARY_ASSET.serviceHistory.length} logs)</span>
              </div>

              <button
                id="toggle-service-history-btn"
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center gap-1 text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>{showHistory ? 'Hide History' : 'View Service History'}</span>
                {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {showHistory && (
              <div className="mt-4 space-y-3 animate-fadeIn">
                {PRIMARY_ASSET.serviceHistory.map((log, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-750 text-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <span className="font-bold text-slate-900 dark:text-white">{log.type}</span>
                      <span className="font-mono text-slate-500 dark:text-slate-400">{log.date} · Tech: {log.technician}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{log.notes}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Digital Field Access Bar */}
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <QrCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Scannable QR tag mounted on physical unit for instant mobile technician check-in.
            </span>
            <span className="text-cyan-700 dark:text-cyan-400 font-semibold cursor-pointer hover:underline">
              Export Asset Passbook PDF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
