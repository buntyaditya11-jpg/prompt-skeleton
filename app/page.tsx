import { About } from '@/components/portfolio/about'
import { Certifications } from '@/components/portfolio/certifications'
import { Contact } from '@/components/portfolio/contact'
import { Education } from '@/components/portfolio/education'
import { Experience } from '@/components/portfolio/experience'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { SiteNav } from '@/components/portfolio/site-nav'
import { Skills } from '@/components/portfolio/skills'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <p className="mx-auto max-w-6xl px-6 font-mono text-xs text-muted-foreground">
          {'© 2026 Aditya Dixit · Bhubaneswar, India'}
        </p>
      </footer>
    </>
  )
}
