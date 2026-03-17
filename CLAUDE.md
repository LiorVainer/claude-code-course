# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hebrew RTL course website — "From ChatGPT Copy-Paste to Vibe Coding with Claude Code" — teaching full-stack developers AI concepts and Claude Code. Built with Nextra 4 (docs theme) on Next.js 16, with shadcn/ui components, nuqs for URL state, and interactive quizzes via MDX.

## Commands

```bash
npm run dev      # Start dev server (Next.js + Nextra)
npm run build    # Production build (generates static pages + Pagefind search index)
npm run lint     # ESLint (flat config, Next.js core-web-vitals + TypeScript)
tsc              # Type-check (run after every code change)
```

Note: Search only works after `npm run build` (Pagefind indexes built HTML files).

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Nextra 4** (nextra-theme-docs) — MDX docs framework with sidebar, search, dark mode
- **Tailwind CSS 4** (via `@tailwindcss/postcss`) — CSS-first config in `globals.css`
- **shadcn/ui** — Card, Button, Progress, Badge, Separator, Tooltip, Accordion (in `components/ui/`)
- **nuqs** — URL query state for shareable video timestamps (`?t=125`)
- **Fonts**: Rubik (Hebrew body/headers via @fontsource), JetBrains Mono (code via @fontsource)
- **MDX** — all course content pages are `.mdx` files in `content/`

## Architecture

```
app/
  layout.tsx              ← Nextra Layout + NuqsAdapter + RTL + fonts + Hebrew labels
  [[...mdxPath]]/
    page.tsx              ← Nextra dynamic MDX renderer
  _components/            ← Client components used inside MDX pages
    VideoPlayer.tsx       ← HTML5 video + chapters + nuqs ?t= timestamps
    AudioPlayer.tsx       ← HTML5 audio player in Card
    QuizQuestion.tsx      ← Interactive quiz with auto RTL/LTR detection
    DiagramImage.tsx      ← Image with light/dark mode swap + fullscreen overlay
    Terminal.tsx           ← Terminal UI with auto Hebrew detection + colored output
    HeroSection.tsx       ← Landing page hero with terminal mockup
    CourseMap.tsx          ← 5-part course pipeline with image support
    LandingBackground.tsx ← Sets body gradient on landing page via JS

components/ui/            ← shadcn/ui components (do not edit manually)
content/                  ← MDX course content + _meta.ts sidebar configs
  _meta.ts                ← Top-level sidebar (landing page has full layout, no sidebar)
  index.mdx               ← Landing page (full-width, no TOC/breadcrumb/timestamp)
  part1-foundations/       ← Tokens, Context Window
  part2-the-problem/       ← Copy-Paste loop, Vibe Coding
  part3-claude-code/       ← Agentic loop, tools, permissions, CLAUDE.md, models, commands
  part4-advanced/          ← Sub-Agents, Hooks, Skills, MCP, context7, OpenSpec
  part5-practical/         ← First day guide, simplify/, daily habits, tips, security
  podcast.mdx              ← Dual-language audio (Hebrew/English via Nextra Tabs)
  resources.mdx            ← Tool cards, video links, NotebookLM
  prompting-cheatsheet.mdx ← Prompting tips reference table

public/
  videos/                  ← part1.mp4 through part5.mp4 (Remotion-rendered)
  audio/                   ← podcast-he.mp3, podcast-en.mp3
  images/diagrams/         ← Excalidraw SVGs (light + dark versions: foo.svg + foo-dark.svg)
  images/screenshots/      ← Claude Code terminal screenshots
  claude-code-logo.png     ← Used in CourseMap for Part 3
```

## Key Conventions

- **RTL layout**: `<html lang="he" dir="rtl">`. All UI text is Hebrew; technical terms stay in English.
- **Sidebar order**: Each content folder has a `_meta.ts` exporting `MetaRecord` (Nextra 4 convention).
- **Landing page**: Uses `theme: { layout: 'full', sidebar: false, toc: false, breadcrumb: false, timestamp: false, pagination: false }` in `_meta.ts`.
- **Nextra built-in components**: Use `Callout`, `Tabs`, `Steps`, `Cards`, `FileTree` from `nextra/components` — not custom equivalents.
- **Terminal component**: Use `<Terminal>` for all CLI/terminal examples. It auto-detects Hebrew and switches font/direction. Use `color` prop for syntax highlighting.
- **DiagramImage**: Automatically swaps `foo.svg` → `foo-dark.svg` in dark mode. Export Excalidraw diagrams with transparent background in both light and dark modes.
- **Callout styling**: Overridden in `globals.css` to use warm accent (#cc785c) instead of Nextra's default green. Types: default (warm), error (red), info (blue-gray), warning (yellow).
- **Code blocks**: Fenced code blocks with language tags get Nextra's built-in Shiki syntax highlighting. Use `filename="..."` and `showLineNumbers` for config/code examples.
- **Quiz RTL**: QuizQuestion auto-detects Hebrew in options and sets `dir` accordingly. Pure English options get monospace font.
- **Slash commands in RTL**: Write as `simplify/` not `/simplify` to avoid RTL reversal issues.

## Content Workflow

When creating new MDX content pages:
1. Add the `.mdx` file in the appropriate `content/partN-*/` folder
2. Update that folder's `_meta.ts` to include the new page with a Hebrew label
3. Import components from `../../app/_components/` (relative path from content)
4. Use `<Terminal>` for CLI examples, `<Callout>` for key messages, markdown tables for comparisons
5. Reference media via absolute paths (`/videos/part1.mp4`, `/audio/podcast.mp3`)
6. Reference diagrams as `/images/diagrams/name.svg` (DiagramImage handles dark mode swap)

## Diagram Assets

Diagrams are Excalidraw exports stored in `public/images/diagrams/`. Reference file in `docs/diagrams-reference.md` has all Excalidraw URLs and filenames. Each diagram has light (`foo.svg`) and dark (`foo-dark.svg`) versions.
