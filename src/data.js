// ---------------------------------------------------------------------------
// All portfolio content lives here. Source: Avinash Bhosale LinkedIn profile.
// Written in a plain, first-person voice. No invented figures.
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
  role: 'Senior Cost Improvement Engineer, Propulsion',
  company: 'JLR',
  location: 'Warwick, England, United Kingdom',
  email: 'bhosale.avinash546@gmail.com',
  linkedin: 'https://www.linkedin.com/in/avinash-bhosale-671bbb80',
  eyebrow: 'Value & Cost Engineering',
  headline: 'I take cost out of Products, not value.',
  lead:
    'For over 13 years I’ve helped bring down the cost of cars, across chassis and propulsion, from petrol engines right through to fully electric. I do it with value engineering, should-costing and benchmarking against the competition. Lately I’ve also been building my own AI tools to make this kind of work a lot faster.',
  belief: 'Most cost problems are really value problems.',
  credentials: ['SAVE VMA', 'PVA', 'TRIZ®', 'PGDM'],
  about: [
    'I’m a value and cost engineer in the automotive industry. My job is to bring down the cost of a product without hurting what it actually does. I’ve spent the last decade doing this for big engineering companies, using should-costing, benchmarking and plain engineering judgement.',
    'At JLR I look after cost on propulsion and chassis parts, across petrol, hybrid and electric programmes. Day to day that means reading supplier quotes, building should-cost models, running VA/VE workshops with other teams, and giving senior engineers a clear cost and benchmarking picture so they can make the call.',
    'More recently I’ve started building my own AI tools for this work. They take engineering inputs like images, CAD, drawings, PCB layouts and supplier quotes, and turn them into cost and value insight in a fraction of the time it used to take me.',
  ],
}

// Honest, qualitative headline facts. No invented figures.
export const stats = [
  { value: '13+', label: 'Years in value and cost engineering' },
  { value: 'ICE → BEV', label: 'Propulsion and chassis parts covered' },
  { value: 'Multi-£M', label: 'Cost programmes I’ve worked on' },
  { value: 'SAVE-certified', label: 'VMA, PVA and TRIZ methods' },
]

export const companies = ['JLR', 'John Deere', 'Tata Technologies']

export const experience = [
  {
    role: 'Senior Cost Improvement Engineer, Propulsion',
    company: 'JLR',
    location: 'Gaydon, UK',
    period: 'Oct 2025 – Present',
    scope: 'Propulsion cost: electric drive unit (e-machine) and power transmission',
    points: [
      'Lead cost reduction across petrol, hybrid and electric propulsion, using benchmarking, supplier work and value engineering.',
      'Read supplier quotes and build should-cost models to find where the real cost sits and where there’s room to improve.',
      'Suggest design changes that lower cost, based on what competitors do and what’s practical to make.',
      'Run VA/VE workshops with other teams and present the cost and benchmarking picture to senior engineers.',
    ],
  },
  {
    role: 'Senior Value Engineer',
    company: 'JLR',
    location: 'Gaydon, UK',
    period: 'Feb 2023 – Oct 2025',
    scope: 'Chassis parts: air suspension, axles, brakes, steering, wheels and tyres',
    points: [
      'Led cost reduction across chassis systems through benchmarking, value engineering and working closely with suppliers.',
      'Reviewed supplier quotes and should-cost models to spot the biggest cost drivers and the gaps worth chasing.',
      'Recommended lower-cost designs using competitor analysis and good manufacturing practice.',
      'Ran idea-generation workshops and took cost and benchmarking reports to senior management.',
    ],
  },
  {
    role: 'Senior Engineer',
    company: 'John Deere',
    location: 'Pune, India',
    period: 'Jul 2021 – Feb 2023',
    scope: 'Cost work across the construction-equipment range',
    points: [
      'Worked on multi-million cost-reduction programmes using benchmarking, function analysis and design-to-cost.',
      'Ran idea workshops with design, manufacturing, supply chain, sourcing, quality and marketing together.',
      'Dug into the bill of materials with Pareto charts and cost heat-maps to find the parts driving most of the cost.',
      'Owned the ideas from first sketch to a business case, ROI, supplier negotiation and real, banked savings.',
    ],
  },
  {
    role: 'Design & Senior Design Engineer',
    company: 'Tata Technologies',
    location: 'Pune, India',
    period: 'Jul 2012 – Jun 2021',
    scope: 'Nine years, from mechanical design into cost and value engineering',
    points: [
      'Grew over nine years from design engineer to senior design engineer, moving from product design into cost work.',
      'Delivered VAVE and cost-reduction projects, including competitor teardowns and should-costing.',
      'Designed parts across a range of manufacturing processes and ran projects end to end.',
    ],
  },
]

