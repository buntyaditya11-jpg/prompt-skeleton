import { ArrowUpRight, Code2, Mail, UserRound } from 'lucide-react'
import { Section } from './section'

const GITHUB_URL = 'https://github.com/your-username'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'buntyaditya11@gmail.com',
    href: 'mailto:buntyaditya11@gmail.com',
    external: false,
  },
  {
    icon: UserRound,
    label: 'LinkedIn',
    value: 'in/aditya-dixit-bb67b6164',
    href: 'https://www.linkedin.com/in/aditya-dixit-bb67b6164',
    external: true,
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: 'github.com/your-username',
    href: GITHUB_URL,
    external: true,
  },
]

export function Contact() {
  return (
    <Section id="contact" index="07" title="Contact">
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {"Open to AI/ML roles, internships and collaborations, especially where AI meets security. Let's talk."}
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex h-full items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <link.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {link.label}
                </span>
                <span className="mt-1 block truncate font-medium">{link.value}</span>
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
