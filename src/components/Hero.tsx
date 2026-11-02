import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Layers, Bot, Cpu, GitBranch, Award } from 'lucide-react';
import { BALAJI_DATA } from '../data/portfolioData';
import { ProfilePicture } from './ProfilePicture';
import { PageId } from './Navbar';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  const { profile } = BALAJI_DATA;

  return (
    <div className="py-10 md:py-16">
      
      {/* Split Screen Hero with Profile Picture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
        
        {/* Left Column: Positioning & Professional Summary */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Unboxed Metadata Tagline */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 mb-4">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-emerald-500" />
              <span>M.Tech in Structural Engineering (NIT Calicut)</span>
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>10+ Years Experience</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-slate-500 dark:text-slate-400">Computational &amp; AI Systems</span>
          </div>

          {/* Name & Professional Positioning */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.12] mb-4">
            {profile.name}
          </h1>

          <div className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 tracking-tight">
            {profile.positioning}
          </div>

          {/* User's Exact Professional Summary */}
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            <p>
              I am a postgraduate Structural Engineer with an <strong className="font-semibold text-slate-900 dark:text-slate-100">M.Tech from NIT Calicut</strong> and over <strong className="font-semibold text-slate-900 dark:text-slate-100">10 years of experience</strong> in structural engineering, computational design, engineering optimization and digital engineering.
            </p>
            <p>
              My work focuses on <strong className="font-semibold text-slate-900 dark:text-slate-100">bridging conventional structural engineering with intelligent computational systems</strong>. I develop engineering automation solutions, optimization frameworks and AI-powered applications that aim to understand engineering intent, construct structural models, perform analysis, validate solutions and improve engineering workflows.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl transition-all shadow-sm"
            >
              <Layers className="w-4 h-4 text-emerald-400 dark:text-emerald-100" />
              <span>Explore Engineering Systems</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('digital-twin')}
              className="group flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 rounded-xl transition-colors"
            >
              <Sparkles className="w-4 h-4 text-emerald-500 group-hover:rotate-12 transition-transform" />
              <span>Ask My Digital Twin</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              View Full CV &rarr;
            </button>
          </div>

          {/* Engineering Grounding Note */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              Deterministic finite element checks · IS 456 / IS 800 / Eurocode / ACI 318 · Zero-hallucination engineering mechanics.
            </span>
          </div>

        </div>

        {/* Right Column: Profile Picture Component & Status */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[420px]">
            <ProfilePicture />
          </div>
        </div>

      </div>

      {/* 4-Column Quantitative Impact Strip */}
      <div className="pt-10 border-t border-slate-200 dark:border-slate-800/80 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {stat.context}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Core Domains Preview */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Core Technical Pillars
            </h2>
            <p className="text-xs text-slate-500">
              Where physical mechanics meet modern computational intelligence
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>See All Systems</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              AI Code Compliance &amp; Agents
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Multi-agent systems using LangGraph to interpret structural framing intent, map building design codes (IS 456, IS 800, Eurocode, ACI 318), and execute unit-checked closed-form member verification.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Generative Structural Optimization
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Multi-objective genetic algorithms (NSGA-II) and direct stiffness finite element models discovering optimal topologies to cut embodied carbon and steel weight by up to 26%.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              BIM-to-FEM Automation Pipelines
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              OpenAPI integrations across ETABS, SAP2000, Rhino/Grasshopper, Revit, and Tekla Structures—generating analytical models from 2D architectural plans in minutes.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
