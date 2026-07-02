import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import PowerAutomate from './components/PowerAutomate'
import CopilotStudio from './components/CopilotStudio'
import Integration from './components/Integration'
import CaseStudy from './components/CaseStudy'
import Licensing from './components/Licensing'
import Comparison from './components/Comparison'
import Recommendation from './components/Recommendation'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-300"
      />
      <Nav />
      <main>
        <Hero />
        <PowerAutomate />
        <CopilotStudio />
        <Integration />
        <CaseStudy />
        <Licensing />
        <Comparison />
        <Recommendation />
      </main>
      <Footer />
    </div>
  )
}
