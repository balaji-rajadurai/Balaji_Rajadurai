import React, { useState } from 'react';
import { Moon, Sun, FileText, Sparkles, Menu, X } from 'lucide-react';

export type PageId = 'home' | 'projects' | 'experience' | 'skills' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
  onOpenDigitalTwin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  darkMode,
  setDarkMode,
  onOpenResume,
  onOpenDigitalTwin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId | 'digital-twin'; label: string; isSpecial?: boolean }[] = [
    { id: 'home', label: 'Overview' },
    { id: 'experience', label: 'Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Accolades' },
    { id: 'contact', label: 'Contact' },
    { id: 'digital-twin', label: 'Digital Twin', isSpecial: true },
  ];

  const handleNavClick = (page: PageId | 'digital-twin') => {
    setMobileMenuOpen(false);

    if (page === 'digital-twin') {
      onOpenDigitalTwin();
      return;
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark & Credentials */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left flex items-center gap-3 shrink-0 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform">
            BR
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap">
              Balaji Rajadurai
            </span>
          </div>
        </button>

        {/* Zone 2: Page Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'border-emerald-600 text-slate-900 dark:text-slate-50 font-semibold dark:border-emerald-400'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                } ${item.isSpecial ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''}`}
              >
                {item.isSpecial && <Sparkles className="w-3.5 h-3.5 text-emerald-500" />}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setDarkMode(prev => !prev)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-950 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-4 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
                currentPage === item.id
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-2">
                {item.isSpecial && <Sparkles className="w-3.5 h-3.5 text-emerald-500" />}
                <span>{item.label}</span>
              </div>
              {currentPage === item.id && <span className="text-xs text-emerald-600 font-mono">Current</span>}
            </button>
          ))}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-850">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full Curriculum Vitae</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
