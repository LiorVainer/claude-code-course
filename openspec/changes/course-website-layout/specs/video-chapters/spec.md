## ADDED Requirements

### Requirement: nuqs URL timestamp parameter
The VideoPlayer SHALL use nuqs `useQueryState` with `parseAsInteger` to manage a `t` URL parameter. When `?t=125` is present in the URL on page load, the video SHALL seek to that time (125 seconds).

#### Scenario: Page loads with timestamp in URL
- **WHEN** user navigates to `/part3-claude-code?t=125`
- **THEN** the video player seeks to 2:05 on mount

#### Scenario: URL stays clean without interaction
- **WHEN** page loads without a `?t=` parameter
- **THEN** no `t` parameter is added to the URL and the video starts from the beginning

### Requirement: Chapter click updates URL
When a user clicks a chapter item, the video SHALL seek to that chapter's time AND the URL SHALL update with the corresponding `?t=` value via nuqs shallow update.

#### Scenario: Clicking chapter updates URL
- **WHEN** user clicks the chapter "הכלים" at time 260
- **THEN** video seeks to 4:20 and URL updates to include `?t=260` without page reload

### Requirement: Share button copies timestamped URL
The VideoPlayer SHALL include a share button (🔗 icon) that copies the current page URL with the current video timestamp as `?t=` parameter to the clipboard.

#### Scenario: User shares current timestamp
- **WHEN** user clicks the share button while video is at 3:15
- **THEN** the URL with `?t=195` is copied to clipboard and a brief "הקישור הועתק" toast appears

### Requirement: Chapter data structure
Each video's chapters SHALL be defined as a TypeScript array of `{ time: number; label: string }` objects. Chapter data SHALL be passed to VideoPlayer via the `chapters` prop from the MDX page.

#### Scenario: Chapters render in correct order
- **WHEN** VideoPlayer receives a chapters array with 7 items
- **THEN** all 7 chapters render in the list in the same order as the array, with formatted timestamps (e.g., 105 → "1:45")
