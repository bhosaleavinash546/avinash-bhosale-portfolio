// ---------------------------------------------------------------------------
// All portfolio content lives here. Source: Avinash Bhosale LinkedIn profile.
// Impact is stated qualitatively — no figures beyond what the profile supports.
// ---------------------------------------------------------------------------
import headshot from './assets/headshot.jpg'
import series1 from './assets/series-1.jpg'
import series2 from './assets/series-2.jpg'
import series3 from './assets/series-3.jpg'
import series4 from './assets/series-4.jpg'
import certVma from './assets/certificate-vma.jpg'
import recDilipSarode from './assets/avatars/dilip-sarode.jpg'
import recAbhishekHazra from './assets/avatars/abhishek-hazra.jpg'
import recAkhilDesai from './assets/avatars/akhil-desai.jpg'
import recDilipGowaikar from './assets/avatars/dilip-gowaikar.jpg'

export const profile = {
  name: 'Avinash Bhosale',
  initials: 'AB',
  photo: headshot,
  role: 'Senior Cost Improvement Engineer — Propulsion',
  company: 'JLR',
  location: 'Warwick, England, United Kingdom',
  email: 'bhosale.avinash546@gmail.com',
  linkedin: 'https://www.linkedin.com/in/avinash-bhosale-671bbb80',
  eyebrow: 'Value & Cost Engineering · Automotive',
  // Headline value proposition (not a job title).
  headline: 'Cost isn’t cut. It’s engineered out.',
  lead:
    '13+ years taking cost out of automotive products across chassis and propulsion — from ICE to BEV — through value engineering, should-costing and competitive benchmarking. Now building AI-powered cost-intelligence tools that turn engineering data into decisions.',
  belief: 'Most cost problems are really value problems.',
  credentials: ['SAVE VMA', 'PVA', 'TRIZ®', 'PGDM'],
  about: [
    'I am a Value & Cost Engineering professional who specialises in product cost optimisation, should-costing and competitive benchmarking across the automotive industry. Over the past decade I have helped global engineering organisations improve product value and reduce cost through engineering-led decision making — not by cheapening products, but by maximising the function delivered per unit of cost.',
    'At JLR I lead propulsion and chassis commodity cost optimisation across ICE, MHEV, PHEV and BEV programmes — interpreting supplier quotations and should-cost models, running cross-functional VA/VE workshops, and presenting cost and benchmarking strategy to senior engineering leadership.',
    'More recently I have been applying AI to the discipline itself — designing and building platforms and multi-agent systems that convert engineering inputs (images, CAD, drawings, PCB layouts, quotations and cost data) into actionable cost and value insight at a fraction of the traditional effort.',
  ],
}

// Honest, qualitative headline facts — no invented figures.
export const stats = [
  { value: '13+', label: 'Years in value & cost engineering' },
  { value: 'ICE → BEV', label: 'Propulsion & chassis commodity coverage' },
  { value: 'Multi-£M', label: 'Cost-optimisation programmes contributed to' },
  { value: 'SAVE-certified', label: 'VMA · PVA · TRIZ methodology' },
]

export const companies = ['JLR', 'John Deere', 'Tata Technologies']

