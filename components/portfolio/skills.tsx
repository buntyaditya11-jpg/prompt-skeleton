import { Code2, Cpu, ShieldCheck } from 'lucide-react'
import { Section } from './section'

const groups = [
  {
    icon: Cpu,
    title: 'AI / ML',
    primary: true,
    skills: ['AI Development', 'Generative AI', 'Data Science', 'Machine Learning', 'Flask'],
  },
  {
    icon: Code2,
    title: 'Programming',
    primary: false,
    skills: ['Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    primary: false,
    skills: ['SIEM', 'EDR', 'Firewall Management', 'IAM', 'DLP'],
  },
]

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className={`rounded-xl border bg-card p-6 ${
              group.primary ? 'border-primary/60' : 'border-border'
            }`}
          >
            <div className="flex items-center gap-3">
              <group.icon
                className={`size-5 ${group.primary ? 'text-primary' : 'text-muted-foreground'}`}
                aria-hidden="true"
              />
              <h3 className="font-semibold">{group.title}</h3>
              {group.primary && (
                <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                  Primary
                </span>
              )}
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
