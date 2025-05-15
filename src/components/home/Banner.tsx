'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'

export default function Banner() {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/arifmiah07' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/arifmiah07' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com/arifmiah01' },
  ]

  return (
    <section className="py-10 md:py-16">
      <div className="rounded-xl bg-muted/50 p-6 md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Currently Available for <span className="text-primary">Team Projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              I specialize in building modern web applications using React, Next.js, and TypeScript, Node.js, Express js and MongoDb. 
              Let&apos;s collaborate on your next project and bring your ideas to life.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 rounded-md border border-muted-foreground/20 bg-background px-4 py-2 hover:bg-muted/50 transition-colors"
              >
                See my work <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-sm text-muted-foreground">Latest update</p>
              <p className="mt-1">
                Currently working on{" "}
                <a href="https://github.com/arifmiah07/vibe-chat" target='_blank' className="text-primary hover:underline">
                 Vibe Chat - Realtime chat Application.
                </a>
              </p>
                <p className=''>Tech stack: <span className='text-green-500'> Socket.io, Mongoose, Express, TypeScript, Next.js, Redux</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}