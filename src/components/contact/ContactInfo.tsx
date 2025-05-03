import React from 'react'
import Link from 'next/link'

interface ContactInfoProps {
  icon: React.ReactNode
  title: string
  details: string
  link: string
}

const ContactInfo = ({ icon, title, details, link }: ContactInfoProps) => {
  return (
    <div className="flex items-start">
      <div className="bg-primary/10 rounded-full p-3 text-primary mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <Link 
          href={link} 
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {details}
        </Link>
      </div>
    </div>
  )
}

export default ContactInfo