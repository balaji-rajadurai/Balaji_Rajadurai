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
      id: "ai-tender-boq",
      title: "AI-Powered Tender BOQ Prediction & Estimation System",
      subtitle: "Intelligent BOQ Prediction for Repetitive Engineering Structures Using Deep Learning & Generative AI",
      category: "ai-agents",
      categoryLabel: "AI & Intelligent Automation",
      summary: "An AI-powered tender intelligence system that automates the prediction and estimation of Bills of Quantities (BOQ) for repetitive engineering structures. Combines historical project data, deep learning models, Large Language Models (LLMs), and Vision-Language Models (VLMs) to extract engineering information, identify repetitive patterns, and predict quantities during tender preparation.",
      impact: "Reduces dependence on manual quantity estimation by leveraging historical engineering data and AI-driven prediction. Enables faster and more consistent tender BOQ preparation through intelligent quantity prediction, document understanding, and automated information extraction.",
      metrics: [
        { label: "Core Capability", value: "AI-Based BOQ Prediction" },
        { label: "AI Technologies", value: "Deep Learning, LLM, VLM" },
        { label: "Data Foundation", value: "Historical Project BOQs" },
        { label: "Integration", value: "L&T Cognitive Services" }
      ],
      stack: ["Python", "Deep Learning", "LLMs", "Vision-Language Models", "Historical Project Database", "L&T Cognitive Services"],
      githubUrl: "",
      highlights: [
        "Developed deep learning-based prediction capabilities using historical engineering data to estimate quantities for repetitive structures and engineering components.",
        "Leveraged historical project BOQs to identify recurring patterns and establish data-driven quantity prediction models for tender estimation.",
        "Integrated Vision-Language Models (VLMs) for extracting structured engineering information from P&ID drawings and technical documents.",
        "Implemented an LLM-powered geotechnical report analysis module to interpret unstructured geotechnical information and support tender engineering workflows.",
        "Integrated AI capabilities with L&T Cognitive Services to establish a unified intelligent tender estimation workflow.",
        "Received copyright recognition for the AI-Based Tender BOQ Prediction of Repetitive Engineering Structures."
      ],
      architectureSteps: [
        {
          step: "01",
          title: "Historical Data Preparation",
          description: "Collects and processes historical project BOQs, engineering quantities, structural configurations, and associated project information to establish the prediction dataset."
        },
        {
          step: "02",
          title: "AI-Based Quantity Prediction",
          description: "Applies deep learning models to identify patterns across repetitive engineering structures and predict corresponding BOQ quantities using historical project knowledge."
        },
        {
          step: "03",
          title: "Intelligent Document Understanding",
          description: "Uses Vision-Language Models to extract engineering information from P&ID drawings and LLMs to interpret geotechnical reports and technical documentation."
        },
        {
          step: "04",
          title: "Integrated Tender Intelligence",
          description: "Combines predicted quantities and extracted engineering information through L&T Cognitive Services to support tender BOQ preparation and engineering evaluation."
        }
      ],
      problemStatement: "Tender-stage BOQ preparation for complex engineering projects involves extensive manual interpretation of drawings, technical specifications, geotechnical reports, and historical project data. Estimating quantities for repetitive structures is time-consuming and heavily dependent on engineering expertise and the availability of comparable historical projects.",
      solutionOverview: "Developed an AI-driven tender intelligence solution combining historical-data-based deep learning, document intelligence using VLMs, and contextual information extraction using LLMs. The system transforms historical engineering knowledge and unstructured tender documents into actionable quantity predictions and structured engineering information, supporting faster and more consistent tender estimation.",
      demoType: "tender-boq"
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
      id: "wdn-scheme-optimization",
      title: "Intelligent Scheme Optimization for Water Distribution Networks",
      subtitle: "Graph-Based Network Optimization for Hydraulic Performance, Pipeline Routing & Infrastructure Cost Reduction",
      category: "ai-agents",
      categoryLabel: "AI & Engineering Optimization",
      summary: "An intelligent water distribution network optimization system that automates the development and evaluation of pipeline network schemes using graph algorithms, hydraulic simulation, and computational optimization techniques. Integrates network topology, demand distribution, terrain elevations, hydraulic constraints, and infrastructure requirements to identify optimized pipeline sizing, routing, and network configurations.",
      impact: "Transforms conventional manual network planning into a computational optimization workflow. Enables systematic evaluation of alternative network configurations while balancing pipeline quantities, hydraulic performance, residual pressure requirements, and infrastructure costs.",
      metrics: [
        { label: "Optimization Scope", value: "Network Sizing & Routing" },
        { label: "Hydraulic Constraints", value: "Velocity, Head Loss & Pressure" },
        { label: "Network Scale", value: "2,000+ Nodes / Zone" },
        { label: "Optimization Methods", value: "Graph Algorithms & SciPy" }
      ],
      stack: ["Python", "NetworkX", "SciPy", "EPANET", "Graph Algorithms", "Computational Optimization", "GIS", "Qiskit"],
      githubUrl: "",
      highlights: [
        "Developed graph-based optimization algorithms for identifying efficient pipeline network configurations and routing alternatives based on network topology, demand nodes, and geographical constraints.",
        "Implemented hydraulic optimization for pipeline diameter selection and sizing, considering flow velocity, head-loss limitations, residual pressure, and available source head.",
        "Integrated EPANET hydraulic simulation to evaluate network performance and verify optimized configurations against engineering design constraints.",
        "Explored Steiner-tree-based routing approaches to minimize pipeline network length while maintaining connectivity and hydraulic feasibility.",
        "Implemented telescopic pipeline sizing strategies and commercially available DI K9 pipe diameter constraints to develop practical and economical network configurations.",
        "Incorporated GIS-based spatial information, elevation data, and service reservoir considerations into network planning and scheme optimization.",
        "Explored quantum optimization formulations using Qiskit for selected network and infrastructure optimization problems."
      ],
      architectureSteps: [
        {
          step: "01",
          title: "Network Data Acquisition & Modelling",
          description: "Processes source information, demand nodes, network connectivity, ground elevations, pipeline alignments, and hydraulic requirements to construct a graph-based representation of the water distribution network."
        },
        {
          step: "02",
          title: "Network Routing & Configuration",
          description: "Applies graph algorithms and Steiner-tree-based routing techniques to identify efficient pipeline connectivity and alternative network configurations while considering geographical and infrastructure constraints."
        },
        {
          step: "03",
          title: "Hydraulic & Diameter Optimization",
          description: "Optimizes pipeline diameters and network configurations using computational optimization methods, considering flow velocity, head loss, residual pressure, source head, and practical pipe availability."
        },
        {
          step: "04",
          title: "Hydraulic Verification & Scheme Evaluation",
          description: "Evaluates optimized network configurations through EPANET hydraulic simulations, verifies compliance with design constraints, and compares alternative schemes based on hydraulic performance and pipeline quantities."
        }
      ],
      problemStatement: "Conventional water distribution network planning involves extensive manual iterations to determine pipeline routes, diameters, and network configurations. Balancing hydraulic requirements, terrain conditions, residual pressure, pipeline quantities, and infrastructure costs across large distribution networks makes scheme development computationally intensive and dependent on engineering experience.",
      solutionOverview: "Developed a computationally driven water distribution network optimization framework combining graph theory, hydraulic simulation, and optimization algorithms. The system evaluates alternative pipeline routing and sizing configurations against hydraulic and engineering constraints to identify technically feasible and economically efficient network schemes.",
      demoType: "wdn-optimization"
    },
    {
      id: "ai-surge-protection",
      title: "AI-Powered Water Network Surge Protection System",
      subtitle: "Graph Neural Network-Based Transient Analysis & Intelligent Surge Protection Prediction",
      category: "ai-agents",
      categoryLabel: "AI & Predictive Intelligence",

      summary: "An AI-driven water network analysis framework that explores the application of Graph Neural Networks (GNNs) to predict hydraulic transient behaviour and recommend surge protection measures. Combines water distribution network topology, hydraulic attributes, transient simulation results, and machine learning models to identify potential surge conditions and predict suitable protective devices such as Air Cushion Valves (ACVs) and Zero Velocity Valves (ZVVs).",

      impact: "Explores the use of graph-based machine learning to accelerate surge protection assessment across complex water distribution networks. Aims to reduce dependence on repeated simulation-based evaluations by learning patterns from hydraulic transient simulation datasets while retaining established engineering criteria for final verification.",

      metrics: [
        { label: "AI Architecture", value: "Graph Neural Networks" },
        { label: "Ground Truth", value: "Bentley HAMMER" },
        { label: "Prediction Target", value: "ACV & ZVV Placement" },
        { label: "Verification", value: "Hydraulic Surge Criteria" }
      ],

      stack: [
        "Python",
        "PyTorch",
        "PyTorch Geometric",
        "Graph Neural Networks",
        "GraphSAGE",
        "GINE",
        "GAT",
        "Bentley HAMMER"
      ],

      githubUrl: "",

      highlights: [
        "Developed a graph-based representation of water distribution networks using node, edge, and network-level hydraulic attributes.",
        "Explored Graph Neural Network architectures including GraphSAGE, GINE, GAT, and graph-based message-passing models for learning network behaviour.",
        "Leveraged Bentley HAMMER transient simulation outputs as ground-truth data for training and evaluating predictive machine learning models.",
        "Formulated surge protection prediction around Air Cushion Valve (ACV) and Zero Velocity Valve (ZVV) recommendations.",
        "Incorporated engineering-based surge acceptance criteria, including maximum pressure and minimum transient head limits, into model evaluation and verification.",
        "Explored physics-informed and simulation-guided learning approaches to combine hydraulic engineering knowledge with graph-based predictive intelligence."
      ],

      architectureSteps: [
        {
          step: "01",
          title: "Water Network Graph Construction",
          description: "Converts network topology into graph representations containing node attributes, pipe connectivity, hydraulic properties, and network-level information."
        },
        {
          step: "02",
          title: "Transient Simulation & Dataset Generation",
          description: "Uses Bentley HAMMER to simulate hydraulic transient conditions and generate ground-truth surge pressure and transient head results for different network configurations."
        },
        {
          step: "03",
          title: "GNN-Based Predictive Modelling",
          description: "Trains graph-based machine learning architectures to learn relationships between network topology, hydraulic characteristics, transient behaviour, and surge protection requirements."
        },
        {
          step: "04",
          title: "Surge Protection Prediction & Verification",
          description: "Predicts potential ACV and ZVV protection requirements and evaluates predicted solutions against engineering acceptance criteria using hydraulic transient simulation."
        }
      ],

      problemStatement: "Hydraulic transient analysis of large water distribution networks requires extensive simulation, engineering interpretation, and repeated evaluation of surge protection alternatives. Identifying suitable protection devices and locations through conventional simulation-driven workflows can become computationally intensive, particularly when evaluating multiple network configurations.",

      solutionOverview: "Explored a simulation-guided AI framework combining hydraulic transient analysis and Graph Neural Networks to learn the relationship between network topology, hydraulic characteristics, and surge behaviour. By using Bentley HAMMER as the physics-based ground-truth simulation environment and GNNs for predictive modelling, the framework investigates intelligent surge protection recommendations while retaining hydraulic simulation as the final engineering verification mechanism.",

      demoType: "gnn-surge-protection"
    },
    {
      id: "structural-agentic-modeller",
      title: "Structural Agentic Modeller (SAM)",
      subtitle: "AI-Native Structural Engineering Platform for Natural Language-Driven Analytical Modelling",
      category: "ai-agents",
      categoryLabel: "AI & Agentic Systems",
      summary: "An AI-native structural engineering application that transforms natural language engineering requirements into analytical structural models. Combines Large Language Models (LLMs), agentic workflows, engineering tools, and deterministic validation mechanisms to interpret structural intent, construct analytical models, generate STAAD.Pro-compatible input files, and facilitate iterative model refinement.",
      impact: "Bridges the gap between engineering intent and analytical modelling by enabling engineers to describe structural configurations using natural language. Reduces dependency on manual model creation and specialized software expertise while introducing an intelligent, interactive approach to structural analysis workflows.",
      metrics: [
        { label: "Core Capability", value: "Agentic Structural Modelling" },
        { label: "Input Interface", value: "Natural Language Prompts" },
        { label: "Model Generation", value: "STAAD.Pro Compatible" },
        { label: "Validation", value: "Automated Syntax & Model Checks" }
      ],
      stack: ["Python", "LLMs", "OpenAI SDK", "Agentic Workflows", "STAAD.Pro", "OpenSees", "TCL", "Plotly", "Gradio"],
      githubUrl: "",
      highlights: [
        "Developed an AI-native structural modelling workflow that interprets natural language descriptions of structural geometry, dimensions, materials, supports, and loading conditions.",
        "Implemented structured analytical model representations covering nodes, members, plates, material properties, cross-sections, supports, and loading configurations.",
        "Integrated LLM-powered reasoning with engineering tools to translate interpreted design intent into structured analytical models and STAAD.Pro-compatible input files.",
        "Developed automated syntax validation and correction mechanisms to identify and resolve errors in generated analytical model files.",
        "Enabled analytical model interoperability through OpenSees/TCL export and interactive structural model visualization using Plotly.",
        "Explored parametric structural configurations and iterative model refinement, moving beyond code generation towards intelligent engineering tool interaction."
      ],
      architectureSteps: [
        {
          step: "01",
          title: "Natural Language Engineering Intent",
          description: "Accepts engineering requirements through natural language prompts, including structural dimensions, geometry, material properties, support conditions, and loading information."
        },
        {
          step: "02",
          title: "AI-Based Intent Interpretation",
          description: "Uses LLM-powered reasoning to interpret engineering instructions, identify structural components, resolve parameters, and translate requirements into a structured analytical model representation."
        },
        {
          step: "03",
          title: "Analytical Model Construction",
          description: "Constructs the structural model using a structured engineering representation of nodes, members, plates, sections, materials, supports, and loads. Generates STAAD.Pro-compatible analytical input files."
        },
        {
          step: "04",
          title: "Validation & Model Refinement",
          description: "Performs automated syntax validation, error detection, and correction of generated models. Supports iterative refinement and exports models for OpenSees-based analysis and interactive Plotly visualization."
        }
      ],
      problemStatement: "Creating analytical structural models requires specialized software knowledge, considerable manual effort, and repeated interactions with engineering modelling tools. Translating engineering requirements into nodes, members, properties, supports, and loading definitions creates a steep learning curve and introduces opportunities for modelling errors.",
      solutionOverview: "Developed Structural Agentic Modeller (SAM), an AI-native engineering platform that connects natural language understanding with structured analytical modelling and engineering tool interaction. By combining LLM-powered reasoning, structured model representations, automated validation, and analytical software interoperability, SAM explores a new paradigm in which engineers communicate design intent while AI assists in constructing, validating, and refining analytical structural models.",
      demoType: "structural-agentic-modeller"
    },
    

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

  // digitalTwinKnowledge: [
  //   {
  //     keywords: ["background", "education", "nit", "calicut", "mtech", "experience", "who are you", "summary"],
  //     question: "What is your background, education, and professional experience?",
  //     answer: "I am Balaji Rajadurai, a postgraduate Structural Engineer with an M.Tech from NIT Calicut (National Institute of Technology Calicut) and over 10 years of experience in structural engineering, computational design, engineering optimization, and digital engineering. My work focuses on bridging conventional structural engineering with intelligent computational systems—developing engineering automation solutions, optimization frameworks, and AI-powered applications that understand engineering intent, construct structural models, perform analysis, validate solutions, and improve engineering workflows."
  //   },
  //   {
  //     keywords: ["ai", "structural engineering", "combine", "agent", "intent", "how do you use ai"],
  //     question: "How do you combine structural engineering with AI and computational systems?",
  //     answer: "I approach AI not as a black box, but as an intelligent orchestration layer that sits on top of deterministic engineering mechanics. For example: LLMs and AI agents (built with LangGraph and Pydantic) excel at parsing messy architectural intent, extracting structural member loads, and mapping applicable building code clauses (IS 456, IS 800, Eurocode, ACI). However, all safety checks, moment distributions, and stress ratios are computed using exact, closed-form formulas and finite element matrix solvers. This guarantees zero hallucination while multiplying engineering productivity by 10x."
  //   },
  //   {
  //     keywords: ["optimization", "genetic", "algorithm", "carbon", "steel", "weight", "truss"],
  //     question: "What is your approach to structural optimization and material reduction?",
  //     answer: "In structural design, standard practices often leave significant excess material because manual trial-and-error under deadline pressure forces conservative assumptions. I develop multi-objective optimization pipelines using Genetic Algorithms (such as NSGA-II) and gradient-based solvers. By parameterizing structural geometry in Grasshopper or Python, the algorithm evaluates thousands of candidate topologies—shifting nodal coordinates and sizing member profiles to minimize steel weight and embodied carbon while strictly satisfying deflection and allowable stress limits. On average, this delivers 18% to 26% material savings."
  //   },
  //   {
  //     keywords: ["etabs", "sap2000", "api", "automation", "revit", "tekla", "bim"],
  //     question: "How do you automate ETABS, SAP2000, and BIM modeling?",
  //     answer: "I utilize the Open API (OAPI) of ETABS and SAP2000 alongside the Revit and Tekla APIs. By writing custom C# .NET and Python scripts, I parse architectural grid layouts, column placements, and floor polygons, snapping them to proper analytical tolerances. The system then automatically defines material grades, frame sections, rigid diaphragms, and seismic mass definitions, and distributes tributary slab loads to beams. This collapses initial structural modeling time from 3–4 days down to 15 minutes."
  //   },
  //   {
  //     keywords: ["codes", "standards", "is 456", "is 800", "eurocode", "aci", "compliance"],
  //     question: "Which structural design codes and standards do you work with?",
  //     answer: "Over my 10+ years of professional practice, I have designed structures compliant with Indian Standards (IS 456 for concrete, IS 800 for steel, IS 1893 for earthquake resistant design, IS 875 for wind and imposed loads), European standards (Eurocode 2 for concrete, Eurocode 3 for steel, Eurocode 8 for seismic), and American codes (ACI 318, AISC 360, and ASCE 7). My automated systems verify member capacity, slenderness, crack widths, and detailing rules against these exact codal formulations."
  //   },
  //   {
  //     keywords: ["contact", "hire", "consulting", "email", "reach", "collaborate", "services"],
  //     question: "How can clients or teams collaborate with or hire you?",
  //     answer: "You can reach me directly via email at balajir333@gmail.com. I am available for high-impact structural engineering projects, computational design consultancy, custom engineering automation tools (ETABS/Revit/Tekla API plugins), and AI-driven structural software development. I work with consulting engineering firms, architectural practices, and engineering software startups worldwide."
  //   },
  //   {
  //     keywords: ["cv", "resume", "credentials", "projects"],
  //     question: "Can I view your resume and project credentials?",
  //     answer: "Yes! You can inspect my full Curriculum Vitae and download a verified copy by clicking the 'Curriculum Vitae' button in the navigation bar. You can also explore my projects across this portfolio: the AI Structural Code Compliance Agent, Generative Truss Optimization Engine, Intelligent FEM Modeling Automation, and Bidirectional BIM-to-FEM Synchronizer."
  //   }
  // ],
  
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
      image: "/awards/copyright-01.png",
      description:
        "Recognition associated with AI-based tender BOQ prediction for repetitive engineering structures."
    }
  ],

};
