import { Section, Eyebrow, Reveal } from './ui'

const CASES = [
  {
    icon: '🧾',
    tag: '財務',
    title: '發票自動歸檔',
    desc: '收到發票自動存檔並登錄，月結省下大半時間。',
    tone: 'flow',
  },
  {
    icon: '💬',
    tag: '客服',
    title: '24 小時客服助理',
    desc: 'AI 助理即時回答常見問題，客服只處理疑難。',
    tone: 'copilot',
  },
  {
    icon: '🧑‍💼',
    tag: '人資',
    title: '新人報到自動化',
    desc: '報到當天自動開帳號、發設備、寄歡迎信。',
    tone: 'flow',
  },
]

export default function CaseStudy() {
  return (
    <Section id="cases">
      <Reveal>
        <Eyebrow>企業案例</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          真實情境，立刻有感。
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CASES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.12}>
            <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/20 hover:bg-white/[0.06]">
              <div
                className={`mb-5 grid h-12 w-12 place-items-center rounded-xl text-2xl ${
                  c.tone === 'copilot' ? 'bg-cyan-500/15' : 'bg-indigo-500/15'
                }`}
              >
                {c.icon}
              </div>
              <span className="text-xs font-medium uppercase tracking-wide text-white/40">
                {c.tag}
              </span>
              <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
