'use client'

import {
  FileCode2,
  Palette,
  BookOpenText,
  Coins,
  Filter,
  Search,
  GitBranch,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  FileCode2,
  Palette,
  BookOpenText,
  Coins,
  Filter,
  Search,
  GitBranch,
  Sparkles,
}

interface ToolCardProps {
  href: string
  title: string
  description: string
  icon?: string
  badge?: string
}

export default function ToolCard({
  href,
  title,
  description,
  icon,
  badge,
}: ToolCardProps) {
  const Icon = icon ? ICONS[icon] : Sparkles

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_20px_rgba(222,115,86,0.08)] dark:hover:shadow-[0_2px_20px_rgba(222,115,86,0.12)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="shrink-0 rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary/15">
          <Icon className="size-[18px]" />
        </div>
        {badge && (
          <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
            {badge}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-foreground leading-tight font-mono tracking-tight">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="mt-auto flex items-center gap-1.5 text-[12px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        <span>פתיחה</span>
        <svg
          className="size-3 rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </a>
  )
}

export function ToolCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}
