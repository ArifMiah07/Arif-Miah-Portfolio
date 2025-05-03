'use client'

import { Code, Palette, Server, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

interface SkillCategory {
  icon: React.ReactNode
  title: string
  skills: string[]
}

const skillsData: SkillCategory[] = [
  {
    icon: <Code size={24} />,
    title: 'Frontend',
    skills: [
      'HTML', 'CSS', 'SCSS', 'Tailwind', 'Bootstrap',
      'JavaScript ES6+', 'TypeScript', 'Next.js', 'React.js', 'React Router DOM',
      'Redux', 'Redux Toolkit', 'Tanstack Query',
      'Material UI', 'Shadcn UI', 'Framer Motion'
    ]
  },
  {
    icon: <Server size={24} />,
    title: 'Backend',
    skills: [
      'Node.js', 'Express', 'Firebase Auth', 'JWT', 'Stripe', 'RESTful APIs', 'Zod'
    ]
  },
  {
    icon: <Palette size={24} />,
    title: 'Database',
    skills: [
      'MongoDB', 'Mongoose', 'DBMS', 'Database Design',
      'Data Modeling', 'Indexing & Optimization'
    ]
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Others',
    skills: [
      'C/C++', 'Python', 'Git', 'GitHub', 'Notion', 'Google Docs', 'Linux',
      'GIMP', 'Inkscape', 'CapCut', 'Figma', 'Photopea', 'Postman'
    ]
  }
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="py-10 md:py-16">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">My Skills</h2>
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I work with on a daily basis
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="rounded-lg border border-muted-foreground/20 bg-muted/20 p-6 transition-all hover:border-primary/20 hover:bg-muted/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {category.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full bg-muted px-3 py-1 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}