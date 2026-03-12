import { motion } from 'framer-motion'

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/shyboyliyanlei',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: '邮箱',
    href: 'mailto:13541@qq.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
      </svg>
    ),
  },
]

const quickLinks = [
  { label: '首页',     href: '#hero'     },
  { label: '项目展示', href: '#projects' },
  { label: '关于我',   href: '#about'   },
  { label: '联系方式', href: '#contact'  },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">

      {/* ── Top banner ── */}
      <div className="relative overflow-hidden py-16">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[200px] rounded-full bg-purple-600/10 blur-3xl" />
        </div>

        <motion.div
          className="relative max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-4">
            Thank You for Visiting
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
            感谢你花时间浏览这里 ✨
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl mx-auto">
            每一行代码都是一次思考的沉淀，每一个项目都是一段成长的印记。
            希望这里的内容能给你带来一些启发或帮助。
            如果你有好的想法或合作机会，欢迎随时联系我。
          </p>
          <p className="mt-3 text-gray-500 text-sm">
            期待与志同道合的你共同创造更多可能 —— 让我们一起把想法变成现实。
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
            >
              联系我
            </a>
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full border border-white/10 text-gray-300 text-sm font-semibold hover:border-white/25 hover:text-white transition-colors"
            >
              查看项目
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Middle: nav + social ── */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Quick links */}
        <nav className="flex items-center gap-1 flex-wrap justify-center">
          {quickLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-full text-sm text-gray-500 hover:text-gray-200 hover:bg-white/5 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/25 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© {currentYear} &lt;YourName /&gt; · All rights reserved.</span>
          <span>Built with React · TypeScript · Tailwind CSS · Framer Motion</span>
        </div>
      </div>

    </footer>
  )
}
