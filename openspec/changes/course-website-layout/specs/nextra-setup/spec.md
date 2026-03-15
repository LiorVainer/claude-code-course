## ADDED Requirements

### Requirement: Nextra 4 with App Router configuration
The system SHALL use Nextra 4 with `nextra-theme-docs` on Next.js 16 App Router. The `next.config.mjs` SHALL wrap the Next.js config with the Nextra plugin. The `app/layout.tsx` SHALL import `Layout`, `Navbar`, `Footer` from `nextra-theme-docs` and call `getPageMap()` for sidebar rendering.

#### Scenario: Nextra renders MDX pages from content directory
- **WHEN** a user navigates to any route matching a file in `content/`
- **THEN** Nextra renders the corresponding MDX file with docs theme layout, sidebar, and navigation

#### Scenario: Dev server starts successfully
- **WHEN** developer runs `npm run dev`
- **THEN** the site compiles and serves on localhost with Nextra docs theme active

### Requirement: RTL Hebrew layout
The root `<html>` element SHALL have `lang="he"` and `dir="rtl"`. The sidebar SHALL render on the right side. Navigation arrows SHALL be flipped for RTL. All code blocks and `<pre>` elements SHALL have `dir="ltr"` to maintain left-to-right code readability.

#### Scenario: Page renders in RTL
- **WHEN** any page loads
- **THEN** the HTML element has `dir="rtl"` and `lang="he"`, sidebar is on the right, content flows right-to-left

#### Scenario: Code blocks render LTR inside RTL page
- **WHEN** a page contains fenced code blocks
- **THEN** the code block renders with `dir="ltr"` so code reads left-to-right

### Requirement: Dark mode with next-themes
The system SHALL support dark and light mode via `next-themes` (bundled with Nextra). The `.dark` class on `<html>` SHALL activate dark mode for Nextra, shadcn, and custom Tailwind styles simultaneously.

#### Scenario: User toggles dark mode
- **WHEN** user clicks the theme toggle in the navbar
- **THEN** the entire site switches between dark and light themes including Nextra chrome, shadcn components, and custom styles

### Requirement: Typography with Rubik and JetBrains Mono
The system SHALL load Rubik (via @fontsource/rubik) as the primary font for Hebrew text and headings. JetBrains Mono (via @fontsource/jetbrains-mono) SHALL be used for all code and monospace elements. Fonts SHALL be configured via Tailwind CSS and applied globally.

#### Scenario: Hebrew text renders in Rubik
- **WHEN** any page loads
- **THEN** body text and headings render in Rubik font family

#### Scenario: Code renders in JetBrains Mono
- **WHEN** a page contains inline code or code blocks
- **THEN** monospace text renders in JetBrains Mono

### Requirement: Theme color palette
The system SHALL define CSS variables for the "Terminal Meets Editorial" palette: dark base (`#0a0a0f`), warm accent (`#cc785c`), success green (`#10b981`), code surface (`#1a1a2e`), warm white text (`#e4e4e7`). Light mode SHALL use warm cream (`#faf9f6`) base with the same accent colors. shadcn CSS variables SHALL be mapped to this palette.

#### Scenario: Dark mode colors match design spec
- **WHEN** site loads in dark mode
- **THEN** background is near-black (#0a0a0f), accent elements use warm orange (#cc785c), text is warm white (#e4e4e7)

### Requirement: NuqsAdapter wraps the application
The `NuqsAdapter` from `nuqs/adapters/next/app` SHALL wrap the application inside `app/layout.tsx`, nested within the Nextra Layout component, to enable URL query state management for all pages.

#### Scenario: nuqs hooks work on any page
- **WHEN** a client component calls `useQueryState`
- **THEN** the URL query string updates via shallow client-side navigation without server roundtrip

### Requirement: shadcn/ui component installation
The project SHALL have shadcn/ui initialized with the following components installed: Card, Button, Progress, Badge, Separator, Tooltip, Accordion. Components SHALL use the project's CSS variables for theming.

#### Scenario: shadcn components render with project theme
- **WHEN** a shadcn Card component renders
- **THEN** it uses the project's CSS variables (dark base, warm accent) and responds to dark mode toggle
