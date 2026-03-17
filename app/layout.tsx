import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import type { ReactNode } from 'react'

import '@fontsource/rubik/400.css'
import '@fontsource/rubik/500.css'
import '@fontsource/rubik/600.css'
import '@fontsource/rubik/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'

import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: 'Agentic Vibe — מסתם פרומפטים ל-Agentic Vibe Coding עם Claude Code',
  description:
    'מעבר משימוש בסיסי ב-ChatGPT/Gemini לעבודה מעשית עם Vibe Coding ו-Claude Code — כלי אג׳נטי שמכיר את הפרויקט שלכם',
  metadataBase: new URL('https://agenticvibe.dev'),
  openGraph: {
    title: 'Agentic Vibe',
    description:
      'מסתם פרומפטים ל-Agentic Vibe Coding עם Claude Code',
    url: 'https://agenticvibe.dev',
    siteName: 'Agentic Vibe',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Agentic Vibe',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Vibe',
    description:
      'מסתם פרומפטים ל-Agentic Vibe Coding עם Claude Code',
    images: ['/og.png'],
  },
}

const navbar = (
  <Navbar
    logo={
      <span className="flex items-center gap-2">
        <img src="/logo.svg" alt="Agentic Vibe" className="h-9 w-auto" />
        <span className="hidden sm:inline font-bold text-lg">Agentic Vibe</span>
      </span>
    }
  />
)

const search = (
  <Search
    placeholder="חיפוש בתוכן הקורס..."
    emptyResult=".לא נמצאו תוצאות"
    errorText=".נכשל בטעינת אינדקס החיפוש"
    loading="טוען..."
  />
)

const footer = <Footer><span dir="ltr">© {new Date().getFullYear()} agenticvibe.dev</span> — כל הזכויות שמורות</Footer>

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <Head
        color={{
          hue: 13,
          saturation: 65,
          lightness: { light: 50, dark: 60 },
        }}
        backgroundColor={{ light: 'rgb(250,249,246)', dark: 'rgb(10,10,15)' }}
      />
      <body>
        <NuqsAdapter>
          <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            footer={footer}
            search={search}
            sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
            navigation={{ prev: true, next: true }}
            copyPageButton={false}
            editLink={null}
            feedback={{ content: null }}
            toc={{
              title: 'בעמוד הזה',
              backToTop: 'חזרה למעלה',
            }}
            themeSwitch={{
              dark: 'כהה',
              light: 'בהיר',
              system: 'מערכת',
            }}
          >
            {children}
          </Layout>
        </NuqsAdapter>
      </body>
    </html>
  )
}
