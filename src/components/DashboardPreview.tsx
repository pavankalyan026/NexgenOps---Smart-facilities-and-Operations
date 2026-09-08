import React, { useState } from 'react';
import { 
  AlertCircle, 
  Clock, 
  Boxes, 
  ClipboardCheck, 
  Activity, 
  TrendingUp, 
  Wrench, 
  ShieldAlert, 
  ArrowUpRight,
  Sparkles,
  Server,
  Building,
  CheckCircle2
} from 'lucide-react';
import { HERO_METRICS } from '../data/mockData';

export const DashboardPreview: React.FC = () => {
  const [activeWidget, setActiveWidget] = useState<string | null>('complaints');

  const widgets = [
    {
      id: 'complaints',
      label: 'OPEN COMPLAINTS',
      value: HERO_METRICS.openComplaints,
      change: '3 critical',
      trend: 'urgent',
      icon: AlertCircle,
      color: 'text-amber-500 dark:text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      barColor: 'bg-amber-500',
      percentage: 65,
    },
    {
      id: 'snags',
      label: 'CRITICAL SNAGS',
      value: `0${HERO_METRICS.criticalSnags}`,
      change: 'SN-1042 Level 3',
      trend: 'urgent',
      icon: ShieldAlert,
      color: 'text-rose-500 dark:text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      barColor: 'bg-rose-500',
      percentage: 85,
    },
    {
      id: 'workorders',
      label: 'WORK ORDERS',
      value: HERO_METRICS.workOrders,
      change: '18 in execution',
      trend: 'nominal',
      icon: Wrench,
      color: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      barColor: 'bg-cyan-500',
      percentage: 78,
    },
    {
      id: 'maintenance',
      label: 'MAINTENANCE DUE',
      value: HERO_METRICS.maintenanceDue,
      change: 'AHU-042 today',
      trend: 'scheduled',
      icon: Clock,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      barColor: 'bg-blue-500',
      percentage: 50,
    },
    {
      id: 'inventory',
      label: 'LOW STOCK',
      value: `0${HERO_METRICS.lowStock}`,
      change: 'Filters & Sensors',
      trend: 'reorder',
      icon: Boxes,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      barColor: 'bg-purple-500',
      percentage: 40,
    },
    {
      id: 'inspections',
      label: 'INSPECTIONS',
      value: `0${HERO_METRICS.inspections}`,
      change: '1 finding pending',
      trend: 'active',
      icon: ClipboardCheck,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      barColor: 'bg-emerald-500',
      percentage: 90,
    },
  ];

  return (
    <div 
      id="hero-dashboard-preview"
      className="relative rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 p-4 sm:p-6 lg:p-7 shadow-xl shadow-slate-200/60 dark:shadow-2xl dark:shadow-cyan-950/40 backdrop-blur-xl overflow-hidden transition-colors duration-200"
    >
      {/* Top Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-32 bg-gradient-to-b from-cyan-500/10 dark:from-cyan-500/15 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Dashboard Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Live Command Center
            </span>
          </div>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Building className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            Tower A &amp; B Facilities Hub
          </span>
        </div>

        {/* Clear Demo Disclaimer Badge */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 shadow-sm">
            <Sparkles className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
            <span>Sample Operational Data · Demo Environment</span>
          </div>
        </div>
      </div>

      {/* 6 Core Operational Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 my-6">
        {widgets.map((widget) => {
          const Icon = widget.icon;
          const isSelected = activeWidget === widget.id;
          return (
            <button
              key={widget.id}
              onClick={() => setActiveWidget(widget.id)}
              className={`text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 border relative cursor-pointer ${
                isSelected 
                  ? 'bg-cyan-50/80 dark:bg-slate-800/90 border-cyan-500/80 dark:border-cyan-500/60 ring-1 ring-cyan-500/40 shadow-sm dark:shadow-lg dark:shadow-cyan-950/30'
                  : 'bg-slate-50 hover:bg-slate-100/80 dark:bg-slate-800/40 dark:hover:bg-slate-800/70 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-lg ${widget.bg} ${widget.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <ArrowUpRight className={`w-3.5 h-3.5 text-slate-400 dark:text-slate-600 ${isSelected ? 'text-cyan-600 dark:text-cyan-400' : ''}`} />
              </div>
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                {widget.label}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-0.5 tracking-tight">
                {widget.value}
              </div>
              <div className="text-[10px] font-medium text-slate-600 dark:text-slate-400 mt-1 truncate">
                {widget.change}
              </div>
              {/* Progress meter */}
              <div className="w-full bg-slate-200 dark:bg-slate-700/50 rounded-full h-1 mt-2.5 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${widget.barColor}`} 
                  style={{ width: `${widget.percentage}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Secondary Dashboard Tier: Live Activity Stream & Facility Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
        {/* Left 2 Cols: Live Operational Event Stream */}
        <div className="lg:col-span-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              Active Telemetry &amp; Signals
            </span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500">Auto-refresh: 10s</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <div>
                  <span className="font-semibold text-rose-700 dark:text-rose-300">SNAG #SN-1042</span>
                  <span className="text-slate-700 dark:text-slate-300 ml-2">Water leakage near service area</span>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Block A · Lvl 3</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <div>
                  <span className="font-semibold text-amber-700 dark:text-amber-300">CMP-2041</span>
                  <span className="text-slate-700 dark:text-slate-300 ml-2">HVAC cooling surge in executive wing</span>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Building A · Lvl 4</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <div>
                  <span className="font-semibold text-blue-700 dark:text-blue-300">PM-401</span>
                  <span className="text-slate-700 dark:text-slate-300 ml-2">AHU-042 Quarterly Maintenance dispatched</span>
                </div>
              </div>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">Due Today</span>
            </div>
          </div>
        </div>

        {/* Right 1 Col: AI Advisory & Quick KPI Meter */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50/80 via-white to-sky-50/80 dark:from-slate-800/60 dark:to-slate-900/80 border border-cyan-200 dark:border-cyan-500/20 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-800 dark:text-cyan-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              NexgenOps AI Copilot Insight
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              &ldquo;3 critical items require escalation before 12:00 PM. HVAC sensor calibration in Wing A recommended to avoid tenant discomfort.&rdquo;
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-600 dark:text-slate-400">Facility SLA Health</span>
            <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 94.8% Nominal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
