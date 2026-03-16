'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface CoursePart {
  icon: string | { src: string; alt: string }
  title: string
  subtopics: string[]
  href: string
}

const COURSE_PARTS: CoursePart[] = [
  {
    icon: '🧠',
    title: 'חלק א׳ — יסודות',
    subtopics: ['Tokens', 'Context Window', 'איך LLMs עובדים'],
    href: '/part1-foundations',
  },
  {
    icon: '❓',
    title: 'חלק ב׳ — הבעיה',
    subtopics: ['לולאת Copy-Paste', 'Vibe Coding', 'מה חסר'],
    href: '/part2-the-problem',
  },
  {
    icon: { src: '/claude-code-logo.png', alt: 'Claude Code' },
    title: 'חלק ג׳ — Claude Code',
    subtopics: ['לולאה אג׳נטית', 'כלים והרשאות', 'מודלים'],
    href: '/part3-claude-code',
  },
  {
    icon: '🔌',
    title: 'חלק ד׳ — מתקדם',
    subtopics: ['Sub-Agents', 'Hooks & Skills', 'MCP'],
    href: '/part4-advanced',
  },
  {
    icon: '🚀',
    title: 'חלק ה׳ — שליטה מעשית',
    subtopics: ['היום הראשון', 'טיפים יומיים', 'אבטחה'],
    href: '/part5-practical',
  },
]

function PartIcon({ icon }: { icon: CoursePart['icon'] }) {
  if (typeof icon === 'string') {
    return <span className="text-3xl">{icon}</span>
  }
  return (
    <Image
      src={icon.src}
      alt={icon.alt}
      width={40}
      height={40}
      className="object-contain"
    />
  )
}

export default function CourseMap(_props: Record<string, never> = {}) {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-right mb-6">מסלול הקורס</h2>

      {/* Desktop: horizontal flow, RTL order (Part 1 on right) */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-3" style={{ direction: 'rtl' }}>
        {COURSE_PARTS.map((part) => (
          <Link key={part.href} href={part.href} className="group">
            <Card className="h-full transition-all hover:border-primary hover:shadow-md cursor-pointer group-hover:scale-[1.02]">
              <CardContent className="p-4 text-center flex flex-col items-center">
                <div className="mb-2 h-10 flex items-center justify-center">
                  <PartIcon icon={part.icon} />
                </div>
                <p className="font-semibold text-sm mb-2 min-h-[2.5rem] flex items-center">{part.title}</p>
                <ul className="space-y-0.5">
                  {part.subtopics.map((topic) => (
                    <li key={topic} className="text-xs text-muted-foreground">
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Mobile: vertical pipeline */}
      <div className="flex lg:hidden flex-col gap-0">
        {COURSE_PARTS.map((part, i) => (
          <div key={part.href}>
            <Link href={part.href}>
              <Card className="transition-all hover:border-primary hover:shadow-md cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                      <PartIcon icon={part.icon} />
                    </div>
                    <div className="text-right flex-1">
                      <p className="font-semibold">{part.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {part.subtopics.join(' · ')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            {i < COURSE_PARTS.length - 1 && (
              <div className="flex justify-center py-0.5" aria-hidden>
                <div className="w-0.5 h-4 bg-border" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
