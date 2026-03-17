'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'
import Terminal from './Terminal'

const TERMINAL_LINES_DESKTOP = [
  { prompt: '❯', command: '"create a landing page for the course website"' },
  { output: '  📂 Scanning project structure...' },
  { output: '  📖 Reading layout.tsx, globals.css...' },
  { output: '  ✏️  Creating HeroSection.tsx...', color: '#cc785c' },
  { output: '  ✏️  Creating CourseMap.tsx...', color: '#cc785c' },
  { output: '  💻 Running npm run build...' },
  { output: '  ✓  Build successful — 1 new page generated!', color: '#28c840' },
]

const TERMINAL_LINES_MOBILE = [
  { prompt: '❯', command: '"create a landing page"' },
  { output: '  ✏️  Creating HeroSection.tsx...', color: '#cc785c' },
  { output: '  ✓  Build successful!', color: '#28c840' },
]

export default function HeroSection(_props: Record<string, never> = {}) {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text column */}
          <div dir="rtl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              קורס למפתחי Full-Stack
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-snug">
              🎓 מסתם פרומפטים
              <br />
              <span className="text-primary">ל-Agentic Vibe Coding</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              מעבר משימוש בסיסי ב-ChatGPT/Gemini
              <br />
              לעבודה מעשית עם Vibe Coding ו-Claude Code,
              <br />
              כלי אג׳נטי שמכיר את הפרויקט שלכם ויודע לבנות, לתקן ולשפר קוד בעצמו.
              <br />
              <br />
              ב-5 חלקים, מהיסודות ועד שימוש אמיתי בפיתוח.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <Badge variant="secondary">סרטונים</Badge>
              <Badge variant="secondary">פודקאסט</Badge>
              <Badge variant="secondary">בחנים</Badge>
              <Badge variant="secondary">דיאגרמות</Badge>
              <Badge variant="secondary">טיפים ל-prompting</Badge>
              <Badge variant="secondary">מדריך צעד-אחר-צעד</Badge>
              <Badge variant="secondary">NotebookLM</Badge>
            </div>
            <Link href="/intro" className="group">
              <Button size="lg" className="text-base px-8 h-12 mt-4 gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.03]">
                התחילו ללמוד
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Terminal */}
          <div className="hidden md:block">
            <Terminal title="claude" lines={TERMINAL_LINES_DESKTOP} />
          </div>
          <div className="block md:hidden">
            <Terminal title="claude" lines={TERMINAL_LINES_MOBILE} />
          </div>
        </div>
      </div>
    </section>
  )
}
