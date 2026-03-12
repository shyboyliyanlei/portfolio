export interface Project {
  name: string
  description: string
  screenshot?: string
  techStack: string[]
  liveUrl?: string
  repoUrl?: string
}

const projects: Project[] = [
  {
    name: 'Portfolio Website',
    description:
      'A personal portfolio built with React, TypeScript and Tailwind CSS. Features smooth animations, dark theme, and fully responsive layout.',
    screenshot: undefined,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    name: 'Task Manager App',
    description:
      'A full-stack task management application with real-time updates, drag-and-drop support, and team collaboration features.',
    screenshot: undefined,
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    name: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform with product catalog, cart management, payment integration and order tracking.',
    screenshot: undefined,
    techStack: ['Vue 3', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
]

export default projects
