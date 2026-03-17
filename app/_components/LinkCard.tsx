'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  AlertTriangle,
  Terminal,
  Puzzle,
  Rocket,
  Headphones,
  MessageCircle,
  ClipboardList,
  Shapes,
  Video,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  AlertTriangle,
  Terminal,
  Puzzle,
  Rocket,
  Headphones,
  MessageCircle,
  ClipboardList,
  Shapes,
  Video,
}

interface LinkCardProps {
  href: string
  title: string
  description: string
  icon?: string
}

export default function LinkCard({ href, title, description, icon }: LinkCardProps) {
  const Icon = icon ? ICONS[icon] : undefined

  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-muted/50"
    >
      {Icon && (
        <div className="mt-0.5 shrink-0 rounded-lg bg-primary/10 p-2.5 text-primary">
          <Icon className="size-5" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          {title}
          <ArrowLeft className="size-4 opacity-0 -translate-x-1 transition-all group-hover:opacity-70 group-hover:translate-x-0" />
        </div>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  )
}
