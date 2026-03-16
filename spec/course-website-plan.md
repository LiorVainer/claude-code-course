# תוכנית אתר קורס — From ChatGPT to Vibe Coding with Claude Code

## Tech Stack

- **Nextra** (nextra-theme-docs) — Next.js-based docs framework with MDX
- **MDX** — Markdown + React components for interactive content
- **Remotion** — video rendering (existing, for embedding)
- **NotebookLM** — podcast audio generation (existing mp3)

---

## מבנה תיקיות

```
course-website/
├── app/
│   ├── layout.tsx              ← Nextra Layout wrapper (RTL, Hebrew fonts)
│   ├── [[...mdxPath]]/
│   │   └── page.tsx            ← Dynamic MDX page renderer
│   └── _components/
│       ├── VideoPlayer.tsx     ← Remotion video embed / HTML5 video
│       ├── AudioPlayer.tsx     ← Podcast mp3 player with progress bar
│       ├── Quiz.tsx            ← Interactive quiz component
│       ├── QuizQuestion.tsx    ← Single question with answer reveal
│       ├── DiagramImage.tsx    ← Responsive image with caption
│       └── KeyMessage.tsx      ← Styled callout box for key messages
├── content/
│   ├── _meta.ts                ← Top-level sidebar order
│   ├── index.mdx               ← Landing / course overview
│   ├── part1-foundations/
│   │   ├── _meta.ts            ← Section sidebar order
│   │   ├── index.mdx           ← Part 1 intro + video embed
│   │   ├── tokens.mdx          ← Tokens deep dive
│   │   ├── context-window.mdx  ← Context Window deep dive
│   │   └── quiz.mdx            ← Part 1 quiz
│   ├── part2-the-problem/
│   │   ├── _meta.ts
│   │   ├── index.mdx           ← Part 2 intro + video embed
│   │   ├── copy-paste-loop.mdx ← The problem explained
│   │   ├── vibe-coding.mdx     ← Vibe Coding intro
│   │   └── quiz.mdx
│   ├── part3-claude-code/
│   │   ├── _meta.ts
│   │   ├── index.mdx           ← Part 3 intro + video embed
│   │   ├── agentic-loop.mdx    ← Agentic loop + tools
│   │   ├── permissions.mdx     ← Permissions & safety
│   │   ├── claude-md.mdx       ← CLAUDE.md + Auto Memory
│   │   ├── stateless.mdx       ← Stateless nature + /compact
│   │   ├── models.mdx          ← Model family + 90/9/1
│   │   ├── commands.mdx        ← Slash commands
│   │   └── quiz.mdx
│   ├── part4-advanced/
│   │   ├── _meta.ts
│   │   ├── index.mdx           ← Part 4 intro + video embed
│   │   ├── sub-agents.mdx      ← Sub-Agents
│   │   ├── hooks.mdx           ← Hooks
│   │   ├── skills.mdx          ← Skills + skills.sh
│   │   ├── mcp.mdx             ← MCP + installation
│   │   ├── context7.mdx        ← context7 in action example
│   │   ├── openspec.mdx        ← Spec Driven Development
│   │   └── quiz.mdx
│   ├── part5-practical/
│   │   ├── _meta.ts
│   │   ├── index.mdx           ← Part 5 intro + video embed
│   │   ├── first-day.mdx       ← Step-by-step quickstart
│   │   ├── simplify.mdx        ← /simplify — 3-agent parallel code review
│   │   ├── daily-habits.mdx    ← Context mgmt, CLAUDE.md, /usage tracking
│   │   ├── tips.mdx            ← context-mode plugin, /usage subscription tracking
│   │   ├── security.mdx        ← Security tips
│   │   └── quiz.mdx
│   ├── podcast.mdx              ← Podcast audio embed page
│   └── resources.mdx            ← Links, references, further reading
├── public/
│   ├── videos/
│   │   ├── part1.mp4
│   │   ├── part2.mp4
│   │   ├── part3.mp4
│   │   ├── part4.mp4
│   │   └── part5.mp4
│   ├── audio/
│   │   └── podcast.mp3
│   └── images/
│       ├── diagrams/           ← Excalidraw / infographic images
│       └── screenshots/        ← elironginy screenshots, UI examples
├── mdx-components.tsx           ← Custom MDX components (RTL wrapper)
├── next.config.mjs              ← Nextra plugin config
├── package.json
└── tsconfig.json
```

