## ADDED Requirements

### Requirement: Full-width landing page without sidebar
The landing page (`content/index.mdx`) SHALL use Nextra's per-page theme config with `layout: 'full'` and `sidebar: false` to render at full viewport width without the docs sidebar.

#### Scenario: Landing page has no sidebar
- **WHEN** user navigates to the root URL `/`
- **THEN** the page renders full-width without a sidebar, using the HeroSection and CourseMap components

### Requirement: Landing page sections
The landing page SHALL include the following sections in order: HeroSection (hero + terminal mockup + CTA), CourseMap (5-part pipeline), Key Messages (3 Callout cards with course takeaways), Photo Gallery (grid of Claude Code screenshots), and Audience Section (target audience with checkmarks).

#### Scenario: All landing page sections render
- **WHEN** landing page loads
- **THEN** all five sections render in order: hero, course map, key messages, photos, audience

### Requirement: Terminal mockup in hero
The HeroSection SHALL include a styled terminal mockup showing sample Claude Code interactions (tool calls, file reading, test running). The mockup SHALL use the terminal window chrome (● ● ● dots) consistent with the VideoPlayer design. On mobile the mockup SHALL show fewer lines (3-4) for readability.

#### Scenario: Terminal mockup displays on desktop
- **WHEN** hero section renders on desktop
- **THEN** a terminal mockup shows 6-8 lines of Claude Code interaction with syntax highlighting

#### Scenario: Terminal mockup is compact on mobile
- **WHEN** hero section renders on mobile
- **THEN** the terminal mockup shows only 3-4 lines to maintain readability at small widths

### Requirement: Key message cards
The landing page SHALL display 3 key message cards using Nextra Callout or custom styled cards. Messages: "Tokens = חשבון חשמל של AI", "תפסיקו להיות Human Compiler", "אתם לא מחליפים את עצמכם — מקדמים".

#### Scenario: Key messages render as a grid
- **WHEN** landing page loads on desktop
- **THEN** 3 key message cards render in a 3-column grid

#### Scenario: Key messages stack on mobile
- **WHEN** landing page loads on mobile
- **THEN** key message cards stack vertically in a single column

### Requirement: Audience section
The landing page SHALL include a section listing the target audience with checkmark items (full-stack devs using ChatGPT, devs wanting to understand AI internals, teams adopting Claude Code, Copilot users wanting more).

#### Scenario: Audience section renders
- **WHEN** user scrolls to the audience section
- **THEN** a list of audience descriptions renders with ✅ checkmark indicators
