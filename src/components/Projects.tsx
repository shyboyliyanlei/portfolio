import { motion } from 'framer-motion'
import projects, { type Project } from '../data/projects'

const ease = 'easeOut' as const

// Tag color cycling for tech stack pills
const tagColors = [
  'bg-purple-500/15 text-purple-300 border-purple-500/20',
  'bg-blue-500/15 text-blue-300 border-blue-500/20',
  'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  'bg-indigo-500/15 text-indigo-300 border-indigo-500/20',
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group flex flex-col rounded-2xl border border-white/5 bg-[#111111] overflow-hidden hover:border-purple-500/40 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
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
    </motion.article>
  )
}

export default function Projects() {
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
