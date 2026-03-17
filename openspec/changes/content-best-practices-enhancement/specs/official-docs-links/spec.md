## ADDED Requirements

### Requirement: Official docs callout on every Part 3 and Part 4 page
Every content page in Part 3 (claude-code) and Part 4 (advanced) SHALL have a `<Callout emoji="📖">` at the bottom linking to the official Claude Code documentation URL for that topic.

#### Scenario: Part 3 pages have docs links
- **WHEN** user scrolls to the bottom of any Part 3 page (agentic-loop, permissions, claude-md, stateless, models, commands)
- **THEN** they see a Callout with a link to the corresponding code.claude.com docs page

#### Scenario: Part 4 pages have docs links
- **WHEN** user scrolls to the bottom of any Part 4 page (sub-agents, hooks, skills, mcp, context7, plugins, openspec)
- **THEN** they see a Callout with a link to the corresponding official docs/repo URL

#### Scenario: Daily habits and cheat sheet have best practices link
- **WHEN** user scrolls to the bottom of daily-habits.mdx or prompting-cheatsheet.mdx
- **THEN** they see a Callout linking to code.claude.com/docs/en/best-practices
