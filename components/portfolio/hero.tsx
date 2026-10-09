import { ArrowRight } from 'lucide-react'
import { NeuralBackground } from './neural-background'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <NeuralBackground />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          Aditya Dixit · AI/ML Developer
        </p>
        <h1
          id="hero-heading"
          className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-7xl"
        >
          Building intelligent systems with{' '}
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            AI
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
          AI/ML developer and MCA student at DDCE Utkal University, with hands-on
          cybersecurity experience. I build AI-driven solutions with Python and Flask.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-border bg-card/60 px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
