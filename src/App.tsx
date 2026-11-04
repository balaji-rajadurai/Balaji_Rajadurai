/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { FloatingChatbot } from './components/FloatingChatbot';
import { Project } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('br_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  // Sync darkMode with <html> element class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('br_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('br_theme', 'light');
    }
  }, [darkMode]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      
      <div>
        {/* Navigation Bar with Page Switching */}
        <Navbar
          currentPage={currentPage}
          setCurrentPage={handleNavigate}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenDigitalTwin={() => setIsChatOpen(true)}
        />

        {/* Dynamic Page Views for Every Heading */}
        <main className="max-w-7xl mx-auto px-6">
          
          {/* Page 1: Landing Page (Overview & Profile Picture) */}
          {currentPage === 'home' && (
            <Hero
              onNavigate={handleNavigate}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          )}

          {/* Page 2: Systems & Projects Page */}
          {currentPage === 'projects' && (
            <Projects
              onSelectProject={(project) => setSelectedProject(project)}
            />
          )}

          {/* Page 3: 10+ Years Career Trajectory & Journey Page */}
          {currentPage === 'experience' && (
            <Journey />
          )}

          {/* Page 4: Technical Competencies & Tooling Matrix Page */}
          {currentPage === 'skills' && (
            <Skills />
          )}

          {/* Page 6: Contact & Direct Inquiries Page */}
          {currentPage === 'contact' && (
            <Contact />
          )}

        </main>
      </div>

      {/* Persistent Floating Chat Widget (Present on EVERY Page) */}
      <FloatingChatbot
        isOpen={isChatOpen}
        onOpenChange={setIsChatOpen}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Project Deep-Dive & Engineering Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Complete Formatted Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