// Selected work — real programmes, written as Problem / What I did / Result.
export const caseStudies = [
  {
    tag: 'Propulsion · JLR',
    title: 'Cutting cost on propulsion parts, petrol to electric',
    problem:
      'Propulsion parts like the electric drive unit and power transmission carry cost across four kinds of powertrain: petrol, mild hybrid, plug-in hybrid and fully electric. Most of that cost is set long before anything is built, at the design stage.',
    approach: [
      'Benchmarked our parts against the best in the market',
      'Read supplier quotes and built should-cost models',
      'Suggested design-for-value changes and ran VA/VE workshops with other teams',
    ],
    outcome:
      'Found the real cost drivers and turned them into design changes and a benchmarking plan that I put in front of senior engineers to act on.',
  },
  {
    tag: 'Chassis · JLR',
    title: 'Value engineering across chassis parts',
    problem:
      'Chassis parts like air suspension, axles, brakes, steering, wheels and tyres needed to cost less, but without giving up anything in how they perform.',
    approach: [
      'Built should-cost models and reviewed supplier quotes to find the big cost drivers',
      'Took competitors’ parts apart to see how they did it',
      'Ran idea workshops with cross-functional teams',
    ],
    outcome:
      'Identified the high-cost areas and the opportunities worth chasing, then recommended lower-cost designs and reported back to senior management for a decision.',
  },
  {
    tag: 'Construction equipment · John Deere',
    title: 'Design-to-cost across the equipment range',
    problem:
      'A whole range of construction equipment needed steady, defensible cost reduction, from first idea through to savings that actually land.',
    approach: [
      'Used Pareto charts and cost heat-maps on the bill of materials to find the parts that mattered',
      'Scored ideas with weighted evaluation and paired comparison',
      'Built the business case, ROI, supplier negotiation and a plan to put it in place',
    ],
    outcome:
      'Contributed to multi-million cost-reduction work, carrying ideas all the way from the workshop to savings that were actually banked.',
  },
]

// AI tools I've built — written plainly, with inputs, outputs and how it works.
export const aiTools = [
  {
    name: 'BrainSpark',
    kind: 'AI value-engineering tool',
    summary:
      'Helps spot where cost can come out and value can go up across a whole vehicle, and gives a quick rough should-cost to go with it.',
    inputs: ['Vehicle systems', 'BoM and engineering data'],
    outputs: ['Cost and value ideas', 'Quick directional should-cost'],
    method: 'Uses AI to suggest ideas, guided by value-engineering thinking.',
  },
  {
    name: 'CostLens',
    kind: 'AI cost-intelligence tool',
    summary:
      'Reads through supplier quotes, points out where the cost gaps are, and flags where there’s room to do better on sourcing and benchmarking.',
    inputs: ['Supplier quotations', 'Cost and sourcing data'],
    outputs: ['Cost-gap analysis', 'Benchmarking and sourcing leads'],
    method: 'Parses quotes and compares them with agents that benchmark the numbers.',
  },
  {
    name: 'CostVision',
    kind: 'AI should-costing tool',
    summary:
      'Works out a should-cost straight from an image, a CAD model, a drawing or a PCB layout. It pulls in live material prices and country-specific manufacturing rates, and uses several AI agents together to give an estimate in under a minute.',
    inputs: ['Images', 'CAD models', 'Drawings', 'PCB layouts'],
    outputs: ['Should-cost estimate', 'Cost breakdown', 'Under a minute'],
    method: 'Computer vision, several AI agents working together, and live market and regional rates.',
    featured: true,
  },
]

