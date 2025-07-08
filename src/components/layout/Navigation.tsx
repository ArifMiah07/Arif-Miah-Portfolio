'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className={`transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Arif<span className="text-primary">Miah</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors hover:text-primary ${
                pathname === link.path ? 'text-primary font-medium' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/Arif_Miah_Full_Stack_Developer_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-md z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`py-2 transition-colors hover:text-primary ${
                  pathname === link.path ? 'text-primary font-medium' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/https://drive.google.com/file/d/10Cf5uKo2ewTm6aouCweC_V2M4eFbTjS0/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}