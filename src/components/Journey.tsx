
import React, { useState } from 'react';
import {
  Compass,
  GraduationCap,
  Building2,
  Cpu,
  Bot,
  ArrowRight,
  ShieldCheck,
  BriefcaseBusiness,
  Award,
  Download,
  CalendarDays,
  ExternalLink,
  FileBadge,
  Code2
} from 'lucide-react';

import { BALAJI_DATA } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const { journey } = BALAJI_DATA;
  const [activeStep, setActiveStep] = useState(0);

  const icons = [GraduationCap, Building2, Cpu, Bot];

  const education = BALAJI_DATA.education || [];
  const experience = BALAJI_DATA.experience || [];
  const certifications = BALAJI_DATA.certifications || [];
  const achievements = BALAJI_DATA.achievements || [];

  const cvUrl = '/Balaji_Rajadurai_Resume.pdf';

  return (
    <div className="py-8 space-y-16">

      {/* PAGE HEADER */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>PROFESSIONAL PROFILE</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Engineering Foundations. Digital Innovation. Intelligent Systems.
        </h1>

        <p className="mt-4 text-sm sm:text-base text-justify text-slate-600 dark:text-slate-300 leading-relaxed">
          Structural Engineering professional with 10+ years of experience
          spanning engineering design, industrial infrastructure, computational
          engineering, design automation and AI-driven engineering systems.
          Focused on advancing conventional engineering workflows towards
          intelligent and autonomous design environments.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={cvUrl}
            download="Balaji_Rajadurai_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-emerald-500 transition-colors"
          >
            Explore Experience
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>


      {/* EDUCATION */}
      <section>
        <SectionHeader
          icon={<GraduationCap className="w-5 h-5" />}
          eyebrow="ACADEMIC BACKGROUND"
          title="Education"
          description=""
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <span className="text-xs font-mono text-slate-400">
                  {item.period}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-slate-100">
                {item.degree}
              </h3>

              <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {item.institution}
              </p>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {item.specialization}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* PROFESSIONAL EXPERIENCE */}
      <section id="experience">
        <SectionHeader
          icon={<BriefcaseBusiness className="w-5 h-5" />}
          eyebrow="CAREER HISTORY"
          title="Professional Experience"
          description=""
        />

        <div className="mt-8 relative space-y-6">
          <div className="absolute left-5 top-6 bottom-6 w-px bg-slate-200 dark:bg-slate-800" />

          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-14">
              <div className="absolute left-2 top-5 w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center z-10">
                <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500 transition-all">

                <div className="flex flex-wrap justify-between gap-2">
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    <CalendarDays className="inline w-3.5 h-3.5 mr-1" />
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-slate-100">
                  {item.company}
                </h3>

                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                  {item.role}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.specialties.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CERTIFICATIONS */}
      <section>
        <SectionHeader
          icon={<FileBadge className="w-5 h-5" />}
          eyebrow="CONTINUOUS LEARNING"
          title="Certifications & Professional Development"
          description=""
        />

        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
            {certifications.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex gap-4"
              >
                <div className="p-2.5 h-fit rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {item.issuer}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {/* {item.year} */}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-emerald-600 dark:text-emerald-400"
                    >
                      View credential <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Professional certifications and credentials will be listed here.
          </p>
        )}
      </section>
      
      
      
      {/* INTERACTIVE JOURNEY */}
      <section>
        <SectionHeader
          icon={<Compass className="w-5 h-5" />}
          eyebrow="PROFESSIONAL EVOLUTION"
          title="The Trajectory"
          description=""
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">

          {/* TIMELINE SELECTOR */}
          <div className="lg:col-span-5 space-y-3">
            {journey.map((item, idx) => {
              const Icon = icons[idx] || Building2;
              const isActive = activeStep === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 border-emerald-500 shadow-sm'
                      : 'bg-white/60 dark:bg-slate-950/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                      <span>{item.period}</span>
                    </div>

                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {item.role}
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {item.domain}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* MILESTONE DETAILS */}
          {journey.length > 0 && (
            <div className="lg:col-span-7 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">

              <div className="flex justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span>{journey[activeStep].domain}</span>
                <span className="text-emerald-600 dark:text-emerald-400">
                  {journey[activeStep].period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                {journey[activeStep].role}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {journey[activeStep].summary}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
                <div className="text-xs font-bold text-slate-900 dark:text-slate-200 flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Core Engineering Principle
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                  "{journey[activeStep].takeaway}"
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                <strong>Applied Competencies: </strong>
                {journey[activeStep].transferableSkill}
              </p>

              <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">

                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(p => Math.max(0, p - 1))}
                  className="text-xs text-slate-600 dark:text-slate-400 disabled:opacity-30"
                >
                  ← Previous
                </button>

                <div className="flex gap-1.5">
                  {journey.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 rounded-full transition-all ${
                        activeStep === i
                          ? 'w-5 bg-emerald-500'
                          : 'w-2 bg-slate-200 dark:bg-slate-800'
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={activeStep === journey.length - 1}
                  onClick={() => setActiveStep(p => Math.min(journey.length - 1, p + 1))}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 disabled:opacity-30 flex items-center gap-1"
                >
                  Next <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* TECHNICAL RECOGNITION */}
      <section>
        <SectionHeader
          icon={<Award className="w-5 h-5" />}
          eyebrow="INNOVATION & CONTRIBUTIONS"
          title="Achievements & Technical Contributions"
          description="Selected engineering innovations, intellectual property and digital engineering initiatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-3">
                <Code2 className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {item.category}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* CV DOWNLOAD BANNER */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5">

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Interested in my professional profile?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Explore my qualifications, engineering experience and technical contributions in detail.
          </p>
        </div>

        <a
          href={cvUrl}
          download="Balaji_Rajadurai_Resume.pdf"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </section>

    </div>
  );
};


// Reusable section heading
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
  <div>
    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide">
      {icon}
      {eyebrow}
    </div>

    <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">
      {title}
    </h2>

    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
      {description}
    </p>
  </div>
);
