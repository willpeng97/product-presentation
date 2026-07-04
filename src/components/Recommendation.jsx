import { Section, Eyebrow, Reveal } from './ui'

const PICKS = [
  {
    tone: 'flow',
    icon: '⚙️',
    head: '選 Power Automate，如果…',
    items: ['工作重複又固定', '想串接系統自動處理', '不需要對話互動'],
  },
  {
    tone: 'copilot',
    icon: '🤖',
    head: '選 Copilot Studio，如果…',
    items: ['需要回答大量問題', '想用對話服務使用者', '希望 AI 理解語意'],
  },
  {
    tone: 'both',
    icon: '✨',
    head: '兩者一起，如果…',
    items: ['要對話也要動手', '客服後端要真的辦事', '追求完整體驗'],
  },
]

export default function Recommendation() {
  return (
    <Section id="choose">
      <Reveal>
        <Eyebrow>選擇建議</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          那，我該選哪一個？
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PICKS.map((p, i) => (
          <Reveal key={p.head} delay={i * 0.12}>
            <div
              className={`h-full rounded-3xl border p-7 ${
                p.tone === 'copilot'
                  ? 'border-cyan-400/30 bg-cyan-500/[0.07]'
                  : p.tone === 'both'
                    ? 'border-fuchsia-400/30 bg-fuchsia-500/[0.07]'
                    : 'border-indigo-400/30 bg-indigo-500/[0.07]'
              }`}
            >
              <div className="mb-4 text-3xl">{p.icon}</div>
              <h3 className="text-lg font-semibold">{p.head}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-white/40">›</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-14 text-center">
        <p className="text-lg text-white/70">
          規則交給流程、對話交給助理，<span className="text-white">整合起來最強。</span>
        </p>
      </Reveal>
    </Section>
  )
}
