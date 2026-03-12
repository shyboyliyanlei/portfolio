import { useEffect, useState } from 'react'

const navLinks = [
  { label: '首页',     href: '#hero'     },
  { label: '项目展示', href: '#projects' },
  { label: '关于我',   href: '#about'   },
  { label: '联系方式', href: '#contact'  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          &lt;YourName /&gt;
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-full text-sm font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}
