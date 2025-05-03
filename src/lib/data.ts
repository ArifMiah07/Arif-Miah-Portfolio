import { BlogPost, Project } from "./types";

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Modern Frontend Development",
    excerpt:
      "Exploring the latest trends and tools in frontend development including React, Next.js, and TypeScript.",
    slug: "understanding-modern-frontend-development",
    coverImage: "/blog-cover.png",
    date: "2024-04-15",
    readTime: "5 min read",
    tags: ["React", "Next.js", "TypeScript"],
    content: `
# Understanding Modern Frontend Development

Frontend development has evolved significantly over the past few years. In this post, we'll explore the latest trends and tools in the field.

## The Rise of React and Component-Based Architecture

React has revolutionized the way we build user interfaces by introducing a component-based architecture. This approach allows developers to create reusable UI elements that can be composed to build complex applications.

## The Power of Next.js

Next.js has emerged as a powerful framework for building React applications. It provides features like server-side rendering, static site generation, and API routes out of the box.

## TypeScript: Adding Type Safety to JavaScript

TypeScript has gained immense popularity for adding static typing to JavaScript. This helps catch errors early in the development process and improves code quality.

## Conclusion

Modern frontend development is all about creating fast, scalable, and maintainable applications. By leveraging tools like React, Next.js, and TypeScript, developers can build better experiences for users.
    `,
  },
  {
    id: "2",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "How to create beautiful, responsive user interfaces efficiently using Tailwind CSS utility classes.",
    slug: "building-responsive-uis-with-tailwind",
    coverImage: "/blog-cover.png",
    date: "2024-03-22",
    readTime: "4 min read",
    tags: ["CSS", "Tailwind", "UI Design"],
    content: `
# Building Responsive UIs with Tailwind CSS

Tailwind CSS has changed the way developers approach styling web applications. In this post, we'll explore how to use Tailwind effectively.

## The Utility-First Approach

Unlike traditional CSS frameworks, Tailwind uses a utility-first approach. This means you apply small, single-purpose classes directly in your HTML.

## Responsive Design Made Easy

Tailwind makes responsive design straightforward with its built-in breakpoint prefixes. You can easily specify different styles for different screen sizes.

## Customization Options

Tailwind is highly customizable. You can configure everything from colors and spacing to typography and breakpoints in the configuration file.

## Conclusion

Tailwind CSS provides a powerful set of tools for building responsive and maintainable user interfaces. Its utility-first approach can significantly speed up your development process.
    `,
  },
  {
    id: "3",
    title: "Animations in React: A Deep Dive",
    excerpt:
      "Learn how to implement smooth animations in React applications using libraries like Framer Motion.",
    slug: "animations-in-react",
    coverImage: "/blog-cover.png",
    date: "2024-02-18",
    readTime: "7 min read",
    tags: ["React", "Animation", "Framer Motion"],
    content: `
# Animations in React: A Deep Dive

Adding animations to React applications can significantly enhance the user experience. Let's explore how to implement them effectively.

## Why Animations Matter

Animations aren't just about aesthetics; they provide visual feedback, guide user attention, and create a sense of continuity in the UI.

## Introduction to Framer Motion

Framer Motion is a powerful animation library for React that makes it easy to implement complex animations with minimal code.

## Basic Animation Techniques

We'll cover basic animation techniques like transitions, keyframes, and gestures to bring your components to life.

## Performance Considerations

When implementing animations, it's important to consider performance. We'll discuss best practices for keeping your animations smooth and efficient.

## Conclusion

With the right approach and tools, you can create beautiful and performant animations that enhance your React applications.
    `,
  },
];

// Sample project data
const projects: Project[] = [
  {
    id: "1",
    title: "Clyst",
    description: "A dual-mode social media + private journaling app enabling public expression and private reflection.",
    slug: "clyst",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase", "Clerk"],
    imageUrl: "/project-cover.png",
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
    description: "An advanced accessibility tool to test text readability on deeply nested background layers.",
    slug: "color-contrast-checker",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Google Analytics"],
    imageUrl: "/project-cover.png",
    demoUrl: "https://contrasttree.vercel.app/",
    githubUrl: "https://github.com/arifmiah07/contrast-canvas",
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
    description: "A complete medicine management app with search, filter, sort, and admin CRUD features.",
    slug: "medi-sphere",
    technologies: ["React", "Redux Toolkit", "TypeScript", "Express", "MongoDB", "Cloudinary"],
    imageUrl: "/project-cover.png",
    demoUrl: "https://medi-sphere-five.vercel.app/",
    githubUrl: "https://github.com/arifmiah07/medi-sphere",
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
    description: "A bicycle marketplace app supporting discovery, listings, and filtering.",
    slug: "cycle-sphere",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: "/project-cover.png",
    demoUrl: "https://cycle-sphere.vercel.app",
    githubUrl: "https://github.com/arifmiah07/cycle-sphere",
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
    description: "A local-first social platform for residents of XONXONI to share updates and connect.",
    slug: "xonxoni-ff",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: "/project-cover.png",
    demoUrl: "https://xfnf.netlify.app",
    githubUrl: "https://github.com/arifmiah07/xonxoni",
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
  {
    id: "6",
    title: "Vibe-Chat",
    description: "A modern, real-time chat application with secure authentication and customizable themes.",
    slug: "vibe-chat",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "shadcn/ui", "Firebase"],
    imageUrl: "/project-cover.png",
    demoUrl: "https://vibe-chat.vercel.app",
    githubUrl: "https://github.com/arifmiah07/vibe-chat",
    featured: true,
    details: {
      overview:
        "Vibe-Chat is a fully-featured real-time chat app with user authentication, instant messaging, and customizable themes (light/dark). It offers a responsive UI and intuitive sidebar navigation for seamless communication.",
      challenges:
        "Building real-time messaging with Firebase and integrating it smoothly into the UI while maintaining performance for larger groups was a key challenge. Ensuring cross-platform consistency with theme switching was also complex.",
      features: [
        "User authentication with Clerk",
        "Real-time chat with instant updates",
        "Fully responsive design (mobile-first approach)",
        "Light/Dark mode support with a customizable UI",
        "Sidebar navigation for easy access to rooms and profiles",
        "Firebase-powered backend for real-time messaging",
      ],
      learnings:
        "This project deepened my understanding of real-time communication, Firebase integration, and handling theme switching dynamically with Next.js. I also refined my skills in building accessible, responsive UIs with Tailwind CSS.",
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

// Get all blog posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
// todo: backend API 
  return blogPosts;
};

// Get a single blog post by slug
export const getBlogPostBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
// todo: backend API 
  return blogPosts.find((post) => post.slug === slug) || null;
};

// Get recent blog posts
export const getRecentBlogPosts = async (
  count: number = 3
): Promise<BlogPost[]> => {
  // todo: backend API, sort by date
  return blogPosts.slice(0, count);
};
