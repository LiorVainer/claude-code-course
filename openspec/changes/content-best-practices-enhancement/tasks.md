## 1. Sidebar & Structure

- [x] 1.1 Update `content/part4-advanced/_meta.ts`: add `plugins: 'Plugins'` entry after context7 and before openspec
- [x] 1.2 Update `content/part3-claude-code/_meta.ts`: rename stateless label from `'Stateless + /compact'` to `'ניהול סשנים ו-Context'`

## 2. New Plugins Page

- [x] 2.1 Create `content/part4-advanced/plugins.mdx`: intro Callout explaining plugins bundle skills+hooks+MCP+agents+commands
- [x] 2.2 Add "what's in a plugin" table/list: skills, hooks, MCP servers, agents, commands
- [x] 2.3 Add Terminal component showing `/plugin` marketplace browsing
- [x] 2.4 Add Terminal component showing `/plugin marketplace add author/name` installation
- [x] 2.5 Add mention of code intelligence plugins for typed languages
- [x] 2.6 Add official docs Callout at bottom linking to https://code.claude.com/docs/en/discover-plugins

## 3. Enrich commands.mdx

- [x] 3.1 Add "קלט עשיר" (Rich Input) section: explain `@` file references with examples (`@src/auth.ts`, `@https://...`)
- [x] 3.2 Add `Alt+V` (Windows/Linux) / `Option+V` (Mac) image paste explanation with use case examples
- [x] 3.3 Add official docs Callout at bottom linking to https://code.claude.com/docs/en/cli-reference

## 4. Enrich stateless.mdx (Session Management)

- [x] 4.1 Add `/clear` section: explain it resets context completely for switching between unrelated tasks
- [x] 4.2 Add `/clear` vs `/compact` comparison table: same task → /compact, new task → /clear, 2+ failed corrections → /clear + better prompt
- [x] 4.3 Add session management section: `--continue` (resume last), `--resume` (pick from list), `/rename` (name sessions)
- [x] 4.4 Add Terminal examples for /clear, --continue, --resume, /rename
- [x] 4.5 Add official docs Callout at bottom linking to https://code.claude.com/docs/en/memory

## 5. Enrich claude-md.mdx

- [x] 5.1 Add "פקודות אימות" (Verify Commands) section: emphasize putting `npm test`, `npm run lint`, `tsc` in CLAUDE.md Commands section
- [x] 5.2 Show example CLAUDE.md with verify commands and explain Claude auto-runs them after changes
- [x] 5.3 Add official docs Callout at bottom linking to https://code.claude.com/docs/en/memory#claude-md-files

## 6. Enrich sub-agents.mdx

- [x] 6.1 Add "יצירת Agent מותאם אישית" section with `/agents` interactive wizard as primary approach
- [x] 6.2 Show Terminal component: `/agents` → Claude asks for name, description, model, tools, color
- [x] 6.3 Add manual `.claude/agents/` file creation as secondary/team approach with frontmatter example
- [x] 6.4 Add official docs Callout at bottom linking to https://code.claude.com/docs/en/sub-agents

## 7. Enrich daily-habits.mdx

- [x] 7.1 Add "תנו ל-Claude לראיין אתכם" (Let Claude Interview You) Callout tip: "Before complex tasks, ask: 'What questions do you have before starting?'"
- [x] 7.2 Add "טעויות נפוצות" (Common Anti-Patterns) table with 4 rows: kitchen sink session → /clear, correcting loop → /clear + better prompt, over-specified CLAUDE.md → prune + hooks, trust-then-verify-too-late → check after each step
- [x] 7.3 Add official docs Callout at bottom linking to https://code.claude.com/docs/en/best-practices

## 8. Enrich tips.mdx

- [x] 8.1 Add "כלי CLI שClaude יודע להשתמש בהם" section: recommend installing gh, aws, gcloud, sentry-cli for Claude to use
- [x] 8.2 Add Terminal example showing Claude using `gh pr create` or `gh issue list`

## 9. Enrich prompting-cheatsheet.mdx

- [x] 9.1 Add new rows to cheat sheet table: verify commands (put test/lint in CLAUDE.md), @ references (reference files directly), interview pattern (ask Claude to ask you), /clear between tasks (fresh start), install CLI tools (gh, aws), image paste (Alt+V)

## 10. Official Docs Links — Part 3 Pages

- [x] 10.1 Add `<Callout emoji="📖">` to `agentic-loop.mdx` → https://code.claude.com/docs/en/how-claude-code-works
- [x] 10.2 Add `<Callout emoji="📖">` to `permissions.mdx` → https://code.claude.com/docs/en/permissions
- [x] 10.3 Add `<Callout emoji="📖">` to `models.mdx` → https://code.claude.com/docs/en/how-claude-code-works#models
- [x] 10.4 Verify claude-md, stateless, commands already get links from tasks 4.5, 5.3, 3.3

