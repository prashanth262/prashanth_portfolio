// ─────────────────────────────────────────────────────────────
//  Edit this file to personalise your portfolio.
//  Everything on the page reads from here — no HTML edits needed.
// ─────────────────────────────────────────────────────────────
window.PORTFOLIO = {
  name: "Prashanth Dharavath",
  role: "Software Engineer · Java & Spring Boot",
  tagline:
    "Software Engineer Trainee at Forsys, building backend features with Java, Spring Boot and Oracle PL/SQL — with hands-on work in microservices and Generative AI.",
  location: "Hyderabad, Telangana",
  email: "prashanthdharavath449@gmail.com",
  photo: "profile.jpg", // your photo (falls back to GitHub avatar if empty)
  resumeUrl: "resume.pdf", // set to "" to hide the Résumé button

  github: "prashanth262",
  linkedin: "https://www.linkedin.com/in/prashanthdharavath",
  leetcode: "https://leetcode.com/u/prashanthh/",
  gfg: "https://www.geeksforgeeks.org/user/prashanthdhxx47/",

  about: [
    "I'm a Software Engineer Trainee at Forsys Inc. in Hyderabad, where I build backend features for the RevOptic revenue platform using Java, Spring Boot, JPA/Hibernate and Oracle PL/SQL.",
    "Outside work I enjoy building microservices and Generative AI projects — from a salon booking platform to speech diarization (published in IJSREM 2026) and text-to-music generation. I'm strong in data structures and algorithms and use AI-assisted tools to ship faster.",
  ],

  skills: {
    Languages: ["Java", "Python", "JavaScript", "SQL", "PL/SQL"],
    Frameworks: ["Spring Boot", "JPA/Hibernate", "Microservices", "React.js", "Angular"],
    Databases: ["Oracle", "MySQL"],
    "Tools & Messaging": ["Docker", "Git", "GitHub", "Postman", "RabbitMQ", "Keycloak"],
    "AI Tools": ["Claude (AI-assisted development)"],
    Core: ["Data Structures & Algorithms", "OOP", "REST APIs"],
  },

  experience: [
    {
      title: "Software Engineer Trainee",
      org: "Forsys Inc.",
      period: "Jan 2026 — Present · Hyderabad (On-site)",
      subtitle: "Period Close Reconciliation — RevOptic Revenue Platform",
      tech: ["Java", "Spring Boot", "JPA/Hibernate", "Oracle PL/SQL", "Angular"],
      points: [
        "Contributed to an automated month-end close reconciliation module that replaced a manual Excel process with in-app checks comparing financial reports such as Waterfall, GL and Roll Forward.",
        "Developed Oracle PL/SQL logic to process large volumes of order-line data efficiently, with results split by legal entity and currency.",
        "Built Spring Boot REST APIs for asynchronous reconciliation runs, job tracking, difference drill-downs and sign-off, plus an Excel export and JSON-based audit history.",
        "Used AI-assisted development (Claude) to analyse requirements, draft functional specifications and review code, speeding up feature delivery.",
      ],
    },
    {
      title: "Member, Contest Organising Team",
      org: "Code Club, RGUKT Basar",
      period: "Apr 2024 — Jul 2025 · Basar, Telangana",
      points: [
        "Designed and tested competitive programming problems, including edge cases, for campus coding contests.",
      ],
    },
  ],

  // Hand-picked projects shown first, with full detail.
  featured: [
    {
      name: "Beautinest — Salon Booking Platform",
      repo: "Microservice_project_new",
      tech: ["Spring Boot", "Microservices", "React", "RabbitMQ", "Keycloak", "Docker", "MySQL"],
      points: [
        "Microservices-based salon booking system with Eureka service discovery and an API Gateway.",
        "Keycloak authentication and RabbitMQ-based real-time notifications.",
        "Containerised with Docker Compose; data persisted in MySQL.",
      ],
    },
    {
      name: "Multi-Speaker Transcription & Speaker Diarization",
      repo: "Speakers-Recognition",
      badge: "Published · IJSREM 2026",
      tech: ["Python", "Whisper", "ECAPA-TDNN"],
      points: [
        "Deep learning system for multi-speaker transcription and diarization using Whisper and ECAPA-TDNN.",
        "Agglomerative Clustering and Cosine Similarity for speaker identification with timestamped transcripts.",
      ],
    },
    {
      name: "Text-to-Music Generation (MusicGen)",
      repo: "Test-To-Music-Generation",
      tech: ["Python", "MusicGen", "EnCodec", "Transformers"],
      points: [
        "End-to-end GenAI system using a Transformer decoder to turn text prompts into high-fidelity audio tokens.",
        "EnCodec neural audio tokenization with codebook interleaving patterns (Flattening, Delay, Parallel) to balance quality and efficiency.",
      ],
    },
  ],

  education: [
    {
      school: "Rajiv Gandhi University of Knowledge Technologies (RGUKT)",
      degree: "B.Tech in Computer Science",
      period: "May 2022 — May 2026",
      place: "Basar, Telangana",
      score: "CGPA 8.8",
    },
  ],

  achievements: [
    { title: "CodePragna-2024", text: "Runner-up" },
    { title: "Research paper", text: "Published in IJSREM (2026) — speaker diarization" },
    { title: "DSA", text: "3-star on GeeksforGeeks; active on LeetCode" },
    { title: "Leadership", text: "Coordinated events with 250+ participants" },
  ],

  // Other GitHub repos, pulled live. Featured repos are skipped automatically.
  projects: {
    maxRepos: 6,
    hideForks: true,
    exclude: ["prashanth262", "prashanth262.github.io"],
    pinned: [],
  },
};
