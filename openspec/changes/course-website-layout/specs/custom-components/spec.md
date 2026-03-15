## ADDED Requirements

### Requirement: VideoPlayer component
The `VideoPlayer` component SHALL render an HTML5 `<video>` element inside a terminal-style window chrome (● ● ● dots + title bar). It SHALL accept `src`, `title`, `poster`, and `chapters` props. The video SHALL be responsive and go edge-to-edge on mobile via negative margins.

#### Scenario: Video renders with terminal chrome
- **WHEN** `<VideoPlayer src="/videos/part1.mp4" title="חלק א׳" />` is used in MDX
- **THEN** a video player renders inside a styled container with terminal window dots and title bar

#### Scenario: Video goes edge-to-edge on mobile
- **WHEN** viewport width is below 768px
- **THEN** the video container breaks out of content padding to fill the full viewport width

### Requirement: VideoPlayer chapter list
The `VideoPlayer` SHALL accept an optional `chapters` prop (array of `{ time: number, label: string }`). When provided, a chapter list SHALL render below the video. Clicking a chapter SHALL seek the video to that timestamp.

#### Scenario: User clicks a chapter
- **WHEN** user clicks "הלולאה האג׳נטית" chapter item (time: 105)
- **THEN** the video seeks to 1:45 and the chapter item is highlighted as active

#### Scenario: Active chapter tracks video playback
- **WHEN** the video plays past a chapter boundary
- **THEN** the corresponding chapter item becomes highlighted as active

### Requirement: AudioPlayer component
The `AudioPlayer` component SHALL render an HTML5 `<audio>` element inside a shadcn Card with a title, play/pause button, and progress indicator. It SHALL accept `src` and `title` props.

#### Scenario: Audio plays and shows progress
- **WHEN** user clicks play on the audio player
- **THEN** audio plays and a progress bar updates in real-time

### Requirement: QuizQuestion component
The `QuizQuestion` component SHALL accept `question`, `options` (string array), `correctIndex` (number), and `explanation` (string) props. Options SHALL render as full-width shadcn Buttons. After selection, the correct answer SHALL highlight green and incorrect red, with the explanation shown below.

#### Scenario: User selects correct answer
- **WHEN** user clicks the correct option
- **THEN** the button turns green with a success animation, and the explanation shows with a ✅ prefix

#### Scenario: User selects wrong answer
- **WHEN** user clicks an incorrect option
- **THEN** the selected button turns red with a shake animation, the correct button turns green, and the explanation shows with ❌ prefix

#### Scenario: Quiz buttons have adequate touch targets on mobile
- **WHEN** viewport is mobile (<768px)
- **THEN** all option buttons are full-width with minimum 48px height

### Requirement: DiagramImage component
The `DiagramImage` component SHALL render a static SVG or image inside a shadcn Card with a caption. It SHALL accept `src`, `alt`, and `caption` props. On mobile, it SHALL show a tap-to-expand button that opens the image in a fullscreen overlay.

#### Scenario: Diagram renders with caption
- **WHEN** `<DiagramImage src="/images/diagrams/agentic-loop.svg" caption="הלולאה האג׳נטית" />` is used
- **THEN** the SVG renders responsively inside a card with the caption below

#### Scenario: Mobile tap-to-expand
- **WHEN** user taps the diagram on a mobile device
- **THEN** a fullscreen overlay opens showing the diagram at full resolution with a close button

### Requirement: HeroSection component
The `HeroSection` component SHALL render a full-width hero with: main title, subtitle, CTA button linking to Part 1, stat badges, and a terminal mockup showing animated Claude Code interaction lines. On desktop it SHALL be two-column (text + terminal). On mobile it SHALL stack vertically.

#### Scenario: Hero renders on desktop
- **WHEN** landing page loads on desktop (≥1024px)
- **THEN** hero shows two columns: text with CTA on one side, terminal mockup on the other

#### Scenario: Hero stacks on mobile
- **WHEN** landing page loads on mobile (<768px)
- **THEN** hero stacks vertically: text + CTA above, terminal mockup (reduced to 3-4 lines) below

### Requirement: CourseMap component
The `CourseMap` component SHALL render 5 course part cards in a terminal-pipeline style. Each card SHALL show an emoji, Hebrew title, sub-topics list, and link to the part's index page. On desktop it SHALL render as a horizontal connected flow. On mobile it SHALL render as a vertical pipeline.

#### Scenario: CourseMap renders horizontal on desktop
- **WHEN** landing page loads on desktop
- **THEN** 5 part cards render in a horizontal flow connected by lines, resembling a git graph

#### Scenario: CourseMap renders vertical on mobile
- **WHEN** landing page loads on mobile
- **THEN** 5 part cards stack vertically with connecting lines between them

#### Scenario: Part card links to content
- **WHEN** user clicks a course part card
- **THEN** they navigate to that part's index page (e.g., `/part3-claude-code`)
