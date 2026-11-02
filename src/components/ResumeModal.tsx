import React from 'react';
import { X, Download, Printer, Mail, MapPin, Github, Linkedin, Award, GraduationCap } from 'lucide-react';
import { BALAJI_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { profile } = BALAJI_DATA;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCV = () => {
    const cvText = `
========================================================================
BALAJI RAJADURAI
${profile.positioning}
${profile.credentials} | ${profile.experience}
Email: ${profile.email}
GitHub: ${profile.github}
LinkedIn: ${profile.linkedin}
========================================================================

PROFESSIONAL SUMMARY:
${profile.professionalSummary}

ACADEMIC QUALIFICATIONS:
- Master of Technology (M.Tech) in Structural Engineering
  National Institute of Technology (NIT) Calicut
  Focus: Structural Dynamics, Finite Element Methods, Continuum Mechanics & Optimization.

CORE TECHNICAL COMPETENCIES:
- Structural FEA & Dynamics: ETABS, SAP2000, STAAD.Pro, SAFE, ANSYS, OpenSees
- Design Standards & Codes: IS 456, IS 800, IS 1893, Eurocode 2 & 3, ACI 318, AISC 360, ASCE 7
- Computational Design & BIM: Grasshopper, Dynamo, Rhino Common, Revit API, Tekla Open API
- Programming & AI Systems: Python 3.11+, C# .NET, LangGraph, Genetic Algorithms (NSGA-II), FastAPI, PyTorch

FEATURED ENGINEERING SYSTEMS:
1. AI-Powered Structural Code Compliance & Verification Agent
   - Multi-agent system for autonomous code checks (IS 456, IS 800, ACI 318).
   - Generates step-by-step transparent calculation reports with zero hallucination.
2. Generative Truss & Frame Multi-Objective Optimization
   - Genetic algorithm framework cutting steel weight by 18%-26% within strict deflection limits.
3. Intelligent FEM Modeling & Analysis Automation Engine
   - Programmatic generation of ETABS/SAP2000 analytical models from architectural plans via API.
4. Bidirectional BIM-to-FEM Parametric Synchronizer
   - Real-time geometric conduit linking Grasshopper, Revit, and Tekla Structures.

PROFESSIONAL EXPERIENCE (10+ YEARS):
- Structural Engineer & AI Systems Developer
  Specializing in structural automation, optimization algorithms, and engineering agentic workflows.
- Senior Structural Design Engineer
  High-rise residential and commercial towers, industrial steel structures, seismic response spectrum analysis.
- Computational Design & Automation Specialist
  Developing custom ETABS OAPI and Revit API plugins, parametric geometry pipelines.
========================================================================
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Balaji_Rajadurai_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Action Bar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/90 dark:bg-slate-900/90">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span>Curriculum Vitae</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-emerald-600 dark:text-emerald-400">Balaji Rajadurai</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print CV"
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Body */}
        <div className="p-6 sm:p-10 max-h-[calc(85vh-80px)] overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {profile.name}
            </h1>
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
              {profile.positioning}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {profile.credentials} · {profile.experience}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {profile.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-400" />
                {profile.email}
              </span>
              <span aria-hidden="true">·</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                <Github className="w-3 h-3" />
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Professional Summary
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-2">
              <p>
                I am a postgraduate Structural Engineer with an <strong>M.Tech from NIT Calicut</strong> and over <strong>10 years of experience</strong> in structural engineering, computational design, engineering optimization and digital engineering.
              </p>
              <p>
                My work focuses on bridging conventional structural engineering with intelligent computational systems. I develop engineering automation solutions, optimization frameworks and AI-powered applications that aim to understand engineering intent, construct structural models, perform analysis, validate solutions and improve engineering workflows.
              </p>
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              Education &amp; Credentials
            </h2>
            <div className="space-y-3">
              <div className="flex items-start justify-between text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-emerald-500" />
                    <span>M.Tech in Structural Engineering</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    National Institute of Technology (NIT) Calicut · Advanced structural dynamics, finite element methods, continuum mechanics.
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Postgraduate</span>
              </div>

              <div className="flex items-start justify-between text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-500" />
                    <span>10+ Years Professional Structural Practice</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    Comprehensive design of commercial high-rises, industrial facilities, and digital automation frameworks.
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">10+ Years</span>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">Structural FEA &amp; Codes:</span>
                <span className="text-slate-600 dark:text-slate-400">ETABS, SAP2000, STAAD.Pro, SAFE, IS 456, IS 800, IS 1893, Eurocodes 2 &amp; 3, ACI 318, AISC 360.</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">Computational BIM &amp; APIs:</span>
                <span className="text-slate-600 dark:text-slate-400">Grasshopper, Dynamo, ETABS Open API (OAPI), SAP2000 API, Revit API, Tekla Open API, Rhino.Inside.</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">AI Systems &amp; Programming:</span>
                <span className="text-slate-600 dark:text-slate-400">Python 3.11+, C# .NET, LangGraph, Genetic Algorithms (NSGA-II), FastAPI, NumPy, SciPy.</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">Engineering Rigor:</span>
                <span className="text-slate-600 dark:text-slate-400">Zero-hallucination deterministic calculations, P-Delta stability checks, lateral drift validation.</span>
              </div>
            </div>
          </div>

          {/* Key Systems */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              Flagship Structural AI Systems
            </h2>
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                  <span>AI-Powered Structural Code Compliance Agent</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-normal">Deterministic Verification</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  Autonomous agent parsing framing intent and executing unit-checked closed-form member verification against IS 456, IS 800, and ACI 318 with transparent calculation reports.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                  <span>Generative Truss Multi-Objective Optimization</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-normal">-22.4% Steel Mass Reduction</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  Genetic algorithm (NSGA-II) and direct stiffness FEA pipeline discovering optimal truss topologies within deflection and stress bounds to minimize embodied carbon.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                  <span>Intelligent FEM Modeling Automation Engine</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-normal">12x Faster Framing Creation</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  API-driven automation generating ETABS and SAP2000 analytical models from architectural drawings with automated tributary slab loading.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
