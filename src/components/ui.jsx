import { motion } from 'framer-motion'

/** Fade + rise on scroll into view. */
export function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Full-height-ish scroll section with generous whitespace. */
export function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32 md:px-8 ${className}`}
    >
      {children}
    </section>
  )
}

/** Small eyebrow label above headings. */
export function Eyebrow({ children, tone = 'flow' }) {
  const dot = tone === 'copilot' ? 'bg-cyan-400' : 'bg-indigo-400'
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/70">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  )
}

export function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
      {children}
    </span>
  )
}
