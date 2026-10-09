import { Section } from './section'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'DDCE Utkal University',
    period: 'Nov 2025 – Present',
    note: 'Focus on Artificial Intelligence & Machine Learning',
  },
  {
    degree: 'BSc Chemistry',
    school: 'UN College of Science & Technology',
    period: '2019',
    note: null,
  },
]

export function Education() {
  return (
    <Section id="education" index="06" title="Education">
      <ol className="relative space-y-8 border-l border-border pl-8">
        {education.map((item, i) => (
          <li key={item.degree} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[37px] top-1.5 size-3 rounded-full ring-4 ring-background ${
                i === 0 ? 'bg-primary' : 'bg-muted-foreground'
              }`}
            />
            <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{item.degree}</h3>
            <p className="mt-1 text-primary">{item.school}</p>
            {item.note && <p className="mt-2 text-muted-foreground">{item.note}</p>}
          </li>
        ))}
      </ol>
    </Section>
  )
}
