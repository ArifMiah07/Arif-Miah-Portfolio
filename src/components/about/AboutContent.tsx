//src/components/about/AboutContent.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { Education, Experience, Skills } from '@/lib/types';
import profileImage from '../../../public/arifmiah.png'
// import { Metadata } from 'next'
// Define props type
interface AboutContentProps {
  education: Education[];
  experience: Experience[];
  skills: Skills;
}

const AboutContent = ({
  education,
  experience,
  skills,
}: AboutContentProps) => {
    return (
        <div className="container mx-auto py-16 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Learn more about my background, experience, and skills as a developer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">Hi, I&apos;m {'<'}Arif Miah{' />'}</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a passionate Full Stack Developer with a strong focus on building modern, 
              responsive web applications. With several years of experience in web development, 
              I specialize in creating user-friendly and visually appealing interfaces that 
              provide exceptional user experiences.
            </p>
            <p>
              My journey into programming began with a curiosity about how websites work, 
              which led me to learn HTML and CSS. Since then, I&apos;ve expanded my knowledge to 
              include JavaScript, TypeScript, React, Next.js, and various backend technologies. 
              I enjoy tackling complex problems and am constantly learning new technologies to 
              stay up-to-date with the rapidly evolving tech landscape.
            </p>
            <p>
              Outside of coding, I enjoy hiking, reading science fiction novels, and experimenting 
              with new cooking recipes. I believe in continuous learning and sharing knowledge with 
              the community through my blog and open-source contributions.
            </p>
          </div>
          
          <div className="pt-4">
            <a href="/resume.pdf" download>
              <Button className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src={profileImage || 'placeholder.png'}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-muted"
            >
              <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary" />
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <span className="text-xs font-medium text-white bg-primary rounded-full px-2 py-0.5 ml-3">
                  {job.period}
                </span>
              </div>
              <p className="text-lg text-primary font-medium mb-2">{job.company}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {job.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-muted"
            >
              <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary" />
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <span className="text-xs font-medium text-white bg-primary rounded-full px-2 py-0.5 ml-3">
                  {edu.period}
                </span>
              </div>
              <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
              <p className="text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        
        <div className="space-y-12">
          {/* Level 1 Skills - Technical */}
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="h-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Level 2 Skills - Frameworks & Tools */}
          <div>
            <h3 className="text-xl font-bold mb-6">Frameworks & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.frameworks.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-muted/50 rounded-lg p-4 text-center hover:bg-muted transition-colors"
                >
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    );
};

export default AboutContent;