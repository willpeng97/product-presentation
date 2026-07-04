import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '#why', label: '為何' },
  { href: '#power-automate', label: 'Power Automate' },
  { href: '#copilot-studio', label: 'Copilot Studio' },
  { href: '#integration', label: '整合' },
  { href: '#cases', label: '案例' },
  { href: '#licensing', label: '授權費用' },
  { href: '#compare', label: '比較' },
  { href: '#choose', label: '建議' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-black/60 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm">
            ⚡
          </span>
          <span className="text-sm">自動化 × AI 助理</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#choose"
          className="rounded-xl bg-white px-3.5 py-1.5 text-sm font-medium text-black transition-transform hover:scale-105"
        >
          怎麼選
        </a>
      </nav>
    </motion.header>
  )
}
