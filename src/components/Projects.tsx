import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import projects, { type Project } from '../data/projects'

const ease = 'easeOut' as const

const CARD_WIDTH = 320 // px, matches w-80
const CARD_GAP = 24   // gap-6 = 1.5rem = 24px

// Tag color cycling for tech stack pills
const tagColors = [
  'bg-purple-500/15 text-purple-300 border-purple-500/20',
  'bg-blue-500/15 text-blue-300 border-blue-500/20',
  'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  'bg-indigo-500/15 text-indigo-300 border-indigo-500/20',
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex-shrink-0 w-80 flex flex-col rounded-2xl border border-white/5 bg-[#111111] overflow-hidden hover:border-purple-500/40 transition-colors duration-300">
      {/* Screenshot */}
      <div className="aspect-video w-full overflow-hidden bg-[#1a1a1a]">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 flex items-center justify-center">
            <span className="text-4xl opacity-20">⬡</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-bold text-white leading-snug">{project.name}</h3>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.techStack.map((tech, i) => (
            <span
              key={tech}
              className={`text-xs px-2.5 py-1 rounded-full border font-medium ${tagColors[i % tagColors.length]}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 self-start px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-colors"
          >
            实时预览 →
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollTo = useCallback((direction: 'prev' | 'next') => {
    const el = scrollRef.current
    if (!el) return
    const step = CARD_WIDTH + CARD_GAP
    el.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' })
  }, [])

  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const step = CARD_WIDTH + CARD_GAP
    const index = Math.round(el.scrollLeft / step)
    setActiveIndex(Math.min(index, projects.length - 1))
  }, [])

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            精选{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              项目
            </span>
          </h2>
          {/* Decorative underline */}
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          {/* Prev button */}
          <button
            onClick={() => scrollTo('prev')}
            aria-label="上一个"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/30 transition-colors shadow-lg"
          >
            ‹
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-6 overflow-x-scroll scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => scrollTo('next')}
            aria-label="下一个"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/30 transition-colors shadow-lg"
          >
            ›
          </button>
        </motion.div>

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`跳到第 ${i + 1} 个项目`}
              onClick={() => {
                const el = scrollRef.current
                if (!el) return
                const step = CARD_WIDTH + CARD_GAP
                el.scrollTo({ left: i * step, behavior: 'smooth' })
                setActiveIndex(i)
              }}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 h-2 bg-purple-400'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
