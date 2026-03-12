export interface Skill {
  name: string
  category: string
}

export interface SkillCategory {
  label: string
  color: string        // Tailwind color classes for tag
  borderColor: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: '前端开发',
    color: 'bg-purple-500/15 text-purple-300',
    borderColor: 'border-purple-500/25',
    skills: ['React', 'Next.js', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    label: '后端开发',
    color: 'bg-blue-500/15 text-blue-300',
    borderColor: 'border-blue-500/25',
    skills: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'Python', 'Go', 'REST API', 'GraphQL'],
  },
  {
    label: '数据库',
    color: 'bg-cyan-500/15 text-cyan-300',
    borderColor: 'border-cyan-500/25',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Drizzle ORM'],
  },
  {
    label: '工具 & DevOps',
    color: 'bg-indigo-500/15 text-indigo-300',
    borderColor: 'border-indigo-500/25',
    skills: ['Docker', 'GitHub Actions', 'AWS', 'Vercel', 'Linux', 'Git', 'CI/CD'],
  },
  {
    label: '移动端',
    color: 'bg-violet-500/15 text-violet-300',
    borderColor: 'border-violet-500/25',
    skills: ['React Native', 'Expo'],
  },
]

// Flat list (kept for backward compat)
const skills: Skill[] = skillCategories.flatMap(cat =>
  cat.skills.map(name => ({ name, category: cat.label }))
)

export default skills
