## Context

The course website has 34 MDX pages across 5 parts, plus standalone pages. Content was built from video scripts and a research doc. Anthropic's official best practices (code.claude.com/docs/en/best-practices) contains several patterns not yet covered. This change enriches existing pages and adds one new page (plugins), without restructuring the site.

## Goals / Non-Goals

**Goals:**
- Fill all HIGH and MEDIUM priority gaps from the best practices analysis
- Add official docs links to every relevant page for students who want deeper reading
- Keep changes scoped to content — no component or styling changes
- Update video scripts to stay in sync with website content
- Create one new Excalidraw diagram (session lifecycle)

**Non-Goals:**
- No automation/CI section (claude -p, fan-out patterns) — too advanced for this course
- No structural refactoring of existing pages — enrich, don't reorganize
- No new custom components needed — use existing Terminal, Callout, tables

## Decisions

### 1. Plugins page placement: after context7, before OpenSpec

**Choice**: `Sub-Agents → Hooks → Skills → MCP → context7 → Plugins → OpenSpec`
**Why**: Plugins bundle skills+hooks+MCP+agents+commands. Students need to understand each piece individually first, then learn how plugins package them. context7 comes before plugins because it's a specific MCP example; plugins are the general bundling concept.

### 2. `/clear` vs `/compact` in stateless.mdx, not a new page

**Choice**: Enrich `stateless.mdx` instead of creating a new page.
**Why**: The page already covers the stateless nature and /compact. Adding /clear and session management makes it a complete "session lifecycle" page. Rename sidebar label to "ניהול סשנים ו-Context" to reflect broader scope.

### 3. `/agents` wizard as primary, manual as secondary

**Choice**: Show the `/agents` interactive wizard first (the official recommended approach), then show manual `.claude/agents/` file creation as an alternative.
**Why**: The `/agents` command is the official way per code.claude.com/docs/en/sub-agents. Manual file creation is useful for version-controlled team agents but shouldn't be the first thing students see.

### 4. Official docs links as Callout at page bottom

**Choice**: Use `<Callout emoji="📖">` at the bottom of each page with a link to the canonical docs URL.
**Why**: Consistent pattern, doesn't clutter the content, gives students a clear path to go deeper. The emoji distinguishes it from tip callouts (💡) and prompting callouts (💬).

### 5. Rich input section in commands.mdx

**Choice**: Add a "קלט עשיר" (Rich Input) section covering @ references and image pasting, with a Terminal example.
**Why**: These are fundamental interaction patterns that make Claude Code far more useful. Students need to know about `@` before they start using Claude Code daily.

### 6. Anti-patterns in daily-habits.mdx

**Choice**: Add common failure patterns from the official best practices as a table in daily-habits.mdx.
**Why**: This page is about building good habits — anti-patterns are the flip side. A table format (mistake → fix) is scannable and memorable.

## Official Docs URL Mapping

| Page | Official URL |
|------|-------------|
| `agentic-loop.mdx` | https://code.claude.com/docs/en/how-claude-code-works |
| `permissions.mdx` | https://code.claude.com/docs/en/permissions |
| `claude-md.mdx` | https://code.claude.com/docs/en/memory#claude-md-files |
| `stateless.mdx` | https://code.claude.com/docs/en/memory |
| `models.mdx` | https://code.claude.com/docs/en/how-claude-code-works#models |
| `commands.mdx` | https://code.claude.com/docs/en/cli-reference |
| `sub-agents.mdx` | https://code.claude.com/docs/en/sub-agents |
| `hooks.mdx` | https://code.claude.com/docs/en/hooks-guide |
| `skills.mdx` | https://code.claude.com/docs/en/skills |
| `mcp.mdx` | https://code.claude.com/docs/en/mcp |
| `context7.mdx` | https://context7.com |
| `plugins.mdx` | https://code.claude.com/docs/en/discover-plugins |
| `openspec.mdx` | https://github.com/Fission-AI/OpenSpec |
| `daily-habits.mdx` | https://code.claude.com/docs/en/best-practices |
| `prompting-cheatsheet.mdx` | https://code.claude.com/docs/en/best-practices |

## Risks / Trade-offs

**[Stateless page scope creep]** → Mitigation: Keep the rename focused. The page covers session lifecycle, not a general "how sessions work" deep dive.

**[Video scripts out of sync]** → Mitigation: Video script changes are additions (new sections), not rewrites. Existing content stays intact.

**[Too many callouts per page]** → Mitigation: Official docs callout is ONE per page, at the very bottom. Doesn't compete with content.
