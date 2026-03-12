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
  {
    name: 'Blog Platform',
    description:
      'A content-driven blog platform with MDX support, syntax highlighting, SEO optimization, and a clean reading experience.',
    screenshot: undefined,
    techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    name: 'Chat App',
    description:
      'A real-time chat application with room support, typing indicators, message history, and Redis-backed session management.',
    screenshot: undefined,
    techStack: ['Socket.io', 'Redis', 'React', 'Node.js'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    name: 'Dashboard Analytics',
    description:
      'An interactive analytics dashboard with dynamic charts, filterable data tables, and a FastAPI backend connected to PostgreSQL.',
    screenshot: undefined,
    techStack: ['React', 'D3.js', 'FastAPI', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    name: 'AI Writing Assistant',
    description:
      'An AI-powered writing tool that helps users draft, refine, and export content — with subscription billing via Stripe.',
    screenshot: undefined,
    techStack: ['OpenAI API', 'Next.js', 'Prisma', 'Stripe'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
]

export default projects
