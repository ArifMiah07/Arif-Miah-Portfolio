// Blog post type
export interface ICodeSnippet {
  codeSnippetImageLink?: string[];
  CodeSnippetCode?: string;
}
export interface IParagraph {
  paragraph: string;
  paragraphImageLink?: string;
  codeSnippet?: ICodeSnippet;
}
export type TParagraphN = {
  paragraphN: IParagraph;
}
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: TParagraphN[];
    date: string;
    coverImage: string;
    tags: string[];
    readTime?: string | number;
    author?: string;
  }
  
  // Project type
  export interface Project {
    id: string;
    title: string;
    description: string;
    slug: string;
    technologies: string[];
    imageUrl: string;
    featured: boolean;
    demoUrl?: string;
    githubUrl?: string;
    date?: string;
    content?: string; // Markdown content for project details page
    details?: {
      overview: string;
      challenges?: string;
      features?: string[];
      learnings?: string;
    };
  }
  
  // Navigation item type
  export interface NavItem {
    title: string;
    href: string;
    external?: boolean;
  }
  
  // Social link type
  export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }
  
  // Contact form data type
  export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  // Experience type
  // export interface Experience {
  //   title: string;
  //   company: string;
  //   period: string;
  //   responsibilities: string[];
  // }
  export interface Experience {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
    technologies: string[];
  }
  
  
  // Education type
  export interface Education {
    degree: string;
    institution: string;
    period?: string;
    duration?: string;
    description: string;
  }
  
  // Skills type
  export interface Skills {
    technical: { name: string; level: number }[];
    frameworks: string[];
    soft: string[];
  }