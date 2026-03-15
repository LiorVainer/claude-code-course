## Context

Fresh Next.js 16 scaffold needs to become a Hebrew RTL course website. Content exists as 5 video scripts (`videos/`), a research doc (`spec/claude-code-research-deep-dive.md`), and a course plan (`spec/course-website-plan.md`). Videos are Remotion-rendered mp4s (to be provided later in `public/videos/`). Podcast mp3s (Hebrew + English) will go in `public/audio/`. Diagrams will be created with Excalidraw MCP server and exported as static SVGs.

Target audience: Israeli full-stack developers who use ChatGPT copy-paste and don't understand tokens, context windows, or agentic development.

## Goals / Non-Goals

**Goals:**
- Polished, mobile-responsive course experience with "Terminal Meets Editorial" visual identity
- All 5 course parts with video embeds, deep-dive pages, quizzes, and integrated prompting tips
- Shareable video timestamps via URL params (nuqs)
- Landing page that sells the transformation from copy-paste to vibe coding
- Lean component architecture: Nextra built-ins where possible, shadcn for custom components

**Non-Goals:**
- Progress tracking / localStorage persistence (Phase 2 — deferred)
- User authentication or enrollment system
- Interactive Excalidraw embeds (static SVGs only)
- CMS or admin panel — all content is MDX in the repo
- Video hosting — mp4s served from `public/` (no streaming service)
- i18n beyond Hebrew primary + English technical terms

## Decisions

### 1. Nextra 4 (App Router) as docs framework

**Choice**: Nextra 4 with `nextra-theme-docs`
**Why**: Provides sidebar navigation, MDX rendering, dark mode, search, prev/next navigation, mobile hamburger menu, and `_meta.ts` page ordering — all free. App Router enables RSC and `getPageMap()`.
**Alternatives**: Plain Next.js MDX (too much plumbing), Docusaurus (no RTL-first, heavier), Starlight (Astro-based, different ecosystem).

### 2. shadcn/ui for custom component primitives