// How I work — the methods I actually use, in plain terms.
export const methodology = [
  { name: 'Function Analysis & FAST', note: 'Work out what a part really needs to do before worrying about cost' },
  { name: 'Should-Costing', note: 'Build up what something should honestly cost to make' },
  { name: 'Teardown & Benchmarking', note: 'Take competitors’ parts apart to see how they do it cheaper' },
  { name: 'DFM / DFA & Design-to-Cost', note: 'Design cost out before it gets locked in' },
  { name: 'Weighted Evaluation', note: 'Score ideas fairly instead of going on gut feel' },
  { name: 'Pareto & Cost Heat-Maps', note: 'Find the few parts that drive most of the cost' },
  { name: 'TRIZ', note: 'A structured way to solve a problem without a compromise' },
  { name: 'Business Case, ROI & Realisation', note: 'See an idea through to money actually saved' },
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

// The cost-commitment curve. A well-known idea in value engineering, not my own number.
export const costCurve = [
  { stage: 'Concept', committed: 20, influence: 95 },
  { stage: 'Design', committed: 75, influence: 70 },
  { stage: 'Sourcing', committed: 85, influence: 35 },
  { stage: 'Production', committed: 95, influence: 12 },
  { stage: 'In-life', committed: 100, influence: 4 },
]

export const certifications = [
  'Professional Value Analyst (PVA)',
  'SAVE International, Value Methodology Associate (VMA)',
  'TRIZ Certified, Innovative Problem Solving',
]

export const awards = [
  'Best Employee of the Quarter, 2017',
  'Best Project Team of the Quarter, 2017',
  'Best Project Team of the Quarter, 2015',
  'Champion of the Month, 2014',
  'Certificate of Appreciation, 2015–16',
]

export const education = [
  {
    degree: 'Post Graduate Diploma in Management (PGDM), Operations Management',
    period: '2024 – 2026',
  },
  {
    school: 'I.S.B. & M School of Technology, Pune',
    degree: "Bachelor's Degree, Mechanical Engineering",
    period: '2013 – 2015',
  },
  {
    school: 'Government Polytechnic College',
    degree: 'Diploma, Mechanical Engineering',
    period: '2009 – 2012',
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
  { src: certVma, title: 'SAVE International, Value Methodology Associate', tag: 'Certification' },
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
      'I have worked with Avinash for Value Engineering projects on steel-industry equipment. He has good knowledge and experience in setting up and applying the Value Engineering process. He is a hard-working, focused individual and a quick learner, ready to take calculated risks.',
  },
  {
    name: 'Abhishek Hazra',
    initials: 'AH',
    photo: recAbhishekHazra,
    role: 'GM China & Associate VP SEA, Tata Technologies',
    relation: 'Worked on the same team',
    quote:
      'Avinash has been an avid explorer of technology. Closely associated in customer-success projects, he has been a true doer even in the most challenging environments across global customers. Keep the inquisitiveness high and it will take you places.',
  },
  {
    name: 'Akhil Desai',
    initials: 'AD',
    photo: recAkhilDesai,
    role: 'Sr. Technical Lead, Engineering ER&D, Tata Technologies',
    relation: 'Worked on the same team',
    quote:
      'Worked with Avinash on a couple of projects. He is good technically, good in presentation, and has good knowledge of managing the customer as well as the internal team.',
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
