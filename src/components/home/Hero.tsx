'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown } from 'lucide-react'


import profileImage from '../../../public/arifmiah.png'

export default function Hero() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-10 md:py-16">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
            MERN Stack Developer
          </span>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
            Hi, I&apos;m <span className="text-primary"> Arif Miah</span>
          </h1>
          <div className="text-xl md:text-2xl h-16 md:h-12 text-muted-foreground mb-6">
            <TypeAnimation
              sequence={[
                'Full Stack MERN Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'React Specialist',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="mb-8 max-w-lg text-muted-foreground">
            I build exceptional digital experiences that are fast, accessible, 
            and visually appealing. Let&apos;s bring your ideas to life with modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* todo: add options for download and online reading and preview  */}
            <a 
              href="/images/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Download Resume
            </a>
            <a 
              href="#projects"
              className="rounded-md border border-muted-foreground/20 bg-background px-6 py-3 hover:bg-muted/50 transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src={profileImage || 'placeholder.png'}
              alt="Arif Miah profile image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="flex justify-center mt-12 md:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button 
          onClick={handleScrollDown}
          className="animate-bounce rounded-full p-2 border border-muted-foreground/20 hover:bg-muted/50 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </motion.div>
    </section>
  )
}