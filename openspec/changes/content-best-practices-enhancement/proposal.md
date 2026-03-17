## Why

The course website is missing several key best practices from Anthropic's official Claude Code documentation (code.claude.com/docs/en/best-practices). These gaps mean students graduate the course without knowing critical workflows like `/clear` vs `/compact`, `@` file references, image pasting, the `/agents` interactive wizard, plugins ecosystem, session management, verify-your-work patterns, and common anti-patterns. Adding these aligns the course with the official source of truth and makes students more effective from day one.

## What Changes

- **Enrich `commands.mdx`**: Add `@` file references, `Alt+V`/`Option+V` image paste, rich input section
- **Enrich `stateless.mdx`**: Add `/clear` command, `/clear` vs `/compact` comparison table, session management (`--continue`, `--resume`, `/rename`). Rename sidebar label to "ניהול סשנים ו-Context"
- **Enrich `claude-md.mdx`**: Add "verify commands" section — put test/lint/tsc commands in CLAUDE.md so Claude auto-verifies
- **Enrich `sub-agents.mdx`**: Add `/agents` interactive wizard (official way to create agents), keep manual `.claude/agents/` as alternative
- **Create NEW `plugins.mdx`** in Part 4: What plugins bundle (skills+hooks+MCP+agents+commands), `/plugin` marketplace, installing plugins. Positioned after context7, before OpenSpec
- **Enrich `daily-habits.mdx`**: Add "let Claude interview you" prompting pattern, common failure anti-patterns (kitchen sink session, correcting loop, over-specified CLAUDE.md)
- **Enrich `tips.mdx`**: Add CLI tools tip (install gh, aws, gcloud for Claude to use)
- **Enrich `prompting-cheatsheet.mdx`**: Add new rows for verify, @references, interview, /clear, plugins
- **Add official docs links**: Every Part 3 and Part 4 page gets a "קריאה נוספת" Callout linking to the canonical Claude Code docs URL
- **Update video scripts**: `part3-claude-code.md` (add /clear, @ refs), `part4-advanced-features.md` (add /agents wizard, plugins), `part5-practical-mastery.md` (add interview, anti-patterns)
- **New diagram**: Session lifecycle — /compact vs /clear vs --continue decision tree

## Capabilities

### New Capabilities

- `plugins-page`: New MDX page explaining Claude Code plugin ecosystem, marketplace browsing, and installation
- `content-enrichment`: Enhancements to 7 existing MDX pages with missing best practices from official docs
- `official-docs-links`: Official Claude Code documentation URLs as callouts across all Part 3 and Part 4 pages
- `video-script-updates`: Updates to 3 video scripts to reflect new content

### Modified Capabilities

<!-- No existing spec capabilities to modify -->

## Impact

- **New file**: `content/part4-advanced/plugins.mdx`
- **Modified files**: `commands.mdx`, `stateless.mdx`, `claude-md.mdx`, `sub-agents.mdx`, `daily-habits.mdx`, `tips.mdx`, `prompting-cheatsheet.mdx`
- **Sidebar change**: `content/part4-advanced/_meta.ts` (add plugins entry, reorder), `content/part3-claude-code/_meta.ts` (rename stateless label)
- **Video scripts**: `videos/part3-claude-code.md`, `videos/part4-advanced-features.md`, `videos/part5-practical-mastery.md`
- **New diagram**: `public/images/diagrams/session-lifecycle.svg` (via Excalidraw)
- **Official docs URLs added**: ~12 pages get canonical link callouts
