import { BlogPost } from "./types";

// Sample blog data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Modern Frontend Development",
    excerpt:
      "Exploring the latest trends and tools in frontend development including React, Next.js, and TypeScript.",
    slug: "understanding-modern-frontend-development",
    coverImage: "/blog1.png",
    date: "2024-04-15",
    readTime: "5 min read",
    tags: ["React", "Next.js", "TypeScript"],
    content: [
      {
        paragraphN: {
          paragraph:
            "Frontend development isn't just about 'making things look good' anymore. Over the years, it's matured into a complex engineering discipline driven by modern tools, performance needs, and developer ergonomics.",
        },
      },
      {
        paragraphN: {
          paragraph:
            "React fundamentally changed the game by introducing component-based architecture. This modularity allows us to break UIs into isolated, reusable blocks — making state and logic easier to manage in scalable apps.",
        },
      },
      {
        paragraphN: {
          paragraph:
            "Next.js, built on top of React, simplifies many pain points with routing, performance, and deployment. With features like static site generation (SSG), server-side rendering (SSR), and API routes, it feels like a full-stack framework in a frontend-friendly shell.",
        },
      },
      {
        paragraphN: {
          paragraph:
            "TypeScript, on the other hand, brings safety to JavaScript's dynamic playground. By adding static typing, it catches errors at compile time and enables powerful IDE features like autocomplete, refactoring, and type inference. Once you start using it in larger codebases, it’s hard to go back.",
        },
      },
      {
        paragraphN: {
          paragraph:
            "In summary, modern frontend dev means building apps that are fast, scalable, and resilient. Tools like React, Next.js, and TypeScript help bring that vision to life in a practical, maintainable way.",
        },
      },
    ],
  },
  {
    id: "2",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "How to create beautiful, responsive user interfaces efficiently using Tailwind CSS utility classes.",
    slug: "building-responsive-uis-with-tailwind",
    coverImage: "/blog2.png",
    date: "2024-03-22",
    readTime: "4 min read",
    tags: ["CSS", "Tailwind", "UI Design"],
    content: [
      {
        paragraphN: {
          paragraph:
            "When I first heard about Tailwind, I thought: 'Utility classes everywhere? Sounds messy.' But after actually using it on a real project, my view completely changed. Tailwind’s utility-first approach is surprisingly elegant and productive.",
        },
      },
      {
        paragraphN: {
          paragraph:
            "Instead of writing custom CSS for every new component, you compose your UI using predefined utility classes directly in your markup. It feels weird at first, but once you get used to it, it saves tons of context-switching time between HTML and CSS files.",
        },
      },
      {
        paragraphN: {
          paragraph:
            "Responsive design in Tailwind is a breeze thanks to its breakpoint prefixes like `md:`, `lg:`, and `xl:`. You just layer styles conditionally and let Tailwind take care of the rest. No need to write verbose media queries manually.",
        },
      },
      {
        paragraphN: {
          paragraph:
            "Tailwind also has great customization options. Want to change your default spacing scale or add new colors? Just update your `tailwind.config.js` and you're good to go. The configuration-first mindset makes your design system scalable from the start.",
        },
      },
      {
        paragraphN: {
          paragraph:
            "All in all, Tailwind CSS has become a go-to tool in my frontend toolkit. If you care about speed, consistency, and responsiveness, it’s definitely worth trying.",
        },
      },
    ],
  },
  {
    id: "3",
    title: "Animations in React: A Deep Dive",
    excerpt:
      "Learn how to implement smooth animations in React applications using libraries like Framer Motion.",
    slug: "animations-in-react",
    coverImage: "/blog3.png",
    date: "2024-02-18",
    readTime: "7 min read",
    tags: ["React", "Animation", "Framer Motion"],
    content: [
      {
        paragraphN: {
          paragraph:
            "Animations can elevate a React app from functional to delightful. But managing them correctly—without hurting performance or maintainability—requires a thoughtful approach. That’s where Framer Motion comes in.",
          paragraphImageLink: "/assets/motion-diagram.png",
        },
      },
      {
        paragraphN: {
          paragraph:
            "Framer Motion provides a simple, declarative API to add animations to your components. Whether it’s animating route transitions or toggling modals with smooth motion, it feels natural and React-friendly.",
          codeSnippet: {
            codeSnippetImageLink: ["/assets/framer-motion-fadein.png"],
            CodeSnippetCode: `import { motion } from "framer-motion";

            export default function FadeInComponent() {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>This element fades in!</p>
                </motion.div>
              );
            }`,
          },
        },
      },
      {
        paragraphN: {
          paragraph:
            "Performance-wise, Framer Motion leverages the `requestAnimationFrame` loop and is GPU-optimized. It also supports layout animations, gesture-based interactions, and scroll-triggered animations—making it incredibly versatile for modern UX needs.",
          codeSnippet: {
            codeSnippetImageLink: ["/assets/layout-animation.png"],
            CodeSnippetCode: `import { motion } from "framer-motion";
            
            export default function LayoutAnimation() {
            return (
                <motion.div layout className="grid grid-cols-2 gap-4">
                <motion.div layout className="p-4 bg-blue-200 rounded">Box 1</motion.div>
                <motion.div layout className="p-4 bg-green-200 rounded">Box 2</motion.div>
                </motion.div>
            );
            }`,
          },
        },
      },
    ],
  },
];
