import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

const ease = 'easeOut' as const

const stats = [
  { value: '3+',  label: '年开发经验' },
  { value: '20+', label: '完成项目' },
  { value: '10+', label: '掌握技术栈' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            关于{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              我自己
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: bio + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg">
              <p>
                你好！我是一名<span className="text-white font-medium">自学成长的全栈开发工程师</span>，
                凭借对技术的热情和持续学习的驱动力，从零掌握了前后端开发的完整体系。
              </p>
              <p>
                在<span className="text-white font-medium">前端</span>方向，我深入掌握
                React / Next.js 与 Vue 3 生态，熟练运用 TypeScript 构建类型安全的大型应用，
                擅长使用 Tailwind CSS 搭配 Framer Motion 打造流畅的交互体验。
              </p>
              <p>
                在<span className="text-white font-medium">后端</span>方向，我熟悉 Node.js（Express / NestJS）
                与 Python（FastAPI）服务端开发，具备 RESTful API 及 GraphQL 接口设计经验，
                并能独立完成数据库建模（PostgreSQL / MongoDB / Redis）与性能优化。
              </p>
              <p>
                此外，我关注<span className="text-white font-medium"> DevOps 与云原生</span>实践，
                熟悉 Docker 容器化、GitHub Actions CI/CD 流水线搭建以及 AWS / Vercel 部署方案，
                能够从开发到上线独立交付完整产品。
              </p>
              <p>
                我相信<span className="text-white font-medium">优秀的代码不只是能跑通，更要易读、易维护</span>。
                始终追求简洁架构与极致用户体验的平衡，期待与你一起构建出色的产品。
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  className="rounded-2xl border border-white/5 bg-[#111111] p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease }}
                >
                  <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: skill categories ── */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.08, ease }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border font-medium ${cat.color} ${cat.borderColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
