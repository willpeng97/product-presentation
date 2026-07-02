import { Section, Eyebrow, Reveal } from './ui'

const ROWS = [
  { label: '一句話定義', pa: '自動執行流程', cs: '建立 AI 聊天助理' },
  { label: '互動方式', pa: '依觸發條件自動跑', cs: '用自然語言對話' },
  { label: '最擅長', pa: '重複、規則明確的工作', cs: '回答問題、理解需求' },
  { label: '典型場景', pa: '資料搬移、通知、審批', cs: '客服、內部問答、導引' },
  { label: '計費重點', pa: '每使用者／每流程', cs: '授權＋訊息容量' },
  { label: '兩者關係', pa: '被助理呼叫來動手', cs: '呼叫流程完成任務' },
]

export default function Comparison() {
  return (
    <Section id="compare">
      <Reveal>
        <Eyebrow>比較表</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          一張表看懂差異。
        </h2>
      </Reveal>
      <Reveal delay={0.15} className="mt-10 overflow-hidden rounded-3xl border border-white/10">
        <div className="grid grid-cols-3 bg-white/[0.04] text-sm font-semibold">
          <div className="p-4 text-white/50">項目</div>
          <div className="p-4 text-indigo-300">⚙️ Power Automate</div>
          <div className="p-4 text-cyan-300">🤖 Copilot Studio</div>
        </div>
        {ROWS.map((r, i) => (
          <div
            key={r.label}
            className={`grid grid-cols-3 border-t border-white/5 text-sm ${
              i % 2 ? 'bg-white/[0.015]' : ''
            }`}
          >
            <div className="p-4 font-medium text-white/50">{r.label}</div>
            <div className="p-4 text-white/80">{r.pa}</div>
            <div className="p-4 text-white/80">{r.cs}</div>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