export const experience = [
  {
    role: 'Senior Cost Improvement Engineer — Propulsion',
    company: 'JLR',
    location: 'Gaydon, UK',
    period: 'Oct 2025 — Present',
    scope: 'Propulsion commodity cost optimisation — EDU (e-machine) & power transmission',
    points: [
      'Lead strategic cost reduction across ICE, MHEV, PHEV & BEV propulsion systems through competitive benchmarking, supplier collaboration and advanced value engineering.',
      'Interpret supplier quotations and should-cost models to expose cost drivers, inefficiencies and value opportunities.',
      'Recommend design-for-value solutions drawing on global competitor insight and manufacturing best practice.',
      'Lead cross-functional VA/VE workshops and present data-driven cost & benchmarking strategy to senior engineering leadership.',
    ],
  },
  {
    role: 'Senior Value Engineer',
    company: 'JLR',
    location: 'Gaydon, UK',
    period: 'Feb 2023 — Oct 2025',
    scope: 'Chassis commodities — air suspension, axles, brakes, steering, wheels & tyres',
    points: [
      'Led cost-reduction initiatives across chassis systems via competitive benchmarking, value engineering and supplier collaboration.',
      'Reviewed supplier quotes and should-cost models to identify high-cost drivers, gaps and optimisation opportunities.',
      'Recommended best-cost designs using global competitor analysis and manufacturing best practice.',
      'Led VA/VE idea-generation workshops and presented cost-optimisation & benchmarking reports to engineering senior management.',
    ],
  },
  {
    role: 'Senior Engineer',
    company: 'John Deere',
    location: 'Pune, India',
    period: 'Jul 2021 — Feb 2023',
    scope: 'Multi-million cost optimisation across the construction-equipment portfolio',
    points: [
      'Contributed to multi-million-£/$ cost-optimisation initiatives through benchmarking, functional analysis and design-to-cost.',
      'Ran cross-functional idea-generation workshops spanning Design, Manufacturing, Supply Chain, Sourcing, Quality & Marketing.',
      'Analysed BoM data with Pareto charts and cost heat-maps to pinpoint major cost contributors and outliers.',
      'Owned idea maturation, business-case preparation, ROI, fact-based should-cost negotiation and implemented cost-saving realisation.',
    ],
  },
  {
    role: 'Senior Design Engineer',
    company: 'Tata Technologies',
    location: 'Pune, India',
    period: 'Aug 2019 — Jun 2021',
    scope: 'VAVE, competitive teardown & benchmarking, product design',
    points: [
      'Delivered VAVE and cost-reduction programmes backed by strong analytical rigour.',
      'Performed competitive teardown & benchmarking and applied should-costing to product design.',
      'Designed products across manufacturing processes with end-to-end project management.',
    ],
  },
  {
    role: 'Design Engineer',
    company: 'Tata Technologies',
    location: 'Pune, India',
    period: 'Jul 2012 — Jun 2019',
    scope: 'Nine-year foundation in mechanical design engineering',
    points: [
      'Grew from Design Engineer into senior value & cost engineering roles over nine years at Tata Technologies.',
    ],
  },
]

// Selected work — real programmes reframed as Problem → Approach → Outcome.
export const caseStudies = [
  {
    tag: 'Propulsion · JLR',
    title: 'Propulsion commodity cost optimisation (ICE → BEV)',
    problem:
      'Propulsion commodities — EDU (e-machine) and power transmission — carry cost across four powertrain types (ICE, MHEV, PHEV, BEV), with most cost locked in at design.',
    approach: [
      'Competitive benchmarking against global propulsion systems',
      'Supplier quotation interpretation & should-cost modelling',
      'Design-for-value recommendations; cross-functional VA/VE workshops',
    ],
    outcome:
      'Cost drivers and value opportunities surfaced and translated into design-for-value recommendations and benchmarking strategy presented to senior engineering leadership.',
  },
  {
    tag: 'Chassis · JLR',
    title: 'Chassis commodities value-engineering programme',
    problem:
      'Chassis systems — air suspension, axles, brakes, steering, wheels & tyres — needed cost reduction without compromising function or performance.',
    approach: [
      'Should-cost models + supplier quote reviews to find high-cost drivers',
      'Competitive teardown & benchmarking against industry best practice',
      'VA/VE idea-generation workshops with cross-functional teams',
    ],
    outcome:
      'High-cost drivers and optimisation opportunities identified; best-cost design recommendations and benchmarking reports delivered to senior management for decision-making.',
  },
  {
    tag: 'Construction equipment · John Deere',
    title: 'Design-to-cost across the construction-equipment portfolio',
    problem:
      'A multi-product construction-equipment portfolio required structured, defensible cost reduction from concept through to realised savings.',
    approach: [
      'BoM analysis with Pareto charts & cost heat-maps to target contributors',
      'Weighted-evaluation & paired-comparison idea selection',
      'Business case, ROI, should-cost negotiation and implementation roadmap',
    ],
    outcome:
      'Contributed to multi-million-£/$ cost-optimisation initiatives — taking ideas from generation through to implemented cost-saving realisation.',
  },
]

