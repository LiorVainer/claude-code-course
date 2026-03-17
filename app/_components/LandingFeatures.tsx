'use client'

import Link from 'next/link'
import {
  BookOpen,
  Video,
  Headphones,
  MessageCircle,
  HelpCircle,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

const FEATURES: Feature[] = [
  {
    icon: BookOpen,
    title: 'תוכן כתוב',
    description: '5 חלקים מפורטים עם דוגמאות קוד, דיאגרמות וטבלאות השוואה',
  },
  {
    icon: Video,
    title: 'סרטוני וידאו',
    description: 'הדגמות מעשיות של Claude Code בפעולה בכל חלק',
  },
  {
    icon: Headphones,
    title: 'פודקאסט',
    description: 'האזינו בדרכים — עברית ואנגלית',
    href: '/podcast',
  },
  {
    icon: MessageCircle,
    title: 'NotebookLM',
    description: 'שאלו שאלות בחינם וקבלו תשובות מבוססות מקורות',
    href: '/notebooklm',
  },
  {
    icon: HelpCircle,
    title: 'בחנים אינטראקטיביים',
    description: 'בדקו את ההבנה שלכם בסוף כל חלק עם ניקוד מיידי',
  },
  {
    icon: Zap,
    title: 'Cheatsheet',
    description: 'טיפים מהירים ל-prompting — הכל בעמוד אחד',
    href: '/prompting-cheatsheet',
  },
]

const cardClass = "group relative flex flex-col items-center justify-center md:justify-start text-center gap-3 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"

function CardContent({ feature }: { feature: Feature }) {
  return (
    <>
      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
        <feature.icon className="size-6" />
      </div>
      <h3 className="font-semibold text-foreground">{feature.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
      {feature.href ? (
        <span className="text-xs text-primary hidden md:block font-medium opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-1.5">פתחו <span>←</span></span>
        </span>
      ) : null}
    </>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  if (feature.href) {
    return (
      <Link href={feature.href} className={cardClass}>
        <CardContent feature={feature} />
      </Link>
    )
  }
  return (
    <div className={cardClass}>
      <CardContent feature={feature} />
    </div>
  )
}

export default function LandingFeatures() {
  return (
    <section className="mt-16" dir="rtl">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          למדו בדרך שלכם
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          הקורס זמין במגוון מדיות — שלבו ביניהן כרצונכם
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-fr">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/intro"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-colors"
        >
          <span>איך ללמוד את הקורס?</span> <span>←</span>
        </Link>
      </div>
    </section>
  )
}