---

## _meta.ts — Sidebar Structure

```typescript
// content/_meta.ts
import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: 'ברוכים הבאים',
  'part1-foundations': 'חלק א׳ — יסודות',
  'part2-the-problem': 'חלק ב׳ — הבעיה',
  'part3-claude-code': 'חלק ג׳ — Claude Code',
  'part4-advanced': 'חלק ד׳ — תכונות מתקדמות',
  'part5-practical': 'חלק ה׳ — שליטה מעשית',
  podcast: 'פודקאסט 🎧',
  resources: 'מקורות וקישורים 📚',
}

export default meta
```

```typescript
// content/part1-foundations/_meta.ts
import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: 'סקירה + וידאו',
  tokens: 'Tokens — האטומים של AI',
  'context-window': 'Context Window — ה-RAM',
  quiz: 'בדקו את עצמכם ❓',
}

export default meta
```

```typescript
// content/part3-claude-code/_meta.ts
import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: 'סקירה + וידאו',
  'agentic-loop': 'הלולאה האג׳נטית + כלים',
  permissions: 'הרשאות ואבטחה',
  'claude-md': 'CLAUDE.md + Auto Memory',
  stateless: 'Stateless + /compact',
  models: 'משפחת המודלים + 90/9/1',
  commands: 'Slash Commands',
  quiz: 'בדקו את עצמכם ❓',
}

export default meta
```

```typescript
// content/part4-advanced/_meta.ts
import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: 'סקירה + וידאו',
  'sub-agents': 'Sub-Agents',
  hooks: 'Hooks',
  skills: 'Skills + skills.sh',
  mcp: 'MCP — התקנה וחיבור',
  context7: 'context7 בפעולה',
  openspec: 'OpenSpec — SDD',
  quiz: 'בדקו את עצמכם ❓',
}

export default meta
```

```typescript
// content/part5-practical/_meta.ts
import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: 'סקירה + וידאו',
  'first-day': 'היום הראשון שלכם',
  simplify: '/simplify — סקירת קוד אוטומטית',
  'daily-habits': 'הרגלי עבודה יומיומיים',
  tips: 'טיפים: context-mode + /usage',
  security: 'אבטחה',
  quiz: 'בדקו את עצמכם ❓',
}

export default meta
```

---

## Custom Components

### VideoPlayer.tsx

```tsx
'use client'
import { useState } from 'react'

type VideoPlayerProps = {
  src: string
  title: string
  poster?: string
}

export function VideoPlayer({ src, title, poster }: VideoPlayerProps) {
  return (
    <div style={{ margin: '2rem 0', borderRadius: 12, overflow: 'hidden',
                  border: '1px solid var(--nextra-border)' }}>
      <video
        controls
        width="100%"
        poster={poster}
        style={{ display: 'block' }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div style={{ padding: '12px 16px', fontSize: 14,
                    color: 'var(--nextra-text-secondary)' }}>
        🎬 {title}
      </div>
    </div>
  )
}
```

### AudioPlayer.tsx

```tsx
'use client'

type AudioPlayerProps = {
  src: string
  title: string
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  return (
    <div style={{ margin: '2rem 0', padding: 20, borderRadius: 12,
                  background: 'var(--nextra-bg-secondary)',
                  border: '1px solid var(--nextra-border)' }}>
      <div style={{ marginBottom: 12, fontWeight: 600 }}>🎧 {title}</div>
      <audio controls style={{ width: '100%' }}>
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  )
}
```

### Quiz.tsx + QuizQuestion.tsx

