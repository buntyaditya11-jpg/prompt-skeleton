import { BrainCircuit, LayoutDashboard } from 'lucide-react'
import { Section } from './section'

const projects = [
  {
    icon: BrainCircuit,
    tag: 'Featured · Machine Learning',
    title: 'AI-Driven Cybersecurity Solutions',
    description:
      'A Python and Flask application that uses machine learning models to detect and analyze threats, helping surface malicious activity faster and with fewer false alarms.',
    stack: ['Python', 'Flask', 'Machine Learning', 'Threat Detection'],
  },
  {
    icon: LayoutDashboard,
    tag: 'Data Visualization',
    title: 'Security Monitoring Dashboards',
    description:
      'Data visualization dashboards for security monitoring that turn raw logs and alerts into clear, actionable views for analysts.',
    stack: ['Data Science', 'Visualization', 'Python', 'Security Monitoring'],
  },
]

export function Projects() {
  return (
    <Section id="projects" index="02" title="AI Projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/60 md:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100 md:opacity-60"
            />
            <div className="relative flex size-12 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
              <project.icon className="size-6" aria-hidden="true" />
            </div>
            <p className="relative mt-8 font-mono text-xs uppercase tracking-wider text-accent">
              {project.tag}
            </p>
            <h3 className="relative mt-3 text-2xl font-semibold tracking-tight text-balance md:text-3xl">
              {project.title}
            </h3>
            <p className="relative mt-4 flex-1 leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="relative mt-8 flex flex-wrap gap-2" aria-label="Technologies">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
