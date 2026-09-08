import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Linkedin, 
  Mail, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  Building2,
  UserCheck
} from 'lucide-react';
import { FounderPhoto } from './FounderPhoto';

export const TalkToFounderSection: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string>('Tomorrow at 3:00 PM IST');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const availableSlots = [
    'Today at 5:00 PM IST',
    'Tomorrow at 11:00 AM IST',
    'Tomorrow at 3:00 PM IST',
    'Thursday at 2:30 PM IST',
    'Friday at 4:00 PM IST'
  ];

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorEmail) return;
    setIsBooked(true);
  };

  return (
    <section 
      id="talk-to-founder" 
      className="relative py-24 sm:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-850 overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 dark:bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
            <UserCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Direct Founder Channel</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Talk directly with our Founder.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            No sales gatekeepers or scripted pitches. Connect directly with Pavankalyan Koneti to discuss your facility architecture, custom integrations, or a targeted pilot deployment.
          </p>
        </div>

        {/* Master Founder Profile Dossier Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-750 p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl dark:shadow-cyan-950/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Founder Photo & Bio Card */}
            <div className="lg:col-span-5 flex flex-col items-center text-center sm:text-left sm:items-start">
              <div className="relative group mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
                {/* Status Badge */}
                <div className="mb-3 px-3 py-1 rounded-full bg-emerald-50 dark:bg-slate-900 border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for 1-on-1 Walkthroughs
                </div>

                <FounderPhoto 
                  size="xl" 
                  shape="rounded" 
                  ring={true}
                  showUploadTrigger={true}
                  className="shadow-2xl shadow-cyan-950/40 dark:shadow-cyan-950/60 transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              <div className="mt-6 text-center sm:text-left w-full">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Pavankalyan Koneti
                </h3>
                <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mt-1">
                  Founder &amp; Executive Lead · NexgenOps
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  Building next-generation operational infrastructure that bridges physical plant assets with intelligent cloud workflows.
                </p>

                {/* Founder Badges */}
                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <Building2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" /> Commercial &amp; Tech Parks
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Architecture Review
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Channels & 1-on-1 Consultation Booking */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Founder Statement Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 relative">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  &ldquo;Facility managers deal with hundreds of daily signals—from HVAC cooling surges to AMC contractor delays. NexgenOps exists to give you total operational clarity without WhatsApp noise or lost spreadsheets. Let&apos;s talk through your setup.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-white">— Pavankalyan Koneti</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Strict Human Channel</span>
                </div>
              </div>

              {/* 4 Direct Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Direct Phone Call */}
                <a
                  id="section-call-founder-btn"
                  href="tel:+918297439630"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Direct Phone Call</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400">+91 8297439630</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* 2. WhatsApp Direct */}
                <a
                  id="section-whatsapp-founder-btn"
                  href="https://wa.me/918297439630?text=Hi%20Pavankalyan,%20I%20would%20like%20to%20know%20more%20about%20NexgenOps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/40 hover:border-emerald-500/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/30">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-emerald-800 dark:text-emerald-200">WhatsApp Direct</div>
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400/80">Message Pavankalyan</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors" />
                </a>

                {/* 3. LinkedIn Profile */}
                <a
                  id="section-linkedin-founder-btn"
                  href="https://www.linkedin.com/in/pavankalyan-koneti-a20365408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 hover:border-sky-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500/20">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">LinkedIn Connection</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400">Pavankalyan Koneti</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
                </a>

                {/* 4. Direct Email */}
                <a
                  id="section-email-founder-btn"
                  href="mailto:pavankalyankoneti026@gmail.com"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Direct Email</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 truncate max-w-[130px]">pavankalyankoneti026@gmail.com</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>

              {/* Instant 1-on-1 Walkthrough Scheduler Widget */}
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                    <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Schedule a 20-min 1-on-1 Walkthrough</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Direct Zoom / Meet
                  </span>
                </div>

                {isBooked ? (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-center animate-fadeIn">
                    <div className="flex items-center justify-center gap-1.5 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Walkthrough Reserved with Pavankalyan!
                    </div>
                    <p className="text-xs text-emerald-700 dark:text-emerald-200 mt-1">
                      Slot confirmed for <strong>{selectedSlot}</strong>. A calendar invite has been prepared for <strong>{visitorEmail || 'your email'}</strong>.
                    </p>
                    <button
                      onClick={() => setIsBooked(false)}
                      className="mt-3 px-3 py-1 text-[11px] font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
                    >
                      Pick Another Time
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleScheduleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] text-slate-600 dark:text-slate-400 mb-1">
                        Select an Available Time Slot:
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {availableSlots.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-2.5 py-1.5 rounded-xl border text-[11px] transition-all cursor-pointer ${
                              selectedSlot === slot
                                ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-sm'
                                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-cyan-500/40'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                      <input
                        type="email"
                        required
                        value={visitorEmail}
                        onChange={(e) => setVisitorEmail(e.target.value)}
                        placeholder="Enter your work email address"
                        className="flex-1 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>Confirm Walkthrough</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Direct Note */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Need immediate operational assistance? You can also message directly on WhatsApp anytime.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
