import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BALAJI_DATA } from '../data/portfolioData';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenResume }) => {
  const { profile } = BALAJI_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          <div>
            <div className="text-base font-bold text-slate-900 dark:text-slate-100">
              {profile.name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {profile.credentials} · {profile.positioning}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Overview
            </button>
            <button onClick={() => onNavigate('projects')} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Systems
            </button>
            <button onClick={() => onNavigate('experience')} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              10+ Yrs Journey
            </button>
            <button onClick={() => onNavigate('skills')} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Competencies
            </button>
            <button onClick={() => onNavigate('digital-twin')} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-semibold text-emerald-600 dark:text-emerald-400">
              Digital Twin
            </button>
            <button onClick={onOpenResume} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Curriculum Vitae
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Contact
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 dark:text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Balaji Rajadurai. All rights reserved. M.Tech (Structural Engineering) NIT Calicut.
          </div>
          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline">
              github.com/balajir333
            </a>
            <span aria-hidden="true">·</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
              LinkedIn Profile
            </a>
            <span aria-hidden="true">·</span>
            <span>{profile.email}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
