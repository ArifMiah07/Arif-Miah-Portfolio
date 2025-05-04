'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollAnimation({ children, className = '' }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  
  const { scrollY } = useScroll()
  
  // Calculate when the element should start and stop animating
  const initial = elementTop - clientHeight
  const final = elementTop + 300
  
  // Transform opacity from 0 to 1 based on scroll position
  const opacity = useTransform(scrollY, [initial, final], [0, 1])
  const y = useTransform(scrollY, [initial, final], [100, 0])
  
  useEffect(() => {
    const element = ref.current
    const onResize = () => {
      if (element) {
        setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
        setClientHeight(window.innerHeight)
      }
    }
    
    onResize()
    window.addEventListener('resize', onResize)
    
    return () => window.removeEventListener('resize', onResize)
  }, [ref])
  
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ opacity, y }}>{children}</motion.div>
    </div>
  )
}