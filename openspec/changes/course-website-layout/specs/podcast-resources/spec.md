## ADDED Requirements

### Requirement: Podcast page with dual-language toggle
The `podcast.mdx` page SHALL use Nextra's `<Tabs>` component with two tabs: "עברית 🇮🇱" and "English 🇺🇸". Each tab SHALL contain an AudioPlayer component with the corresponding language mp3.

#### Scenario: User toggles between languages
- **WHEN** user clicks the "English 🇺🇸" tab on the podcast page
- **THEN** the English AudioPlayer appears and the Hebrew AudioPlayer is hidden

#### Scenario: Default tab is Hebrew
- **WHEN** podcast page loads
- **THEN** the Hebrew tab is active by default

### Requirement: Podcast content summary
The podcast page SHALL include a numbered list summarizing what each of the 5 parts covers, so listeners know what to expect.

#### Scenario: Content summary is visible
- **WHEN** user visits the podcast page
- **THEN** a numbered list shows summaries for all 5 course parts below the audio player

### Requirement: Resources page with tool cards
The `resources.mdx` page SHALL use Nextra's `<Cards>` component to display categorized links: official documentation, community guides, videos, tools, and articles. Each card SHALL have a title, optional icon, and external link.

#### Scenario: Resources render as clickable cards
- **WHEN** user visits the resources page
- **THEN** tool links render as Cards components with titles and arrow indicators

### Requirement: NotebookLM link on resources page
The resources page SHALL include a Callout highlighting the public NotebookLM notebook with a direct link to `notebooklm.google.com/notebook/e7bb17c5-...`.

#### Scenario: NotebookLM callout is visible
- **WHEN** user scrolls to the NotebookLM section on resources
- **THEN** a Callout component shows with the notebook link and description

### Requirement: Prompting cheat-sheet on resources page
The resources page SHALL include a summary table collecting all prompting tips distributed across the course content. Each row SHALL have the tip name, a one-line description, and a link to the page where it appears in full context.

#### Scenario: Cheat-sheet links to source pages
- **WHEN** user clicks "Guide tool selection" in the cheat-sheet table
- **THEN** they navigate to `/part3-claude-code/agentic-loop` where the full tip appears

### Requirement: External link to Anthropic prompting best practices
The resources page SHALL include a link to `platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices` in the official documentation section for developers who want the full API-level prompting guide.

#### Scenario: Anthropic link is present
- **WHEN** user views the official documentation section on resources
- **THEN** a card or link labeled "Anthropic Prompting Best Practices" links to the official page
