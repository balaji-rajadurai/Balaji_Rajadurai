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
              {profile.positioning}
            </div>
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

      </div>
    </footer>
  );
};
