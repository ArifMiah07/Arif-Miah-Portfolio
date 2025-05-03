'use client'
import { motion } from 'framer-motion'
import React from 'react'

interface RevealTextProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function RevealText({ children, delay = 0, className = '' }: RevealTextProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {React.Children.map(children, (childElement, index) => (
        <motion.div key={index} variants={child}>
          {childElement}
        </motion.div>
      ))}
    </motion.div>
  )
}
