import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  UserCheck,
  AlertCircle,
} from 'lucide-react';
import { DemoFormData } from '../types';

interface BookDemoSectionProps {
  onOpenFounderModal: () => void;
}

/*
 * NexgenOps Lead API
 * Google Apps Script Web App
 */
const LEAD_API_URL =
  'https://script.google.com/macros/s/AKfycbxfl45ofY2VUJ9J6yiC5xJ6AgOCscbrb6UW4TSWNQBWzVlg2ha-LfLx8W9KV-j9aZU9eA/exec';

export const BookDemoSection: React.FC<BookDemoSectionProps> = ({
  onOpenFounderModal,
}) => {
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    company: '',
    workEmail: '',
    phone: '',
    jobRole: 'Facility Manager',
    organizationType: 'Commercial Office Tower',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError('');

    const leadData = {
      leadType: 'Guided Demo',
      name: formData.fullName,
      company: formData.company,
      email: formData.workEmail,
      phone: formData.phone,
      role: formData.jobRole,
      organizationType: formData.organizationType,
      message: formData.message,
      requestedSlot: '',
    };

    try {
      /*
       * no-cors is intentionally used because the Google Apps Script
       * Web App is hosted on a different domain.
       *
       * The request is still sent to the Apps Script endpoint.
       */
      await fetch(LEAD_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(leadData),
      });

      /*
       * The request has been handed to the API.
       * Apps Script will save the lead in Google Sheets.
       */
      setIsSubmitting(false);
      setIsSubmitted(true);

    } catch (error) {
      console.error('NexgenOps demo submission error:', error);

      setIsSubmitting(false);
      setSubmitError(
        'We could not submit your request right now. Please try again or contact us directly.'
      );
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError('');

    setFormData({
      fullName: '',
      company: '',
      workEmail: '',
      phone: '',
      jobRole: 'Facility Manager',
      organizationType: 'Commercial Office Tower',
      message: '',
    });
  };

  return (
    <section
      id="demo-form"
      className="py-20 md:py-28 bg-slate-50 dark:bg-[#060c18] relative border-t border-slate-200 dark:border-slate-850 transition-colors duration-200"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl dark:shadow-cyan-950/40">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              Personalized Consultation
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Transform your facility operations with NexgenOps.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Schedule a tailored platform walkthrough and discover how
              NexgenOps unifies complaints, snags, maintenance, and stores.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 dark:bg-slate-950/80 border border-emerald-300 dark:border-cyan-500/40 text-center animate-fadeIn">

              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-600 dark:text-cyan-400 border border-emerald-500/40 dark:border-cyan-500/40 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Demo Request Received
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your request
                has been recorded. Pavankalyan or the NexgenOps team will
                contact you at <strong>{formData.workEmail}</strong>.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>

                <button
                  type="button"
                  onClick={onOpenFounderModal}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Talk to Founder Directly</span>
                </button>

              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {submitError && (
                <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Full Name *
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    placeholder="e.g. Ramesh Varma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Company / Organization *
                  </label>

                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company: e.target.value,
                      })
                    }
                    placeholder="e.g. Prestige Tech Park"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors"
                  />
                </div>

              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Work Email *
                  </label>

                  <input
                    type="email"
                    id="workEmail"
                    required
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        workEmail: e.target.value,
                      })
                    }
                    placeholder="ramesh@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors"
                  />
                </div>

              </div>

              {/* Role + Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label
                    htmlFor="jobRole"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Your Operational Role
                  </label>

                  <select
                    id="jobRole"
                    value={formData.jobRole}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        jobRole: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors"
                  >
                    <option value="Facility Manager">
                      Facility Manager
                    </option>
                    <option value="Operations Manager">
                      Operations Manager
                    </option>
                    <option value="VP / Director of Real Estate">
                      VP / Director of Real Estate
                    </option>
                    <option value="Chief Engineer / MEP Lead">
                      Chief Engineer / MEP Lead
                    </option>
                    <option value="Property Owner / Developer">
                      Property Owner / Developer
                    </option>
                    <option value="Vendor / Service Contractor">
                      Vendor / Service Contractor
                    </option>
                    <option value="Other">
                      Other Executive
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="organizationType"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Facility / Organization Type
                  </label>

                  <select
                    id="organizationType"
                    value={formData.organizationType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        organizationType: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors"
                  >
                    <option value="Commercial Office Tower">
                      Commercial Office Tower
                    </option>
                    <option value="IT Tech Park / Campus">
                      IT Tech Park / Campus
                    </option>
                    <option value="Hospital & Healthcare">
                      Hospital & Healthcare
                    </option>
                    <option value="Manufacturing & Industrial">
                      Manufacturing & Industrial
                    </option>
                    <option value="Data Center & Mission Critical">
                      Data Center & Mission Critical
                    </option>
                    <option value="Residential Gated Complex">
                      Residential Gated Complex
                    </option>
                    <option value="Retail & Shopping Mall">
                      Retail & Shopping Mall
                    </option>
                  </select>
                </div>

              </div>

              {/* Requirements */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Facility Challenges / Key Requirements (Optional)
                </label>

                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us about the number of buildings, current tools, or urgent operational pain points..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors"
                />
              </div>

              {/* Submit */}
              <div className="pt-3">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-demo-form-btn"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-950/20 dark:shadow-cyan-950/50 hover:shadow-cyan-400/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Request Guided Platform Demo</span>
                    </>
                  )}
                </button>

              </div>

              {/* Founder Alternative */}
              <div className="mt-4 text-center">

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Prefer a direct high-level conversation?{' '}

                  <button
                    type="button"
                    onClick={onOpenFounderModal}
                    className="text-cyan-700 dark:text-cyan-400 font-bold hover:underline cursor-pointer"
                  >
                    Connect with Founder Pavankalyan Koneti directly →
                  </button>
                </p>

              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
