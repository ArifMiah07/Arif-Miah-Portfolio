
import { Project, BlogPost, Experience, Education, Skills } from './types'
  
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, checkout, and user authentication.',
    slug: 'e-commerce-platform',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    imageUrl: '/project-cover.png',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
    details: {
      overview: 'This e-commerce platform provides a complete solution for online stores. Built with Next.js and TypeScript, it offers a fast, responsive shopping experience with server-side rendering for optimal SEO performance.',
      challenges: 'Implementing a secure payment gateway integration and optimizing the performance for large product catalogs were the main challenges in this project.',
      features: [
        'User authentication and profile management',
        'Product search and filtering',
        'Shopping cart and wishlist functionality',
        'Secure checkout process',
        'Order history and tracking',
        'Admin dashboard for product and order management'
      ]
    }
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
    slug: 'task-management-app',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/project-cover.png',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/taskapp',
    featured: true,
    details: {
      overview: 'This task management application helps teams collaborate efficiently by providing real-time updates on task progress. It features a drag-and-drop interface and integrates with popular productivity tools.',
      challenges: 'Implementing real-time synchronization across multiple clients and ensuring data consistency were significant challenges.',
      features: [
        'Kanban board with drag-and-drop functionality',
        'Task assignments and deadlines',
        'Real-time notifications',
        'Team collaboration features',
        'Progress tracking and reporting',
        'Integration with calendar apps'
      ]
    }
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current conditions and forecasts based on user location or search.',
    slug: 'weather-dashboard',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
    imageUrl: '/project-cover.png',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/weather-app',
    featured: false,
    details: {
      overview: 'This weather dashboard provides users with accurate weather forecasts and conditions. It uses the OpenWeather API to fetch data and presents it in an intuitive, visually appealing interface.',
      features: [
        'Current weather conditions display',
        '5-day forecast with hourly breakdowns',
        'Location-based weather detection',
        'Search functionality for any city worldwide',
        'Interactive weather maps',
        'Historical weather data visualization'
      ]
    }
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js and TypeScript',
    slug: 'getting-started-with-nextjs-typescript',
    date: '2023-06-15',
    tags: ['Next.js', 'TypeScript', 'Web Development'],
    readTime: 5,
    excerpt: 'Learn how to set up a new project with Next.js and TypeScript from scratch, and discover the benefits of this powerful combination.',
    coverImage: '/blog-cover.png',
    content: 'This is the full content of the blog post...'
  },
  {
    id: '2',
    title: 'Animating React Components with Framer Motion',
    slug: 'animating-react-components-framer-motion',
    date: '2023-07-20',
    tags: ['React', 'Framer Motion', 'Animation'],
    readTime: 7,
    excerpt: 'Explore how to add beautiful animations to your React components using Framer Motion, with practical examples and best practices.',
    coverImage: '/blog-cover.png',
    content: 'This is the full content of the blog post...'
  },
  {
    id: '3',
    title: 'Building a REST API with Node.js and Express',
    slug: 'building-rest-api-nodejs-express',
    date: '2023-08-10',
    tags: ['Node.js', 'Express', 'API Development'],
    readTime: 10,
    excerpt: 'A comprehensive guide to creating a robust REST API using Node.js and Express, including authentication, validation, and error handling.',
    coverImage: '/blog-cover.png',
    content: 'This is the full content of the blog post...'
  }
]

export const experience: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    responsibilities: [
      'Developed and maintained multiple React applications with TypeScript',
      'Implemented responsive designs and animations using Tailwind CSS and Framer Motion',
      'Collaborated with UX/UI designers to implement pixel-perfect interfaces',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    title: 'Web Developer',
    company: 'Digital Agency XYZ',
    period: '2018 - 2021',
    responsibilities: [
      'Built client websites using React and Next.js',
      'Implemented e-commerce functionality using Shopify and custom solutions',
      'Optimized website performance and SEO',
      'Worked directly with clients to gather requirements and provide technical solutions'
    ]
  },
  {
    title: 'Frontend Intern',
    company: 'StartUp Co.',
    period: '2017 - 2018',
    responsibilities: [
      'Assisted in developing UI components using HTML, CSS, and JavaScript',
      'Fixed bugs and implemented minor features',
      'Participated in daily stand-ups and sprint planning',
      'Learned modern frontend development practices and tooling'
    ]
  }
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Premier University, Chittagong',
    period: '2025 - 2030',
    description: 'Graduated with honors. Core coursework included Data Structures, Algorithms, Database Systems, and Web Development.'
  }
]

export const skills: Skills = {
  technical: [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDb', level: 75 },
    { name: 'Git', level: 85 }
  ],
  frameworks: [
    'React', 'Next.js', 'Express', 'Tailwind CSS', 'shadcn/ui',
    'Material UI', 'React Testing Library', 'Framer Motion',
    'Redux', 'MongoDb'
  ],
  soft: [
    'Problem Solving', 'Communication', 'Teamwork', 'Time Management',
    'Adaptability', 'Attention to Detail', 'Creativity', 'Critical Thinking'
  ]
}