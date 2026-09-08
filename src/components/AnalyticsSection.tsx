import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  FileSpreadsheet, 
  FileText,
  Activity
} from 'lucide-react';

export const AnalyticsSection: React.FC = () => {
  const kpis = [
    { label: 'Avg. Initial Response', value: '18.4 min', change: '-24% MoM', trend: 'improved', sub: 'Target: <30 min' },
    { label: 'SLA Resolution Rate', value: '94.2%', change: '+3.8%', trend: 'improved', sub: 'Across 428 tickets' },
    { label: 'PM Compliance', value: '98.5%', change: 'Nominal', trend: 'steady', sub: 'Zero overdue life-safety' },
    { label: 'Vendor Performance', value: '97.1%', change: '+1.2%', trend: 'improved', sub: '18 active contracts' },
    { label: 'Critical Asset Uptime', value: '99.85%', change: 'Optimal', trend: 'steady', sub: 'Building A & B plant' },
  ];

  const monthlyVolume = [
    { month: 'Mar', complaints: 85, closed: 82 },
    { month: 'Apr', complaints: 92, closed: 89 },
    { month: 'May', complaints: 78, closed: 76 },
    { month: 'Jun', complaints: 104, closed: 98 },
    { month: 'Jul', complaints: 115, closed: 110 },
    { month: 'Aug', complaints: 96, closed: 94 },
  ];

  return (
    <section id="analytics" className="py-20 md:py-28 bg-slate-100/60 dark:bg-[#060c18] relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Executive Intelligence
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Turn daily activity into operational intelligence.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Elevate frontline facility telemetry to boardroom visibility. Benchmark response times, identify recurring asset anomalies, and quantify operational expenditure.
          </p>
        </div>

        {/* 5 Core Executive KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10">
          {kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  {kpi.label}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight">
                  {kpi.value}
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{kpi.change}</span>
                <span className="text-slate-500 truncate">{kpi.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Analytics Showcase: Chart Visualizer & Statutory Reporting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Chart Panel: Operational Ticket Throughput */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    Monthly Operational Resolution Throughput
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Comparison of incoming requests vs. verified closed tickets
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-700 dark:bg-blue-500" /> Total Inflow
                  </span>
                  <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-500 dark:bg-cyan-400" /> Verified Closed
                  </span>
                </div>
              </div>

              {/* Responsive Bar Chart */}
              <div className="my-6">
                <div className="grid grid-cols-6 gap-3 sm:gap-6 items-end h-48 pt-4 pb-2 border-b border-slate-200 dark:border-slate-800">
                  {monthlyVolume.map((item) => {
                    const maxH = 120;
                    const h1 = (item.complaints / maxH) * 100;
                    const h2 = (item.closed / maxH) * 100;
                    return (
                      <div key={item.month} className="flex flex-col items-center gap-2 h-full justify-end group">
                        <div className="w-full max-w-[40px] flex items-end justify-center gap-1 h-full">
                          <div
                            style={{ height: `${h1}%` }}
                            className="w-1/2 bg-cyan-700/80 dark:bg-blue-600/80 group-hover:bg-cyan-700 dark:group-hover:bg-blue-500 rounded-t-sm transition-all relative"
                            title={`Inflow: ${item.complaints}`}
                          />
                          <div
                            style={{ height: `${h2}%` }}
                            className="w-1/2 bg-cyan-500/90 dark:bg-cyan-400/90 group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 rounded-t-sm transition-all relative"
                            title={`Closed: ${item.closed}`}
                          />
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold">
                          {item.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>96.8% average completion rate across previous 6 months.</span>
              <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Live Real-time Feed</span>
            </div>
          </div>

          {/* Statutory Reporting & Export Hub */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                COMPLIANCE EXPORTS
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Executive &amp; Statutory Reports
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Generate audit-ready reports for property owners, health inspectors, and board meetings with one click.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-750 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Monthly Facility SLA Digest</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer" />
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-750 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Inventory Reorder &amp; Spares Cost</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer" />
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-750 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Statutory Life Safety Audit Log</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              Automated email delivery to leadership scheduled on 1st of every month.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
