
import { Experience, Education, Skills } from './types'
  
export const experience: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Logic Region',
    period: 'April 2025',
    responsibilities: [
      'Contributed to the development of "Medicine Sphere", a team-based full-stack web application',
      'Handled both frontend and backend tasks using React, Next.js, Node.js, and Express.js',
      'Designed and managed the MongoDB database schema for efficient medicine catalog storage',
      'Implemented authentication and role-based access using JWT and NextAuth',
      'Utilized Redux RTK Query for optimized API communication and state management'
    ],
    technologies: [
      'React.js', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'TypeScript', 'Redux RTK Query',
      'Node.js', 'Express.js', 'Mongoose', 'Zod', 'Postman', 'JWT', 'NextAuth', 'Vercel'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Revive 11',
    period: 'April 2025',
    responsibilities: [
      'Worked collaboratively on "Bicycle Sphere", a full-stack web application for managing bicycle sales and services',
      'Built reusable UI components with Shadcn UI and handled dynamic routing with React Router',
      'Managed the backend API and database models using Express and Mongoose',
      'Implemented secure login/signup features using Firebase Authentication and JWT',
      'Deployed the project to Vercel and tested API endpoints thoroughly with Postman'
    ],
    technologies: [
      'React.js', 'Tailwind CSS', 'Shadcn UI', 'React Router DOM', 'TypeScript', 'Redux RTK Query',
      'Node.js', 'Express.js', 'Mongoose', 'Zod', 'Postman', 'JWT', 'Firebase', 'Vercel'
    ]
  }
];


export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science (Expected)',
    institution: 'Premier University, Chittagong',
    period: '2025 - 2030 (Expected)',
    description: 'Starting my undergraduate journey in late 2025. I plan to focus on core areas such as Data Structures, Algorithms, Database Systems, and Full-Stack Web Development.'
  },
  {
    degree: "Programming Hero Level 2 Web Development",
    institution: "Coding Academy",
    period: "24 October 2024 - 25 April 2025",
    description: "A comprehensive 6-month program designed to elevate web development skills to an advanced level. The course delves into modern technologies including TypeScript, Express.js, MongoDB, Mongoose, Redux, Next.js, SQL, PostgreSQL, Prisma, Docker, AWS, GraphQL, Vitest, and Jest. This program is tailored for developers aiming to master cutting-edge web technologies and advance their careers in the tech industry."
  },
  {
    degree: "Programming Hero Level 1 Web Development",
    institution: "Coding Academy",
    period: "24 December 2023 - 24 June 2024",
    description:
      "Intensive 6 month program covering modern JavaScript frameworks, responsive design principles, and backend development with Node.js. MongoDb",
  },
]

export const skills: Skills = {
  technical: [
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'HTML/CSS/SCSS', level: 95 },
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 90 },
    { name: 'Redux / RTK Query', level: 85 },
    { name: 'Node.js', level: 73 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB / Mongoose', level: 80 },
    { name: 'Firebase Auth / JWT', level: 75 },
    { name: 'Git & GitHub', level: 90 }
  ],
  frameworks: [
    'React.js',
    'Next.js',
    'Express.js',
    'Tailwind CSS',
    'shadcn/ui',
    'Material UI',
    'Framer Motion',
    'Redux Toolkit',
    'RTK Query',
    'Zod',
    'Firebase',
    'Stripe',
    'Postman'
  ],
  soft: [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
    'Creativity',
    'Critical Thinking'
  ]
}