```tsx
'use client'
import { useState } from 'react'

type QuizQuestionProps = {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export function QuizQuestion({ question, options, correctIndex, explanation }: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const answered = selected !== null
  const correct = selected === correctIndex

  return (
    <div style={{ margin: '1.5rem 0', padding: 20, borderRadius: 12,
                  border: `2px solid ${answered ? (correct ? '#10b981' : '#f87171') : 'var(--nextra-border)'}`,
                  background: 'var(--nextra-bg-secondary)' }}>
      <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 18 }}>{question}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => !answered && setSelected(i)}
            disabled={answered}
            style={{
              padding: '10px 16px', borderRadius: 8, border: '1px solid var(--nextra-border)',
              textAlign: 'right', cursor: answered ? 'default' : 'pointer',
              background: answered && i === correctIndex ? '#10b98133' :
                          answered && i === selected ? '#f8717133' : 'transparent',
              fontWeight: answered && i === correctIndex ? 700 : 400,
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      {answered && (
        <div style={{ marginTop: 12, padding: 12, borderRadius: 8,
                      background: correct ? '#10b98122' : '#f8717122' }}>
          {correct ? '✅ ' : '❌ '}{explanation}
        </div>
      )}
    </div>
  )
}
```

### KeyMessage.tsx

```tsx
type KeyMessageProps = {
  children: React.ReactNode
  emoji?: string
}

export function KeyMessage({ children, emoji = '💡' }: KeyMessageProps) {
  return (
    <div style={{ margin: '1.5rem 0', padding: '16px 20px', borderRadius: 12,
                  borderRight: '4px solid #cc785c',
                  background: 'rgba(204, 120, 92, 0.08)',
                  fontSize: 18, lineHeight: 1.6 }}>
      <span style={{ marginLeft: 8 }}>{emoji}</span> {children}
    </div>
  )
}
```

---

## Example MDX Page — Part 1 Index

```mdx
---
title: 'חלק א׳ — יסודות'
description: 'Tokens ו-Context Window — שני המושגים שצריך להבין לפני שנוגעים בכלי AI'
---

import { VideoPlayer } from '../../app/_components/VideoPlayer'
import { KeyMessage } from '../../app/_components/KeyMessage'

# חלק א׳ — יסודות

<KeyMessage>
לפני שנגע בכלי AI כלשהו, צריך להבין שני מושגים.
בלי הבנה שלהם, כל מה שנלמד אחר כך ירגיש כמו קסם במקום הנדסה.
</KeyMessage>

## צפו בסרטון

<VideoPlayer
  src="/videos/part1.mp4"
  title="חלק א׳ — יסודות: Tokens ו-Context Window"
/>

## מה נלמד בחלק הזה

- **Tokens** — יחידת הבסיס של AI. למה קוד יקר יותר מטקסט רגיל
- **Context Window** — הזיכרון של ה-AI. למה זה כמו RAM במחשב
- למה הבנה של שני המושגים האלה הופכת אתכם למפתחים טובים פי 10 עם AI

## המשיכו לקרוא

המשיכו לעמודים הבאים כדי להעמיק בכל מושג, או עברו ישירות ל[בוחן →](./quiz)
```

---

## Example Quiz Page

