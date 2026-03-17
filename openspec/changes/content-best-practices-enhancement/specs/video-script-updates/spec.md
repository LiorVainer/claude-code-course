## ADDED Requirements

### Requirement: Part 3 video script updates
`videos/part3-claude-code.md` SHALL add mentions of `/clear`, `@` file references, and verify commands in CLAUDE.md.

#### Scenario: /clear mentioned in Part 3 script
- **WHEN** reading the Slash Commands section of the Part 3 script
- **THEN** `/clear` appears alongside `/compact` with a brief distinction

#### Scenario: @ references mentioned
- **WHEN** reading the Part 3 script
- **THEN** `@` file references are mentioned as a way to give Claude specific context

### Requirement: Part 4 video script updates
`videos/part4-advanced-features.md` SHALL add the `/agents` interactive wizard and a brief plugins concept.

#### Scenario: /agents wizard in Part 4 script
- **WHEN** reading the Sub-Agents section of the Part 4 script
- **THEN** the `/agents` command is mentioned as the interactive way to create custom agents

#### Scenario: Plugins concept in Part 4 script
- **WHEN** reading the Part 4 script
- **THEN** plugins are mentioned as bundles of skills+hooks+MCP that can be installed from a marketplace

### Requirement: Part 5 video script updates
`videos/part5-practical-mastery.md` SHALL add the interview pattern and common anti-patterns.

#### Scenario: Interview pattern in Part 5 script
- **WHEN** reading the practical tips section
- **THEN** "ask Claude what questions it has before starting" is mentioned as a technique

#### Scenario: Anti-patterns in Part 5 script
- **WHEN** reading the daily habits section
- **THEN** at least the "kitchen sink session" and "correcting loop" anti-patterns are mentioned with fixes
