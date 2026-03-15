## ADDED Requirements

### Requirement: Five course parts with consistent structure
Each of the 5 course parts SHALL have a folder in `content/` with a `_meta.ts` file defining Hebrew sidebar labels and page order. Each part SHALL contain an `index.mdx` (overview + video embed), deep-dive pages, and a `quiz.mdx`.

#### Scenario: Part folder has correct structure
- **WHEN** developer creates a new course part
- **THEN** it contains `_meta.ts`, `index.mdx`, topic pages, and `quiz.mdx`

#### Scenario: Sidebar shows Hebrew labels in correct order
- **WHEN** user views the sidebar for Part 3
- **THEN** pages appear in the order defined by `_meta.ts` with Hebrew labels (e.g., "הלולאה האג׳נטית + כלים")

### Requirement: Part index pages with video embed
Each part's `index.mdx` SHALL include: a KeyMessage callout introducing the part, a VideoPlayer embed with the part's video and chapter data, a "what you'll learn" bullet list, and navigation hints to sub-pages.

#### Scenario: Part index page renders with video
- **WHEN** user navigates to `/part1-foundations`
- **THEN** the page shows a callout, embedded video player with chapters, learning objectives, and links to sub-pages

### Requirement: Deep-dive content pages
Each deep-dive page (e.g., `tokens.mdx`, `agentic-loop.mdx`) SHALL include: Hebrew explanatory text sourced from video scripts and research doc, comparison tables where relevant, code examples in fenced blocks, DiagramImage components for visual explanations, and Callout components for key takeaways.

#### Scenario: Content page has rich elements
- **WHEN** user reads `agentic-loop.mdx`
- **THEN** the page contains Hebrew text, a table of tools, a code block showing the loop, a diagram image, and callout takeaways

### Requirement: Integrated prompting tips
Prompting tips from Anthropic's best practices SHALL be distributed across relevant content pages as `<Callout emoji="💬">` blocks with before/after prompt examples. Tips SHALL appear contextually: "guide tool selection" in agentic-loop.mdx, "use CLAUDE.md" in claude-md.mdx, "use Plan Mode" in commands.mdx, etc.

#### Scenario: Prompting tip appears in context
- **WHEN** user reads the agentic loop page
- **THEN** a prompting tip callout shows a bad vs good prompt example for guiding tool selection

### Requirement: Content enriched from research doc
Pages SHALL include content from `spec/claude-code-research-deep-dive.md` beyond what the video scripts cover: `models.mdx` SHALL have pricing tables and extended thinking section. `mcp.mdx` SHALL have a Figma MCP subsection. `stateless.mdx` SHALL have expanded auto memory and `/compact` coverage. `tips.mdx` SHALL have Remote Control and "Beyond Code" sections.

#### Scenario: Models page has pricing table
- **WHEN** user reads `models.mdx`
- **THEN** a comparison table shows Haiku/Sonnet/Opus with context size, speed, and pricing per million tokens

### Requirement: Sidebar structure with separator
The top-level `_meta.ts` SHALL list all 5 parts followed by a separator (`type: 'separator'`), then podcast and resources pages. The landing page SHALL use `theme: { layout: 'full', sidebar: false }`.

#### Scenario: Sidebar renders with separator
- **WHEN** user views the sidebar on any content page
- **THEN** five course parts appear above a visual separator, with podcast and resources below

### Requirement: Tables with mobile horizontal scroll
All comparison tables in MDX content SHALL be wrapped in a container with `overflow-x-auto` to enable horizontal scrolling on mobile devices where tables exceed viewport width.

#### Scenario: Wide table scrolls on mobile
- **WHEN** user views a pricing comparison table on mobile
- **THEN** the table is horizontally scrollable without breaking the page layout