```mdx
---
title: 'בדקו את עצמכם — חלק א׳'
---

import { QuizQuestion } from '../../app/_components/Quiz'

# בדקו את עצמכם — יסודות

<QuizQuestion
  question="מה זה Token?"
  options={[
    "מילה שלמה בשפה כלשהי",
    "תו בודד (אות אחת)",
    "חתיכת טקסט שהמודל למד לזהות — לא מילה ולא תו",
    "שורת קוד שלמה"
  ]}
  correctIndex={2}
  explanation="Token הוא חתיכת טקסט שהמודל למד לזהות. לא מילה שלמה ולא תו בודד — משהו באמצע. כלל אצבע: Token אחד ≈ 4 תווים באנגלית."
/>

<QuizQuestion
  question="למה קוד עולה יותר Tokens מטקסט רגיל?"
  options={[
    "כי קוד כתוב באנגלית",
    "כי כל סוגר, נקודה-פסיק ורווח הזחה הם Token נפרד",
    "כי מודלים לא מבינים קוד",
    "כי קוד ארוך יותר מטקסט"
  ]}
  correctIndex={1}
  explanation="כל סימן בקוד — סוגריים, נקודה-פסיק, רווחי הזחה — הוא Token נפרד. קובץ TypeScript של 100 שורות עולה 800-1,200 tokens."
/>

<QuizQuestion
  question="מה קורה כשה-Context Window מתמלא?"
  options={[
    "Claude מפסיק לעבוד",
    "Claude מתחיל שיחה חדשה אוטומטית",
    "התשובות נהיות פחות טובות ומדויקות",
    "העלות יורדת"
  ]}
  correctIndex={2}
  explanation="כמו RAM במחשב — כשהזיכרון מלא, הביצועים יורדים. התשובות של Claude נהיות פחות מדויקות כי הוא 'רואה' פחות מהשיחה."
/>

<QuizQuestion
  question="מה המשמעות של 'Output עולה פי 5 מ-Input'?"
  options={[
    "שלכם עולה יותר לשלוח הודעות",
    "שהתגובות של Claude יקרות יותר מהבקשות שלכם",
    "שצריך לכתוב פחות",
    "שאי אפשר לבקש תגובות ארוכות"
  ]}
  correctIndex={1}
  explanation="תגובות של Claude עולות פי 5 מהבקשות שלכם. לכן הנחיות תמציתיות → תגובות קצרות וזולות יותר. השתמשו ב-/usage כדי לעקוב אחרי צריכת המנוי שלכם."
/>
```

---

## Podcast Page

```mdx
---
title: 'פודקאסט 🎧'
---

import { AudioPlayer } from '../app/_components/AudioPlayer'

# האזינו לפודקאסט

פודקאסט שמסכם את כל 5 החלקים של הקורס בשיחה טבעית.
מתאים להאזנה בנסיעה, בהפסקה, או כחזרה אחרי הצפייה בסרטונים.

<AudioPlayer
  src="/audio/podcast.mp3"
  title="From ChatGPT Copy-Paste to Vibe Coding — Deep Dive Podcast"
/>

## מה מכוסה בפודקאסט

1. **יסודות** — Tokens ו-Context Window בהסבר אינטואיטיבי
2. **הבעיה** — למה Copy-Paste מ-ChatGPT לא עובד (עם מספרים)
3. **Claude Code** — הלולאה האג׳נטית, כלים, הרשאות, מודלים
4. **תכונות מתקדמות** — Sub-Agents, Hooks, Skills, MCP
5. **שליטה מעשית** — מדריך התחלה מהיר + טיפים
```

---

## Example Resources Page