// AI platforms — expanded with inputs, outputs and method.
export const aiTools = [
  {
    name: 'BrainSpark',
    kind: 'AI Value Engineering platform',
    summary:
      'Identifies cost-reduction and value-improvement opportunities across complete vehicle systems, with rapid directional should-cost assessments.',
    inputs: ['Vehicle systems', 'BoM & engineering data'],
    outputs: ['Cost-down & value ideas', 'Directional should-cost'],
    method: 'AI-assisted idea generation grounded in value-engineering logic.',
  },
  {
    name: 'CostLens',
    kind: 'AI Cost Intelligence platform',
    summary:
      'Analyses supplier quotations, highlights cost gaps, and surfaces optimisation opportunities to support sourcing and benchmarking decisions.',
    inputs: ['Supplier quotations', 'Cost & sourcing data'],
    outputs: ['Cost-gap analysis', 'Benchmarking & optimisation leads'],
    method: 'Quotation parsing with benchmarking agents.',
  },
  {
    name: 'CostVision',
    kind: 'AI Should-Costing platform',
    summary:
      'Generates should-cost estimates directly from images, CAD models, technical drawings and PCB layouts — combining live material market data, country-specific manufacturing rates and multiple AI agents to deliver estimates in under 60 seconds.',
    inputs: ['Images', 'CAD models', 'Drawings', 'PCB layouts'],
    outputs: ['Should-cost estimate', 'Cost breakdown', '< 60-second turnaround'],
    method: 'Computer vision + multi-agent reasoning + live market & regional rate data.',
    featured: true,
  },
]

// The value-engineering toolkit — signals methodology depth (not self-rated scores).
export const methodology = [
  { name: 'Function Analysis & FAST', note: 'Define what a part must do before what it costs' },
  { name: 'Should-Costing', note: 'Bottom-up cost models from first principles' },
  { name: 'Teardown & Competitive Benchmarking', note: 'Learn what best-in-class achieves, and how' },
  { name: 'DFM / DFA & Design-to-Cost', note: 'Remove cost where it is committed' },
  { name: 'Weighted Evaluation & Paired Comparison', note: 'Rank ideas objectively, not by opinion' },
  { name: 'Pareto & Cost Heat-Maps', note: 'Target the vital few cost contributors' },
  { name: 'TRIZ — Innovative Problem Solving', note: 'Break trade-offs with structured innovation' },
  { name: 'Business Case, ROI & Realisation', note: 'From idea to implemented, banked saving' },
]

export const capabilities = [
  'Propulsion (EDU / e-machine)',
  'Power transmission',
  'Chassis systems',
  'Construction equipment',
  'Electric vehicles',
  'Lean Management',
  'Supply Chain Analytics',
  'Project Management',
]

// Canonical cost-commitment curve — an industry principle, not a personal metric.
export const costCurve = [
  { stage: 'Concept', committed: 20, influence: 95 },
  { stage: 'Design', committed: 75, influence: 70 },
  { stage: 'Sourcing', committed: 85, influence: 35 },
  { stage: 'Production', committed: 95, influence: 12 },
  { stage: 'In-life', committed: 100, influence: 4 },
]

export const certifications = [
  'Professional Value Analyst (PVA)',
  'SAVE International — Value Methodology Associate (VMA)',
  'TRIZ Certified — Innovative Problem Solving',
]

export const awards = [
  'Best Employee of the Quarter — 2017',
  'Best Project Team of the Quarter — 2017',
  'Best Project Team of the Quarter — 2015',
  'Champion of the Month — 2014',
  'Certificate of Appreciation — 2015–16',
]

