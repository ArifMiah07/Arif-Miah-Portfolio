'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { getProjectBySlug } from '@/lib/data'
import { Project } from '@/lib/types'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const ProjectDetailsPage = () => {
  const params = useParams()
  const slug = params.slug as string
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      if (slug) {
        const projectData = await getProjectBySlug(slug)
        setProject(projectData)
        setIsLoading(false)
      }
    }

    fetchProject()
  }, [slug])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <p className="mb-8">The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Button asChild>
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/projects" className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all projects
      </Link>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
          <Image 
            src={project.imageUrl} 
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {project.details?.overview && (
                <>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
                  <p className="text-lg">{project.details.overview}</p>
                </>
              )}
              
              {project.details?.challenges && (
                <>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Challenges & Solutions</h2>
                  <p className="text-lg">{project.details.challenges}</p>
                </>
              )}
              
              {project.details?.features && (
                <>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.details.features.map((feature, index) => (
                      <li key={index} className="text-lg">{feature}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {project.details?.learnings && (
                <>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">What I Learned</h2>
                  <p className="text-lg">{project.details.learnings}</p>
                </>
              )}

              {/* Display markdown content if available and details are missing */}
              {project.content && !project.details && (
                <div className="mt-8" dangerouslySetInnerHTML={{ __html: project.content }} />
              )}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-card rounded-xl p-6 shadow-md sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              
              {project.date && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Date</h4>
                  <p>{project.date}</p>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.demoUrl || project.githubUrl) && (
                <div className="flex flex-col gap-3 mt-6">
                  {project.demoUrl && (
                    <Button asChild className="w-full">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button variant="outline" asChild className="w-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetailsPage