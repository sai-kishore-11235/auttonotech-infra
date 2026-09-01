export const navLinks = [
  { href: "#sectors", label: "Sectors" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#pipeline", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
] as const;

export const marqueeItems = [
  "EPC Contracting",
  "Civil Construction",
  "Solar Power Plants",
  "Substation Works",
  "Smart City Projects",
  "Industrial Plants",
  "HT / LT Electrical",
  "Water & Drainage",
] as const;

export const sectors = [
  {
    title: "Civil Construction",
    items: [
      "Commercial & institutional buildings",
      "Industrial buildings & warehouses",
      "Manufacturing facilities",
    ],
    icon: "civil",
  },
  {
    title: "Renewable Energy",
    items: [
      "Ground-mounted solar plants",
      "Rooftop solar installations",
      "Transmission & substation works",
    ],
    icon: "renewable",
  },
  {
    title: "Government Infrastructure",
    items: [
      "Smart city & rural projects",
      "Water supply & drainage systems",
      "Public utility infrastructure",
    ],
    icon: "government",
  },
  {
    title: "Electrical Infrastructure",
    items: [
      "HT / LT electrical works",
      "Substations & power distribution",
      "Industrial electrical installations",
    ],
    icon: "electrical",
  },
  {
    title: "Industrial Projects",
    items: [
      "Factory infrastructure",
      "Process & utility facilities",
      "Plant development",
    ],
    icon: "industrial",
  },
  {
    title: "Project Management",
    items: [
      "EPC & construction management",
      "QA/QC & cost control",
      "Procurement & site supervision",
    ],
    icon: "management",
  },
] as const;

export type SectorIcon = (typeof sectors)[number]["icon"];

export const services = [
  {
    title: "EPC Contracting",
    detail:
      "Engineering, procurement and construction under single-point responsibility.",
  },
  {
    title: "Civil Construction",
    detail: "Commercial, industrial and institutional structures built to standard.",
  },
  {
    title: "Renewable Energy",
    detail: "Utility-scale and rooftop solar, transmission and substation works.",
  },
  {
    title: "Industrial Infrastructure",
    detail: "Factories, process facilities, plant utilities and systems.",
  },
  {
    title: "Government Projects",
    detail: "Smart city, rural, water, drainage and public utility works.",
  },
  {
    title: "Project Management Consultancy",
    detail: "Programme controls, scheduling and execution oversight.",
  },
  {
    title: "QA / QC Services",
    detail: "Quality assurance and control across the project lifecycle.",
  },
  {
    title: "Procurement & Supply Chain",
    detail: "Vendor development, sourcing and material management.",
  },
] as const;

export const whyCards = [
  {
    title: "Experienced Leadership",
    body: "A leadership team with depth in engineering, operations, project management and field execution.",
  },
  {
    title: "Multi-Domain Capability",
    body: "Technology, operations, project controls and engineering expertise combined under one roof.",
  },
  {
    title: "Strong Vendor Network",
    body: "Access to contractors, suppliers, consultants and specialised technical resources.",
  },
  {
    title: "Quality Focus",
    body: "Commitment to industry standards and rigorous quality assurance processes throughout.",
  },
  {
    title: "Safety First",
    body: "Strict adherence to workplace safety standards and full regulatory compliance.",
  },
  {
    title: "Backed By A Parent",
    body: "The strength and continuity of Auttonotech Solutions Pvt Ltd behind every engagement.",
  },
] as const;

export const phases = [
  {
    title: "Civil & Industrial Build",
    tag: "Mobilising",
    body: "Commercial, institutional and industrial structures across the Tamil Nadu and Karnataka focus belts.",
  },
  {
    title: "Renewable Energy",
    tag: "Pipeline",
    body: "Ground-mounted and rooftop solar with associated substation and transmission scope.",
  },
  {
    title: "Government & Utility",
    tag: "Tendering",
    body: "Water supply, drainage and public utility works through competitive government tenders.",
  },
] as const;

export const regions = [
  {
    state: "Tamil Nadu",
    chips: ["Nagapattinam", "Karaikal", "Chennai", "Trichy", "Salem", "Coimbatore"],
  },
  {
    state: "Karnataka",
    chips: ["Bangalore", "Hosur Industrial Belt"],
  },
] as const;

export const responsibilities = [
  "Infrastructure Development",
  "EPC Management",
  "Government Tenders",
  "Renewable Energy",
  "Industrial Construction",
  "Vendor Development",
  "Strategic Partnerships",
  "Site Execution",
] as const;

export const sectorOptions = [
  "EPC Contracting",
  "Civil Construction",
  "Renewable Energy",
  "Industrial Infrastructure",
  "Government Projects",
  "Project Management Consultancy",
] as const;
