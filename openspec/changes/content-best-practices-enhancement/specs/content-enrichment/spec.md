## ADDED Requirements

### Requirement: commands.mdx rich input section
`commands.mdx` SHALL include a "קלט עשיר" section explaining `@` file/URL references and `Alt+V` (Windows/Linux) / `Option+V` (Mac) for pasting images into prompts.

#### Scenario: @ references explained
- **WHEN** user reads commands.mdx
- **THEN** they see examples of `@filename` to reference files and `@url` to reference URLs

#### Scenario: Image paste explained
- **WHEN** user reads commands.mdx
- **THEN** they see `Alt+V` / `Option+V` keyboard shortcut for pasting images with prompts

### Requirement: stateless.mdx becomes session management page
`stateless.mdx` SHALL add `/clear` command explanation, a `/clear` vs `/compact` comparison table, and session management commands (`--continue`, `--resume`, `/rename`). Sidebar label SHALL change to "ניהול סשנים ו-Context".

#### Scenario: /clear explained
- **WHEN** user reads stateless.mdx
- **THEN** they see `/clear` as a way to reset context between unrelated tasks

#### Scenario: /clear vs /compact comparison
- **WHEN** user reads stateless.mdx
- **THEN** they see a comparison table: /compact = summarize within same task, /clear = fresh start for new task

#### Scenario: Session persistence explained
- **WHEN** user reads stateless.mdx
- **THEN** they see `--continue` (resume last), `--resume` (pick session), `/rename` (name sessions)

### Requirement: claude-md.mdx verify commands section
`claude-md.mdx` SHALL include a section emphasizing that CLAUDE.md should contain verify commands (test, lint, type-check) so Claude auto-verifies its work.

#### Scenario: Verify commands shown
- **WHEN** user reads claude-md.mdx
- **THEN** they see an example CLAUDE.md with `npm test`, `npm run lint`, `tsc` under a Commands section with explanation that Claude runs these automatically

### Requirement: sub-agents.mdx /agents wizard
`sub-agents.mdx` SHALL show the `/agents` interactive wizard as the primary way to create custom agents, with manual `.claude/agents/` file creation as a secondary approach.

#### Scenario: /agents wizard shown first
- **WHEN** user reads the "creating custom agents" section
- **THEN** they see `/agents` command first, explained as picking name, description, model, tools, and color interactively

#### Scenario: Manual approach shown second
- **WHEN** user reads further
- **THEN** they see `.claude/agents/` file creation with frontmatter as an alternative for version-controlled team agents

### Requirement: daily-habits.mdx interview pattern and anti-patterns
`daily-habits.mdx` SHALL add a "let Claude interview you" prompting tip and a common failure anti-patterns table.

#### Scenario: Interview pattern shown
- **WHEN** user reads daily-habits.mdx
- **THEN** they see a Callout tip: "Before complex tasks, ask Claude: 'What questions do you have before starting?'"

#### Scenario: Anti-patterns table shown
- **WHEN** user reads daily-habits.mdx
- **THEN** they see a table with 4 anti-patterns: kitchen sink session, correcting loop, over-specified CLAUDE.md, trust-then-verify-too-late — each with a fix

### Requirement: tips.mdx CLI tools section
`tips.mdx` SHALL include a section about installing CLI tools (gh, aws, gcloud) that Claude can use.

#### Scenario: CLI tools tip shown
- **WHEN** user reads tips.mdx
- **THEN** they see a recommendation to install gh, aws, gcloud etc. so Claude can use them directly

### Requirement: prompting-cheatsheet.mdx new rows
`prompting-cheatsheet.mdx` SHALL add rows for: verify commands, @ references, interview pattern, /clear between tasks, plugins.

#### Scenario: Cheat sheet has new rows
- **WHEN** user views the cheat sheet
- **THEN** they see at least 5 new tip rows covering the added best practices
