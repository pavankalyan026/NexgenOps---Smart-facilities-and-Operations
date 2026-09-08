import React from 'react';
import { 
  Building2, 
  Layers, 
  Wrench, 
  Boxes, 
  Users, 
  BarChart4, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { ROLES_DATA } from '../data/mockData';

export const RoleSolutions: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    'FACILITY MANAGER': Building2,
    'OPERATIONS MANAGER': Layers,
    'MAINTENANCE TEAM': Wrench,
    'STORE MANAGER': Boxes,
    'VENDOR / SERVICE PROVIDER': Users,
    'LEADERSHIP': BarChart4,
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-50 dark:bg-[#060d19] relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Tailored Stakeholder Experiences
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built for every operational stakeholder.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Whether leading high-level asset planning or repairing a chiller in the plant room, NexgenOps empowers every team member with role-specific clarity.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES_DATA.map((role) => {
            const Icon = iconMap[role.role] || Building2;
            return (
              <div
                key={role.role}
                id={`role-${role.role.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-xs hover:shadow-lg dark:hover:shadow-cyan-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {role.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold tracking-wider text-slate-900 dark:text-white uppercase">
                    {role.role}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                    {role.tagline}
                  </p>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {role.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {role.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                  <span>Role Workflow Matrix</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