```mdx
---
title: 'מקורות וקישורים 📚'
---

import { KeyMessage } from '../app/_components/KeyMessage'

# מקורות וקישורים

כל המקורות, הכלים והקישורים שנזכרו בסדרת הסרטונים — מאורגנים לפי קטגוריה.

---

## תיעוד רשמי

| מקור | קישור |
|------|-------|
| Claude Code Docs | [code.claude.com](https://code.claude.com) |
| Claude Platform & Models | [platform.claude.com](https://platform.claude.com/docs/en/about-claude/models/overview) |
| Explore Claude Code — סקירת פיצ׳רים | [exploreclaudecode.com](https://www.exploreclaudecode.com) |
| Skills Directory | [skills.sh](https://skills.sh) |
| Sub-Agents Docs | [code.claude.com/docs/en/sub-agents](https://code.claude.com/docs/en/sub-agents) |
| Skills Docs | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| Hooks Guide | [code.claude.com/docs/en/hooks-guide](https://code.claude.com/docs/en/hooks-guide) |
| Plugins Docs | [code.claude.com/docs/en/discover-plugins](https://code.claude.com/docs/en/discover-plugins) |
| Official Training | [anthropic.skilljar.com/claude-code-in-action](https://anthropic.skilljar.com/claude-code-in-action) |

---

## מדריכים מהקהילה

| מקור | תיאור |
|------|-------|
| [zebbern/claude-code-guide](https://github.com/zebbern/claude-code-guide) | מדריך קהילתי מקיף עם טיפים מעשיים |
| [elironginy — Substack](https://elironginy.substack.com/p/claude-code-15) | מדריך מעשי בעברית — 3 דרכים לדבר עם Claude, בחירת מודלים, Skills metadata |
| [Permissions Deep Dive](https://www.ksred.com/claude-code-dangerously-skip-permissions-when-to-use-it-and-when-you-absolutely-shouldnt/) | מתי להשתמש ב-skip permissions ומתי לא |

---

## סרטונים

| נושא | יוצר | סרטון | למה לצפות |
|------|------|-------|-----------|
| Tokens — הבסיס | Matt Pocock | [Most devs don't understand how LLM tokens work](https://www.youtube.com/watch?v=nKSk_TiR8YA) | יסוד — חובה להבין לפני כל כלי AI |
| Context Windows — הזיכרון | Matt Pocock | [Most devs don't understand how context windows work](https://www.youtube.com/watch?v=-uW5-TaVXu4) | יסוד — למה ניהול Context חשוב |
| Figma MCP | — | [Figma MCP Setup](https://www.youtube.com/watch?v=Cq-7lFMNESk) | הדגמת עיצוב-לקוד עם MCP |
| MCP explained | Fireship | "I gave Claude root access to my server... MCP explained" | סקירה מהירה וברורה של MCP |
| Claude Code in practice | Theo (t3dotgg) | "I'm addicted to Claude Code (i get it now)" | נקודת מבט כנה של מפתח |
| AI in Terminal | NetworkChuck | "AI in the Terminal" (Claude Code, Gemini CLI, Codex) | ידידותי למתחילים, השוואת כלים |

---

## כלים

| כלי | תיאור | קישור / התקנה |
|-----|-------|---------------|
| **OpenSpec** | Spec Driven Development — תכנון לפני קוד | [github.com/Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) / `npm i -g @fission-ai/openspec@latest` |
| **context7** | MCP לדוקומנטציה מעודכנת של ספריות — פותר hallucinations | `npx ctx7 setup --claude` |
| **Figma MCP** | עיצוב ישירות לקוד | [סרטון הדגמה](https://www.youtube.com/watch?v=Cq-7lFMNESk) |
| **context-mode** | פלאגין לחיסכון Tokens אוטומטי (עד 98%) | `/plugin marketplace add mksglu/context-mode` |
| **GitHub MCP** | PRs, Issues, ו-code search ישירות מ-Claude | MCP server — `github` |

---

## מאמרים

| נושא | קישור |
|------|-------|
| SDD — Spec Driven Development | [heeki.medium.com](https://heeki.medium.com) — SDD methodology article |
| Announcements | [claude.com/blog/category/announcements](https://claude.com/blog/category/announcements) |

---

## NotebookLM

<KeyMessage>
כל המחקר לסדרת הסרטונים נאסף ב-NotebookLM notebook אחד — כולל כל המקורות, הפודקאסט, והאינפוגרפיקות.
</KeyMessage>

- [NotebookLM Notebook](https://notebooklm.google.com/notebook/e7bb17c5-7712-482d-ae23-af5f901482b9) — Public sharing enabled
```

---

## Layout / RTL Configuration

```tsx
// app/layout.tsx
import { Layout } from 'nextra-theme-docs'

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Layout
          sidebar={{ autoCollapse: true }}
          docsRepositoryBase="https://github.com/your-repo"
          footer={{ content: 'קורס Claude Code — 2026' }}
          navigation={{ prev: true, next: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
```

---

## Setup Commands

```bash
# Create project
npx create-next-app course-website --typescript
cd course-website

# Install Nextra
npm install nextra nextra-theme-docs

# Configure next.config.mjs
# Add: import nextra from 'nextra'
# Wrap config with nextra({ theme: 'nextra-theme-docs' })

# Start dev
npm run dev
```

---

## Visual Layout — What It Looks Like

