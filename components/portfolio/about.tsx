import { Section } from './section'

const facts = [
  { label: 'Focus', value: 'AI / Machine Learning' },
  { label: 'Secondary', value: 'Cybersecurity' },
  { label: 'Certified', value: 'IBM AI Developer' },
  { label: 'Based in', value: 'Bhubaneswar, India' },
]

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            {"I'm an "}
            <span className="text-foreground">IBM-certified AI Developer</span> with a
            strong foundation in machine learning, generative AI and data science.
          </p>
          <p>
            My work sits where AI meets security: I apply machine learning to real
            security problems, from threat detection to monitoring, using Python and
            Flask to turn models into usable tools.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-4 md:col-span-2">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-lg border border-border bg-card p-4">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-2 font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
