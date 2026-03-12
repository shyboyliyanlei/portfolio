import { motion } from 'framer-motion'

const ease = 'easeOut' as const

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
      </svg>
    ),
    label: '邮箱',
    value: '13541@qq.com',
    href: 'mailto:13541@qq.com',
    gradient: 'from-purple-500 to-blue-500',
    glow: 'group-hover:shadow-purple-500/20',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: '电话',
    value: '185 4414 5261',
    href: 'tel:18544145261',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'group-hover:shadow-blue-500/20',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            联系{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              我
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
          <p className="mt-6 text-gray-400 max-w-md mx-auto">
            无论是项目合作、技术交流还是工作机会，欢迎随时联系我，我会尽快回复。
          </p>
        </motion.div>

        {/* Contact cards + WeChat QR */}
        <div className="flex flex-col items-center gap-8">

          {/* Email & Phone */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactItems.map(({ icon, label, value, href, gradient, glow }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 rounded-2xl border border-white/5 bg-[#111111] p-6 hover:border-white/10 hover:shadow-xl ${glow} transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Icon circle */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg`}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-1">
                    {label}
                  </p>
                  <p className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* WeChat QR */}
          <motion.div
            className="w-full sm:w-80 rounded-2xl border border-white/5 bg-[#111111] p-6 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500">
              微信
            </p>
            {/* QR placeholder — replace with <img src={wechatQR} ... /> when ready */}
            <div className="w-40 h-40 rounded-xl border-2 border-dashed border-white/10 bg-[#0a0a0a] flex flex-col items-center justify-center gap-2 text-gray-600">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-30">
                <path d="M9.5 3A6.5 6.5 0 0116 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 019.5 16 6.5 6.5 0 013 9.5 6.5 6.5 0 019.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
              </svg>
              <span className="text-xs text-center px-2">二维码即将上线</span>
            </div>
            <p className="text-sm text-gray-500">扫码添加微信</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
