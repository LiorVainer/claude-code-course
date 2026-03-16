import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: {
    title: 'ברוכים הבאים',
    theme: {
      layout: 'full',
      sidebar: false,
      toc: false,
      breadcrumb: false,
      timestamp: false,
      pagination: false,
    },
  },
  'part1-foundations': 'חלק א׳ — יסודות',
  'part2-the-problem': 'חלק ב׳ — הבעיה',
  'part3-claude-code': 'חלק ג׳ — Claude Code',
  'part4-advanced': 'חלק ד׳ — תכונות מתקדמות',
  'part5-practical': 'חלק ה׳ — שליטה מעשית',
  '--': { type: 'separator' },
  podcast: 'פודקאסט 🎧',
  resources: 'מקורות וקישורים 📚',
  'prompting-cheatsheet': 'טבלת פרומפטינג 💬',
}

export default meta
