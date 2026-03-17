'use client'

import { Code, Brain, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface AudienceItem {
  icon: LucideIcon
  text: string
  detail: string
}

const AUDIENCE: AudienceItem[] = [
  {
    icon: Code,
    text: 'מפתחי Full-Stack',
    detail: 'שמדביקים קוד מ-ChatGPT ורוצים לעבוד חכם יותר',
  },
  {
    icon: Brain,
    text: 'מפתחים סקרנים',
    detail: 'שרוצים להבין איך AI עובד מאחורי הקלעים',
  },
  {
    icon: Users,
    text: 'צוותי פיתוח',
    detail: 'שרוצים לאמץ Claude Code כחלק מהעבודה היומיומית',
  },
]

export default function LandingAudience() {
  return (
    <section className="my-16" dir="rtl">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          למי הקורס מיועד?
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {AUDIENCE.map((item) => (
          <div
            key={item.text}
            className="flex flex-col items-center text-center gap-3 rounded-2xl border border-border/40 bg-muted/30 p-6"
          >
            <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <item.icon className="size-5" />
            </div>
            <h3 className="font-semibold text-foreground">{item.text}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
