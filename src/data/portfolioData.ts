export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'automation' | 'optimization' | 'ai-agents' | 'bim-fem';
  categoryLabel: string;
  summary: string;
  impact: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  githubUrl: string;
  highlights: string[];
  architectureSteps: { step: string; title: string; description: string }[];
  problemStatement: string;
  solutionOverview: string;
  demoType: 'agent-flow' | 'structural-optimization' | 'fem-generator' | 'code-compliance';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; context: string; level: number }[];
}

export interface JourneyMilestone {
  period: string;
  role: string;
  domain: string;
  summary: string;
  takeaway: string;
  transferableSkill: string;
}

export const BALAJI_DATA = {
  profile: {
    name: "Balaji Rajadurai",
    credentials: "M.Tech (Structural Engineering) · NIT Calicut",
    experience: "10+ Years Professional Experience",
    positioning: "Structural Engineer | Design Automations Developer | AI Engineer",
    email: "rbala1@live.com",
    github: "https://github.com/balaji-rajadurai",
    linkedin: "https://linkedin.com/in/balaji-rajadurai",
    location: "Chennai, India",
    tagline: "Bridging conventional structural engineering with intelligent computational systems, automation frameworks, and AI workflows.",
    professionalSummary: "I am a postgraduate Structural Engineer with an M.Tech from NIT Calicut and over 10 years of experience in structural engineering, computational design, engineering optimization and digital engineering.\n\nMy work focuses on bridging conventional structural engineering with intelligent computational systems. I develop engineering automation solutions, optimization frameworks and AI-powered applications that aim to understand engineering intent, construct structural models, perform analysis, validate solutions and improve engineering workflows.",
    stats: [
      { label: "Engineering Heritage", value: "10+ Years", context: "Structural design & computational engineering" },
      { label: "Academic Pedigree", value: "M.Tech NIT Calicut", context: "Advanced structural dynamics & FEA" },
      { label: "Material Reduction", value: "18% – 26%", context: "Genetic & Pareto structural optimization" },
      { label: "Automation Velocity", value: "12x Faster", context: "Automated FEM modeling & code validation" },
    ]
  },

  projects: [
    {
      id: "structural-code-agent",
      title: "AI-Powered Structural Code Compliance & Verification Agent",
      subtitle: "Multi-Agent System for Autonomous Code Checks & Calculation Sheet Generation",
      category: "ai-agents",
      categoryLabel: "AI & Engineering Agents",
      summary: "An autonomous multi-agent engineering assistant that interprets structural member forces, queries building code clauses (IS 456, IS 800, Eurocode, ACI 318), verifies shear/moment/slenderness limits, and generates transparent, auditable calculation reports with mathematical justifications.",
      impact: "Eliminates manual formula lookup errors across 500+ design load combinations while producing human-auditable calculation proofs verified against finite element solver outputs.",
      metrics: [
        { label: "Clause Verification", value: "100% Deterministic" },
        { label: "Supported Codes", value: "IS 456, IS 800, ACI 318" },
        { label: "Check Velocity", value: "< 2.5s / 100 members" },
        { label: "Report Auditing", value: "Step-by-step math" }
      ],
      stack: ["Python", "LangGraph", "FastAPI", "Pydantic v2", "LaTeX/PDF Engine", "Structural Code DB"],
      githubUrl: "https://github.com/balajir333/structural-code-agent",
      highlights: [
        "Rigorous deterministic verification engine where LLM extracts design intent but calculations are executed via exact closed-form engineering formulas.",
        "Built-in compliance modules for flexure, shear, torsion, serviceability deflection, and crack-width verification under working and ultimate limit states.",
        "Generates publication-quality step-by-step engineering design sheets with substituted values, reference clauses, and safety pass/fail margins.",
        "LangGraph critic agent validates member forces against equilibrium invariants prior to certifying safety factors."
      ],
      architectureSteps: [
        { step: "01", title: "Member Force Ingestion", description: "Extracts axial forces, bending moments, and shear from ETABS/STAAD analysis outputs." },
        { step: "02", title: "Clause Mapping & Parameterization", description: "Determines applicable building code clauses based on material grades, geometry, and exposure class." },
        { step: "03", title: "Deterministic Math Verification", description: "Calculates required steel areas, interaction ratios, and deflection limits without hallucination." },
        { step: "04", title: "Auditable Calc Sheet Generation", description: "Produces structured PDF calculation dossiers with clause citations for peer review." }
      ],
      problemStatement: "Manual checking of hundreds of structural columns, beams, and connections against complex national code clauses is labor-intensive, error-prone, and causes bottlenecks during design revision cycles.",
      solutionOverview: "Engineered an AI agent harness that pairs semantic understanding of building design codes with exact, unit-checked mathematical solvers to automate structural compliance verification with zero risk of numerical hallucination.",
      demoType: "code-compliance"
    },
    {
      id: "generative-truss-optimization",
      title: "Generative Truss & Frame Multi-Objective Optimization",
      subtitle: "Genetic Algorithms & Pareto Frontiers for Minimal Embodied Carbon",
      category: "optimization",
      categoryLabel: "Engineering Optimization",
      summary: "A computational optimization system that generates and iterates complex 3D steel trusses, space frames, and grid shells, searching non-linear design spaces to minimize material volume and embodied carbon while strictly satisfying stress and deflection criteria.",
      impact: "Achieved an average of 22.4% steel weight reduction in long-span roof systems compared to conventional initial engineering designs.",
      metrics: [
        { label: "Material Reduction", value: "22.4% Avg" },
        { label: "Convergence Time", value: "< 45s (NSGA-II)" },
        { label: "Constraint Adherence", value: "100% Stress & Deflection" },
        { label: "Geometry Form", value: "3D Parametric Truss" }
      ],
      stack: ["Python", "Grasshopper", "Rhino Common", "SciPy", "NSGA-II", "Kangaroo"],
      githubUrl: "https://github.com/balajir333/generative-truss-optimization",
      highlights: [
        "Multi-objective optimization balancing minimum steel mass against maximum structural stiffness and fabrication simplicity.",
        "Real-time stiffness matrix calculation via direct stiffness method with immediate visualization of member axial tension and compression.",
        "Discrete cross-section sizing mapping optimized areas to standard commercial rolled steel sections (ISMB, ISMC, Hollow Tubular).",
        "Interactive 3D geometry generation with topology mutation and nodal coordinate shifting."
      ],
      architectureSteps: [
        { step: "01", title: "Parametric Domain Definition", description: "Configures span, depth, boundary conditions, and allowable nodal coordinate variations." },
        { step: "02", title: "Direct Stiffness FEA Analysis", description: "Calculates internal member stresses, reactions, and nodal displacements under dead, live, and wind loads." },
        { step: "03", title: "Genetic Algorithm Search (NSGA-II)", description: "Mutates nodal topologies and member profiles across generations to find Pareto-optimal configurations." },
        { step: "04", title: "Commercial Section Snapping", description: "Rounds optimized member dimensions to commercially available structural catalog profiles." }
      ],
      problemStatement: "Conventional structural engineering workflows rely on initial heuristics and manual iterative resizing, leaving substantial excess steel and embodied carbon in long-span and high-rise structural systems.",
      solutionOverview: "Formulated a rigorous multi-objective genetic optimization engine that autonomously discovers optimal load-path topologies within strict deflection and stress constraints.",
      demoType: "structural-optimization"
    },
    {
      id: "fem-model-generator",
      title: "Intelligent FEM Modeling & Analysis Automation Engine",
      subtitle: "Translating Architectural Intent into Structural Analysis Models",
      category: "automation",
      categoryLabel: "Design Automation",
      summary: "A robust automation engine that parses 2D architectural drawings, IFC models, and spatial grids to automatically construct analytical stick models, assign member properties, apply tributary slab loads, and execute ETABS/SAP2000 analysis runs via API.",
      impact: "Reduced preliminary structural framing model creation time from 3–4 days to under 15 minutes, with automated boundary condition verification.",
      metrics: [
        { label: "Modeling Speedup", value: "12x Faster" },
        { label: "API Integrations", value: "ETABS, SAP2000, Tekla" },
        { label: "Load Distribution", value: "Automated Tributary" },
        { label: "Geometry Cleanup", value: "Tolerance Snapping" }
      ],
      stack: ["C#", "Python", "ETABS OAPI", "SAP2000 API", "OpenCV", "IFC OpenShell"],
      githubUrl: "https://github.com/balajir333/fem-model-generator",
      highlights: [
        "Intelligent column and grid line extraction from CAD layers with geometric snapping and tolerance clustering.",
        "Automated yield-line and two-way tributary area load distribution from floor slabs directly onto supporting beams.",
        "Full programmatic creation of stories, diaphragm constraints, seismic mass definitions, and response spectra cases.",
        "Detects geometric anomalies (misaligned shear walls, unmeshed intersections, disconnected joints) prior to analysis submission."
      ],
      architectureSteps: [
        { step: "01", title: "CAD / IFC Spatial Ingestion", description: "Parses layer semantics, geometric polygons, and structural centerlines with tolerance healing." },
        { step: "02", title: "Analytical Graph Construction", description: "Translates architectural footprints into a topological node-edge structural framing network." },
        { step: "03", title: "API Orchestration (ETABS/SAP)", description: "Invokes Open API commands to define materials, frame sections, rigid diaphragms, and boundary pins." },
        { step: "04", title: "Automated FEA Run & Health Audit", description: "Solves modal frequencies, base shears, and story drifts, flagging code non-compliance immediately." }
      ],
      problemStatement: "Transferring architectural layouts into structural finite element software requires days of manual drafting, section property assignment, and tedious joint meshing where human error frequently creeps in.",
      solutionOverview: "Developed an API-driven automation framework that understands structural framing semantics, generating clean analytical models and running preliminary checks without manual redrawing.",
      demoType: "fem-generator"
    },
    {
      id: "bim-fem-synchronizer",
      title: "Bidirectional BIM-to-FEM Parametric Synchronizer",
      subtitle: "Seamless Data Flow between Grasshopper, Revit, and Tekla Structures",
      category: "bim-fem",
      categoryLabel: "BIM & Digital Engineering",
      summary: "A bidirectional computational conduit linking parametric computational geometry (Rhino/Grasshopper) with detailed structural BIM authoring platforms (Autodesk Revit, Tekla Structures) and analysis solvers, synchronizing changes in real time.",
      impact: "Maintains single-source-of-truth structural geometry across architectural revisions, preventing costly discrepancy errors between design models and fabrication drawings.",
      metrics: [
        { label: "Discrepancy Rate", value: "Zero Geometry Drift" },
        { label: "Platforms Bridged", value: "Grasshopper · Revit · Tekla" },
        { label: "Parameter Sync", value: "Bi-directional" },
        { label: "Member Detailing", value: "LOD 350+ Support" }
      ],
      stack: ["C# .NET", "Revit API", "Tekla Open API", "Rhino.Inside", "SQLite"],
      githubUrl: "https://github.com/balajir333/bim-fem-synchronizer",
      highlights: [
        "Synchronizes 3D frame centerlines, member sizes, materials, and eccentricities across multidisciplinary platforms.",
        "Translates complex curved and double-curved geometric surfaces into panelized structural frames ready for fabrication.",
        "Automatic generation of steel connection nodal data and anchor bolt placement rules.",
        "Change-delta visualizer showing structural changes between architectural milestone revisions."
      ],
      architectureSteps: [
        { step: "01", title: "Parametric Model Generation", description: "Generates adaptive structural geometry in Rhino/Grasshopper with mathematical controls." },
        { step: "02", title: "Rhino.Inside Revit Translation", description: "Pushes geometric curves into native Revit analytical and physical structural framing families." },
        { step: "03", title: "Tekla Steel Detailing Pipeline", description: "Directly instantiates structural steel profiles and connection workpoints inside Tekla Structures." },
        { step: "04", title: "Audit & Version Difference Check", description: "Logs structural member volume and weight changes across project revisions." }
      ],
      problemStatement: "Structural engineers and fabricators lose hundreds of hours reconciling differences between architectural Revit models, analytical ETABS files, and Tekla fabrication drawings.",
      solutionOverview: "Engineered a unified parametric bridge using C# and Rhino.Inside that synchronizes structural intent across design, analysis, and fabrication environments simultaneously.",
      demoType: "agent-flow"
    }
  ] as Project[],

  journey: [
    {
      period: "2016 – 2019",
      role: "Structural Design Engineer",
      domain: "Structural Engineering & Design (Industrial, Infrastructure & Onshore Structures)",
      summary: "Developed a strong foundation in structural analysis and design across industrial and infrastructure projects, including reinforced concrete and steel structures, equipment foundations, pipe racks etc.",
      takeaway: "Developed analytical thinking, systematic problem-solving, and an understanding of complex engineering requirements, while recognizing opportunities to improve repetitive calculations and workflows through automation.",
      transferableSkill: "Structural analysis and design, IS codes, ASCE 7, ACI 318, AISC 360, STAAD.Pro, and engineering problem-solving."
    },
    {
      period: "2019 – 2022",
      role: "Design Automation Engineer",
      domain: "Python Development, Computational Engineering & Optimization",
      summary: "Transitioned towards developing Python-based solutions for structural design calculations, quantity estimation, drawing automation, and engineering workflows. Explored optimization algorithms, API integrations, and computational methods to improve efficiency and reduce repetitive engineering tasks.",
      takeaway: "Shifted from solving individual engineering problems to developing reusable computational solutions, building a foundation in programming, algorithmic thinking, and scalable automation.",
      transferableSkill: "Python, SciPy, numerical methods, optimization algorithms, API integration, STAAD.Pro automation, and computational modelling."
    },
    {
      period: "2022 – Present",
      role: "AI Engineer | Generative AI & Intelligent Automation",
      domain: "Generative AI, LLM Applications, Agentic AI & Autonomous Systems",
      summary: "Expanded from conventional automation into AI-powered applications, integrating LLMs, natural language interfaces, document intelligence, and intelligent decision-support systems. Developing AI-native solutions such as Structural Agentic Modeller (SAM), which translates natural language instructions into analytical structural models and explores tool interaction, automated validation, and multi-step AI workflows.",
      takeaway: "Evolved from rule-based automation towards intelligent systems that interpret user intent, reason through tasks, interact with tools, and validate outcomes. Focused on building practical AI applications that solve real-world problems reliably.",
      transferableSkill: "Python, Generative AI, LLM APIs, OpenAI SDK, RAG, tool calling, MCP, agentic workflows, and AI application development."
    }
  ] as JourneyMilestone[],

  skillCategories: [
    {
      title: "Structural Engineering & Finite Element Analysis (FEA)",
      description: "Classical analysis, dynamics, non-linear modeling, and international design codes.",
      skills: [
        { name: "ETABS & SAP2000", context: "High-rise analysis, response spectrum, P-Delta, modal dynamics", level: 98 },
        { name: "STAAD.Pro & SAFE", context: "Industrial frames, mat foundations, two-way slab punching shear", level: 94 },
        { name: "Structural Dynamics & Seismic Design", context: "Ductile detailing, pushover analysis, IS 1893, ASCE 7", level: 96 },
        { name: "Reinforced Concrete & Steel Design", context: "IS 456, IS 800, Eurocode 2/3, ACI 318, AISC 360", level: 97 },
        { name: "Foundation Engineering", context: "Pile caps, raft foundations, soil-structure interaction", level: 90 }
      ]
    },
    {
      title: "Computational Design & BIM Automation",
      description: "Parametric modeling, visual programming, and structural API development.",
      skills: [
        { name: "Grasshopper & Rhino Common", context: "Parametric geometry, algorithmic trusses, panelization", level: 95 },
        { name: "ETABS & SAP2000 Open API (OAPI)", context: "Programmatic model building, load assignment, result extraction", level: 96 },
        { name: "Revit API & Rhino.Inside", context: "BIM geometry synchronization, structural framing families", level: 92 },
        { name: "Tekla Open API", context: "Automated steel detailing, connection geometry instantiation", level: 88 },
        { name: "Dynamo for Revit", context: "Computational BIM automation, parameter mapping", level: 90 }
      ]
    },
    {
      title: "AI Systems & Programming for Engineers",
      description: "Intelligent engineering agents, optimization algorithms, and backend systems.",
      skills: [
        { name: "Python 3.11+ (Engineering Stack)", context: "NumPy, SciPy, Pandas, SymPy, Matplotlib, shapely", level: 96 },
        { name: "Agentic AI & LangGraph", context: "Engineering intent parsing, tool-calling agents, state machines", level: 92 },
        { name: "Genetic Algorithms & Optimization", context: "NSGA-II, Pareto fronts, topology & cross-section optimization", level: 94 },
        { name: "C# .NET Development", context: "Plugins for Revit, Tekla, and desktop engineering tools", level: 89 },
        { name: "FastAPI & Engineering REST APIs", context: "Cloud FEA solvers, calculation web services, Pydantic schemas", level: 91 }
      ]
    },
    {
      title: "Credentials & Academic Foundation",
      description: "Postgraduate education and specialized engineering qualifications.",
      skills: [
        { name: "M.Tech in Structural Engineering", context: "National Institute of Technology (NIT) Calicut", level: 100 },
        { name: "10+ Years Professional Practice", context: "Comprehensive structural engineering design & automation", level: 100 },
        { name: "Design Code Mastery", context: "IS 456, IS 800, IS 1893, Eurocodes, ACI 318, AISC", level: 100 },
        { name: "Computational AI Architecture", context: "Applied LLMs, agents, and optimization for structural systems", level: 95 }
      ]
    }
  ] as SkillCategory[],

  digitalTwinKnowledge: [
    {
      keywords: ["background", "education", "nit", "calicut", "mtech", "experience", "who are you", "summary"],
      question: "What is your background, education, and professional experience?",
      answer: "I am Balaji Rajadurai, a postgraduate Structural Engineer with an M.Tech from NIT Calicut (National Institute of Technology Calicut) and over 10 years of experience in structural engineering, computational design, engineering optimization, and digital engineering. My work focuses on bridging conventional structural engineering with intelligent computational systems—developing engineering automation solutions, optimization frameworks, and AI-powered applications that understand engineering intent, construct structural models, perform analysis, validate solutions, and improve engineering workflows."
    },
    {
      keywords: ["ai", "structural engineering", "combine", "agent", "intent", "how do you use ai"],
      question: "How do you combine structural engineering with AI and computational systems?",
      answer: "I approach AI not as a black box, but as an intelligent orchestration layer that sits on top of deterministic engineering mechanics. For example: LLMs and AI agents (built with LangGraph and Pydantic) excel at parsing messy architectural intent, extracting structural member loads, and mapping applicable building code clauses (IS 456, IS 800, Eurocode, ACI). However, all safety checks, moment distributions, and stress ratios are computed using exact, closed-form formulas and finite element matrix solvers. This guarantees zero hallucination while multiplying engineering productivity by 10x."
    },
    {
      keywords: ["optimization", "genetic", "algorithm", "carbon", "steel", "weight", "truss"],
      question: "What is your approach to structural optimization and material reduction?",
      answer: "In structural design, standard practices often leave significant excess material because manual trial-and-error under deadline pressure forces conservative assumptions. I develop multi-objective optimization pipelines using Genetic Algorithms (such as NSGA-II) and gradient-based solvers. By parameterizing structural geometry in Grasshopper or Python, the algorithm evaluates thousands of candidate topologies—shifting nodal coordinates and sizing member profiles to minimize steel weight and embodied carbon while strictly satisfying deflection and allowable stress limits. On average, this delivers 18% to 26% material savings."
    },
    {
      keywords: ["etabs", "sap2000", "api", "automation", "revit", "tekla", "bim"],
      question: "How do you automate ETABS, SAP2000, and BIM modeling?",
      answer: "I utilize the Open API (OAPI) of ETABS and SAP2000 alongside the Revit and Tekla APIs. By writing custom C# .NET and Python scripts, I parse architectural grid layouts, column placements, and floor polygons, snapping them to proper analytical tolerances. The system then automatically defines material grades, frame sections, rigid diaphragms, and seismic mass definitions, and distributes tributary slab loads to beams. This collapses initial structural modeling time from 3–4 days down to 15 minutes."
    },
    {
      keywords: ["codes", "standards", "is 456", "is 800", "eurocode", "aci", "compliance"],
      question: "Which structural design codes and standards do you work with?",
      answer: "Over my 10+ years of professional practice, I have designed structures compliant with Indian Standards (IS 456 for concrete, IS 800 for steel, IS 1893 for earthquake resistant design, IS 875 for wind and imposed loads), European standards (Eurocode 2 for concrete, Eurocode 3 for steel, Eurocode 8 for seismic), and American codes (ACI 318, AISC 360, and ASCE 7). My automated systems verify member capacity, slenderness, crack widths, and detailing rules against these exact codal formulations."
    },
    {
      keywords: ["contact", "hire", "consulting", "email", "reach", "collaborate", "services"],
      question: "How can clients or teams collaborate with or hire you?",
      answer: "You can reach me directly via email at balajir333@gmail.com. I am available for high-impact structural engineering projects, computational design consultancy, custom engineering automation tools (ETABS/Revit/Tekla API plugins), and AI-driven structural software development. I work with consulting engineering firms, architectural practices, and engineering software startups worldwide."
    },
    {
      keywords: ["cv", "resume", "credentials", "projects"],
      question: "Can I view your resume and project credentials?",
      answer: "Yes! You can inspect my full Curriculum Vitae and download a verified copy by clicking the 'Curriculum Vitae' button in the navigation bar. You can also explore my projects across this portfolio: the AI Structural Code Compliance Agent, Generative Truss Optimization Engine, Intelligent FEM Modeling Automation, and Bidirectional BIM-to-FEM Synchronizer."
    }
  ],
  
  education: [
    {
      degree: "Generative AI & Agentic AI",
      institution: "Indian Institute of Technology, Kharagpur",
      specialization: "Executive postgraduate programme",
      period: "2026"
    },
    {
      degree: "Structural Engineering",
      institution: "National Institute of Technology, Calicut",
      specialization: "Postgraduate specialization",
      period: "2014-2016"
    },
    {
      degree: "Civil Engineering",
      institution: "Velammal Engineering College, Chennai",
      specialization: "Undergraduate programme",
      period: "2010-2014"
    }
  ],

  experience: [
    {
      company: "Larsen & Toubro (L&T) Construction",
      role: "Design Automation Engineer | Structural Engineering & AI",
      period: "August 2019 – Present",
      description:
        "Leading engineering design automation, computational optimization and AI-driven digital engineering initiatives for Water and Wastewater infrastructure. Developing intelligent engineering workflows, structural design tools and autonomous engineering applications.",
      specialties: [
        "Structural Engineering",
        "Python Automation",
        "SAM – Structural Agentic Modeller",
        "Design Optimization",
        "Generative AI",
        "Water Infrastructure",
        "Engineering Digitalization"
      ]
    },
    {
      company: "Tata Consulting Engineers",
      role: "Structural Engineering – Industrial & Onshore Structures",
      period: "Previous Experience",
      description:
        "Structural analysis and design of industrial and onshore structures for petrochemical facilities, including technology structures, equipment foundations, pipe racks and pipe supports.",
      specialties: [
        "Industrial Structures",
        "Equipment Foundations",
        "Pipe Racks",
        "ASCE 7",
        "ACI 318",
        "AISC 360"
      ]
    }
  ],

  certifications: [
    // Add verified certifications here.
    // Example:
    {
      name: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      year: "2025",
      url: "https://coursera.org/share/3d38e972c955bf00da7ea71f234b2dd1"
    },
    {
      name: "Improving Deep Neural Networks",
      issuer: "DeepLearning.AI",
      year: "2025",
      url: "https://coursera.org/share/6e48b258eedd816352905c3f9b5a76bc"
    },
    {
      name: "Structuring Machine Learning Projects",
      issuer: "DeepLearning.AI",
      year: "2025",
      url: "https://coursera.org/share/14b64b693470b38696bda7247b7330bf"
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud",
      year: "2025",
      url: "https://coursera.org/share/d865eae69140e44c046922b05d2b8724"
    },
  ],

  achievements: [
    {
      category: "Intellectual Property",
      title: "AI-Based Tender BOQ Prediction of Repetitive Engineering Structures",
      description:
        "Copyright received for an AI-based approach to predicting tender quantities using historical engineering data."
    },
    {
      category: "Engineering Innovation",
      title: "SAM – Structural Agentic Modeller",
      description:
        "Development of an AI-native structural engineering platform that translates natural-language engineering intent into analytical models, interacts with structural analysis tools and supports deterministic engineering workflows."
    },
    {
      category: "Computational Engineering",
      title: "Engineering Design Optimization",
      description:
        "Development of computational optimization methodologies for structural components, retaining walls, thrust blocks and water distribution networks."
    },
    {
      category: "Digital Engineering",
      title: "WETDESK / IDES",
      description:
        "Contributions to integrated digital engineering solutions, web-based design automation applications and intelligent engineering workflows."
    }
  ],
  
  accomplishments: [
    {
      title: "Process Innovation Award",
      category: "Innovation Award",
      organization: "L&T Construction",
      year: "2026",
      image: "/awards/award-01.jpg",
      description:
        "Recognized with two PI Awards for pioneering contributions to AI-driven engineering innovation and the development of Structural Agentic Modeller (SAM) and RC Design Suite."
    },
    {
      title: "Process Innovation Award",
      category: "Innovation Award",
      organization: "L&T Construction",
      year: "2025",
      image: "/awards/award-02.jpg",
      description:
        "Recognition for developing innovative engineering solutions and improving conventional design workflows."
    },
    {
      title: "Process Innovation Award",
      category: "Innovation Award",
      organization: "L&T Construction",
      year: "2025",
      image: "/awards/award-02.jpg",
      description:
        "Recognition for developing innovative engineering solutions and improving conventional design workflows."
    },
    {
      title: "Best Innovative Digital Solution",
      category: "Digital Excellence Award",
      organization: "L&T Construction",
      year: "2026",
      image: "/awards/award-01.jpg",
      description:
        "Recognition for contributions to engineering innovation, digital transformation and design automation."
    },
    {
      title: "Technical Innovation Recognition",
      category: "Intellectual Property",
      organization: "L&T Construction",
      year: "2025",
      image: "/awards/award-03.jpg",
      description:
        "Recognition associated with AI-based tender BOQ prediction for repetitive engineering structures."
    }
  ],

};
