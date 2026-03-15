## Why

The course website is currently a blank Next.js 16 scaffold. We need to build a complete Hebrew RTL course site teaching full-stack developers to transition from ChatGPT copy-paste workflows to agentic development with Claude Code. The content exists (5 video scripts, research doc, podcast) but has no delivery platform. The target audience — Israeli full-stack devs stuck in copy-paste mode — needs a polished, mobile-responsive learning experience that matches the "terminal-first" identity of Claude Code.

## What Changes

- Install and configure **Nextra 4** (docs theme) with App Router, RTL support, Hebrew typography
- Install and configure **shadcn/ui** + **Tailwind CSS 4** for all UI components
- Install **nuqs** for shareable video timestamp URLs (`?t=125`)
- Create **6 custom components** built on shadcn: `VideoPlayer` (with chapters), `AudioPlayer`, `QuizQuestion`, `DiagramImage`, `HeroSection`, `CourseMap`
- Leverage **Nextra built-in components**: `Callout`, `Tabs`, `Steps`, `Cards`, `FileTree`, `Banner`
- Create **full-width landing page** with terminal mockup hero, course map pipeline, key message cards, screenshot gallery, and audience section
- Create **25+ MDX content pages** across 5 course parts, each with embedded video, diagrams, tables, prompting tips, and key messages
- Create **5 quiz pages** (one per part) with interactive multiple-choice questions
- Create **podcast page** with Hebrew/English audio toggle using `Tabs`
- Create **resources page** with tool cards, video links, NotebookLM link, and prompting cheat-sheet
- Prepare **diagram pipeline**: static SVG export from Excalidraw files via `excalidraw-to-svg`
- Apply **"Terminal Meets Editorial"** visual identity: dark base + warm accent (#cc785c), Rubik font (Hebrew) + JetBrains Mono (code), terminal window chrome as recurring motif

## Capabilities

### New Capabilities

- `nextra-setup`: Nextra 4 + shadcn + nuqs + Tailwind configuration, RTL layout, dark mode, font loading
- `custom-components`: 6 custom React components (VideoPlayer, AudioPlayer, QuizQuestion, DiagramImage, HeroSection, CourseMap) built on shadcn/ui with responsive mobile-first design
- `landing-page`: Full-width hero with terminal mockup, course map pipeline, key messages, photo gallery, audience section
- `course-content`: 25+ MDX pages across 5 parts with integrated prompting tips, comparison tables, diagrams, and Nextra built-in components
- `quiz-system`: Interactive quiz pages with answer state, score summary, explanations, and links back to content
- `video-chapters`: Enhanced video player with chapter list, nuqs URL timestamps (?t=), and share functionality
- `podcast-resources`: Podcast page with dual-language audio toggle, resources page with cards, NotebookLM link, and prompting cheat-sheet

### Modified Capabilities

<!-- No existing capabilities to modify — fresh project -->

## Impact

- **Dependencies**: nextra, nextra-theme-docs, shadcn/ui components (card, button, progress, badge, tabs, alert, tooltip, separator, accordion), nuqs, @fontsource/rubik, @fontsource/jetbrains-mono
- **File structure**: New `content/` directory with 5 part folders + standalone pages. New `app/_components/` with 6 custom components. Updated `app/layout.tsx` with Nextra Layout + NuqsAdapter
- **Build**: MDX compilation via Nextra, static SVG diagrams in `public/images/diagrams/`
- **RTL considerations**: All custom components must handle RTL layout. Code blocks use `dir="ltr"`. Tables need `overflow-x-auto` wrapper on mobile
- **Mobile**: Video edge-to-edge on small screens, diagram tap-to-expand overlay, vertical course map pipeline, 48px+ touch targets on quiz buttons
