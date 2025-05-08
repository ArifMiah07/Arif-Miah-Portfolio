import { Project } from "./types";

// Sample project data
export const projects: Project[] = [
  {
    id: "1",
    title: "Clyst",
    description:
      "A dual-mode social media + private journaling app enabling public expression and private reflection.",
    slug: "clyst",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Supabase",
      "Clerk",
    ],
    imageUrl: "/images/clyst.png",
    demoUrl: "https://iclyst.web.app/",
    githubUrl: "https://github.com/arifmiah07/clyst",
    featured: true,
    details: {
      overview:
        "Clyst allows users to switch between a social feed and a personal log. It provides a minimal, distraction-free UI for writing and connecting with others or oneself.",
      challenges:
        "Building a seamless toggle between public and private modes without confusing the UX took careful state and permission handling.",
      features: [
        "Dual-mode (Public Feed & Private Journal)",
        "Clerk-authenticated user accounts",
        "Supabase-powered data storage",
        "Responsive, keyboard-friendly UI",
        "Optimized for both expression and introspection",
      ],
      learnings:
        "This project sharpened my UX thinking and helped me work deeply with Supabase and real-time subscriptions.",
    },
  },
  {
    id: "2",
    title: "Color Contrast Checker",
    description:
      "An advanced accessibility tool to test text readability on deeply nested background layers.",
    slug: "color-contrast-checker",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Google Analytics",
    ],
    imageUrl: "/images/contrast-tree.png",
    demoUrl: "https://contrasttree.vercel.app/",
    githubUrl: "https://github.com/ArifMiah07/color-contrast-checker",
    featured: true,
    details: {
      overview:
        "A unique tool for developers and designers to visually validate contrast levels across nested background layers with live WCAG compliance feedback.",
      challenges:
        "Calculating nested effective contrast while factoring opacity and transparency blending required building a custom algorithm.",
      features: [
        "Live WCAG contrast ratings",
        "Support for transparency & blending",
        "Multiple layering & nested backgrounds",
        "Copy-paste color support",
        "Zod-based schema validation for inputs",
      ],
      learnings:
        "Helped me deeply understand accessibility standards (WCAG), alpha blending math, and accessible design workflows.",
    },
  },
  {
    id: "3",
    title: "Medi-Sphere",
    description:
      "A complete medicine management app with search, filter, sort, and admin CRUD features.",
    slug: "medi-sphere",
    technologies: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    imageUrl: "/images/medi-sphere.png",
    demoUrl: "https://medi-sphere-five.vercel.app/",
    githubUrl: "https://github.com/ArifMiah07/medicine-sphere-client",
    featured: true,
    details: {
      overview:
        "A responsive, full-stack medicine management web app for clinics and pharmacies to handle medicine stock with filtering, sorting, and media upload support.",
      challenges:
        "Integrating Cloudinary image upload with real-time previews and managing deeply nested medicine attributes in Redux was complex.",
      features: [
        "Admin medicine CRUD form",
        "Advanced search, sort & filter",
        "Cloudinary image support",
        "Responsive UI with Tailwind",
        "Secure backend with Express + MongoDB",
      ],
      learnings:
        "Improved my full-stack integration skills and handling complex form states with Redux Toolkit.",
    },
  },
  {
    id: "4",
    title: "Cycle-Sphere",
    description:
      "A bicycle marketplace app supporting discovery, listings, and filtering.",
    slug: "cycle-sphere",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: "/images/cycle-sphere.png",
    demoUrl: "https://cycle-sphere.vercel.app",
    githubUrl: "https://github.com/ArifMiah07/bicycle-sphere-client",
    featured: true,
    details: {
      overview:
        "Cycle-Sphere is a platform where users can list and explore available bicycles for rent or purchase. It provides intuitive filters, image upload, and responsive browsing.",
      challenges:
        "Building a performant filter system that worked with Supabase’s Postgres queries required careful index planning and pagination logic.",
      features: [
        "Bike listing with image uploads",
        "Supabase Postgres backend",
        "Multi-criteria filtering and sorting",
        "Public listing & preview pages",
        "Fully responsive mobile experience",
      ],
      learnings:
        "Strengthened my skills in Supabase, image handling, and filter architecture across large datasets.",
    },
  },
  {
    id: "5",
    title: "XONXONI F&F",
    description:
      "A local-first social platform for residents of XONXONI to share updates and connect.",
    slug: "xonxoni-ff",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: "/images/xfnf.png",
    demoUrl: "https://xfnf.netlify.app",
    githubUrl: "https://github.com/ArifMiah07/xonxoni-fnf",
    featured: false,
    details: {
      overview:
        "A hyperlocal platform focused on connecting family and friends within a specific neighborhood (XONXONI), enabling shared posts and interactions.",
      challenges:
        "Making the platform truly ‘local-first’ while ensuring performance and simplicity was the core focus. Keeping it intuitive yet functional was key.",
      features: [
        "Minimalist local community feed",
        "Post creation and deletion",
        "Supabase-based backend",
        "Clean layout with mobile optimization",
        "No distractions, just local voices",
      ],
      learnings:
        "Refined my understanding of community-first design and keeping product features focused and minimalistic.",
    },
  },
  // {
  //   id: "6",
  //   title: "Vibe-Chat",
  //   description:
  //     "A modern, real-time chat application with secure authentication and customizable themes.",
  //   slug: "vibe-chat",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Clerk",
  //     "shadcn/ui",
  //     "Firebase",
  //   ],
  //   imageUrl: "/project-cover.png",
  //   demoUrl: "https://github.com/arifmiah07/vibe-chat",
  //   githubUrl: "https://github.com/arifmiah07/vibe-chat",
  //   featured: true,
  //   details: {
  //     overview:
  //       "Vibe-Chat is a fully-featured real-time chat app with user authentication, instant messaging, and customizable themes (light/dark). It offers a responsive UI and intuitive sidebar navigation for seamless communication.",
  //     challenges:
  //       "Building real-time messaging with Firebase and integrating it smoothly into the UI while maintaining performance for larger groups was a key challenge. Ensuring cross-platform consistency with theme switching was also complex.",
  //     features: [
  //       "User authentication with Clerk",
  //       "Real-time chat with instant updates",
  //       "Fully responsive design (mobile-first approach)",
  //       "Light/Dark mode support with a customizable UI",
  //       "Sidebar navigation for easy access to rooms and profiles",
  //       "Firebase-powered backend for real-time messaging",
  //     ],
  //     learnings:
  //       "This project deepened my understanding of real-time communication, Firebase integration, and handling theme switching dynamically with Next.js. I also refined my skills in building accessible, responsive UIs with Tailwind CSS.",
  //   },
  // },
  {
    id: "7",
    title: "SmartKidz",//– Interactive Learning for Curious Minds
    description:
      "A playful and secure educational platform designed to make learning fun and measurable for kids, with tools for parents to guide and monitor progress.",
    slug: "smartkidz",
    technologies: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "React Router",
    ],
    imageUrl: "/images/smart-kidz.png",
    demoUrl: "https://smart-kidz-95c4e.web.app",
    githubUrl: "https://github.com/arifmiah07/smart-kidz",
    featured: true,
    details: {
      overview:
        "SmartKidz is an engaging and interactive learning platform built for children, offering educational modules and games while empowering parents with progress tracking and content control.",
      challenges:
        "Designing an interface that appeals to both children and adults while balancing engagement with educational value was a key challenge. Additionally, ensuring secure data handling and reliable tracking mechanisms required careful backend planning.",
      features: [
        "Interactive learning modules for multiple subjects",
        "Educational mini-games tied to curriculum content",
        "Parental controls for safe and customizable access",
        "Progress tracking dashboard for parents and educators",
        "Kid-friendly and responsive UI with bright visuals",
        "Secure authentication and data storage with Firebase and MongoDB",
      ],
      learnings:
        "This project sharpened my skills in building user-centric platforms with dual personas (children and parents). I also deepened my knowledge in integrating Firebase with custom backend APIs, and crafting engaging UI using DaisyUI and Tailwind CSS.",
    },
  },
];

// Get all projects
export const getAllProjects = async (): Promise<Project[]> => {
  // todo: backend API
  return projects;
};

// Get a single project by slug
export const getProjectBySlug = async (
  slug: string
): Promise<Project | null> => {
  // todo: backend API
  return projects.find((project) => project.slug === slug) || null;
};

// Get featured projects
export const getFeaturedProjects = async (): Promise<Project[]> => {
  // todo: backend API
  return projects.filter((project) => project.featured);
};


