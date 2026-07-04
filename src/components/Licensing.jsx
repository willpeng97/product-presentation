import { Section, Eyebrow, Reveal } from './ui'

const PA_PLANS = [
  {
    name: '內建/免費',
    price: '隨 Microsoft 365',
    points: ['雲端流程基本功能', '標準連接器', '個人生產力自動化'],
  },
  {
    name: 'Premium｜每使用者',
    price: '按人計費',
    points: ['一人可建多個流程', 'Premium 連接器', '適合重度使用者'],
    highlight: true,
  },
  {
    name: 'Premium｜每流程',
    price: '按流程計費',
    points: ['整個團隊共用一條流程', '不限使用人數', '適合關鍵共用流程'],
  },
]

const CS_POINTS = [
  { icon: '🎫', title: 'Copilot Studio 授權', desc: '以租戶或方案付費，啟用建立 AI 助理的能力。' },
  { icon: '📨', title: '訊息容量', desc: '依「訊息數」計量，助理每次回覆會消耗容量。' },
  { icon: '➕', title: '額外計費', desc: '超量可加購訊息包，用多少補多少。' },
]

const NEEDS = [
  { icon: '📦', name: 'Microsoft 365', when: '登入身分、Teams、Outlook、SharePoint 整合時。' },
  { icon: '⚡', name: 'Power Platform', when: '需要 Premium 連接器、進階自動化與治理時。' },
  { icon: '🗄️', name: 'Dataverse', when: '要集中儲存結構化資料、共享商業資料時。' },
]

export default function Licensing() {
  return (
    <Section id="licensing">
      <Reveal>
        <Eyebrow>授權與費用</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          花多少、怎麼算，一次說清楚。
        </h2>
        <p className="mt-4 max-w-xl text-lg text-white/60">
          先看兩者授權方式，再看何時需要額外授權。
        </p>
      </Reveal>

      {/* Power Automate plans */}
      <Reveal delay={0.1} className="mt-12">
        <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" /> Power Automate 授權
        </h3>
        <div className="grid gap-5 md:grid-cols-3">
          {PA_PLANS.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl border p-6 ${
                p.highlight
                  ? 'border-indigo-400/40 bg-indigo-500/10'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <p className="text-sm font-semibold">{p.name}</p>
              <p className="mt-1 text-2xl font-bold text-white/90">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-indigo-300">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Copilot Studio billing */}
      <Reveal delay={0.15} className="mt-12">
        <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Copilot Studio 授權與計費
        </h3>
        <div className="grid gap-5 md:grid-cols-3">
          {CS_POINTS.map((c) => (
            <div key={c.title} className="rounded-3xl border border-cyan-400/20 bg-cyan-500/[0.06] p-6">
              <div className="mb-3 text-2xl">{c.icon}</div>
              <p className="font-semibold">{c.title}</p>
              <p className="mt-2 text-sm text-white/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* When you need extra licenses */}
      <Reveal delay={0.2} className="mt-12">
        <h3 className="mb-5 text-sm font-semibold text-white/70">何時還需要這些授權？</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {NEEDS.map((n) => (
            <div key={n.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-3 text-2xl">{n.icon}</div>
              <p className="font-semibold">{n.name}</p>
              <p className="mt-2 text-sm text-white/60">{n.when}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/40">
          ＊實際方案名稱、容量與價格以 Microsoft 官方最新公告為準。
        </p>
      </Reveal>
    </Section>
  )
}
