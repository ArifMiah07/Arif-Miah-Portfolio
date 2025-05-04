'use client'
import { motion } from 'framer-motion'
import React from 'react'

interface FadeInProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
}: FadeInProps) {
  let initial : Record<string, number> = { opacity: 0 }
  
  switch (direction) {
    case 'up':
      initial = { ...initial, y: 40 }
      break
    case 'down':
      initial = { ...initial, y: -40 }
      break
    case 'left':
      initial = { ...initial, x: 40 }
      break
    case 'right':
      initial = { ...initial, x: -40 }
      break
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  )
}