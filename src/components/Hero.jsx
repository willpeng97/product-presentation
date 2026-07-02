import { motion } from 'framer-motion'
import { GradientText } from './ui'

function BusyToCalmSVG() {
  return (
    <svg viewBox="0 0 480 320" className="h-auto w-full" role="img" aria-label="從忙亂的手動作業到自動化與 AI 協助">
      {/* tired person doing manual, repetitive work */}
      <motion.g
        initial={{ rotate: -3 }}
        animate={{ rotate: 3 }}
        transition={{ duration: 1.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{ transformOrigin: '120px 180px' }}
      >
        <circle cx="120" cy="120" r="26" fill="#1f2937" stroke="#475569" strokeWidth="2" />
        <circle cx="112" cy="116" r="3" fill="#94a3b8" />
        <circle cx="128" cy="116" r="3" fill="#94a3b8" />
        <path d="M110 132 q10 8 20 0" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <rect x="96" y="150" width="48" height="60" rx="12" fill="#1f2937" stroke="#475569" strokeWidth="2" />
      </motion.g>

      {/* stack of repetitive papers flying in */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={40}
          y={70 + i * 8}
          width="42"
          height="54"
          rx="6"
          fill="#111827"
          stroke="#374151"
          strokeWidth="2"
          initial={{ x: 40, opacity: 0.4 }}
          animate={{ x: [40, 60, 40], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}

      {/* arrow */}
      <motion.path
        d="M180 160 h60"
        stroke="#6366f1"
        strokeWidth="3"
        strokeLinecap="round"
        markerEnd="url(#arrow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#6366f1" />
        </marker>
      </defs>

      {/* automation gear + AI spark */}
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '320px 130px' }}
      >
        <path
          d="M320 100 l6 14 15 -3 -6 15 12 10 -14 6 3 15 -15 -6 -10 12 -6 -14 -15 3 6 -15 -12 -10 14 -6 -3 -15 15 6 10 -12 z"
          fill="#6366f1"
          opacity="0.9"
        />
        <circle cx="320" cy="130" r="12" fill="#05050a" />
      </motion.g>
      <motion.g
        initial={{ scale: 0.7, opacity: 0.5 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <path d="M400 200 l5 13 13 5 -13 5 -5 13 -5 -13 -13 -5 13 -5 z" fill="#06b6d4" />
      </motion.g>

      {/* happy person */}
      <circle cx="360" cy="230" r="22" fill="#0e7490" opacity="0.25" />
      <circle cx="360" cy="222" r="16" fill="#164e63" stroke="#22d3ee" strokeWidth="2" />
      <circle cx="354" cy="219" r="2.4" fill="#a5f3fc" />
      <circle cx="366" cy="219" r="2.4" fill="#a5f3fc" />
      <path d="M352 227 q8 8 16 0" fill="none" stroke="#a5f3fc" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="why" className="relative flex min-h-[92vh] items-center pt-28">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 3 分鐘看懂
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            重複的事交給自動化，<br />
            <GradientText>難的事交給 AI 助理。</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-md text-lg text-white/60"
          >
            每天手動處理的瑣事，讓人又累又易錯。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#power-automate" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-105">
              開始了解
            </a>
            <a href="#compare" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5">
              直接看比較表
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
        >
          <BusyToCalmSVG />
        </motion.div>
      </div>
    </section>
  )
}
