import React, { useState } from 'react';
import { Layers, ArrowRight, Github, Calculator, Cpu, GitBranch, Building } from 'lucide-react';
import { BALAJI_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? BALAJI_DATA.projects
    : BALAJI_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Engineering Systems &amp; Software</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Selected Systems: Structural AI, Optimization &amp; Automation
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Bridging conventional structural engineering mechanics with intelligent computational systems. Built for production reliability, transparent calculations, and zero hallucination.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'All Systems' },
            { id: 'ai-agents', label: 'Structural AI Agents' },
            { id: 'optimization', label: 'Generative Optimization' },
            { id: 'automation', label: 'FEM Automation' },
            { id: 'bim-fem', label: 'BIM-to-FEM' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === tab.id
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm group"
          >
            <div>
              {/* Unboxed Metadata Kicker */}
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {project.categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{project.stack.slice(0, 3).join(', ')}</span>
                <span aria-hidden="true">·</span>
                <span>Deterministic Verification</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {project.subtitle}
              </p>

              {/* Summary */}
              <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.summary}
              </p>

              {/* Architecture Snapshot Box */}
              <div className="my-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-2 mb-2 border-b border-slate-200/60 dark:border-slate-800">
                  <span className="flex items-center gap-1.5 font-sans font-medium text-slate-700 dark:text-slate-300">
                    {project.category === 'ai-agents' && <Calculator className="w-3.5 h-3.5 text-emerald-500" />}
                    {project.category === 'optimization' && <GitBranch className="w-3.5 h-3.5 text-indigo-500" />}
                    {project.category === 'automation' && <Building className="w-3.5 h-3.5 text-amber-500" />}
                    {project.category === 'bim-fem' && <Cpu className="w-3.5 h-3.5 text-blue-500" />}
                    <span>Pipeline Trace</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Production Ready</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  {project.architectureSteps.slice(0, 2).map((s, idx) => (
                    <div key={idx} className="p-2 rounded bg-white dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-850">
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold block">{s.step}. {s.title}</span>
                      <span className="text-slate-500 line-clamp-1 mt-0.5">{s.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantitative Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-100 dark:border-slate-850 mb-5">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <div className="text-sm sm:text-base font-bold font-mono text-slate-900 dark:text-slate-100 tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Frameworks & APIs */}
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Stack &amp; APIs: </span>
                {project.stack.join(' · ')}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-850">
              <button
                onClick={() => onSelectProject(project)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 rounded-lg transition-colors shadow-sm"
              >
                <span>Explore Architecture &amp; Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