## 11. Official Docs Links — Part 4 Pages

- [x] 11.1 Add `<Callout emoji="📖">` to `hooks.mdx` → https://code.claude.com/docs/en/hooks-guide
- [x] 11.2 Add `<Callout emoji="📖">` to `skills.mdx` → https://code.claude.com/docs/en/skills
- [x] 11.3 Add `<Callout emoji="📖">` to `mcp.mdx` → https://code.claude.com/docs/en/mcp
- [x] 11.4 Add `<Callout emoji="📖">` to `context7.mdx` → https://context7.com
- [x] 11.5 Verify plugins.mdx and sub-agents.mdx already get links from tasks 2.6 and 6.4
- [x] 11.6 Add `<Callout emoji="📖">` to `prompting-cheatsheet.mdx` → https://code.claude.com/docs/en/best-practices

## 12. YouTube Video Embeds in Content Pages

- [x] 12.1 Add embedded YouTube iframe to `tokens.mdx`: Matt Pocock's "Most devs don't understand how LLM tokens work" (https://www.youtube.com/watch?v=nKSk_TiR8YA) — responsive 16:9 wrapper
- [x] 12.2 Add embedded YouTube iframe to `context-window.mdx`: Matt Pocock's "Most devs don't understand how context windows work" (https://www.youtube.com/watch?v=-uW5-TaVXu4)
- [x] 12.3 Add embedded YouTube iframe to `mcp.mdx`: Fireship's MCP explained video in the intro section
- [x] 12.4 Add Figma MCP demo video embed to `mcp.mdx` Figma section (https://www.youtube.com/watch?v=Cq-7lFMNESk)
- [x] 12.5 Use responsive wrapper pattern: `<div style={{position:'relative',paddingBottom:'56.25%',height:0}}><iframe style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} src="https://www.youtube.com/embed/VIDEO_ID" frameBorder="0" allowFullScreen /></div>`

## 13. Resource Cross-Links in Content Pages

- [x] 13.1 Add GitHub MCP repo link in `mcp.mdx` popular servers table (https://github.com/github/github-mcp-server)
- [x] 13.2 Add Figma MCP repo link in `mcp.mdx` Figma section (https://github.com/GLips/Figma-Context-MCP)
- [x] 13.3 Add zebbern guide link in `first-day.mdx` as "further reading" callout
- [x] 13.4 Add NotebookLM mention in `podcast.mdx` as companion resource callout

## 14. NotebookLM Section on Resources Page

- [x] 14.1 Expand NotebookLM section in `resources.mdx`: explain what NotebookLM is (Google's AI research notebook), how to use it to explore course content, ask follow-up questions, and get audio overviews
- [ ] 14.2 Add the new official docs URLs as sources to the NotebookLM notebook via NotebookLM MCP (after auth refresh): code.claude.com/docs/en/best-practices, /sub-agents, /mcp, /discover-plugins, /hooks-guide, /skills, /memory, /permissions, /cli-reference

## 15. Video Script Updates

- [x] 15.1 Update `videos/part3-claude-code.md`: add `/clear` alongside `/compact` in Slash Commands section, add `@` references mention
- [x] 15.2 Update `videos/part4-advanced-features.md`: add `/agents` wizard mention in Sub-Agents section, add brief plugins concept section
- [x] 15.3 Update `videos/part5-practical-mastery.md`: add interview pattern tip, add 2 anti-patterns (kitchen sink, correcting loop)

## 16. New Diagram

- [ ] 16.1 Create session lifecycle Excalidraw diagram: /compact vs /clear vs --continue decision tree
- [ ] 16.2 Export as SVG (light + dark) to `public/images/diagrams/session-lifecycle.svg`
- [ ] 16.3 Add DiagramImage in stateless.mdx referencing the new diagram

## 17. Quiz Updates

- [x] 17.1 Add 1-2 QuizQuestion to `content/part4-advanced/quiz.mdx` covering plugins (what they bundle, how to install)
- [x] 17.2 Add 1 QuizQuestion to `content/part3-claude-code/quiz.mdx` covering /clear vs /compact (when to use each)
- [x] 17.3 Add 1 QuizQuestion to `content/part3-claude-code/quiz.mdx` covering @ file references or image paste
- [x] 17.4 Add 1 QuizQuestion to `content/part5-practical/quiz.mdx` covering the interview pattern or anti-patterns

## 18. Verification

- [x] 18.1 Run `tsc` — zero TypeScript errors
- [x] 18.2 Run `npm run build` — successful production build
- [x] 18.3 Verify new plugins page renders correctly with Terminal components
- [x] 18.4 Verify updated stateless.mdx has /clear vs /compact table and session commands
- [x] 18.5 Verify YouTube embeds render responsively on desktop and mobile
- [x] 18.6 Verify all official docs links open correctly
