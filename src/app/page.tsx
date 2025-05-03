import Hero from '@/components/home/Hero'
import Banner from '@/components/home/Banner'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import Skills from '@/components/home/Skills'
import Experience from '@/components/home/Experience'
import FadeIn from '@/components/animations/FadeIn'
import Education from '@/components/home/Education'


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        <Hero />
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <Banner />
      </FadeIn>
      
      <FadeIn delay={0.3}>
        <Skills />
      </FadeIn>
      
      <FadeIn delay={0.4}>
        <ProjectsPreview />
      </FadeIn>
      
      <FadeIn delay={0.5}>
        <Experience />
      </FadeIn>
      
      <FadeIn delay={0.6}>
        <Education />
      </FadeIn>
    </div>
  )
}