export const education = [
  {
    degree: 'Post Graduate Diploma in Management (PGDM) — Operations Management',
    period: '2024 — 2026',
  },
  {
    school: 'I.S.B. & M School of Technology, Pune',
    degree: "Bachelor's Degree, Mechanical Engineering",
    period: '2013 — 2015',
  },
  {
    school: 'Government Polytechnic College',
    degree: 'Diploma, Mechanical Engineering',
    period: '2009 — 2012',
  },
]

export const insights = [
  {
    src: series1,
    title: 'Where real money is left on the table',
    tag: 'Series 1 of 4',
    href: 'https://www.linkedin.com/posts/avinash-bhosale-671bbb80_automotive-valueengineering-npi-activity-7463219991736270849-AI9W',
  },
  {
    src: series2,
    title: 'Cost savings hiding in your product',
    tag: 'Series 2 of 4',
    href: 'https://www.linkedin.com/posts/avinash-bhosale-671bbb80_valueengineering-costengineering-automotive-activity-7464209607738060800-QOrE',
  },
  {
    src: series3,
    title: 'Value engineering is a mindset',
    tag: 'Series 3 of 4',
    href: 'https://www.linkedin.com/posts/avinash-bhosale-671bbb80_valueengineering-engineeringculture-automotive-activity-7466712378793971713-qxHb',
  },
  {
    src: series4,
    title: 'Margin gets engineered in',
    tag: 'Series 4 of 4',
    href: 'https://www.linkedin.com/posts/avinash-bhosale-671bbb80_valueengineering-automotive-costengineering-activity-7468657282910859264-we6_',
  },
  { src: certVma, title: 'SAVE International — Value Methodology Associate', tag: 'Certification' },
]

export const recommendations = [
  {
    name: 'Dilip Sarode',
    initials: 'DS',
    photo: recDilipSarode,
    role: 'Deputy General Manager, TAL Manufacturing Solutions',
    relation: 'Senior to Avinash · Tata Technologies',
    quote:
      'Avinash is a person with strong ownership and striving for results all the time. Creative, energetic, solutions-oriented, highly committed and motivated, with good interpersonal skills. He is an asset to any company.',
  },
  {
    name: 'Dilip Gowaikar',
    initials: 'DG',
    photo: recDilipGowaikar,
    role: 'Value Engineering Consultant',
    relation: "Avinash's mentor",
    quote:
      'Avinash is a very enthusiastic personality and grasped knowledge of Value Methodology very well. I am really very glad to recommend him for VAVE competency for any assignment.',
  },
  {
    name: 'Bharath Kumar S T',
    initials: 'BK',
    role: 'Senior Leader, Techno-Commercial, Manufacturing Industry',
    relation: 'Worked on the same team',
    quote:
      'I have worked with Avinash for Value Engineering projects on steel-industry equipment. He has good knowledge and experience in setting up and applying the Value Engineering process — a hard-working, focused individual and a quick learner, ready to take calculated risks.',
  },
  {
    name: 'Abhishek Hazra',
    initials: 'AH',
    photo: recAbhishekHazra,
    role: 'GM China & Associate VP SEA, Tata Technologies',
    relation: 'Worked on the same team',
    quote:
      'Avinash has been an avid explorer of technology. Closely associated in customer-success projects, he has been a true doer even in the most challenging environments across global customers. Keep the inquisitiveness high — it will take you places.',
  },
  {
    name: 'Akhil Desai',
    initials: 'AD',
    photo: recAkhilDesai,
    role: 'Sr. Technical Lead — Engineering ER&D, Tata Technologies',
    relation: 'Worked on the same team',
    quote:
      'Worked with Avinash on a couple of projects — he is good technically, good in presentation, and has good knowledge of managing the customer as well as the internal team.',
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'ai-tools', label: 'AI Tools' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
]
