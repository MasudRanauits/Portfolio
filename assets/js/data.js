/* =========================================================
   PORTFOLIO DATA  —  Md. Masud Rana
   ---------------------------------------------------------
   This file is the "database" of the site.
   To change any content, edit ONLY this file.
   ========================================================= */

const PORTFOLIO = {

  /* ---------------- Profile / Hero ---------------- */
  profile: {
    name: "Md. Masud Rana",
    shortName: "Masud",
    title: "Software QA Engineer",
    // These lines type out one by one in the hero
    roles: [
      "Software QA Engineer",
      "Manual & Automation Tester",
      "Playwright + TypeScript Automation",
      "API Testing with Postman",
      "Performance Testing with JMeter"
    ],
    tagline:
      "I work on QA for Healthcare ERP, Web Portal, Android, CRM, and E-commerce products, combining manual testing with Playwright automation, along with API and performance testing using Postman and JMeter.",
    location: "Kuril Chowrasta, Vatara, Dhaka, Bangladesh",
    email: "masudr8343@gmail.com",
    phone: "+880 1689 178343",
    phoneRaw: "+8801689178343",
    availability: "Available for new opportunities",
    resume: "assets/Md-Masud-Rana-SQA-Resume.pdf",
    social: [
      { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/masud-rana43/" },
      { label: "GitHub",   icon: "github",   url: "https://github.com/MasudRanauits" },
      { label: "Email",    icon: "mail",     url: "mailto:masudr8343@gmail.com" }
    ]
  },

  /* ---------------- Hero counters ---------------- */
  stats: [
    { value: 3,  suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Releases Supported" },
    { value: 15, suffix: "+", label: "Projects Tested" },
    { value: 3,  suffix: "",  label: "Automation Suites" }
  ],

  /* ---------------- About ---------------- */
  about: {
    heading: "Quality is not a phase — it is the whole journey.",
    paragraphs: [
      "I am a Software QA Engineer with 3+ years of hands-on experience across manual and automation testing. My work mostly revolves around enterprise-scale products — Healthcare ERP systems, hospital web portals, CRM and E-commerce platforms — where a single missed defect directly affects real users.",
      "From requirement analysis to test planning, test case design, execution, defect reporting, retesting and release support, I work comfortably across the full QA lifecycle. For automation I use Playwright (TypeScript) and Selenium WebDriver with the Page Object Model, Postman for API validation, and Apache JMeter for load and performance testing.",
      "Working inside Agile (Scrum) teams, I collaborate closely with developers, business analysts and stakeholders — and have signed off QA for 10+ production releases in a timely, documented and traceable way."
    ],
    highlights: [
      "Healthcare ERP domain expertise (Registration, OPD, EMR, Pharmacy, Diagnostic, MIS)",
      "Playwright + TypeScript automation with Page Object Model",
      "API & SMS gateway integration testing using Postman",
      "Load & performance testing with Apache JMeter",
      "Defect lifecycle management in JIRA",
      "UAT support and production release sign-off"
    ],
    facts: [
      { label: "Experience",  value: "3+ Years" },
      { label: "Location",    value: "Dhaka, Bangladesh" },
      { label: "Languages",   value: "English, Bangla" },
      { label: "Methodology", value: "Agile / Scrum" }
    ]
  },

  /* ---------------- Experience ---------------- */
  experience: [
    {
      role: "Software QA Engineer",
      company: "E-Medical Software Ltd",
      period: "09/2024 — Present",
      location: "Dhaka, Bangladesh",
      current: true,
      summary:
        "Owning QA for a multi-hospital Healthcare ERP suite and its public web portals, from test design through production sign-off.",
      points: [
        "Designed and executed test cases for Healthcare ERP modules (Registration, Hospital, Pharmacy, OPD, EMR, Diagnostic, MIS) following SDLC and STLC processes.",
        "Performed functional, regression, smoke, sanity, API and performance testing.",
        "Conducting load testing for the Healthcare ERP System using Apache JMeter.",
        "Conducted API testing using Postman for SMS gateway integration across modules such as Doctor Appointment, Patient Admission, OT Schedule and Discharge.",
        "Collaborating with developers, business analysts and stakeholders to ensure defect resolution within release timelines.",
        "Supported 10+ product releases, ensuring timely QA sign-off, smooth UAT testing and on-time production deployments."
      ],
      projects: [
        { name: "Popular Medical College Hospital — Healthcare ERP",      tags: ["Web"] },
        { name: "Kidney Foundation Hospital, Sylhet",                     tags: ["Web"] },
        { name: "Medinova Medical Services Ltd + Web Portal",             tags: ["Web"] },
        { name: "Avante Aesthetics — Web Portal & CRM",                   tags: ["Web"] },
        { name: "Fouad Al-Khateeb Hospital + Web Portal",                 tags: ["Web"] },
        { name: "Akij Mediplex Limited + Web Portal",                     tags: ["Web"] },
        { name: "Akij Insaf Diagnostic & Consultation Center + Akij Insaf App", tags: ["Web", "Android", "iOS"] }
      ],
      tags: [
        "Healthcare ERP",
        "Automation", "Manual Testing", "API Testing", "Load Testing", "Performance Testing",
        "Database Testing", "Requirement Analysis", "Root Cause Analysis", "Test Case Design",
        "Bug Reporting", "Cross Browser Testing", "Scenario Based Testing", "Module Based Testing",
        "Smoke Testing", "Sanity Testing", "UI Testing", "User Acceptance Testing", "Regression Testing"
      ]
    },
    {
      role: "Junior SQA Engineer",
      company: "Battery Low Interactive Ltd",
      period: "07/2023 — 08/2024",
      location: "Dhaka, Bangladesh",
      current: false,
      summary:
        "Delivered end-to-end manual QA across web and mobile products, including high-traffic performance validation.",
      points: [
        "Designed, developed and executed manual test cases based on business requirements, user stories and acceptance criteria to ensure complete test coverage.",
        "Performed functional, regression, integration, smoke, sanity, UI/UX and cross-browser testing across web and mobile platforms.",
        "Performed web and mobile application testing (Android & iOS) for usability, responsiveness and functionality across multiple devices.",
        "Executed performance and load testing using JMeter, ensuring platform stability and scalability during high-traffic events.",
        "Reported and tracked critical defects using JIRA, collaborating with developers and product managers for timely fixes.",
        "Supported end-to-end testing, UAT and QA sign-off for smooth production deployments."
      ],
      projects: [],
      tags: [
        "Requirement Analysis", "Root Cause Analysis", "Test Case Design", "Bug Reporting",
        "Cross Browser Testing", "Load Testing", "API Testing", "Scenario Based Testing",
        "Functional Testing", "Test Case Scripting", "Module Based Testing", "Smoke Testing",
        "Sanity Testing", "UI Testing", "User Acceptance Testing", "Regression Testing"
      ]
    }
  ],

  /* ---------------- Skills ---------------- */
  skillGroups: [
    {
      name: "Manual Testing",
      icon: "clipboard",
      items: [
        "Requirement Analysis", "Test Planning", "Test Case Design", "Test Execution",
        "Test Reports", "Test Environment Setup", "Smoke & Sanity", "Regression",
        "UAT", "Bug Reporting"
      ]
    },
    {
      name: "Automation Testing",
      icon: "robot",
      items: ["Playwright", "Selenium WebDriver", "Page Object Model (POM)", "TypeScript", "Java"]
    },
    {
      name: "API & Performance",
      icon: "bolt",
      items: ["Postman", "REST API Testing", "Apache JMeter", "Load Testing", "Stress Testing"]
    },
    {
      name: "Security & Compatibility",
      icon: "shield",
      items: ["Burp Suite (Penetration Testing)", "BrowserStack", "Cross-browser Testing", "Cross-device Testing"]
    },
    {
      name: "Database & Backend",
      icon: "database",
      items: ["MySQL", "MSSQL", "Data Validation", "Backend Testing"]
    },
    {
      name: "Process & Tools",
      icon: "gear",
      items: ["Agile (Scrum)", "SDLC & STLC", "Defect Lifecycle", "Risk Analysis", "JIRA", "Git / GitHub", "Visual Studio", "Eclipse"]
    }
  ],

  /* ---------------- Tools & Technologies (icon tiles) ---------------- */
  tools: [
    { name: "Playwright",  icon: "code"     },
    { name: "Selenium",    icon: "globe"    },
    { name: "Postman",     icon: "server"   },
    { name: "JMeter",      icon: "activity" },
    { name: "TypeScript",  icon: "file"     },
    { name: "Java",        icon: "coffee"   },
    { name: "MySQL",       icon: "database" },
    { name: "MSSQL",       icon: "database" },
    { name: "JIRA",        icon: "layout"   },
    { name: "Git / GitHub",icon: "github"   },
    { name: "Burp Suite",  icon: "shield"   },
    { name: "BrowserStack",icon: "monitor"  }
  ],

  /* ---------------- Projects (personal / GitHub) ---------------- */
  projects: [
    {
      title: "Medinova Medical Services Ltd",
      type: "Healthcare ERP Automation",
      category: "healthcare",
      description:
        "Automated critical healthcare workflows using Playwright with TypeScript — Registration, Login, Diagnostic, Pharmacy, OPD, patient management and billing modules. Built reusable test scripts on the Page Object Model and validated both functional and regression scenarios.",
      highlights: ["Page Object Model architecture", "Functional + Regression suites", "Billing & patient management flows"],
      tech: ["Playwright", "TypeScript", "POM", "Node.js"],
      repo: "https://github.com/MasudRanauits/HISMedinova-ProjectAutomation.git"
    },
    {
      title: "Popular Medical College Hospital",
      type: "Hospital ERP Automation",
      category: "healthcare",
      description:
        "Automation coverage for Hospital, OPD and Pharmacy workflows using Playwright with TypeScript. Developed reusable scripts with the POM pattern and executed Smoke and Regression testing to validate critical functionality and overall application stability.",
      highlights: ["Smoke & Regression packs", "Reusable POM components", "Critical workflow stability"],
      tech: ["Playwright", "TypeScript", "POM", "Smoke / Regression"],
      repo: "https://github.com/MasudRanauits/Popular-Medical-College-Hospital-Healthcare-ERP-Test-Automation-Playwright-.git"
    },
    {
      title: "E-commerce Website Automation",
      type: "E-commerce Automation",
      category: "ecommerce",
      description:
        "Tested key e-commerce journeys with Playwright and TypeScript — user registration, login, product browsing, cart management and checkout. Reusable automation scripts built on POM with Smoke and Regression testing across the purchase funnel.",
      highlights: ["End-to-end checkout journey", "Cart & product browsing coverage", "Smoke & Regression testing"],
      tech: ["Playwright", "TypeScript", "POM", "E2E"],
      repo: "https://github.com/MasudRanauits/Playwright-E-commerce-Automation-Project.git"
    }
  ],

  /* ---------------- Education ---------------- */
  education: [
    {
      degree: "B.Sc in Information Technology",
      institute: "University of Information Technology & Sciences (UITS)",
      year: "2020"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "Ibrahim Khan Govt. College",
      year: "2015"
    }
  ],

  /* ---------------- Services / What I do ---------------- */
  services: [
    {
      icon: "clipboard",
      title: "Test Strategy & Design",
      text: "From requirement analysis to test plans, scenarios and traceable test cases — structured documentation that proves coverage."
    },
    {
      icon: "robot",
      title: "Automation Frameworks",
      text: "Maintainable POM-based suites in Playwright + TypeScript, with reusable components and CI-ready smoke / regression packs."
    },
    {
      icon: "bolt",
      title: "API & Integration Testing",
      text: "REST APIs, SMS gateways and third-party integrations validated in Postman — request, response, status codes and data integrity."
    },
    {
      icon: "shield",
      title: "Performance & Release Support",
      text: "JMeter load testing, UAT coordination and production QA sign-off so every deployment goes out stable."
    }
  ],

  /* ---------------- Footer ---------------- */
  meta: {
    year: new Date().getFullYear()
  }
};
