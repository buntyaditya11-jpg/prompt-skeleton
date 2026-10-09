import { Section } from './section'

const highlights = [
  'Cut false positives by 30% through SIEM alert triaging',
  'Improved incident response time by 25% using EDR tools',
  'Investigated PowerShell-based attacks',
  'Worked on Identity & Access Management (IAM) and Data Loss Prevention (DLP)',
  'Completed 5 phases of structured security assessments',
]

const stats = [
  { value: '30%', label: 'fewer false positives' },
  { value: '25%', label: 'faster response time' },
  { value: '5', label: 'assessment phases' },
]

export function Experience() {
  return (
    <Section id="experience" index="05" title="Experience">
      <article className="rounded-xl border border-border bg-card p-6 md:p-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <div>
            <h3 className="text-xl font-semibold md:text-2xl">
              Cybersecurity Assessment Intern
            </h3>
            <p className="mt-1 text-primary">Learntube.ai</p>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            {'Aug 2025 – Jan 2026'}
          </p>
        </div>

        <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold text-accent md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 space-y-3">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
              <span aria-hidden="true" className="font-mono text-primary">
                {'>'}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  )
}
