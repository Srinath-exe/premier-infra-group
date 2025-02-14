import { title } from "process";

const companyData = {
  name: "Premier Infra Group Pvt. Ltd.",
  regdAddress: "B-II/38, 2nd Floor, Safdarjung Enclave, New Delhi – 110029",
  branchAddress: "D-4, Ground Floor, Westend Marg, Saidulajab Extension, Near Garden of Five Senses, Saket - 110029",
  aboutUs: [
    "We at Premier Infra Group Pvt. Ltd. share a common vision and commitment to delivering exceptional 'Civil Construction & Engineering' solutions at competitive prices. Our customer-centric approach ensures that we cater to both stated and implied needs, driven by our core values."
  ],
  email: "info@premierinfragroup.com",
  phone: "+91-9999986633",

  goal_title: "Our Goal",

  goal_subtitle: "Through invaluable acquaintance we intend to achieve the following objectives",

  goal: [
    "To deliver projects as per completion target.",
    "To complete projects as per customer satisfaction.",
    "Be specific to the customer needs.",
    "To resolve customer complaints within required working days.",
    "Ensuring highest quality & safety standards."
  ],

  goalSections: [
    {
      title: "Project Delivery",
      description: "To deliver projects as per completion target and ensure customer satisfaction."
    },
    {
      title: "Customer Focus",
      description: "Be specific to the customer needs and resolve complaints within required working days."
    },
    {
      title: "Quality & Safety",
      description: "Ensuring the highest quality and safety standards in all our projects."
    }
  ],

  services_title: "Our Services",
  services_subtitle: "With a robust network of nationwide associated offices and an exclusive workforce, we possess the technical expertise and specialized resources to deliver exceptional results.Our team comprises technically skilled, trained, and experienced personnel who are always ready to provide top-notch services.",
  services_mini_title: "Our comprehensive service portfolio",

  services: [
    "ERECTION",
    "FABRICATION",
    "DESIGNING",
    "TRADING",
    "HIRING/RENTING",
    "TRANSPORTATION",
    "CONSTRUCTION OF BRIDGES (EPC & BOQ CONTRACTS)",
    "CONSTRUCTION OF ROADS (EPC & BOQ CONTRACTS)"
  ],

  services_section: [
    {
      "title": "Erection",
      "description": "We provide erection services for steel structures, heavy machinery, and bridge components with precision and safety."
    },
    {
      "title": "Fabrication",
      "description": "Custom fabrication of steel and concrete structures, ensuring high-quality and durable construction solutions."
    },
    {
      "title": "Designing",
      "description": "Our in-house design team develops tailored solutions for structural engineering, site planning, and assembly."
    },
    {
      "title": "Trading",
      "description": "We supply high-quality construction materials, specialized components, and equipment for various projects."
    },
    {
      "title": "Hiring/Renting",
      "description": "Rental services for construction equipment, including tower cranes, boom lifts, and heavy hydraulic cranes."
    },
    {
      "title": "Transportation",
      "description": "Fleet of horses and axel trailers in different configurations to ensure smooth and timely transportation of materials and equipment."
    },
    {
      "title": "Bridge Construction (EPC & BOQ Contracts)",
      "description": "Comprehensive bridge construction services, including steel and PSC bridges, with end-to-end project management."
    },
    {
      "title": "Road Construction (EPC & BOQ Contracts)",
      "description": "Expertise in road construction projects, delivering high-quality infrastructure with operational efficiency."
    }
  ],

  strengths_title: "Our Strengths",

  strengths_subtitle: "We have a team of professionals who are experts in their respective fields and have a proven track record of delivering projects on time and within budget.",

  strengths_section: [{

    title: "24x7 on-site service",
    description: "We provide 24x7 on-site service to ensure that our customers are never left in the lurch."

  },
  {
    title: "Client Staff Training",
    description: "We provide training to our client's staff to ensure that they are well-versed with the equipment."
  },
  {
    title: "Project Excellence",
    description : "Executed some of the most challenging projects"
  },{
    title: "Safety Compliance",
    description: "Thorugh understanding of safety regulations"
  }
],

client_title: "Our Clients",
client_description: "We have a diverse client base that includes some of the most reputed names in the industry. Our commitment to quality and customer satisfaction has helped us build long-lasting relationships with our clients.",

  keyPersonnel: [
    { name: "Mr. S.D. Sharma", title: "Managing Partner", phone: "+91-9811346119" },
    { name: "Mr. Anil Kumar Chaudhary", title: "Director", phone: "+91-9999986641" },
    { name: "Mr. Babu Menoki", title: "CEO", phone: "+91-9999800432" },
    { name: "Mr. Siddharth Sharma", title: "Assistant Director", phone: "+91-9999986637" },
    { name: "Mr. Chetan Bhatia", title: "Head – Operations & Maintenance", phone: "+91-9999986644" },
    { name: "Mr. Sanjiv Kumar Singh", title: "Head- Accounts & Finance", phone: "+91-9999986633" },
    { name: "Mr. Anand Chaudhary", title: "Assistant Director", phone: "+91-9999986630" },
    { name: "Mr. Umesh Jha", title: "In charge-Tower Cranes", phone: "+91-9999986643" }
  ],
  contact: {
    phone: "+91-9999986633",
    email: "indiacranes@gmail.com & info@premierinfragroup.com",
    website: "www.phlcranes.com",
    linkedIn: "https://www.linkedin.com/company/27935840/admin/dashboard/"
  },
  equipmentList: [
    {
      category: "HYDRAULIC CRANES", items: [
        { name: "TEREX AC 500", capacity: "500", boomLength: "", no: "2" },
        { name: "LIEBHERR LTM 1400/1", capacity: "400", boomLength: "58", no: "4" },
        // ... rest of the cranes
      ]
    },
    {
      category: "CRAWLER CRANES", items: [
        { name: "P&H 1055", capacity: "100", boomLength: "42.67", no: "1" },
        { name: "Link Belt LS518", capacity: "150", boomLength: "33.5", no: "1" },
      ]
    },
    {
      category: "TRUCKS & TRAILLERS", items: [
        { name: "Man Force Trucks CLA 49.280", no: "13" },
        { name: "Man Force Trucks CLA 40.280", no: "9" },
      ]
    },
    {
      category: "TOWER CRANES", items: [
        { name: "Alpha 453 (Tower Crane)", details: "Jib Length – 50 M, Free standing Height – 46 M, Extendable Height up to – 150 M, Maximum Capacity – 8 ton, Tip Load – 1.8 ton", no: "1" },
        { name: "Liibherr 38 K", details: "Jib Length – 50 M, Free standing Height – 46 M, Extendable Height up to – 150 M, Maximum Capacity – 8 ton, Tip Load – 1.8 ton", no: "2" },
      ]
    },
  ],
  projects: [
    {
      principle: "Tata Projects Limited",
      DFCC: "Construction of Viaduct 163E at CTP",
      date: "02-05-2024",
      value: "2610.49",
      on: "In progress"
    },
    {
      principle: "Tata Projects Limited",
      DFCC: "Construction of Viaduct 163D from CH 89.300 to 90.751 Including All Material, Plant and Machinery, Labour, Consumables, Tools and Tackles Etc., Complete all as per BOQ, Approved technical specification, Drawings",
      date: "16-01-2024",
      value: "10233.79",
      on: "In progress"
    },
    {
      principle: "Shankaranarayana Constructions Pvt.Ltd",
      NHAI: "Transportation & Launching of Precast U-Girder AT SNC DODDABALLAPUR NHAI SITE (Work order No. SNC/BNG/NHAI/2021-22/953, dated: 31-01-2022",
      date: "31-01-2022",
      value: "577.95",
      on: "Completed"
    },
    {
      principle: "IRCON International Ltd.",
      SriLankaRailways: "Assembly, erection and placement of new steel open web railway bridge girders, removal of old steel open web railway bridge girders under traffic block condition in connection with re-construction of railway lines in Northern Province of Sri Lanka",
      date: "13-07-2017",
      value: "771.50",
      on: "Completed"
    }
  ]
};

export default companyData;