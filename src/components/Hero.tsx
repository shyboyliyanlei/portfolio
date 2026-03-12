import { motion } from 'framer-motion'

const ease = 'easeOut' as const

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-0">

        {/* ── Left: text content ── */}
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">

          <motion.p
            className="mb-3 text-sm font-semibold tracking-widest uppercase text-cyan-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0, ease }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </motion.h1>

          <motion.p
            className="mt-3 text-xl sm:text-2xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="mt-5 max-w-lg text-base sm:text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
          >
            I build fast, accessible, and beautiful web applications. Passionate about
            clean code, great UX, and solving real-world problems with technology.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
            >
              查看项目
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full font-semibold text-gray-300 border border-white/10 hover:border-white/50 hover:text-white transition-all"
            >
              关于我
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold text-gray-300 border border-white/10 hover:border-white/50 hover:text-white transition-all"
            >
              联系我
            </a>
          </motion.div>
        </div>

        {/* ── Right: avatar ── */}
        <div className="flex-shrink-0 md:flex-1 flex justify-center md:justify-end">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Gradient border wrapper */}
            <div className="p-[3px] rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 shadow-[0_0_60px_rgba(139,92,246,0.4)]">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-[#0f0f0f] flex flex-col items-center justify-center gap-1 select-none">
                <span className="text-7xl sm:text-8xl lg:text-9xl leading-none">🐒</span>
                <span className="text-xs text-gray-500 tracking-widest font-medium">Hi, I'm Jerry</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
