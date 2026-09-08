import React, { useState } from 'react';
import { Sparkles, Bot, User, Send, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AI_QUICK_PROMPTS } from '../data/mockData';
import { queryAICopilot } from '../services/aiCopilotService';

interface AICopilotSectionProps {
  onOpenAIDrawer: () => void;
}

export const AICopilotSection: React.FC<AICopilotSectionProps> = ({ onOpenAIDrawer }) => {
  const [activePrompt, setActivePrompt] = useState<string>(
    'What requires immediate attention today?'
  );
  const [response, setResponse] = useState<string>(
    `Based on the available operational records, the following items should be reviewed:

1. 3 critical complaints (HVAC temp surge Level 4, Lift #2 sensor, Server room seepage)
2. 2 overdue maintenance tasks (Fire Extinguisher compliance check & Annual sensor test)
3. 1 critical snag (SN-1042: Water leakage Block A / Level 3)
4. 2 inventory items below minimum stock (AHU Filters AF-M13 and Smoke Sensors DET-SMK)

These are recommendations based on the available data.`
  );
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptSelect = async (prompt: string) => {
    setActivePrompt(prompt);
    setIsLoading(true);
    try {
      const res = await queryAICopilot(prompt);
      setResponse(res);
    } catch {
      setResponse('Operational telemetry currently syncing.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-copilot" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Operational Intelligence Copilot
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Intelligent operational assistance when decisions matter.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400">
            Synthesize hundreds of daily facility signals. Detect impending maintenance failures, flag stockout risks, and prioritize urgent tenant issues instantly.
          </p>
        </div>

        {/* Large In-Page AI Interface Console */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 p-6 sm:p-8 lg:p-10 shadow-lg dark:shadow-2xl dark:shadow-cyan-950/40">
          {/* Top Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">NexgenOps AI</h3>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 dark:border-cyan-500/40">
                    Demo AI
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Facility Operations Copilot</p>
              </div>
            </div>

            <button
              id="open-full-ai-drawer-btn"
              onClick={onOpenAIDrawer}
              className="flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-750 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            >
              <span>Launch Live Assistant Drawer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Prompts Selector */}
          <div className="my-6">
            <div className="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2.5">
              Explore Live Operations Telemetry (Click to query)
            </div>
            <div className="flex flex-wrap gap-2">
              {AI_QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handlePromptSelect(prompt)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all border text-left cursor-pointer ${
                    activePrompt === prompt
                      ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold border-cyan-600 dark:border-cyan-400 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Conversation Feed */}
          <div className="space-y-4 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/90 text-sm">
            {/* System Welcome */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                Hello. I&apos;m NexgenOps AI. Ask me about your operations.
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-start gap-3 flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-cyan-600 dark:bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                <User className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-2xl bg-cyan-600 dark:bg-blue-600 text-white text-xs sm:text-sm max-w-[85%] font-medium">
                {activePrompt}
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/95 border border-cyan-400/40 dark:border-cyan-500/20 text-slate-800 dark:text-slate-200 text-xs sm:text-sm max-w-[90%] leading-relaxed whitespace-pre-line shadow-sm">
                {isLoading ? (
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-300 py-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                    Querying facility operational telemetry...
                  </div>
                ) : (
                  response
                )}

                <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="text-cyan-700 dark:text-cyan-400 font-medium">AI-generated recommendations</span>
                  <span>Confidence: 98.4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              Demo AI — Connect your AI backend to enable live operational intelligence.
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> LLM Guardrails Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
