'use client'

import { Briefcase } from 'lucide-react'
import ScrollAnimation from '../animations/ScrollAnimation'

interface ExperienceItem {
  title: string
  team: string
  duration: string
  description: string
  technologies: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    title: 'Full Stack Developer',
    team: 'Logic Region',
    duration: 'April 2025',
    description: 'Collaborated on a team project called "Medicine Sphere" with 5 team members. Contributed to both frontend and backend development, as well as database design and management.',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'TypeScript', 'Redux RTK Query', 'Node.js', 'Express.js', 'Mongoose', 'Zod', 'Postman', 'JWT', 'NextAuth', 'Vercel']
  },
  {
    title: 'Full Stack Developer',
    team: 'Revive 11',
    duration: 'April 2025',
    description: 'Worked on a collaborative project called "Bicycle Sphere" with a 5-member team. Took responsibility for both backend and frontend development, along with database management.',
    technologies: ['React.js', 'Tailwind CSS', 'Shadcn UI', 'React Router DOM', 'TypeScript', 'Redux RTK Query', 'Node.js', 'Express.js', 'Mongoose', 'Zod', 'Postman', 'JWT', 'Firebase', 'Vercel']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-16">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold md:text-3xl">Experience</h2>
        </div>
        
        <div className="relative space-y-8 before:absolute before:left-8 before:top-0 before:h-full before:border-l-2 before:border-dashed before:border-muted-foreground/30 pl-16 md:space-y-12">
          {experienceData.map((item, index) => (
            <ScrollAnimation key={index}>
              <div className="relative">
                <span className="absolute -left-16 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {index + 1}
                </span>
                <div className="rounded-lg border border-muted-foreground/20 bg-muted/20 p-6 transition-all hover:border-primary/20 hover:bg-muted/30">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                      {item.duration}
                    </span>
                  </div>
                  <p className="mb-4 text-primary">{item.team}</p>
                  <p className="mb-4 text-muted-foreground">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}