```
┌─────────────────────────────────────────────────────────┐
│  🎓 From ChatGPT to Vibe Coding          [🌙 Dark]     │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│  ברוכים הבאים │  # חלק א׳ — יסודות                     │
│              │                                          │
│  ▼ חלק א׳    │  ┌────────────────────────────────┐      │
│    סקירה+וידאו│  │  ▶  [VIDEO PLAYER]             │      │
│    Tokens    │  │     Part 1 — Foundations         │      │
│    Context   │  └────────────────────────────────┘      │
│    בוחן ❓   │                                          │
│              │  💡 לפני שנגע בכלי AI כלשהו, צריך       │
│  ▼ חלק ב׳    │     להבין שני מושגים...                  │
│    ...       │                                          │
│              │  ## מה נלמד בחלק הזה                     │
│  ▼ חלק ג׳    │  - Tokens — יחידת הבסיס של AI           │
│    ...       │  - Context Window — הזיכרון של ה-AI      │
│              │                                          │
│  ▼ חלק ד׳    │  ┌──────────────────────────────┐        │
│    ...       │  │ 📊 [DIAGRAM IMAGE]            │        │
│              │  │ RAM vs Context Window         │        │
│  ▼ חלק ה׳    │  └──────────────────────────────┘        │
│              │                                          │
│  פודקאסט 🎧  │  ## בדקו את עצמכם                       │
│  מקורות 📚   │  ┌──────────────────────────────┐        │
│              │  │ ❓ מה זה Token?               │        │
│              │  │  ○ מילה שלמה                  │        │
│              │  │  ● חתיכת טקסט שהמודל למד...   │        │
│              │  │  ✅ נכון!                      │        │
│              │  └──────────────────────────────┘        │
│              │                                          │
│              │  ┌──────────────────────────────┐        │
│              │  │ 🎧 [PODCAST PLAYER]           │        │
│              │  │ ▶ ━━━━━━━━━○━━━━━ 23:45       │        │
│              │  └──────────────────────────────┘        │
│              │                                          │
│              │         [← הקודם]  [הבא →]               │
├──────────────┴──────────────────────────────────────────┤
│  קורס Claude Code — 2026                                │
└─────────────────────────────────────────────────────────┘
```

---

## Quiz Questions Per Part (Summary)

| חלק | נושאי שאלות |
|-----|------------|
| א׳ — יסודות | מה זה Token, למה קוד יקר, Context Window כ-RAM, עלות Output vs Input |
| ב׳ — הבעיה | כישלון לולאת ה-Copy-Paste, מושג ה-Human Compiler, מהו Vibe Coding, Karpathy טבע את המונח |
| ג׳ — Claude Code | הלולאה האג׳נטית, כלים (Read/Edit/Write/Bash/Grep/Glob/Agent), CLAUDE.md נטען אוטומטית ל-Context, Auto Memory, טבע Stateless + /compact, כלל 90/9/1 למודלים, /usage (לא /cost) |
| ד׳ — מתקדם | Sub-Agents (זיכרון נפרד), Hooks (דטרמיניסטי vs הסתברותי), Skills (טעינה עצלה, /skills, התקנה מ-skills.sh), MCP (התקנה עם npx ctx7 setup, /mcp לבדיקה, context7 בפעולה), OpenSpec SDD (תכנון לפני קוד) |
| ה׳ — מעשי | /simplify עם 3 סוכנים (איכות/שימוש חוזר/יעילות), /usage למעקב מנוי, פלאגין context-mode, Remote Control, שימושים מעבר לקוד |

---

## Diagrams & Images to Include

- RAM vs Context Window comparison diagram
- Agentic Loop flow diagram
- Copy-Paste loop vs Agentic development spectrum
- Skills lazy-loading architecture
- MCP "USB for AI" connection diagram
- OpenSpec 4-phase workflow
- Model family comparison (Haiku/Sonnet/Opus)
- elironginy screenshots (3 ways to talk, model selection, skills metadata)
- /simplify 3-agent review diagram (quality/reusability/efficiency agents working in parallel)
- context7 in action screenshot (resolve-library-id + query-docs flow)
- /mcp connected servers list (context7, github, figma status)
- /skills installed skills list (frontend-design, remotion-bits, presentation with token counts)
- context-mode savings stats (4.6x savings, 78% reduction)
