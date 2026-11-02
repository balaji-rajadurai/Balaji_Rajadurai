import React from 'react';
import { Cpu, Award, Check } from 'lucide-react';
import { BALAJI_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = BALAJI_DATA;

  return (
    <div className="py-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Competencies &amp; Tooling Matrix</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Structural Engineering, Computational Design &amp; AI Stack
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
          A comprehensive breakdown of commercial finite element tools, structural APIs, optimization algorithms, and international building design standards.
        </p>
      </div>

      {/* 2x2 Domain Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 sm:p-7 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {cat.title}
                </h2>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  0{idx + 1}
                </span>
              </div>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                {cat.description}
              </p>

              {/* Skills list without pill boxes */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] font-mono tabular-nums">
                        {skill.level}% proficiency
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                      {skill.context}
                    </div>

                    {/* Progress line */}
                    <div className="h-1 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden ml-5" style={{ width: 'calc(100% - 1.25rem)' }}>
                      <div 
                        className="h-full bg-emerald-500/80 dark:bg-emerald-400/80 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center gap-2 text-xs text-slate-500">
              <Award className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified across 10+ years of high-rise, industrial, and computational projects.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
