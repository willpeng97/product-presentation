import { motion } from 'framer-motion'
import { Section, Eyebrow, Reveal } from './ui'

function IntegrationSVG() {
  return (
    <svg viewBox="0 0 520 220" className="h-auto w-full" role="img" aria-label="Copilot Studio 呼叫 Power Automate 完成任務">
      {/* user */}
      <circle cx="60" cy="110" r="26" fill="#0e7490" opacity="0.2" />
      <circle cx="60" cy="110" r="18" fill="#164e63" stroke="#22d3ee" strokeWidth="2" />
      <text x="60" y="116" textAnchor="middle" fontSize="16">🙋</text>
      <text x="60" y="160" textAnchor="middle" fill="#94a3b8" fontSize="12">使用者提問</text>

      {/* copilot */}
      <rect x="160" y="80" width="90" height="60" rx="14" fill="#083344" stroke="#22d3ee" strokeWidth="2" />
      <text x="205" y="108" textAnchor="middle" fontSize="18">🤖</text>
      <text x="205" y="128" textAnchor="middle" fill="#a5f3fc" fontSize="11">Copilot Studio</text>

      {/* power automate */}
      <rect x="330" y="80" width="90" height="60" rx="14" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
      <text x="375" y="108" textAnchor="middle" fontSize="18">⚙️</text>
      <text x="375" y="128" textAnchor="middle" fill="#c7d2fe" fontSize="11">Power Automate</text>

      {/* backend */}
      <rect x="470" y="86" width="40" height="48" rx="8" fill="#111827" stroke="#475569" strokeWidth="2" />
      <text x="490" y="116" textAnchor="middle" fontSize="16">🗄️</text>

      {/* animated connectors */}
      {[
        { d: 'M86 110 H160', c: '#22d3ee', delay: 0 },
        { d: 'M250 110 H330', c: '#818cf8', delay: 0.5 },
        { d: 'M420 110 H470', c: '#818cf8', delay: 1 },
      ].map((seg, i) => (
        <motion.path
          key={i}
          d={seg.d}
          stroke={seg.c}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="6 8"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: seg.delay }}
        />
      ))}
      {/* travelling pulse */}
      <motion.circle
        r="4"
        fill="#f0f9ff"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 1, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, delay: 1.4, repeat: Infinity, repeatDelay: 0.6 }}
      >
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.4s" path="M86 110 H160 250 H330 420 H470" />
      </motion.circle>
    </svg>
  )
}

export default function Integration() {
  return (
    <Section id="integration">
      <Reveal>
        <Eyebrow>整合流程</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          助理負責「對話」，流程負責「動手」。
        </h2>
        <p className="mt-4 max-w-xl text-lg text-white/60">
          Copilot 聽懂需求後，呼叫 Power Automate 完成任務。
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
        <IntegrationSVG />
      </Reveal>
    </Section>
  )
}
