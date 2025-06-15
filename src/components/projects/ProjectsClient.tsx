'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectGrid from '@/components/projects/ProjectGrid'
import { Project } from '@/lib/types'
import { getAllProjects } from '@/lib/data'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ProjectClient = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Get all unique technology tags from projects
  const getAllTechnologies = (projects: Project[]): string[] => {
    const allTags = projects.reduce((acc: string[], project) => {
      return [...acc, ...project.technologies]
    }, [])
    return Array.from(new Set(allTags))
  }

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects()
      setProjects(allProjects)
      setFilteredProjects(allProjects)
      setIsLoading(false)
    }
    
    fetchProjects()
  }, [])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    
    if (filter === 'all') {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter(project => 
        project.technologies.includes(filter)
      )
      setFilteredProjects(filtered)
    }
  }

  const tags = ['all', ...getAllTechnologies(projects)]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my latest work and personal projects. Each project represents my skills,
          creativity, and problem-solving abilities.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 h-auto">
            {tags.map((tag) => (
              <TabsTrigger 
                key={tag} 
                value={tag}
                onClick={() => handleFilterChange(tag)}
                className="capitalize"
              >
                {tag}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <ProjectGrid projects={filteredProjects} />
      )}
    </div>
  )
}

export default ProjectClient;