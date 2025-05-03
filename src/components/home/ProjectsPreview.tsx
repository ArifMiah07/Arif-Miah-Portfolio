'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ProjectCard from '@/components/projects/ProjectCard'
import { Button } from '@/components/ui/button'
import { Project } from '@/lib/types'

// static data :todo::add backend
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform built with Next.js and Tailwind CSS.",
    slug: "ecommerce-platform",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/images/projects/ecommerce.jpg",
    featured: true,
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    date: "2023-09-01",
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "A clean and modern portfolio website with dark mode support.",
    slug: "portfolio-website",
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    imageUrl: "/images/projects/portfolio.jpg",
    featured: true,
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    date: "2023-10-15",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A drag-and-drop task management application with user authentication.",
    slug: "task-management",
    technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    imageUrl: "/images/projects/tasks.jpg",
    featured: true,
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/tasks",
    date: "2023-07-20",
  }
];

interface ProjectsPreviewProps {
  projects?: Project[]
}

const ProjectsPreview = ({ projects = defaultProjects }: ProjectsPreviewProps) => {
  // Get only the featured projects for the homepage
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview