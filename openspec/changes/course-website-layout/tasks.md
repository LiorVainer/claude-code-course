## 1. Project Setup & Configuration

- [ ] 1.1 Install Nextra 4 dependencies: `nextra`, `nextra-theme-docs`
- [ ] 1.2 Install shadcn/ui: initialize with `npx shadcn@latest init`, install components (Card, Button, Progress, Badge, Separator, Tooltip, Accordion)
- [ ] 1.3 Install nuqs: `npm install nuqs`
- [ ] 1.4 Install fonts: `@fontsource/rubik`, `@fontsource/jetbrains-mono`
- [ ] 1.5 Configure `next.config.mjs` with Nextra plugin wrapping Next.js config
- [ ] 1.6 Configure `app/layout.tsx`: Nextra Layout + Navbar + Footer + NuqsAdapter, set `lang="he"` `dir="rtl"`, import fonts
- [ ] 1.7 Create `app/[[...mdxPath]]/page.tsx` dynamic MDX renderer (Nextra convention)
- [ ] 1.8 Create `mdx-components.tsx` with `useMDXComponents` from nextra, add RTL wrapper for code blocks (`dir="ltr"`)
- [ ] 1.9 Configure `globals.css`: import Tailwind + nextra-theme-docs/style.css, define CSS variables for Terminal Meets Editorial palette (dark + light mode), configure shadcn variables, add `@variant dark`
- [ ] 1.10 Configure Tailwind: extend theme with Rubik + JetBrains Mono font families, add custom colors
- [ ] 1.11 Run `tsc` and `npm run dev` to verify Nextra renders a blank page with RTL layout and correct fonts

## 2. Custom Components

- [ ] 2.1 Create `app/_components/VideoPlayer.tsx`: terminal chrome wrapper (● ● ● dots + title bar), HTML5 video, responsive edge-to-edge on mobile (`-mx-4`), accepts `src`, `title`, `poster`, `chapters` props
- [ ] 2.2 Add chapter list to VideoPlayer: render chapters below video, click to seek, active chapter highlight tracking via `timeupdate` event
- [ ] 2.3 Add nuqs integration to VideoPlayer: `useQueryState('t', parseAsInteger)` for URL timestamp, seek on mount if `?t=` present, share button that copies timestamped URL to clipboard
- [ ] 2.4 Create `app/_components/AudioPlayer.tsx`: shadcn Card with title, HTML5 audio, play/pause, progress indicator
- [ ] 2.5 Create `app/_components/QuizQuestion.tsx`: shadcn Card + Button options, answer state (correct green pulse / incorrect red shake), explanation reveal, full-width 48px+ buttons, link to content page on wrong answer
- [ ] 2.6 Create `app/_components/DiagramImage.tsx`: shadcn Card with responsive img + caption, mobile tap-to-expand fullscreen overlay with close button
- [ ] 2.7 Create `app/_components/HeroSection.tsx`: full-width hero with title, subtitle, CTA Button, stat Badges, terminal mockup (styled div with fake typed lines), 2-col desktop / stacked mobile
- [ ] 2.8 Create `app/_components/CourseMap.tsx`: 5 part cards in terminal-pipeline style, horizontal flow on desktop, vertical pipeline on mobile, each card links to part index page
- [ ] 2.9 Run `tsc` to verify all components compile without errors

## 3. Content Structure & Sidebar

- [ ] 3.1 Create `content/_meta.ts`: top-level sidebar with index (full layout, no sidebar), 5 parts, separator, podcast, resources
- [ ] 3.2 Create `content/part1-foundations/_meta.ts` with Hebrew labels: סקירה + וידאו, Tokens, Context Window, בדקו את עצמכם
- [ ] 3.3 Create `content/part2-the-problem/_meta.ts` with Hebrew labels
- [ ] 3.4 Create `content/part3-claude-code/_meta.ts` with Hebrew labels for all 7 sub-pages + quiz
- [ ] 3.5 Create `content/part4-advanced/_meta.ts` with Hebrew labels for all 6 sub-pages + quiz
- [ ] 3.6 Create `content/part5-practical/_meta.ts` with Hebrew labels for all 5 sub-pages + quiz
- [ ] 3.7 Verify sidebar renders correctly with all sections, Hebrew labels, and separator

## 4. Landing Page

- [ ] 4.1 Create `content/index.mdx`: import HeroSection + CourseMap, add key message Callouts (3 cards), photo gallery placeholder grid, audience section with checkmarks
- [ ] 4.2 Verify landing page renders full-width without sidebar, hero displays correctly on desktop and mobile
- [ ] 4.3 Verify CourseMap cards link to correct part pages

## 5. Part 1 — Foundations Content

- [ ] 5.1 Create `content/part1-foundations/index.mdx`: KeyMessage callout, VideoPlayer embed with chapter data, learning objectives, nav hints
- [ ] 5.2 Create `content/part1-foundations/tokens.mdx`: token explanation, tokenization examples, code cost table, Hebrew token cost, "electricity bill" analogy, prompting tip callout
- [ ] 5.3 Create `content/part1-foundations/context-window.mdx`: RAM analogy table, what fills context, ChatGPT vs agentic context comparison, DiagramImage placeholder for RAM diagram
- [ ] 5.4 Create `content/part1-foundations/quiz.mdx`: 4 QuizQuestion components covering tokens, code cost, context window, output pricing

## 6. Part 2 — The Problem Content

- [ ] 6.1 Create `content/part2-the-problem/index.mdx`: video embed with chapters, intro callout
- [ ] 6.2 Create `content/part2-the-problem/copy-paste-loop.mdx`: loop diagram, technical failure table, Human Compiler concept, time cost table, prompting tip (be specific)
- [ ] 6.3 Create `content/part2-the-problem/vibe-coding.mdx`: Karpathy attribution, spectrum table, 4 principles, before/after comparison table, DiagramImage placeholder
- [ ] 6.4 Create `content/part2-the-problem/quiz.mdx`: 4 QuizQuestion components

## 7. Part 3 — Claude Code Content

- [ ] 7.1 Create `content/part3-claude-code/index.mdx`: "3 ways to talk to Claude" table, video embed with chapters
- [ ] 7.2 Create `content/part3-claude-code/agentic-loop.mdx`: loop explanation, 7-tool-call example, prompting tips (guide tool selection, self-verification), DiagramImage placeholder
- [ ] 7.3 Create `content/part3-claude-code/permissions.mdx`: security default, permission prompt example, settings.json config, trust-building timeline
- [ ] 7.4 Create `content/part3-claude-code/claude-md.mdx`: what to include, hierarchy table, auto memory, prompting tip (let CLAUDE.md do heavy lifting)
- [ ] 7.5 Create `content/part3-claude-code/stateless.mdx`: stateless explanation, /compact workflow, auto memory /memory command, context management
- [ ] 7.6 Create `content/part3-claude-code/models.mdx`: model family table, 90/9/1 rule, pricing comparison table, extended thinking section, bottom-up selection guide
- [ ] 7.7 Create `content/part3-claude-code/commands.mdx`: slash commands table with examples, prompting tip (use Plan Mode)
- [ ] 7.8 Create `content/part3-claude-code/quiz.mdx`: 5 QuizQuestion components

## 8. Part 4 — Advanced Content

- [ ] 8.1 Create `content/part4-advanced/index.mdx`: video embed with chapters, intro callout
- [ ] 8.2 Create `content/part4-advanced/sub-agents.mdx`: separate memory concept, Agent tool, use cases, DiagramImage placeholder
- [ ] 8.3 Create `content/part4-advanced/hooks.mdx`: deterministic vs probabilistic, PreToolUse/PostToolUse examples, .env blocking example
- [ ] 8.4 Create `content/part4-advanced/skills.mdx`: lazy loading explanation, /skills command, skills.sh directory, installation, prompting tip (XML tags), DiagramImage placeholder
- [ ] 8.5 Create `content/part4-advanced/mcp.mdx`: USB-for-AI analogy, installation with npx, /mcp command, Figma MCP subsection, DiagramImage placeholder
- [ ] 8.6 Create `content/part4-advanced/context7.mdx`: resolve-library-id → query-docs flow, live example, DiagramImage placeholder
- [ ] 8.7 Create `content/part4-advanced/openspec.mdx`: SDD 4-phase workflow, openspec commands, DiagramImage placeholder
- [ ] 8.8 Create `content/part4-advanced/quiz.mdx`: 5 QuizQuestion components

## 9. Part 5 — Practical Mastery Content

- [ ] 9.1 Create `content/part5-practical/index.mdx`: video embed with chapters, intro callout
- [ ] 9.2 Create `content/part5-practical/first-day.mdx`: use Nextra Steps component for 5-step guide (install, init, explore, first task, simplify)
- [ ] 9.3 Create `content/part5-practical/simplify.mdx`: 3-agent parallel review explanation, agent roles table, DiagramImage placeholder
- [ ] 9.4 Create `content/part5-practical/daily-habits.mdx`: context management, CLAUDE.md growth, /usage tracking, prompting tips (trust thinking, control output, give context)
- [ ] 9.5 Create `content/part5-practical/tips.mdx`: context-mode plugin install + stats, Remote Control QR, "Beyond Code" use cases list
- [ ] 9.6 Create `content/part5-practical/security.mdx`: skills code review, hooks for .env, default permissions, team allowlist
- [ ] 9.7 Create `content/part5-practical/quiz.mdx`: 5 QuizQuestion components

## 10. Standalone Pages

- [ ] 10.1 Create `content/podcast.mdx`: Nextra Tabs with Hebrew/English AudioPlayer, content summary numbered list
- [ ] 10.2 Create `content/resources.mdx`: Nextra Cards for official docs + community guides + tools, video links table, NotebookLM Callout with link, prompting cheat-sheet summary table, Anthropic best practices external link

## 11. Final Verification

- [ ] 11.1 Run `tsc` — zero TypeScript errors
- [ ] 11.2 Run `npm run build` — successful production build
- [ ] 11.3 Verify all pages render correctly on desktop (sidebar, content, navigation)
- [ ] 11.4 Verify mobile responsiveness: hamburger menu, video edge-to-edge, vertical CourseMap, quiz touch targets, diagram expand
- [ ] 11.5 Verify RTL: sidebar on right, code blocks LTR, tables with mixed Hebrew/English, navigation arrow direction
- [ ] 11.6 Verify dark/light mode toggle works across all components
- [ ] 11.7 Verify nuqs ?t= parameter: load page with timestamp, click chapter updates URL, share button copies URL
