import { motion } from 'framer-motion'
import { Section, Eyebrow, Reveal } from './ui'

const STEPS = [
  { icon: '📥', label: '收到郵件' },
  { icon: '📎', label: '存附件' },
  { icon: '📊', label: '寫入表格' },
  { icon: '🔔', label: '通知團隊' },
]

function FlowSVG() {
  return (
    <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {STEPS.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="grid h-24 w-24 place-items-center rounded-2xl border border-indigo-400/30 bg-indigo-500/10"
          >
            <span className="text-3xl">{s.icon}</span>
            <span className="mt-1 text-xs text-white/70">{s.label}</span>
          </motion.div>
          {i < STEPS.length - 1 && (
            <motion.svg
              width="34"
              height="16"
              viewBox="0 0 34 16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.15 }}
            >
              <motion.path
                d="M2 8 H30"
                stroke="#818cf8"
                strokeWidth="2.5"
                strokeLinecap="round"
                markerEnd="url(#pa-arrow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 + 0.2 }}
              />
              <defs>
                <marker id="pa-arrow" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                  <path d="M0 0 L5 3 L0 6 Z" fill="#818cf8" />
                </marker>
              </defs>
            </motion.svg>
          )}
        </div>
      ))}
    </div>
  )
}

export default function PowerAutomate() {
  return (
    <Section id="power-automate">
      <Reveal>
        <Eyebrow tone="flow">Power Automate</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          設定好一次，流程<span className="text-indigo-300">自動跑</span>。
        </h2>
        <p className="mt-4 max-w-xl text-lg text-white/60">
          像數位機器人，替你按順序完成每個步驟。
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
        <FlowSVG />
      </Reveal>
    </Section>
  )
}
