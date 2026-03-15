# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hebrew RTL course website — "From ChatGPT Copy-Paste to Vibe Coding with Claude Code" — teaching full-stack developers AI concepts and Claude Code. Built with Nextra (docs theme) on Next.js, embedding video, audio, and interactive quizzes via MDX.

The site is currently a fresh Next.js 16 scaffold. The target architecture is defined in `spec/course-website-plan.md` (folder structure, components, MDX pages, sidebar config). Course content/research lives in `spec/claude-code-research-deep-dive.md`. Lecture scripts are in `videos/`.

## Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run lint     # ESLint (flat config, Next.js core-web-vitals + TypeScript)
tsc              # Type-check (run after every code change)
```

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **Nextra** (nextra-theme-docs) — to be installed; wraps Next.js with MDX docs support
- **MDX** — all course content pages are `.mdx` files in `content/`

## Architecture (Target — per spec)

```
app/
  layout.tsx          ← Root layout: RTL, lang="he", Nextra Layout wrapper
  [[...mdxPath]]/
    page.tsx           ← Dynamic MDX page renderer (Nextra convention)
  _components/        ← Client components used inside MDX pages
    VideoPlayer.tsx    AudioPlayer.tsx    Quiz.tsx
    QuizQuestion.tsx   KeyMessage.tsx     DiagramImage.tsx

content/              ← MDX course content + _meta.ts sidebar configs
  index.mdx           ← Landing page
  part1-foundations/   ← Tokens, Context Window
  part2-the-problem/  ← Copy-Paste loop, Vibe Coding
  part3-claude-code/  ← Agentic loop, tools, permissions, CLAUDE.md, models
  part4-advanced/     ← Sub-Agents, Hooks, Skills, MCP, context7, OpenSpec
  part5-practical/    ← First day guide, /simplify, daily habits, security
  podcast.mdx         ← Audio embed
  resources.mdx       ← Links and references

public/videos/  public/audio/  public/images/diagrams/  public/images/screenshots/
```

## Key Conventions

- **RTL layout**: `<html lang="he" dir="rtl">`. All UI text is Hebrew; technical terms stay in English.
- **Sidebar order**: Each content folder has a `_meta.ts` exporting `MetaRecord` (Nextra convention) defining page order and Hebrew labels.
- **Components are client-side**: Interactive components (`VideoPlayer`, `AudioPlayer`, `Quiz`) use `'use client'` directive since they rely on state/browser APIs.
- **Styling**: Components use inline styles referencing Nextra CSS variables (`var(--nextra-border)`, `var(--nextra-bg-secondary)`, etc.) for theme compatibility. Tailwind is available for page-level styling.
- **Path alias**: `@/*` maps to project root (tsconfig paths).
- **Media files**: Videos as `.mp4`, podcast as `.mp3`, diagrams as images — all served from `public/`.

## Content Workflow

When creating new MDX content pages:
1. Add the `.mdx` file in the appropriate `content/partN-*/` folder
2. Update that folder's `_meta.ts` to include the new page with a Hebrew label
3. Import components from `../../app/_components/` (relative path from content)
4. Reference media via absolute paths (`/videos/part1.mp4`, `/audio/podcast.mp3`)
