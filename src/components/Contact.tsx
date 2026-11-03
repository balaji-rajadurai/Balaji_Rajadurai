import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Github, Linkedin, Sparkles, MessageSquare, Award } from 'lucide-react';
import { BALAJI_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { profile } = BALAJI_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Structural Automation & API Development',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Inbound & Info */}
        <div className="lg:col-span-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get in touch</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              Contact
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              For collaborations, project opportunities, or professional inquiries, feel free to get in touch.
            </p>

            {/* Direct Email Card */}
            <div className="mt-8 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <br></br>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Direct Contact Email:
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xl font-mono font-bold text-slate-900 dark:text-slate-100 truncate">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-20 text-xs">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  {/* <Linkedin className="w-4 h-4" /> */}
                  <span>Hugging Face</span>
                </a>
              </div>
            </div>

            {/* Credentials and Location */}
            <div className="mt-6 space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
};
