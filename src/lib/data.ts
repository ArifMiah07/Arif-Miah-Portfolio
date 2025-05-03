// lib/data.ts - blog data functions

import { BlogPost, Project } from "./types";

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Modern Frontend Development",
    excerpt:
      "Exploring the latest trends and tools in frontend development including React, Next.js, and TypeScript.",
    slug: "understanding-modern-frontend-development",
    coverImage: "/images/blog/frontend-development.jpg",
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
    coverImage: "/images/blog/tailwind-css.jpg",
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
    coverImage: "/images/blog/react-animations.jpg",
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
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
    slug: "ecommerce-platform",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Tailwind CSS",
      "MongoDB",
    ],
    imageUrl: "/images/projects/ecommerce.jpg",
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: true,
    details: {
      overview:
        "This e-commerce platform provides a complete solution for online stores. It includes product listings, cart functionality, secure checkout with Stripe, and an admin dashboard for managing products and orders.",
      challenges:
        "One of the main challenges was implementing a seamless checkout experience while ensuring security. I used Stripe's API to handle payments and implemented server-side validation to prevent fraud.",
      features: [
        "Responsive product catalog with filtering and search",
        "User authentication and account management",
        "Shopping cart with local storage persistence",
        "Secure checkout with Stripe integration",
        "Admin dashboard for product and order management",
        "SEO optimization for product pages",
      ],
      learnings:
        "Building this project deepened my understanding of e-commerce workflows and secure payment processing. I also improved my skills in state management with React Context API and server-side rendering with Next.js.",
    },
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    slug: "task-management-app",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    imageUrl: "/images/projects/task-management.jpg",
    demoUrl: "https://taskapp-demo.example.com",
    githubUrl: "https://github.com/yourusername/task-management",
    featured: true,
    details: {
      overview:
        "This task management application helps teams organize and track their work. It features board-style task management, real-time updates, team collaboration tools, and detailed reporting.",
      challenges:
        "Implementing real-time synchronization across multiple users was challenging. I used Firebase Realtime Database to ensure all team members see the latest updates without refreshing the page.",
      features: [
        "Drag-and-drop interface for task management",
        "Real-time updates across all connected clients",
        "Team collaboration with comments and mentions",
        "Customizable workflow stages and task categories",
        "Detailed reporting and analytics dashboard",
        "Mobile-responsive design for on-the-go access",
      ],
      learnings:
        "This project taught me a lot about real-time database design and state management in complex applications. I also gained experience in optimizing performance for applications with frequent updates.",
    },
  },
  {
    id: "3",
    title: "Personal Finance Dashboard",
    description:
      "A dashboard for tracking personal finances, expenses, and savings goals with data visualization.",
    slug: "finance-dashboard",
    technologies: [
      "Next.js",
      "TypeScript",
      "Chart.js",
      "Tailwind CSS",
      "Supabase",
    ],
    imageUrl: "/images/projects/finance-dashboard.jpg",
    demoUrl: "https://finance-demo.example.com",
    githubUrl: "https://github.com/yourusername/finance-dashboard",
    featured: true,
    details: {
      overview:
        "This personal finance dashboard helps users track their income, expenses, and savings goals. It includes interactive charts for visualizing financial data and tools for setting and monitoring budget goals.",
      challenges:
        "Creating intuitive data visualizations that accurately represent complex financial data was the main challenge. I used Chart.js to create interactive and responsive charts that help users understand their finances at a glance.",
      features: [
        "Income and expense tracking with categorization",
        "Budget planning and monitoring tools",
        "Savings goals with progress tracking",
        "Interactive charts and reports",
        "Bank account integration via Plaid API",
        "Secure authentication and data encryption",
      ],
      learnings:
        "This project enhanced my skills in data visualization and handling sensitive user data securely. I also learned techniques for making complex financial concepts accessible through thoughtful UI design.",
    },
  },
  {
    id: "4",
    title: "Real Estate Listing Platform",
    description:
      "A modern real estate platform with property listings, advanced search, and virtual tours.",
    slug: "real-estate-platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
    imageUrl: "/images/projects/real-estate.jpg",
    githubUrl: "https://github.com/yourusername/real-estate-platform",
    featured: false,
    details: {
      overview:
        "This real estate platform connects property sellers with potential buyers. It features property listings with detailed information, advanced search functionality, interactive maps, and virtual tour capabilities.",
      challenges:
        "Implementing the location-based search with performance optimization was challenging. I used geospatial indexing in MongoDB and the Google Maps API to create a fast and accurate property search experience.",
      features: [
        "Advanced property search with multiple filters",
        "Interactive map view of property listings",
        "360° virtual tours of properties",
        "Property comparison tool",
        "Saved searches and favorite properties",
        "Agent contact and scheduling system",
      ],
      learnings:
        "This project improved my skills in working with geospatial data and integrating third-party APIs. I also gained experience in creating complex search functionality with multiple parameters.",
    },
  },
];

// Get all projects
export const getAllProjects = async (): Promise<Project[]> => {
  // In a real app, this would fetch from an API or database
  return projects;
};

// Get a single project by slug
export const getProjectBySlug = async (
  slug: string
): Promise<Project | null> => {
  // In a real app, this would fetch from an API or database
  return projects.find((project) => project.slug === slug) || null;
};

// Get featured projects
export const getFeaturedProjects = async (): Promise<Project[]> => {
  // In a real app, this would fetch from an API or database
  return projects.filter((project) => project.featured);
};

// Get all blog posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  // In a real app, this would fetch from an API or database
  return blogPosts;
};

// Get a single blog post by slug
export const getBlogPostBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  // In a real app, this would fetch from an API or database
  return blogPosts.find((post) => post.slug === slug) || null;
};

// Get recent blog posts
export const getRecentBlogPosts = async (
  count: number = 3
): Promise<BlogPost[]> => {
  // In a real app, this would fetch from an API or database and sort by date
  return blogPosts.slice(0, count);
};
