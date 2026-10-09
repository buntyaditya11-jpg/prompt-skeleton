import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-baseline gap-4 md:mb-14">
          <span className="font-mono text-sm text-primary">{index}</span>
          <h2
            id={`${id}-heading`}
            className="text-3xl font-semibold tracking-tight text-balance md:text-4xl"
          >
            {title}
          </h2>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-border sm:block" />
        </div>
        {children}
      </div>
    </section>
  )
}
