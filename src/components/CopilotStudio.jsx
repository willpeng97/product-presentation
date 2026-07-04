import { motion } from 'framer-motion'
import { Section, Eyebrow, Reveal } from './ui'

const CHAT = [
  { from: 'user', text: '我的訂單到哪了？' },
  { from: 'bot', text: '幫您查到囉，明天送達 🚚' },
  { from: 'user', text: '可以改地址嗎？' },
  { from: 'bot', text: '沒問題，已為您更新 ✅' },
]

function ChatSVG() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-3">
      {CHAT.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 14, x: m.from === 'user' ? 20 : -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.35 }}
          className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
              m.from === 'user'
                ? 'rounded-br-md bg-white text-black'
                : 'rounded-bl-md border border-cyan-400/30 bg-cyan-500/10 text-cyan-50'
            }`}
          >
            {m.from === 'bot' && <span className="mr-1">🤖</span>}
            {m.text}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function CopilotStudio() {
  return (
    <Section id="copilot-studio">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <Eyebrow tone="copilot">Copilot Studio</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            打造會<span className="text-cyan-300">聽懂人話</span>的 AI 助理。
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/60">
            用對話回答問題，還能幫忙動手做事。
          </p>
        </Reveal>
        <Reveal delay={0.15} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <ChatSVG />
        </Reveal>
      </div>
    </Section>
  )
}
