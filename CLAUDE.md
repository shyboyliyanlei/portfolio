# CLAUDE.md

## 项目概述
个人作品集网站，使用 React + TypeScript + Tailwind CSS + Framer Motion 开发。
单页应用，包含 Hero、About、Projects、Contact 四个核心板块。

## 技术栈
- React + TypeScript + Vite
- Tailwind CSS（样式）
- Framer Motion（动画）
- React Router（如需多页面时引入）

## 项目结构
```
src/
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
  data/
    projects.ts     # 项目数据数组
    skills.ts       # 技能数据数组
  App.tsx
  main.tsx
```

## 开发规范
- 使用函数式组件 + Hooks，禁用 class 组件
- 所有样式使用 Tailwind CSS，不单独写 CSS 文件
- 组件保持可复用，props 类型用 TypeScript 明确定义
- 关键逻辑需添加注释

## 设计规范
- 深色主题：背景 `#0a0a0a`，主文字 `#ffffff`
- 强调色使用渐变（如紫色 → 蓝色 / 青色 → 紫色）
- 动画使用 Framer Motion，保持流畅自然
- 所有页面需移动端适配（mobile-first）
- 图片使用懒加载（loading="lazy"）

## 页面功能清单
| 板块 | 内容 |
|------|------|
| Hero | 大标题、个人简介、头像 |
| About | 详细介绍、技能列表 |
| Projects | 项目卡片：名称 / 截图 / 描述 / 技术栈 / 链接 |
| Contact | 邮箱、GitHub、社交媒体链接 |

## 注意事项
- 保持设计简洁，不过度设计
- 确保所有链接可点击，外链用 `target="_blank" rel="noopener noreferrer"`
- 数据统一维护在 `src/data/` 目录，不硬编码在组件里
