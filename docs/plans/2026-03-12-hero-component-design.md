# Hero Component Design

## Layout

Left-right two-column flex (desktop), stacked centered (mobile).

- **Left**: headline + gradient role text + bio + 2 CTA buttons
- **Right**: circular avatar with gradient glow border

## Visual Style

| Element | Style |
|---------|-------|
| Background | `#0a0a0a` + top-left purple gradient glow |
| Title | White, name in `purple-400 → blue-400 → cyan-400` gradient |
| Role subtitle | Cyan → purple gradient text |
| Primary CTA | Gradient filled button (purple → blue) |
| Secondary CTA | Outlined button (semi-transparent white border) |
| Avatar | Circle, wrapped in 2px gradient border (purple → cyan) |
| Animation | Framer Motion fadeIn + slideIn; avatar subtle float loop |

## Data

- Avatar: `src/assets/avatar.jpg` (user-provided)
- Name, role, bio: hardcoded in component for now

## CTA Behavior

- "查看项目" → `href="#projects"` smooth scroll
- "联系我" → `href="#contact"` smooth scroll
