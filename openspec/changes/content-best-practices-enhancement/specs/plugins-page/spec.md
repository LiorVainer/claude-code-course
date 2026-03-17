## ADDED Requirements

### Requirement: Plugins page in Part 4
A new `content/part4-advanced/plugins.mdx` page SHALL explain the plugin ecosystem: what plugins bundle (skills, hooks, MCP servers, agents, commands), how to browse the marketplace with `/plugin`, and how to install plugins with `/plugin marketplace add author/name`.

#### Scenario: Plugins page renders in sidebar
- **WHEN** user navigates to Part 4
- **THEN** "Plugins" appears in the sidebar after context7 and before OpenSpec

#### Scenario: Page explains plugin composition
- **WHEN** user reads the plugins page
- **THEN** they see a table/list showing that a plugin can contain: skills, hooks, MCP servers, agents, and commands

#### Scenario: Marketplace browsing shown
- **WHEN** user reads the plugins page
- **THEN** they see a Terminal component showing `/plugin` command and marketplace browsing output

#### Scenario: Plugin installation shown
- **WHEN** user reads the plugins page
- **THEN** they see a Terminal component showing `/plugin marketplace add author/name` with success output

#### Scenario: Code intelligence plugins mentioned
- **WHEN** user reads the plugins page
- **THEN** they see mention of code intelligence plugins for typed languages

#### Scenario: Official docs link present
- **WHEN** user reaches bottom of plugins page
- **THEN** a Callout links to https://code.claude.com/docs/en/discover-plugins
