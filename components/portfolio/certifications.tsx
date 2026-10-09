import { Award } from 'lucide-react'
import { Section } from './section'

const certifications = [
  { name: 'IBM AI Developer', category: 'AI' },
  { name: 'Python for Data Science', category: 'AI' },
  { name: 'AI & Development', category: 'AI' },
  { name: 'Developing AI using Python and Flask', category: 'AI' },
  { name: 'Generative AI: Elevate the Software Development Career', category: 'AI' },
  { name: 'Cybersecurity', category: 'Security' },
  { name: 'ISC2 Candidate', category: 'Security' },
]

export function Certifications() {
  return (
    <Section id="certifications" index="04" title="Certifications">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => {
          const isAi = cert.category === 'AI'
          return (
            <li
              key={cert.name}
              className={`flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                isAi
                  ? 'hover:border-primary/60 hover:shadow-[0_0_28px_-6px_var(--color-primary)]'
                  : 'hover:border-accent/60 hover:shadow-[0_0_28px_-6px_var(--color-accent)]'
              }`}
            >
              <Award
                className={`mt-0.5 size-5 shrink-0 ${isAi ? 'text-primary' : 'text-accent'}`}
                aria-hidden="true"
              />
              <div>
                <p className="font-medium leading-snug">{cert.name}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {cert.category}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
