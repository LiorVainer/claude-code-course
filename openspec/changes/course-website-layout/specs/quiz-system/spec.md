## ADDED Requirements

### Requirement: Separate quiz page per course part
Each course part SHALL have a dedicated `quiz.mdx` page containing 3-5 QuizQuestion components. The quiz page SHALL be the last item in the part's `_meta.ts` sidebar with the label "בדקו את עצמכם ❓".

#### Scenario: Quiz page appears last in sidebar
- **WHEN** user views the sidebar for any course part
- **THEN** "בדקו את עצמכם ❓" appears as the last item in that section

### Requirement: Quiz questions with immediate feedback
Each QuizQuestion SHALL show the question text, multiple-choice options as full-width buttons, and after selection: correct answer highlighted green, incorrect highlighted red, and an explanation paragraph.

#### Scenario: Correct answer selected
- **WHEN** user clicks the correct option
- **THEN** the button animates green (pulse), explanation appears with ✅, and all buttons become disabled

#### Scenario: Incorrect answer selected
- **WHEN** user clicks an incorrect option
- **THEN** selected button animates red (shake), correct button highlights green, explanation appears with ❌, and all buttons become disabled

### Requirement: Quiz content per part
Quizzes SHALL cover the following topics per part:
- Part 1: tokens definition, code token cost, context window as RAM, output vs input pricing
- Part 2: copy-paste loop failure modes, Human Compiler concept, Vibe Coding definition, Karpathy attribution
- Part 3: agentic loop, tools (Read/Edit/Write/Bash/Grep/Glob/Agent), CLAUDE.md auto-loading, stateless nature, 90/9/1 model rule, /usage command
- Part 4: sub-agent memory isolation, hooks deterministic vs probabilistic, skills lazy loading, MCP setup, OpenSpec SDD
- Part 5: /simplify 3-agent review, /usage tracking, context-mode plugin, remote control, beyond-code uses

#### Scenario: Part 3 quiz covers all required topics
- **WHEN** user opens the Part 3 quiz page
- **THEN** there are 4-5 questions covering agentic loop, tools, CLAUDE.md, stateless, and model selection

### Requirement: Wrong answer links to content
When a user answers incorrectly, the explanation SHALL include a link to the relevant content page where the topic is explained in depth.

#### Scenario: Wrong answer shows content link
- **WHEN** user answers a token question incorrectly on the Part 1 quiz
- **THEN** the explanation includes a link like "חזרו ל: Tokens — האטומים של AI" pointing to `/part1-foundations/tokens`
