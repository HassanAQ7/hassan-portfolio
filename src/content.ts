// Everything the site says lives here. Project bullets, stacks, dates, skills and
// education are copied word for word from the resume. Change them here and on the resume together.

export type Project = {
  title: string
  /** The hackathon, or "Personal project". Shown above the title. */
  context: string
  date: string
  /** The tech stack exactly as it appears in the resume heading. */
  stack: string
  /** Resume bullets, word for word. */
  bullets: string[]
  demo?: string
  devpost?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'OpenSesame',
    context: 'nwPlus HackCamp 2026',
    date: 'November 2026',
    stack: 'Python, FastAPI, Gemini API, PostgreSQL, TimescaleDB, n8n',
    bullets: [
      "Developed the FastAPI backend for OpenSesame, a team-of-4 web app that matches students' public GitHub work to beginner-friendly open-source issues",
      "Integrated the Gemini API to rate students' skills 1–5 from their GitHub repositories, feeding a deterministic weighted scoring function that ranks a curated catalog of open-source projects",
      'Designed an hourly n8n-triggered GitHub ingestion job across 7 languages, staying under the 30-request/min search limit with repo fetches capped at 8 concurrent',
      'Modeled repo snapshots and issue events as TimescaleDB hypertables to track 7-day star growth and beginner issues opened or picked up',
      'Developed an AI coaching agent using the Gemini API that analyzes an issue, README and contributing guide to generate setup steps, relevant files and a pull request checklist for first-time contributors',
    ],
    demo: 'https://opensesame.wiki',
    github: 'TODO',
  },
  {
    title: 'GameFace',
    context: 'Personal project',
    date: 'January 2026 – February 2026',
    stack: 'Python, FastAPI, React, TypeScript, AWS, Tailwind CSS',
    bullets: [
      'Built a full-stack game recommendation app using Amazon Rekognition to detect user emotions in real-time via webcam or file upload, mapping detected emotions to game genres through a rule-based recommendation engine',
      'Designed and deployed a serverless FastAPI backend on AWS Lambda, integrating the RAWG REST API for game data retrieval',
      'Implemented session-based recommendation history in DynamoDB using composite key queries to support per-user history tracking',
      'Built a responsive frontend with React, TanStack Router, and Tailwind CSS, deployed on Vercel',
    ],
    demo: 'https://game-face.vercel.app',
    github: 'https://github.com/HassanAQ7/GameFace',
  },
  {
    title: 'FocusLink',
    context: 'Vancouver HackCamp 2025',
    date: 'November 2025',
    stack: 'Python, FastAPI, PostgreSQL, React, Tailwind CSS',
    bullets: [
      'Collaborated in a team of 4 to create FocusLink, a full-stack social productivity app with a Chrome extension combining focus timers, goal tracking, distraction blocking and shared accountability.',
      'Developed REST APIs using FastAPI and PostgreSQL to support CRUD operations for study sessions, daily goals, and social features',
      'Implemented secure JWT-based authentication for user login and sessions.',
      'Partnered with frontend teammates on integrating the API with a React + Tailwind CSS interface, debugging CORS, Authentication, and async issues to ensure smooth communication and successful feature delivery.',
      'Deployed the FastAPI backend on Render for live use',
    ],
    devpost: 'https://devpost.com/software/focuslink',
    github: 'TODO',
  },
  {
    title: 'Asteroid Collision Notifier',
    context: 'Personal project',
    date: 'August 2025',
    stack: 'Java, Spring Boot, Kafka, PostgreSQL, Docker',
    bullets: [
      "Developed a microservices asteroid collision notifier with Spring Boot integrating NASA's NEO API to detect dangerous asteroids and implementing mail-sending capabilities to notify users",
      'Implemented event-driven architecture with Apache Kafka for real-time communication between asteroid detection and notification services',
      'Containerized the application with Docker for simplified deployment and consistent development environments',
    ],
  },
]

export const content = {
  name: 'Hassan Ally Qureshi',
  /** Romaji-style caption under the name, one syllable per entry. */
  romaji: ['has.', 'san.'],
  summary:
    '3rd-year CS co-op @ UBC who likes building cool stuff, mostly full-stack, backend and scalable systems.',
  links: {
    github: 'https://github.com/HassanAQ7',
    linkedin: 'TODO',
    email: 'hassan.allyqureshi@gmail.com',
    resume: '/resume.pdf',
  },
  labels: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    resume: 'Resume',
    emailMe: 'Email me',
    liveDemo: 'Live demo',
    devpost: 'Devpost',
    source: 'GitHub',
    coursework: 'Relevant coursework:',
    nav: 'Sections',
  },
  sections: {
    projects: { title: 'Projects', kanji: '作品' },
    skills: { title: 'Skills', kanji: '技能' },
    education: { title: 'Education', kanji: '学歴' },
    contact: { title: 'Contact', kanji: '連絡' },
  },
  titleCards: {
    name: 'Hassan Ally Qureshi',
    japanese: '［ポートフォリオ］',
    word: 'PORTFOLIO',
    footer: 'Animation Number 001',
  },
  contactBlurb: 'Want to talk internships, full-stack, or just wanna connect?',
  footerCredit:
    'Styling inspired by the Monogatari series by NISIOISIN, Kodansha, Aniplex, and SHAFT.',
  projects,
  // Same three lines as the resume's Technical Skills section.
  skills: [
    {
      label: 'Languages',
      items: 'Java, Python, SQL, TypeScript, JavaScript, C++, HTML/CSS, R, C#',
    },
    {
      label: 'Frameworks and Technologies',
      items:
        'FastAPI, React, Spring Framework, Spring Boot, Spring Security, Apache Kafka, Tailwind CSS, ASP.NET, Gemini API',
    },
    {
      label: 'Developer Tools',
      items:
        'Git, Docker, AWS, PostgreSQL, MySQL, Vercel, Kafka, Render, DynamoDB, pgvector, TimescaleDB, n8n',
    },
  ],
  education: {
    school: 'University of British Columbia',
    location: 'Vancouver, BC',
    degree: 'Bachelor of Science in Computer Science, GPA: 79.0',
    dates: 'September 2024 – May 2029 (expected)',
    coursework: [
      'Computations, Programs and Programming',
      'Basic Algorithms and Data Structures',
      'Object-Oriented Programming and Design',
      'Introduction to Computer Systems',
      'Introduction to Relational Databases',
      'Intro to Software Engineering',
      'Algorithm Design and Analysis',
    ],
  },
}

export type SectionId = keyof typeof content.sections

export function showLink(url: string | undefined): url is string {
  return Boolean(url && url !== 'TODO')
}
