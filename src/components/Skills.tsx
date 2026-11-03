
import React, { useState } from 'react';
import {
  Cpu,
  Award,
  Check,
  Trophy,
  X,
  CalendarDays,
  Building2,
  Maximize2,
  Star
} from 'lucide-react';

import { BALAJI_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = BALAJI_DATA;
  const accomplishments = BALAJI_DATA.accomplishments || [];

  const [selectedAward, setSelectedAward] = useState<number | null>(null);

  const activeAward =
    selectedAward !== null ? accomplishments[selectedAward] : null;

  return (
    <div className="py-8 space-y-16">

      {/* PAGE HEADER */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>TECHNICAL COMPETENCIES & PROFESSIONAL RECOGNITION</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Structural Engineering, Computational Design & AI Stack
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          A combination of structural engineering expertise, computational
          methods, engineering automation, emerging AI technologies and
          professional accomplishments developed through industry experience.
        </p>
      </div>


      {/* ACCOMPLISHMENTS & AWARDS */}
      <section id="accomplishments">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <SectionHeader
            icon={<Trophy className="w-5 h-5" />}
            eyebrow="MILESTONES & RECOGNITION"
            title="Accomplishments & Awards"
            description="A collection of professional recognitions, innovation awards, achievements and memorable milestones."
          />

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 shrink-0">
            <Star className="w-4 h-4 text-emerald-500" />
            <span>{accomplishments.length} Recognitions</span>
          </div>
        </div>


        {accomplishments.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {accomplishments.map((award, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedAward(idx)}
                className="group text-left rounded-2xl overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500 transition-all"
              >

                {/* AWARD IMAGE */}
                <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">

                  <img
                    src={award.image}
                    alt={award.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors" />

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-950/90 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold tracking-wide shadow-sm">
                      {award.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 dark:bg-slate-950/90 text-slate-700 dark:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>


                {/* AWARD DETAILS */}
                <div className="p-5">

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {award.year}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {award.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 text-xs text-slate-500 dark:text-slate-400">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    {award.organization}
                  </div>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {award.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <span>View Recognition</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                </div>
              </button>
            ))}

          </div>

        ) : (

          <div className="p-10 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
            <Trophy className="w-10 h-10 mx-auto text-emerald-500 mb-4" />

            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Your achievements will appear here
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Add award photographs, certificates and recognition details to your portfolio data.
            </p>
          </div>

        )}
      </section>


      {/* AWARD IMAGE PREVIEW MODAL */}
      {activeAward && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedAward(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeAward.title}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide">
                ACCOMPLISHMENT DETAILS
              </span>

              <button
                onClick={() => setSelectedAward(null)}
                aria-label="Close award preview"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-7">

              <div className="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={activeAward.image}
                  alt={activeAward.title}
                  className="w-full max-h-[55vh] object-contain"
                />
              </div>

              <div className="mt-6">

                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {activeAward.category}
                </span>

                <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {activeAward.title}
                </h2>

                <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    {activeAward.organization}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4" />
                    {activeAward.year}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {activeAward.description}
                </p>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};


// REUSABLE SECTION HEADER
const SectionHeader = ({
  icon,
  eyebrow,
  title,
  description
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="max-w-3xl">
    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide">
      {icon}
      {eyebrow}
    </div>

    <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">
      {title}
    </h2>

    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </div>
);
