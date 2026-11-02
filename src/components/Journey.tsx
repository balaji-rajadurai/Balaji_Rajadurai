import React, { useState } from 'react';
import { Compass, GraduationCap, Building2, Cpu, Bot, ArrowRight, ShieldCheck } from 'lucide-react';
import { BALAJI_DATA } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const { journey } = BALAJI_DATA;
  const [activeStep, setActiveStep] = useState<number>(0);

  const icons = [GraduationCap, Building2, Cpu, Bot];

  return (
    <div className="py-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>10+ Years Professional Evolution</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          The Engineering Trajectory: From NIT Calicut to Structural AI
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Over 10 years of structural engineering practice evolved from classical continuum mechanics and finite element modeling into parametric automation, computational optimization, and deterministic AI systems.
        </p>
      </div>

      {/* Interactive Timeline Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Step Selector List */}
        <div className="lg:col-span-5 space-y-3">
          {journey.map((item, idx) => {
            const IconComponent = icons[idx] || Building2;
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
                  <IconComponent className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500 mb-0.5">
                    <span>{item.period}</span>
                    <span className="font-sans font-semibold text-emerald-600 dark:text-emerald-400">
                      Milestone 0{idx + 1}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                    {item.role}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {item.domain}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Details */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-100 dark:border-slate-850">
            <span>Domain: {journey[activeStep].domain}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{journey[activeStep].period}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
            {journey[activeStep].role}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {journey[activeStep].summary}
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-2 mb-6">
            <div className="text-xs font-bold text-slate-900 dark:text-slate-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Core Takeaway &amp; Engineering Principle:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
              &ldquo;{journey[activeStep].takeaway}&rdquo;
            </p>
          </div>

          <div className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-850">
            <span className="font-semibold text-slate-900 dark:text-slate-200">Applied Competencies: </span>
            <span>{journey[activeStep].transferableSkill}</span>
          </div>

          {/* Stepper controls */}
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-850">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              className="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 disabled:opacity-30 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              &larr; Previous Milestone
            </button>
            
            <div className="flex items-center gap-1.5">
              {journey.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeStep === i 
                      ? 'w-5 bg-emerald-500' 
                      : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              ))}
            </div>

            <button
              disabled={activeStep === journey.length - 1}
              onClick={() => setActiveStep(prev => Math.min(journey.length - 1, prev + 1))}
              className="px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 disabled:opacity-30 hover:underline transition-colors flex items-center gap-1"
            >
              <span>Next Milestone</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