**Choice**: shadcn/ui components (Card, Button, Progress, Badge, Tabs, Alert, Tooltip, Separator, Accordion) installed via CLI, styled with Tailwind.
**Why**: Copy-paste components (not a dependency), consistent dark mode via `.dark` class (same as Nextra's `next-themes`), customizable CSS variables, good RTL behavior.
**Alternatives**: Radix UI directly (shadcn wraps it anyway), Headless UI (less polished), custom from scratch (unnecessary work).

### 3. Nextra built-ins replace custom components where possible

**Choice**: Use `Callout`, `Tabs`, `Steps`, `Cards`, `FileTree`, `Banner` from `nextra/components` instead of building custom equivalents.
**Why**: Drops 4 planned custom components (KeyMessage, PromptTip, ComparisonTable, separate prompt page). Callout with emoji prop covers KeyMessage and PromptTip use cases. Steps covers first-day guide. Tabs covers podcast language toggle.
**Impact**: Only 6 custom components to build instead of 10.

### 4. nuqs for shareable timestamps, NOT localStorage

**Choice**: nuqs `useQueryState` with `parseAsInteger` for `?t=` parameter. Shallow updates (default) — pure client-side, no server roundtrip.
**Why**: URLs are shareable ("look at 2:05 in part 3"). Works on static/SSG pages after hydration. NuqsAdapter wraps in layout.tsx alongside Nextra Layout.
**Alternatives**: localStorage (not shareable), custom URL manipulation (nuqs handles edge cases and history modes).

### 5. Full-width landing page via _meta.ts theme config

**Choice**: Set `theme: { layout: 'full', sidebar: false }` on index page in `_meta.ts`.
**Why**: Landing page needs full viewport width for hero, course map, and photo gallery. Nextra 4 supports per-page theme overrides natively — no custom routing needed.

### 6. "Terminal Meets Editorial" visual identity

**Choice**:
- Dark base: `#0a0a0f`, warm accent: `#cc785c`, success: `#10b981`
- Typography: Rubik (Hebrew body + headers), JetBrains Mono (code)
- Signature element: terminal window chrome (● ● ● dots + title bar) on VideoPlayer, code examples, and terminal mockup on landing page
- Light mode: warm cream `#faf9f6` base, dark code blocks preserved

**Why**: Reinforces the course identity — "this is about living in the terminal." Developer audience instantly recognizes the terminal frame motif. Rubik has excellent Hebrew glyphs and geometric character. JetBrains Mono is the developer identity font.

### 7. Responsive strategy: Nextra handles nav, we handle content components

**Choice**:
- Nextra: sidebar toggle, hamburger menu, prev/next, TOC collapse — all automatic
- Custom components: mobile-first with Tailwind breakpoints
- Video: edge-to-edge on mobile (`-mx-4` negative margin)
- Diagrams: tap-to-expand fullscreen overlay on mobile
- CourseMap: horizontal pipeline (desktop) → vertical pipeline (mobile)
- Quiz buttons: full-width, min 48px touch targets
- Tables: `overflow-x-auto` wrapper for horizontal scroll

### 8. Static SVG diagrams from Excalidraw

**Choice**: Create diagrams in Excalidraw → export as `.excalidraw` files → convert to SVG via `excalidraw-to-svg` CLI → store SVGs in `public/images/diagrams/`.
**Why**: Zero JS bundle cost, instant render, SEO-friendly. Source `.excalidraw` files kept in repo for future editing.

### 9. Prompting tips distributed across content, not separate page

**Choice**: Embed prompting tips contextually in relevant MDX pages using `<Callout emoji="💬">` with before/after code blocks. Add a summary cheat-sheet table on resources.mdx.
**Why**: Tips are more effective when learners encounter them in context (e.g., "guide tool selection" tip appears in agentic-loop.mdx). A separate page would be bookmarked and forgotten.

### 10. Content enrichment from research doc

**Choice**: Enrich existing page plan with content from `spec/claude-code-research-deep-dive.md` that video scripts condensed:
- `models.mdx`: Add pricing tables + extended thinking section
- `mcp.mdx`: Add Figma MCP subsection
- `stateless.mdx`: Expand auto memory + `/compact` depth
- Part 3 `index.mdx`: Add "Three ways to talk to Claude" framing
- `tips.mdx`: Add Remote Control QR section + "Beyond Code" use cases

## Component Architecture

```
FROM NEXTRA (zero custom code):
  Callout     → key messages, prompting tips, warnings, caveats
  Tabs        → podcast Hebrew/English toggle
  Steps       → first-day installation guide
  Cards       → resources page tool/link cards
  FileTree    → project structure visualizations
  Banner      → course announcement bar

CUSTOM (built with shadcn + Tailwind):
  VideoPlayer.tsx   → Card + HTML5 video + chapter list + nuqs ?t=
  AudioPlayer.tsx   → Card + HTML5 audio + progress bar
  QuizQuestion.tsx  → Card + Button options + answer state + animations
  DiagramImage.tsx  → Card + responsive img + caption + mobile expand
  HeroSection.tsx   → full-width hero + terminal mockup + CTA
  CourseMap.tsx      → terminal pipeline cards (horizontal/vertical)
```

## Styling Layer Stack

```
Layer 1: Tailwind CSS 4 (base + utilities)
Layer 2: Nextra theme CSS (typography, sidebar, nav) via nextra-theme-docs/style.css
Layer 3: shadcn component CSS (cards, buttons, via CSS variables)
Layer 4: Custom Tailwind classes + CSS variables for theme identity

Dark mode: all layers use .dark class (next-themes)
RTL: dir="rtl" on <html>, Tailwind rtl: variant, code blocks use dir="ltr"
```

## File Structure

```
app/
  layout.tsx              ← Nextra Layout + NuqsAdapter + fonts
  [[...mdxPath]]/
    page.tsx              ← Nextra dynamic MDX renderer
  _components/
    VideoPlayer.tsx       AudioPlayer.tsx
    QuizQuestion.tsx      DiagramImage.tsx
    HeroSection.tsx       CourseMap.tsx

content/
  _meta.ts                ← top-level sidebar (index has full layout)
  index.mdx               ← landing page (full-width, no sidebar)
  part1-foundations/       ← _meta.ts + index.mdx + tokens.mdx + context-window.mdx + quiz.mdx
  part2-the-problem/      ← _meta.ts + index.mdx + copy-paste-loop.mdx + vibe-coding.mdx + quiz.mdx
  part3-claude-code/      ← _meta.ts + index.mdx + agentic-loop.mdx + permissions.mdx + claude-md.mdx + stateless.mdx + models.mdx + commands.mdx + quiz.mdx
  part4-advanced/         ← _meta.ts + index.mdx + sub-agents.mdx + hooks.mdx + skills.mdx + mcp.mdx + context7.mdx + openspec.mdx + quiz.mdx
  part5-practical/        ← _meta.ts + index.mdx + first-day.mdx + simplify.mdx + daily-habits.mdx + tips.mdx + security.mdx + quiz.mdx
  podcast.mdx             ← dual-language audio embeds
  resources.mdx           ← tool cards + video links + NotebookLM + prompting cheat-sheet

public/
  videos/                 ← part1.mp4 through part5.mp4 (provided later)
  audio/                  ← podcast-he.mp3, podcast-en.mp3
  images/diagrams/        ← static SVGs from Excalidraw
  images/screenshots/     ← Claude Code terminal screenshots
```

## Risks / Trade-offs

**[Nextra 4 + shadcn CSS variable collision]** → Mitigation: Different namespaces (--nextra-* vs --primary/--card). Verified via context7 docs — no conflict. Test during initial setup.

**[RTL edge cases in custom components]** → Mitigation: Every custom component gets explicit RTL testing. Code blocks forced `dir="ltr"`. Terminal mockup left-aligned even in RTL. Use Tailwind `rtl:` variant where needed.

**[Large video files in public/]** → Mitigation: Acceptable for initial launch. Future: move to CDN or video hosting. Next.js static serving handles mp4 fine for moderate traffic.

**[Excalidraw SVG text readability on mobile]** → Mitigation: DiagramImage component includes tap-to-expand fullscreen overlay on mobile. Design diagrams with mobile viewing in mind (larger text, fewer details).

**[Nextra theme overrides for terminal chrome styling]** → Mitigation: Custom components live outside Nextra's content rendering. Terminal chrome is pure Tailwind — no Nextra CSS override needed.

## Phasing

**Phase 1 (this change):** Full site with all content, components, styling, video chapters with nuqs timestamps. No progress persistence.

**Phase 2 (future):** localStorage progress tracking, quiz completion tracking, resume-from-where-you-left-off, progress bars on CourseMap.
