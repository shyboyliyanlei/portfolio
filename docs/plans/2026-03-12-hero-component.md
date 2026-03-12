# Hero Component Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a full-screen Hero section with gradient headline, bio, avatar, and CTA buttons using Tailwind CSS + Framer Motion.

**Architecture:** Single `Hero.tsx` component with all personal content hardcoded. Avatar loaded from `src/assets/avatar.jpg`. App.tsx updated to mount `<Hero />`.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v3, Framer Motion v12

---

### Task 1: Add avatar placeholder image

**Files:**
- Create: `src/assets/avatar.jpg` (placeholder — copy any image here)

**Step 1: Add a placeholder avatar**

Copy any square image to `src/assets/avatar.jpg`. If none available, create a 1×1 pixel placeholder so the import doesn't break:

```bash
# In project root
cp public/vite.svg src/assets/avatar.jpg 2>/dev/null || touch src/assets/avatar.jpg
```

> The real avatar will replace this file later without code changes.

---

### Task 2: Implement Hero component

**Files:**
- Modify: `src/components/Hero.tsx`

**Step 1: Write the full component**

Replace `src/components/Hero.tsx` with:

```tsx
import { motion } from 'framer-motion'
import avatarImg from '../assets/avatar.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

const float = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

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
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </motion.h1>

          <motion.p
            className="mt-3 text-xl sm:text-2xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="mt-5 max-w-lg text-base sm:text-lg text-gray-400 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
          >
            I build fast, accessible, and beautiful web applications. Passionate about
            clean code, great UX, and solving real-world problems with technology.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-opacity"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold text-white border border-white/20 hover:border-white/50 transition-colors"
            >
              联系我
            </a>
          </motion.div>
        </div>

        {/* ── Right: avatar ── */}
        <div className="flex-shrink-0 md:flex-1 flex justify-center md:justify-end">
          <motion.div
            variants={float}
            animate="animate"
          >
            {/* Gradient border wrapper */}
            <div className="p-[3px] rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 shadow-[0_0_60px_rgba(139,92,246,0.4)]">
              <div className="rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-[#0a0a0a]">
                <img
                  src={avatarImg}
                  alt="avatar"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
```

---

### Task 3: Mount Hero in App.tsx

**Files:**
- Modify: `src/App.tsx`

**Step 1: Import and render Hero**

Replace `src/App.tsx` with:

```tsx
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Hero />
    </div>
  )
}

export default App
```

---

### Task 4: Enable smooth scroll globally

**Files:**
- Modify: `src/index.css`

**Step 1: Add smooth scroll to html element**

Append after the `@tailwind` directives:

```css
@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

---

### Task 5: Verify in browser

**Step 1: Start dev server**

```bash
npm run dev
```

**Step 2: Check visually**

- Page background is `#0a0a0a` (pure dark)
- Name renders with purple→blue→cyan gradient
- Role subtitle has cyan→purple gradient text
- Avatar shows inside gradient border with floating animation
- "查看项目" button has gradient fill; "联系我" has outline style
- On mobile (< 768px): avatar stacks above text, both centered

**Step 3: Build check**

```bash
npm run build
```

Expected: no TypeScript or build errors.
