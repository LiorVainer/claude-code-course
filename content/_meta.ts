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
  intro: {
    title: 'איך ללמוד את הקורס 🗺️',
    theme: { timestamp: false },
  },
  'part1-foundations': {
    title: 'חלק א׳ — יסודות',
    theme: { timestamp: false },
  },
  'part2-the-problem': {
    title: 'חלק ב׳ — הבעיה',
    theme: { timestamp: false },
  },
  'part3-claude-code': {
    title: 'חלק ג׳ — Claude Code',
    theme: { timestamp: false },
  },
  'part4-advanced': {
    title: 'חלק ד׳ — תכונות מתקדמות',
    theme: { timestamp: false },
  },
  'part5-practical': {
    title: 'חלק ה׳ — שליטה מעשית',
    theme: { timestamp: false },
  },
  '--': { type: 'separator' },
  notebooklm: {
    title: 'NotebookLM 📓',
    theme: { timestamp: false },
  },
  podcast: {
    title: 'פודקאסט 🎧',
    theme: { timestamp: false },
  },
  resources: {
    title: 'מקורות וקישורים 📚',
    theme: { timestamp: false },
  },
  'prompting-cheatsheet': {
    title: 'Cheatsheet 💬',
    theme: { timestamp: false },
  },
}

export default meta
